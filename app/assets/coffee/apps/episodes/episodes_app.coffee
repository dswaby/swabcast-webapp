define ["app"], (Swabcast) ->
  Swabcast.module "EpisodesApp", (EpisodesApp, Swabcast, Backbone, Marionette, $, _) ->
    EpisodesApp.Router = Marionette.AppRouter.extend(appRoutes:
      library: "showPageMedia"
      "episodes/:id": "showEpisode"
      "feed/:id": "showFeedEpisodesOnLoad"
      "episodes/:id/edit": "editEpisode"
      playlist: "showPlaylistOnLoad"
    )
    API =
      # "media:all"
      showPageMedia: (optTimeOut)->
        optTimeOut = optTimeOut or 0
        require ["apps/episodes/nav/nav_controller"], ->
          EpisodesApp.Nav.Controller.showNav()
        require ["apps/episodes/player/player_controller"], ->
          EpisodesApp.Player.Controller.showControls()
        require ["apps/episodes/playlist/playlist_controller"], ->
          EpisodesApp.Playlist.Controller.showTracks()
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showFeeds optTimeOut

      # "playlist:mainview"
      showPlaylistMain: ->
        options = true
        require ["apps/episodes/playlist/playlist_controller"], ->
          EpisodesApp.Playlist.Controller.showTracks options

      # "episodes:library"
      showLibrary: ->
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showFeeds()

      # "static:about:app"
      showAboutApp: ->
        require ["apps/episodes/static/static_controller"], ->
          EpisodesApp.Static.Controller.showAboutApp()

      # "static:about:me"
      showAboutMe: ->
        require ["apps/episodes/static/static_controller"], ->
          EpisodesApp.Static.Controller.showAboutMe()

      # "episodes:list"
      listEpisodes: ->
        require ["apps/episodes/list/list_controller"], ->
          EpisodesApp.List.Controller.listEpisodes()

      # "episode:show", (id)
      showEpisode: (id) ->
        EpisodesApp.Show.Controller.showEpisode id

      editEpisode: (id) ->
        EpisodesApp.Edit.Controller.editEpisode id

      showPlaylist: ->
        require ["apps/episodes/playlist/playlist_controller"], ->
          EpisodesApp.Playlist.Controller.showTracks()

      showEpisodeDetails: (model) ->
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showEpisodeDetails model

      showFeedDetails: (model) ->
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showFeedDetails model

      showFeedEpisodes: (model) ->
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showEpisodeList model

      showFeedEpisodesOnLoad: (id) ->
        require ["apps/episodes/nav/nav_controller"], ->
          EpisodesApp.Nav.Controller.showNav()
        require ["apps/episodes/playlist/playlist_controller"], ->
          EpisodesApp.Playlist.Controller.showTracks()
        require ["apps/episodes/player/player_controller"], ->
          EpisodesApp.Player.Controller.showControls()
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.showFeedEpisodesById id

      showPlaylistOnLoad: ->
        options = true
        require ["apps/episodes/nav/nav_controller"], ->
          EpisodesApp.Nav.Controller.showNav()
        require ["apps/episodes/playlist/playlist_controller"], ->
          EpisodesApp.Playlist.Controller.showTracks options
        require ["apps/episodes/player/player_controller"], ->
          EpisodesApp.Player.Controller.showControls()


      featureNotImplemented: ->
        require ["apps/episodes/feed/feed_controller"], ->
          EpisodesApp.Feed.Controller.notImplemented()

    Swabcast.on "media:all", (timeout) ->
      API.showPageMedia timeout

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

    Swabcast.on "playlist:mainview", ->
      Swabcast.navigate "playlist"
      API.showPlaylistMain()

    Swabcast.on "static:about:app", ->
      API.showAboutApp()

    Swabcast.on "static:about:me", ->
      API.showAboutMe()

    Swabcast.addInitializer ->
      new EpisodesApp.Router(controller: API)


  Swabcast.EpisodesApp
