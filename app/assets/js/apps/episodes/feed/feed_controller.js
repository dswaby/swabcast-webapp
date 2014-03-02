(function() {
  define(["app", "apps/episodes/feed/feed_view", "apps/episodes/show/show_view"], function(Swabcast, View, ShowView) {
    Swabcast.module("EpisodesApp.Feed", function(Feed, Swabcast, Backbone, Marionette, $, _) {
      return Feed.Controller = {
        showFeeds: function() {
          return require(["entities/feed"], function() {
            var feedLayout, fetchingLibrary;
            fetchingLibrary = Swabcast.request("entities:library");
            feedLayout = new View.Layout();
            $.when(fetchingLibrary).done(function(feeds) {
              var subscriptions;
              subscriptions = new View.FeedLibraryView({
                collection: feeds
              });
              return feedLayout.on("show", function() {
                return feedLayout.feedItemsCollectionRegion.show(subscriptions);
              });
            });
            return Swabcast.libraryRegion.show(feedLayout);
          });
        },
        showEpisodeDetails: function(model) {
          var view;
          model.set({
            episodeParent: model.parent.get("subscriptionTitle"),
            albumArt: model.parent.get("albumArt"),
            feedUrl: model.parent.get("feedUrl")
          });
          view = new ShowView.Episode({
            model: model
          });
          view.on("episodes:list", function() {
            return view.trigger("dialog:close");
          });
          return require(["apps/config/marionette/regions/dialog"], function() {
            return Swabcast.dialogRegion.show(view);
          });
        },
        showFeedDetails: function(model) {
          var view;
          view = new ShowView.Feed({
            model: model
          });
          view.on("episodes:list", function() {
            return view.trigger("dialog:close");
          });
          return require(["apps/config/marionette/regions/dialog"], function() {
            return Swabcast.dialogRegion.show(view);
          });
        }
      };
    });
    return Swabcast.EpisodesApp.Feed.Controller;
  });

}).call(this);
