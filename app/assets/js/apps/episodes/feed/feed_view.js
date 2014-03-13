(function() {
  define(["app", "tpl!apps/episodes/feed/templates/feed_layout.tpl", "tpl!apps/episodes/feed/templates/feed_view.tpl", "tpl!apps/episodes/feed/templates/library_view.tpl", "tpl!apps/episodes/feed/templates/tracklist.tpl"], function(Swabcast, feedLayoutTpl, feedViewTpl, libraryViewTpl, tracklistTpl) {
    Swabcast.module("EpisodesApp.Feed.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      View.Layout = Marionette.Layout.extend({
        template: feedLayoutTpl,
        regions: {
          podcastDetailsRegion: "#podcast-details",
          feedItemsCollectionRegion: "#feeditems-collection"
        }
      });
      View.FeedView = Marionette.ItemView.extend({
        tagname: "table",
        template: feedViewTpl,
        events: {
          "click a.js-episode-list": "showEpisodeList",
          "click a.js-feed-details": "showFeedDetails"
        },
        highlightName: function() {
          return this.$el.toggleClass("success");
        },
        showFeedDetails: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return Swabcast.trigger("feed:details", this.model);
        },
        showEpisodeList: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return Swabcast.trigger("feed:episodelist", this.model);
        }
      });
      return View.FeedLibraryView = Marionette.CollectionView.extend({
        template: libraryViewTpl,
        itemView: View.FeedView
      });
    });
    return Swabcast.EpisodesApp.Feed.View;
  });

}).call(this);
