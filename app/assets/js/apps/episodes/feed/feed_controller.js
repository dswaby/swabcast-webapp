(function() {
  define(["app", "apps/episodes/feed/feed_view", "apps/episodes/show/show_view", "apps/config/marionette/regions/dialog"], function(Swabcast, View, ShowView) {
    Swabcast.module("EpisodesApp.Feed", function(Feed, Swabcast, Backbone, Marionette, $, _) {
      return Feed.Controller = {
        showFeeds: function() {
          require(["common/view"], function(CommonViews) {
            var loadingView;
            loadingView = new CommonViews.Loading({
              title: "Artificialy delaying this response",
              message: "This is the view that is fucked"
            });
            return Swabcast.libraryRegion.show(loadingView);
          });
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
          view = new ShowView.EpisodeDetail({
            model: model
          });
          view.title = model.get("episodeTitle");
          view.on("episodes:list", function() {
            return view.trigger("view:close");
          });
          return Swabcast.dialogRegion.show(view);
        },
        showEpisodeList: function(model) {
          var view;
          view = new ShowView.EpisodeList({
            model: model
          });
          view.on("episodes:list", function() {
            return view.trigger("view:close");
          });
          require(["common/view"], function(CommonViews) {
            var backButton;
            backButton = new CommonViews.NavHelper({
              buttonText: "Back to subscriptions"
            });
            return Swabcast.navHelperRegion.show(backButton);
          });
          return Swabcast.libraryRegion.show(view);
        },
        showFeedEpisodesById: function(id) {
          require(["common/view"], function(CommonViews) {
            var backButton, loadingView;
            loadingView = new CommonViews.Loading({
              title: "Artificialy delaying this response",
              message: "This is the view that will show if waiting for data"
            });
            Swabcast.libraryRegion.show(loadingView);
            backButton = new CommonViews.NavHelper({
              buttonText: "Back to subscriptions"
            });
            Swabcast.navHelperRegion.show(backButton);
          });
          return require(["entities/feed"], function() {
            var fetchingFeed;
            fetchingFeed = Swabcast.request("feed:entity", id);
            return $.when(fetchingFeed).done(function(feed) {
              var view;
              view = void 0;
              if (feed !== undefined) {
                view = new ShowView.EpisodeList({
                  model: feed
                });
              } else {
                view = new View.FeedNotFound();
              }
              Swabcast.libraryRegion.show(view);
            });
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
          return Swabcast.dialogRegion.show(view);
        },
        notImplemented: function() {
          var view;
          view = new ShowView.FeatureNotImplemented();
          view.on("episodes:list", function() {
            return view.trigger("dialog:close");
          });
          return Swabcast.dialogRegion.show(view);
        }
      };
    });
    return Swabcast.EpisodesApp.Feed.Controller;
  });

}).call(this);
