# TODO - do something interesting with nowPlaylingRegion
define ["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Playlist", (Playlist, Swabcast, Backbone, Marionette, $, _) ->
    Playlist.Controller =
      # default view will show in the sideBarRegion
      # optional mainView will replace the main library region
      # and use the extendedView

      showPlaylist: ->
        require ["entities/playlist"], ->
          fetchingPlaylist = Swabcast.request("entities:playlist")
          playlistLayout = new View.Layout()
          $.when(fetchingPlaylist).done (tracks) ->
            self = this
            emptyView = undefined

            #nowplaying responsible for managing current episode to be in the player box
            #on change, triggers events and sends episode model to player and playersavedata
            @nowPlaying = (tracks.at(0)) unless tracks.length == 0
            if tracks.length > 0
              Swabcast.commands.execute "player:setepisode", @nowPlaying.get("id")

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

            playlistTracks.listenTo Playlist, "episode:enqueue", (model) ->
              playlistLayout.nowPlayingRegion.close()
              addingTrack = Swabcast.request "playlist:addtoqueue", model
              $.when(addingTrack).done (apiResponse) ->

                if typeof apiResponse == "string" and apiResponse != "fail"
                  fetchNewTrack = Swabcast.request("playlist:episode", apiResponse)
                  $.when(fetchNewTrack).done (newTrack) ->

                  # TODO - trigger success alert
                    enqueuedTrack = new Swabcast.Entities.QueuedEpisode(
                      uid: newTrack.get("uid") or null
                      albumArt: newTrack.get("albumArt") or newTrack.parent.get("albumArt")
                      episodeTitle: newTrack.get("episodeTitle") or null
                      episodeParent: newTrack.get("episodeParent") or null
                      feedUrl: newTrack.get("feedUrl") or " "
                      mediaUrl: newTrack.get("mediaUrl") or null
                      enqueue: true
                      order: newTrack.get("order")
                    )

                    tracks.add newTrack
                    newTrack.save()
                    Swabcast.commands.execute "player:setepisode", newTrack.get("id")  if tracks.at(0) is newTrack
                    #update the playlist in mainview
                    # Playlist.trigger "playlist:newepisode", newTrack
                    tracks.nowPlaying = newTrack  unless tracks.nowPlaying
                else
                  if apiResponse == "fail"
                    alert("already in playlist")
                    console.log ("we done goofed, episode already in playlist, TODO: better notification for user")
                  else
                    throw Error("Error being returned from the playlist entity API, can not continue")


            playlistTracks.on "playlist:update", (childView, model) ->
              playlistTracks.children.findByModel(model).flash "success"

            playlistLayout.on "show", ->
              if !tracks.length
                emptyView = new View.EmptyPlaylist()
                playlistLayout.nowPlayingRegion.show emptyView
              playlistLayout.playlistRegion.show playlistTracks

          Swabcast.sideBarRegion.show playlistLayout

      showManagePlaylist: ->
        require ["entities/playlist"], ->
          mainPlaylistLayout = new View.ManagePlaylistLayout()

          mainPlaylistLayout.on "show", ->
            fetchingPlaylist = Swabcast.request("entities:playlist")

            $.when(fetchingPlaylist).done (episodes) ->
              self = this
              playlistEpisodes = new View.TracksExtended(collection: episodes)

              playlistEpisodes.on "itemview:episode:delete", (childView, model) ->
                if typeof episodes.at(0) is "undefined" and episodes.length is 0
                  emptyPlaylist = new View.EmptyPlaylist()
                  mainPlaylistLayout.managementBoxRegion.show emptyPlaylist

                if typeof episodes.at(1) is "undefined" and episodes.length is 1
                  Swabcast.commands.execute "playerdata:remove"
                  Swabcast.commands.execute "player:empty"
                Swabcast.commands.execute "playlist:updatenowplaying", episodes.at(1)  if episodes.at(0) is model and episodes.length >= 2
                model.destroy()

              playlistEpisodes.listenTo Playlist, "playlist:newepisode", (model) ->
                episodes.add newTrack
                newTrack.save()
                playlistEpisodes.render()

              playlistEpisodes.on "playlist:update", (childView, model) ->
                playlistEpisodes.children.findByModel(model).flash "success"

              Swabcast.sideBarRegion.close()
              require ["common/view"], (CommonViews) ->
                backButton = new CommonViews.NavPlaylistHelper(
                  buttonText: "Back to subscriptions"
                )
                Swabcast.navHelperRegion.show backButton

                # set the view to window height, this feels a little hack
              winheight = $(window).height() - 75

              playlistEpisodes.on "show", ->
                episodes.fetch
                episodes.sync
                episodes.reset

              # TODO - do this better

              playlistEpisodes.on "close", ->

              mainPlaylistLayout.managePlaylistRegion.show playlistEpisodes

          mainPlaylistLayout.on "close", ->

          Swabcast.libraryRegion.show mainPlaylistLayout

  Swabcast.EpisodesApp.Playlist.Controller
