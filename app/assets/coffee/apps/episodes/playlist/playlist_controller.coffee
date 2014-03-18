define ["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Playlist", (Playlist, Swabcast, Backbone, Marionette, $, _) ->
    Playlist.Controller =
      # by default this view will show in the sideBarRegion
      # optional mainView parameter will close an existing view in sideBarRegion
      # and use the extendedView
      showTracks: (extendedView) ->
        extendedView = extendedView or false
        require ["entities/playlist", "apps/episodes/list/list_controller"], ->
          fetchingPlaylist = Swabcast.request("entities:playlist")
          playlistLayout = new View.Layout()
          $.when(fetchingPlaylist).done (tracks) ->
            self = this

            #nowplaying responsible for managing current episode to be in the player box
            #on change, triggers events and sends episode model to player and playersavedata
            @nowPlaying = (tracks.at(0))  unless typeof tracks.at(0) is "undefined"
            playlistTracks = undefined

            if (extendedView)
              playlistTracks = new View.TracksExtended(collection: tracks)
            else
              playlistTracks = new View.Tracks(collection: tracks)

            playlistTracks.listenTo Playlist, "playlist:enqueue", (model) ->
              if tracks.length isnt 0
                newTrack = model
                tracks.add newTrack
                console.log("Holy Fuck it worked, adding model", newTrack)

              if tracks.length == 1
                newTrack = tracks.at(0)
                Swabcast.commands.execute "player:setepisode", newTrack  if tracks.at(0) is newTrack
                tracks.nowPlaying = newTrack  unless tracks.nowPlaying

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

            playlistLayout.on "show", ->
              playlistLayout.playlistRegion.show playlistTracks

            playlistTracks.on "playlist:update", (childView, model) ->
              playlistTracks.children.findByModel(model).flash "success"

          if (extendedView)
            # TODO - do this better
            Swabcast.sideBarRegion.close()
            require ["common/view"], (CommonViews) ->
              backButton = new CommonViews.NavHelper(
                buttonText: "Back to subscriptions"
              )
              Swabcast.navHelperRegion.show backButton
              # set the view to window height, this feels a little hack
              winheight = $(window).height() - 75
            Swabcast.libraryRegion.show playlistLayout
          else
            Swabcast.sideBarRegion.show playlistLayout

      showPlayistMain: ->
        console.log("show extendedView")
        opt = true
        @showTracks (opt)


  Swabcast.EpisodesApp.Playlist.Controller
