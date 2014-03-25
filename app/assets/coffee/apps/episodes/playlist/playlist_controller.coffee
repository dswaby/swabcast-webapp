define ["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Playlist", (Playlist, Swabcast, Backbone, Marionette, $, _) ->
    Playlist.Controller =
      # default view will show in the sideBarRegion
      # optional mainView will replace the main library region
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
            if @nowPlaying
              Swabcast.commands.execute "player:setepisode", @nowPlaying
              console.log("\"player:setepisode\"triggered")

            playlistTracks = undefined

            if (extendedView)
              playlistTracks = new View.TracksExtended(collection: tracks)
            else
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

            playlistTracks.listenTo Playlist, "playlist:enqueue", (model) ->
              addingTrack = Swabcast.request "playlist:addtoqueue", model
              $.when(addingTrack).done (apiResponse) ->

                if typeof apiResponse == "string"
                  # TODO - trigger error alert
                  console.log("we dun goofed")

                  @$el.toggleClass("danger-zone").fadeIn 400, ->
                    setTimeout (->
                      $(this).toggleClass "danger-zone"
                    ), 300

                if typeof apiResponse == "object"
                  console.log("we are in the green!")
                  # TODO - trigger success alert
                  newTrack = _.clone(apiResponse)
                  console.log("cloned newTrack", newTrack)
                  newTrack = new Swabcast.Entities.QueuedEpisode(
                    uid: apiResponse.get("uid") or null
                    albumArt: apiResponse.get("albumArt") or apiResponse.parent.get("albumArt")
                    episodeTitle: apiResponse.get("episodeTitle") or null
                    episodeParent: apiResponse.get("episodeParent") or null
                    feedUrl: apiResponse.get("feedUrl") or " "
                    mediaUrl: apiResponse.get("mediaUrl") or null
                    enqueue: true
                    order: apiResponse.get("order")
                  )

                  tracks.add newTrack
                  newTrack.save()
                  Swabcast.commands.execute "player:setepisode", newTrack  if tracks.at(0) is newTrack
                  tracks.nowPlaying = newTrack  unless tracks.nowPlaying
                else
                  throw Error("Error being returned from the playlist entity API, can not continue")

            playlistLayout.on "show", ->
              playlistLayout.playlistRegion.show playlistTracks

            playlistTracks.on "playlist:update", (childView, model) ->
              playlistTracks.children.findByModel(model).flash "success"

          if (extendedView)
            # TODO - do this better
            Swabcast.sideBarRegion.close()
            require ["common/view"], (CommonViews) ->
              backButton = new CommonViews.NavPlaylistHelper(
                buttonText: "Back to subscriptions"
              )
              Swabcast.navHelperRegion.show backButton
              # set the view to window height, this feels a little hack
              winheight = $(window).height() - 75
            Swabcast.libraryRegion.show playlistLayout
          else
            Swabcast.sideBarRegion.show playlistLayout


  Swabcast.EpisodesApp.Playlist.Controller
