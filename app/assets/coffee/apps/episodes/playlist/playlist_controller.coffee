define ["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Playlist", (Playlist, Swabcast, Backbone, Marionette, $, _) ->
    Playlist.Controller =
      showTracks: ->

        require ["entities/playlist", "apps/episodes/list/list_controller"], ->
          fetchingPlaylist = Swabcast.request("entities:playlist")
          playlistLayout = new View.Layout()
          $.when(fetchingPlaylist).done (tracks) ->
            self = this

            #nowplaying responsible for managing current episode to be in the player box
            #on change, triggers events and sends episode model to player and playersavedata
            @nowPlaying = (tracks.at(0))  unless typeof tracks.at(0) is "undefined"
            playlistTracks = new View.Tracks(collection: tracks)
            playlistTracks.on "itemview:episode:delete", (childView, model) ->

              #if track that is about to be removed is at index 0
              if typeof tracks.at(1) is "undefined" and tracks.length is 1
                Swabcast.commands.execute "playerdata:remove"
                Swabcast.commands.execute "player:empty"

              #if track being removed is at top of playlist
              Swabcast.commands.execute "playlist:updatenowplaying", tracks.at(1)  if tracks.at(0) is model and tracks.length >= 2
              modelUid = model.get("uid")
              model.destroy()
              Swabcast.EpisodesApp.List.trigger "episode:removefromqueue", modelUid


            playlistTracks.listenTo Playlist, "playlist:enqueue", ->
              tracks.fetch()
              playlistTracks.render()
              if tracks.length == 1
                newTrack = tracks.at(0)
                Swabcast.commands.execute "player:setepisode", newTrack  if tracks.at(0) is newTrack
                tracks.nowPlaying = newTrack  unless tracks.nowPlaying


            playlistLayout.on "show", ->
              playlistLayout.playlistRegion.show playlistTracks

            playlistTracks.on "playlist:update", (childView, model) ->
              playlistTracks.children.findByModel(model).flash "success"


          Swabcast.sideBarRegion.show playlistLayout
    logThisMessage: ->
      console.log("this message")


  Swabcast.EpisodesApp.Playlist.Controller
