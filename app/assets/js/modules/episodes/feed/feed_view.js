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
      View.TrackView = Marionette.ItemView.extend({
        className: "tracklist",
        tagName: "tr",
        template: tracklistTpl,
        events: {
          "click a.js-enqueue": "toggleQueue",
          "click a.js-feedview": "feedDetails",
          "click a.js-view-detail": "showClicked"
        },
        destroyTrackView: function(e) {
          e.preventDefault();
          e.stopPropagation();
          this.trigger("episode:delete", this.model);
          return console.log("clicked", this.model);
        },
        showClicked: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return Swabcast.trigger("episode:details", this.model);
        },
        toggleQueue: function(e) {
          e.preventDefault();
          e.stopPropagation();
          this.$el.addClass("disabled");
          if (this.model.get("enqueue") === false) {
            this.model.set({
              enqueue: true
            });
            this.model.save();
            return Swabcast.EpisodesApp.Playlist.trigger("playlist:enqueue", this.model);
          }
        }
      });
      View.FeedView = Marionette.CompositeView.extend({
        className: "feed-detail-view-dialog",
        tagname: "table",
        template: feedViewTpl,
        itemView: View.TrackView,
        events: {
          "click a.js-feed-details": "showFeedDetails"
        },
        initialize: function() {
          var parent, trackList;
          parent = this.model;
          trackList = new Swabcast.Entities.Tracks(this.model.get("tracks"));
          this.collection = trackList;
          return this.collection.each(function(track) {
            return track.parent = parent;
          });
        },
        appendHtml: function(collectionView, itemView) {
          return collectionView.$("#episodes-container").append(itemView.el);
        },
        onRender: function() {
          if (this.model.get("enqueue") === true) {
            return this.$el.addClass("disabled");
          }
        },
        highlightName: function() {
          return this.$el.toggleClass("success");
        },
        showFeedDetails: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return Swabcast.trigger("feed:details", this.model);
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
