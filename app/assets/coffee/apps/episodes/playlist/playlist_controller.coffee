define ["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Playlist", (Playlist, Swabcast, Backbone, Marionette, $, _) ->
    Playlist.Controller =
      showTracks: ->

      #require(['common/views'], function(){
      #                    var loadingView = new Swabcast.Common.Views.Loading();
      #                    Swabcast.libraryRegion.show(loadingView);
      #                });
        require ["entities/playlist"], ->
          fetchingPlaylist = Swabcast.request("entities:playlist")
          playlistLayout = new View.Layout()
          $.when(fetchingPlaylist).done (tracks) ->
            self = this

            #nowplaying responsible for managing current episode to be in the player box
            #on change, triggers events and sends episode model to player and playersavedata
            @nowPlaying = (tracks.at(0))  unless typeof tracks.at(0) is "undefined"
            playlistTracks = new View.Tracks(collection: tracks)
            require ["apps/episodes/list/list_controller"], ->
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
              highestOrder = undefined
              inQueue = undefined
              if tracks.length isnt 0

                #check if exists (prob better way)
                inQueue = tracks.find((t) ->
                  t.get("uid") is model.get("uid")
                )
                highestOrder = tracks.max((t) ->
                  t.get "order"
                )
                highestOrder = highestOrder.get("order") + 1

              #if not in playlist, copy attributes to playlistEpisode model
              #TODO decouple the seperate models
              unless inQueue
                console.log(model.parent.get("albumArt"))
                newTrack = new Swabcast.Entities.Episode(
                  uid: model.get("uid") or null
                  albumArt: model.parent.get("albumArt") or null
                  episodeTitle: model.get("episodeTitle") or null
                  feedUrl: model.parent.get("feedUrl") or null
                  episodeParent: model.parent.get("subscriptionTitle") or null
                  mediaUrl: model.get("mediaUrl") or null
                  enqueue: true
                  order: highestOrder or 1
                )
                tracks.add newTrack
                newTrack.save()
                Swabcast.commands.execute "player:setepisode", newTrack  if tracks.at(0) is newTrack
                tracks.nowPlaying = newTrack  unless tracks.nowPlaying

              #TODO - send to playerSaveData and to playercontrols
              else

            playlistLayout.on "show", ->
              playlistLayout.playlistRegion.show playlistTracks

            playlistTracks.on "playlist:update", (childView, model) ->
              playlistTracks.children.findByModel(model).flash "success"


          Swabcast.sideBarRegion.show playlistLayout


  Swabcast.EpisodesApp.Playlist.Controller
