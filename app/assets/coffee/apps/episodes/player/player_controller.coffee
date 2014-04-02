#The player controller is responsible for the storing, retrieving and updating the currently playing episode data
define ["app", "apps/episodes/player/player_view", ], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Player", (Player, Swabcast, Backbone, Marionette, $, _) ->
    Player.Controller = showControls: ->
      require ["entities/player"], ->
          self = this
          playerData = new Swabcast.Entities.PlayerData()
          # fetchPlayerData = Swabcast.request("player:savedata")
          # $.when(fetchPlayerData).done (playerData) ->
          self = this
          @initializePlayer = ->
            player = self.audioPlayer.getInstance()
            playerData = self.defaultPlayerState()
            player.createAudio() #create audio
            self.updateAudio()

          @updateAudio = (source, options) ->
            player = self.audioPlayer.getInstance()
            opts = options or {}
            if playerData
              opts.currentPosition = playerData.get("currentPosition") or 0

            if source and source != ""
              player.resetAudio source
              player.setAudioSource source
              player.setPosition = options.currentPosition
              player.audio.load()

          @removeCurrentAudio = ->
            player = self.audioPlayer.getInstance()
            player.clearAudio()

          @newPlayerData = (newModelData) ->
            newPlayerData = new Swabcast.Entities.PlayerData(
              albumArt: newModelData.get("albumArt")
              mediaUrl: newModelData.get("mediaUrl")
              title: newModelData.get("episodeTitle")
              currentPosition: newModelData.get("currentPosition") or 0
            )
            newPlayerData.save()
            newPlayerData

          @playNow = (newModelData) ->
            player = self.audioPlayer.getInstance()
            self.newPlayerData newModelData
            player.play()

          @defaultPlayerState = ->
            defaultData = new Swabcast.Entities.PlayerData(
              id:0
              albumArt: "default.jpg"
              mediaUrl: ""
              title: ""
            )
            defaultData.save()
            defaultData

          #audioplayer object
          @audioPlayer = (->

            init = ->
              createAudio: ->
                @audio = new Audio()
                @state = "disabled"

              resetAudio: () ->
                @audio.remove()
                @audio = new Audio()
                @audio.src = ""

              play: ->
                @audio.play() if @state is "ready"
                @state = "playing"

              pause: ->
                @audio.pause()
                playerData.set("currentPosition", @audio.currentTime)
                playerData.save()
                @state = "ready"

              getState: ->
                return @state

              setState: (newState) ->
                return  unless newState
                @state = newState

              setAudioSource: (mediaUrl) ->
                @audio.src = mediaUrl
                return  if not mediaUrl or typeof mediaUrl isnt "string"
                @state = "ready"

              getAudioSource: ->
                return @audio.src

              clearAudio: ->
                if @state == "playing"
                  @audio.pause()
                  playerData.set("currentPosition", @audio.currentTime)
                delete @audio
                @audio = new Audio()
                # @audio.load()
                @state = "disabled"

              # setAudioOptions: (options) ->

              setPosition: (time) ->
                @audio.currentTime = time  if typeof episodePosition is "number"

              skipback: ->
                if (@state is "ready" or @state is "playing") and @audio.currentTime > 10
                  @audio.pause()
                  @audio.currentTime = (@audio.currentTime - 10)
                  @audio.play()

              skipahead: ->
                self = this
                if (self.state is "ready" or self.state is "playing") and self.audio.currentTime + 10 <= self.audio.duration
                  self.audio.pause()
                  self.audio.currentTime = (self.audio.currentTime + 10)
                  self.audio.play()

              currentMediaUrl: ->
                @audio.src

            instance = undefined

            getInstance: ->
              instance = init()  unless instance
              instance
          )()

          @initializePlayer()
          @playerControls = new View.Player(model: playerData)
          @playerControls.on "episode:playpause", ->
            switch self.audioPlayer.state
              when "disabled", "ready"
                self.audioPlayer.play()
                $("#play-icon").addClass "Hidden"
                $("#pause-icon").removeClass "Hidden"
                self.audioPlayer.setState "playing"
              when "playing"
                self.audioPlayer.pause()
                playerData.set currentPosition: self.audioPlayer.audio.currentTime
                $("#play-icon").removeClass "Hidden"
                $("#pause-icon").addClass "Hidden"
                self.audioPlayer.setState "ready"
              else

          @playerControls.listenTo Player, "playlist:removed", (deleted) ->
            if deleted.has("mediaUrl") and deleted.get("mediaUrl") is self.audioPlayer.audio.src
              self.audioPlayer.audio.pause()
              self.audioPlayer.audio.src = null
            self.updatePlayer()

          @playerControls.on "episode:skipback", ->
            self.audioPlayer.skipback()

          @playerControls.on "episode:skipahead", ->
            self.audioPlayer.skipahead()

          # TODO - this should be seperated as an API
          Swabcast.commands.setHandlers
            "player:empty": ->
              sourceUrl = ""
              # player commands
              self.playerControls.model.destroy()
              self.playerControls.model = self.defaultPlayerState()
              self.updateAudio sourceUrl
              self.playerControls.render()
              playerData.save()

            "player:playnow": (uuid) ->
              require ["entities/feed"], ->
                getEpisode = Swabcast.request("entity:episode", uuid)
                player = self.audioPlayer.getInstance()
                $.when(getEpisode).done (episodeModel) ->
                  # audio options
                  options = {}
                  options.preload = true

                  # player commands
                  self.playerControls.model.destroy()
                  self.playerControls.model = self.newPlayerData(episodeModel)
                  # self.newPlayerData episodeModel
                  self.updateAudio episodeModel.get("mediaUrl"), options
                  self.playerControls.render()
                  player.play()
                  playerData.save()

            "player:setepisode": (episodeId) ->
              # audio options
              options = {}
              options.preload = true
              require ["entities/playlist"], ->

                fetchEpisode = Swabcast.request("playlist:episode", episodeId)
                $.when(fetchEpisode).done (episodeModel) ->
                  self.playerControls.model.destroy()
                  self.playerControls.model = self.newPlayerData(episodeModel)
                  self.updateAudio episodeModel.get("mediaUrl"), options
                  self.playerControls.render()
                  playerData.save()

            "playlist:updatenowplaying": (episodeModel) ->
              # audio options
              options = {}
              options.preload = true

              # player commands
              self.playerControls.model.destroy()
              self.playerControls.model = self.newPlayerData(episodeModel)
              self.updateAudio episodeModel.get("mediaUrl"), options
              self.playerControls.render()
              playerData.save()

          Swabcast.playerRegion.show @playerControls

  Swabcast.EpisodesApp.Player.Controller
