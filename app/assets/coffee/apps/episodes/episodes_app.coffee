define ["app"], (Swabcast) ->
  Swabcast.module "EpisodesApp", (EpisodesApp, Swabcast, Backbone, Marionette, $, _) ->
    EpisodesApp.Router = Marionette.AppRouter.extend(appRoutes:
      library: "showPageMedia"
      "episodes/:id": "showEpisode"
      "feed/:id": "showFeedEpisodesById"
      "episodes/:id/edit": "editEpisode"
      playlist: "showPlaylist"
    )
    API =
      showPageMedia: ->
        require ["apps/episodes/nav/nav_controller"], ->
          EpisodesApp.Nav.Controller.showNav()

        require ["apps/episodes/playlist/playlist_controller"], ->
          EpisodesApp.Playlist.Controller.showTracks()

        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showFeeds()

        require ["apps/episodes/player/player_controller"], ->
          EpisodesApp.Player.Controller.showControls()

      showPlaylistView: (mainView) ->
        require ["apps/episodes/playlist/playlist_controller"], ->
          EpisodesApp.Playlist.Controller.showTracks mainView

        require ["apps/episodes/player/player_controller"], ->
          EpisodesApp.Player.Controller.showControls()

        require ["apps/episodes/nav/nav_controller"], ->
          EpisodesApp.Nav.Controller.showNav()


      showLibrary: ->
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showFeeds()

      listEpisodes: ->
        require ["apps/episodes/list/list_controller"], ->
          EpisodesApp.List.Controller.listEpisodes()

      showEpisode: (id) ->
        EpisodesApp.Show.Controller.showEpisode id

      editEpisode: (id) ->
        EpisodesApp.Edit.Controller.editEpisode id

      showPlaylist: ->
        require ["apps/episodes/playlist/playlist_controller"], ->
          EpisodesApp.Playlist.Controller.logThisMessage()

      showEpisodeDetails: (model) ->
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showEpisodeDetails model

      showFeedDetails: (model) ->
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showFeedDetails model

      showFeedEpisodes: (model) ->
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showEpisodeList model

      showFeedEpisodesById: (id) ->
        require ["apps/episodes/nav/nav_controller"], ->
          EpisodesApp.Nav.Controller.showNav()

        require ["apps/episodes/playlist/playlist_controller"], ->
          EpisodesApp.Playlist.Controller.showTracks()

        require ["apps/episodes/player/player_controller"], ->
          EpisodesApp.Player.Controller.showControls()

        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showFeedEpisodesById id

      featureNotImplemented: ->
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.notImplemented()

    Swabcast.on "media:all", ->
      API.showPageMedia()

    Swabcast.on "episodes:library", ->
      Swabcast.navigate "library"
      API.showLibrary()

    Swabcast.on "episodes:list", ->
      Swabcast.navigate "episodes"
      API.listEpisodes()

    Swabcast.on "episode:show", (id) ->
      Swabcast.navigate "episodes/" + id
      API.showEpisode id

    Swabcast.on "episode:edit", (id) ->
      Swabcast.navigate "episodes/" + id + "/edit"
      API.editEpisode id

    Swabcast.on "episodes:playlist", ->
      API.showPlaylist()

    Swabcast.on "episode:details", (model) ->
      API.showEpisodeDetails model

    Swabcast.on "feed:details", (model) ->
      API.showFeedDetails model

    Swabcast.on "feature:not:implemented", ->
      API.featureNotImplemented()

    Swabcast.on "feed:episodelist", (model) ->
      Swabcast.navigate "feed/" + model.get("id")
      API.showFeedEpisodes model

    Swabcast.on "playist:mainview", ->
      API.showPlaylistView(mainview)

    Swabcast.addInitializer ->
      new EpisodesApp.Router(controller: API)


  Swabcast.EpisodesApp
