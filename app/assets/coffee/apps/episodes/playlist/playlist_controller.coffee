define ["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Playlist", (Playlist, Swabcast, Backbone, Marionette, $, _) ->
    Playlist.Controller =
      showTracks: (mainScreen) ->
        mainScreen = mainScreen or false
        require ["entities/playlist"], ->
          playlistIds = Swabcast.request("episode:playlist")
          playlistLayout = new View.Layout()
          $.when(playlistIds).done (list) ->
            episodes = list.get("episodes")
            console.log(list)
            self = this

            #nowplaying responsible for managing current episode to be in the player box
            #on change, triggers events and sends episode model to player and playersavedata
            @nowPlaying = (episodes[0]) unless typeof episodes[0] is "undefined"
            playlistTracks = new View.Tracks(collection: list)
            require ["apps/episodes/list/list_controller"], ->
              playlistTracks.on "itemview:episode:delete", (childView, model) ->

                #if track that is about to be removed is at index 0
                if typeof episodes[1] is "undefined" and episodes.length is 1
                  Swabcast.commands.execute "playerdata:remove"
                  Swabcast.commands.execute "player:empty"

                #if track being removed is at top of playlist
                Swabcast.commands.execute "playlist:updatenowplaying", episodes[1]  if episodes[0] is model and episodes.length >= 2
                modelUid = model.get("uid")
                model.destroy()
                Swabcast.EpisodesApp.List.trigger "episode:removefromqueue", modelUid

            playlistTracks.listenTo Playlist, "playlist:enqueue", (model) ->
              highestOrder = undefined
              inQueue = undefined
              if list.length isnt 0

                #check if exists (prob better way)
                inQueue = list.find((t) ->
                  t.get("uid") is model.get("uid")
                )
                highestOrder = list.max((t) ->
                  t.get "order"
                )
                highestOrder = highestOrder.get("order") + 1

              #if not in playlist, copy attributes to playlistEpisode model
              #TODO decouple the seperate models
              unless inQueue
                newTrack = new Swabcast.Entities.PlaylistEpisode(
                  uid: model.get("uid") or null
                  albumArt: model.parent.get("albumArt") or null
                  episodeTitle: model.get("episodeTitle") or null
                  feedUrl: model.parent.get("feedUrl") or null
                  episodeParent: model.parent.get("subscriptionTitle") or null
                  mediaUrl: model.get("mediaUrl") or null
                  enqueue: true
                  order: highestOrder or 1
                )
                list.add newTrack
                newTrack.save()
                Swabcast.commands.execute "player:setepisode", newTrack  if list.at(0) is newTrack
                list.nowPlaying = newTrack  unless list.nowPlaying
              else

            playlistLayout.on "show", ->
              playlistLayout.playlistRegion.show playlistTracks

            playlistTracks.on "playlist:update", (childView, model) ->
              playlistTracks.children.findByModel(model).flash "success"

          if mainScreen is true
            console.log('show playlist triggered')
            Swabcast.libraryRegion.show playlistLayout
          else
            Swabcast.sideBarRegion.show playlistLayout

      showPlaylistMain: ->
        console.log("BLAH")


  Swabcast.EpisodesApp.Playlist.Controller
