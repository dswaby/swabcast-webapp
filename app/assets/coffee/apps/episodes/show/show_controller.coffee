define ["app", "apps/episodes/show/show_view"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Show", (Show, Swabcast, Backbone, Marionette, $, _) ->
    Show.Controller = showEpisode: (id) ->
      loadingView = new Swabcast.Common.Views.Loading(
        title: "Artificially delaying this response"
        message: "This is the view that will show if waiting for data"
      )
      Swabcast.mainRegion.show loadingView
      fetchingEpisode = Swabcast.request("episode:entity", id)
      $.when(fetchingEpisode).done (episode) ->
        episodeView = undefined
        if episode isnt `undefined`
          episodeView = new View.Episode(model: episode)
          episodeView.on "episode:edit", (episode) ->
            Swabcast.trigger "episode:edit", episode.get("id")

        else
          episodeView = new Show.EpisodeNotFound()
        Swabcast.mainRegion.show episodeView


  Swabcast.EpisodesApp.Show.Controller
