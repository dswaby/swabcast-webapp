(function() {
  define(["app", "apps/subscriptions/show/show_view"], function(Swabcast, View) {
    Swabcast.module("SubscriptionsApp.Show", function(Show, Swabcast, Backbone, Marionette, $, _) {
      return Show.Controller = {
        showEpisode: function(id) {
          var fetchingSubscription, loadingView;
          loadingView = new Swabcast.Common.Views.Loading({
            title: "Artificially delaying this response",
            message: "This is the view that will show if waiting for data"
          });
          Swabcast.mainRegion.show(loadingView);
          fetchingSubscription = Swabcast.request("subscription:entity", id);
          return $.when(fetchingSubscription).done(function(episode) {
            var subscriptionView;
            subscriptionView = void 0;
            if (subscription !== undefined) {
              subscriptionView = new View.Subscription({
                model: episode
              });
              subscriptionView.on("subscription:edit", function(episode) {
                return Swabcast.trigger("subscription:edit", episode.get("id"));
              });
            } else {
              subscriptionView = new Show.EpisodeNotFound();
            }
            return Swabcast.mainRegion.show(subscriptionView);
          });
        }
      };
    });
    return Swabcast.EpisodesApp.Show.Controller;
  });

}).call(this);
