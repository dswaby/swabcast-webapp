#The player controller is responsible for the storing, retrieving and updating the currently playing episode data
define ["app", "apps/episodes/player/player_view"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Player", (Player, Swabcast, Backbone, Marionette, $, _) ->
    Player.Controller = showControls: ->
      playerData = null
      # fetchPlayerData = Swabcast.request("player:savedata")
      # $.when(fetchPlayerData).done (playerData) ->
      self = this
      @initializePlayer = ->
        require ["entities/feed"],
          playerData = self.defaultPlayerState()
          self.audioPlayer.createAudio() #create audio
          self.updateAudio()

      @updateAudio = (sourceUrl) ->
        sourceUrl = sourceUrl or null
        self.audioPlayer.resetAudio()
        if playerData.get("currentPosition") isnt 0 and typeof playerData.get("currentPosition") is "number"
          self.audioPlayer.setAudioSource sourceUrl
          self.audioPlayer.setPosition = playerData.get("currentPosition")
        else
          self.audioPlayer.setAudioSource sourceUrl
          self.audioPlayer.setPosition = 0
        self.audioPlayer.audio.load()

      @removeCurrentAudio = ->
        self.audioPlayer.clearAudio()

      @newPlayerData = (newModelData) ->
        require ["entities/feed"],
          newPlayerData = new Swabcast.Entities.Episode(
            albumArt: newModelData.get("albumArt")
            mediaUrl: newModelData.get("mediaUrl")
            title: newModelData.get("episodeTitle")
            currentPosition: newModelData.get("currentPosition") or 0
          )
          newPlayerData

      @playNow = (newModelData) ->
        self.newPlayerData newModelData
        self.audioPlayer.play()

      @defaultPlayerState = ->
        require ["entities/feed"],
          defaultData = new Swabcast.Entities.Episode(
            albumArt: "default.jpg"
            mediaUrl: ""
            title: ""
            currentPosition: 0
          )
          defaultData

      #audioplayer object
      @audioPlayer =
        createAudio: ->
          @audio = new Audio()
          @state = "disabled"

        resetAudio: ->
          @audio.remove()
          @audio = new Audio()
          @audio.src = ""

        play: ->
          @audio.play()  if @state is "ready"
          @state = "playing"

        pause: ->
          @audio.pause()
          @state = "ready"

        setState: (newState) ->
          return  unless newState
          @state = newState

        setAudioSource: (mediaUrl) ->
          @audio.src = mediaUrl
          return  if not mediaUrl or typeof mediaUrl isnt "string"
          @state = "ready"

        clearAudio: ->
          @audio.src = ""
          @audio.load()
          @state = "disabled"

        setPosition: (time) ->
          @audio.currentTime = time  if typeof episodePosition is "number"

        skipback: ->
          if (@state is "ready" or @state is "playing") and @audio.currentTime > 45
            @audio.pause()
            @audio.currentTime = (@audio.currentTime - 45)
            @audio.play()

        skipahead: ->
          self = this
          if (self.state is "ready" or self.state is "playing") and self.audio.currentTime + 45 <= self.audio.duration
            self.audio.pause()
            self.audio.currentTime = (self.audio.currentTime + 45)
            self.audio.play()

        currentMediaUrl: ->
          @audio.src

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

      @playerControls.on "episode:previous", ->

      @playerControls.on "episode:next", ->

      # TODO - this should be seperated as an API
      Swabcast.commands.setHandlers

        "player:empty": ->
          self.playerControls.model.destroy()
          self.playerControls.model = self.defaultPlayerState()
          self.updateAudio()
          self.playerControls.render()
          playerData.save()

        "player:playnow": (episodeModel) ->
          self.playerControls.model.destroy()
          self.newPlayerData episodeModel
          self.updateAudio()
          self.audioPlayer.play()
          self.playerControls.render()
          playerData.save()

        "player:setepisode": (episodeModel) ->
          self.playerControls.model.destroy()
          self.playerControls.model = self.newPlayerData(episodeModel)
          self.updateAudio episodeModel.get("mediaUrl")
          self.playerControls.render()
          playerData.save()

        "playlist:updatenowplaying": (nextInPlaylist) ->
          self.playerControls.model.destroy()
          self.playerControls.model = self.newPlayerData(nextInPlaylist)
          self.updateAudio nextInPlaylist.get("mediaUrl")
          self.playerControls.render()
          playerData.save()

      Swabcast.playerRegion.show @playerControls

  Swabcast.EpisodesApp.Player.Controller
