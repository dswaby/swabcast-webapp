(function() {
  define(["app", "apps/episodes/show/show_view"], function(Swabcast, View) {
    Swabcast.module("EpisodesApp.Show", function(Show, Swabcast, Backbone, Marionette, $, _) {
      return Show.Controller = {
        showEpisode: function(id) {
          var fetchingEpisode, loadingView;
          loadingView = new Swabcast.Common.Views.Loading({
            title: "Artificially delaying this response",
            message: "This is the view that will show if waiting for data"
          });
          Swabcast.mainRegion.show(loadingView);
          fetchingEpisode = Swabcast.request("episode:entity", id);
          return $.when(fetchingEpisode).done(function(episode) {
            var episodeView;
            episodeView = void 0;
            if (episode !== undefined) {
              episodeView = new View.Episode({
                model: episode
              });
              episodeView.on("episode:edit", function(episode) {
                return Swabcast.trigger("episode:edit", episode.get("id"));
              });
            } else {
              episodeView = new Show.EpisodeNotFound();
            }
            return Swabcast.mainRegion.show(episodeView);
          });
        }
      };
    });
    return Swabcast.EpisodesApp.Show.Controller;
  });

}).call(this);
