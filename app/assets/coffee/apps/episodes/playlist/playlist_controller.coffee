# TODO - do something interesting with nowPlaylingRegion
define ["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller", "apps/config/marionette/regions/dialog", "toastr"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Playlist", (Playlist, Swabcast, Backbone, Marionette, $, _, toastr) ->
    Playlist.Controller =
      # default view will show in the sideBarRegion
      # optional mainView will replace the main library region
      # and use the extendedView

    # possible options
      # options.showInMainRegion
      # options.closeSideBar
      # options.closeLibrary


      showPlaylist: (opts) ->
        opts = opts or false
        if opts is not false
          showInMainRegion = opts.showInMainRegion
          closeSideBar = opts.closeSideBar
          closeLibrary = opts.closeLibrary
          console.log(opts)

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



            playlistTracks.on "itemview:playlist:episode:detail", (playlistEpModel) ->
              # container = new Backbone.ChildViewContainer()
              # container.add(playlistTracks.findByCid(playlistEpModel.model.get("cid")))
              # console.log("itemview:playlist:episode:detail", playlistEpModel.model.get("episodeTitle"))
              modelClone = new Swabcast.Entities.QueuedEpisode(
                id: playlistEpModel.model.get("id")
                episodeTitle: playlistEpModel.model.get("episodeTitle")
                albumArt: playlistEpModel.model.get("albumArt")
                episodeParent: playlistEpModel.model.get("episodeParent")
                mediaUrl: playlistEpModel.model.get("mediaUrl")
                episodeSummary: playlistEpModel.model.get("episodeSummary")
                uid: playlistEpModel.model.get("uid")
                cid: playlistEpModel.model.get("cid")
              )

              view = new View.EpisodeDetail(model: modelClone)
              # console.log(playlistEpModel.get("model")
              view.title = modelClone.get("episodeTitle")
              view.on "episodes:list", ->
                view.trigger "view:close"
              view.on "player:playnow", (uuid) ->
                # send to player controller
                # require ["apps/episodes/player/player_controller"], ->
                Swabcast.commands.execute "player:playnow", uuid

              view.on "episode:remove", (childView, playlistEpModel) ->
                # console.log("cid", playlistEpModel.cid)
                console.log("childView", childView)
                console.log("playlistEpModel", playlistEpModel)
                # trash2 = playlistTracks.children.findByModel(playlistEpModel)
                # trash3 = playlistTracks.children.findByModel(playlistEpModel.model.cid)
                # trash = playlistTracks.children.findByCid(playlistEpModel.cid)
                # playlistTracks.children.findByModel(playlistEpModel.model.ge)
                if typeof tracks.at(1) is "undefined" and tracks.length is 1
                  Swabcast.commands.execute "playerdata:remove"
                  Swabcast.commands.execute "player:empty"

                # blah = playlistTracks.children.findByModel(model)
                # console.log("blah", blah)
                # view.trigger "episode:remove"
                #if track being removed is at top of playlist
                Swabcast.commands.execute "playlist:updatenowplaying", tracks.at(1)  if tracks.at(0) is playlistEpModel and tracks.length >= 2
                playlistEpModel.destroy()
                # model.destroy()
                # Swabcast.EpisodesApp.List.trigger "episode:removefromqueue", modelUid


              Swabcast.dialogRegion.show view

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
                    console.log(toastr)
                  # TODO - trigger success alert

                    enqueuedTrack = new Swabcast.Entities.QueuedEpisode(
                      uid: newTrack.get("uid") or null
                      albumArt: newTrack.get("albumArt") or newTrack.parent.get("albumArt")
                      episodeTitle: newTrack.get("episodeTitle") or null
                      episodeParent: newTrack.get("episodeParent") or null
                      episodeSummary: newTrack.get("episodeSummary") or null
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
                    console.log(toastr)
                    alert("already in playlist")
                    console.log ("we done goofed, episode already in playlist, TODO: better notification for user")
                  else
                    throw Error("Error being returned from the playlist entity API, can not continue")


            playlistTracks.on "playlist:update", (childView, model) ->
              playlistTracks.children.findByModel(model).flash "success"

            playlistLayout.on "show", ->
              if closeSideBar
                playlistLayout
                Swabcast.sideBarRegion.close()
              if closeLibrary
                Swabcast.libraryRegion.close()
              if !tracks.length
                emptyView = new View.EmptyPlaylist()
                playlistLayout.nowPlayingRegion.show emptyView
              playlistLayout.playlistRegion.show playlistTracks

          if showInMainRegion
            Swabcast.libraryRegion.show playlistLayout

          else
            if closeLibrary
              console.log("closeLibrary true")
              Swabcast.libraryRegion.close()

            Swabcast.sideBarRegion.show playlistLayout

  Swabcast.EpisodesApp.Playlist.Controller
