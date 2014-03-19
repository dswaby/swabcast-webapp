(function() {
  define(["app", "tpl!apps/episodes/playlist/templates/playlist_item_view.tpl", "tpl!apps/episodes/playlist/templates/playlist_item_view_extended.tpl", "tpl!apps/episodes/playlist/templates/playlist_layout.tpl", "tpl!apps/episodes/playlist/templates/playlist.tpl"], function(Swabcast, playlistItemTpl, playlistItemExtTpl, playlistLayoutTpl, playlistTpl) {
    Swabcast.module("EpisodesApp.Playlist.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      View.Layout = Marionette.Layout.extend({
        template: playlistLayoutTpl,
        regions: {
          nowPlayingRegion: "#now-playing-region",
          playlistRegion: "#playlist-region"
        }
      });
      View.Track = Marionette.ItemView.extend({
        tagName: "tr",
        className: "playlist-item",
        template: playlistItemTpl,
        events: {
          "click a": "stopPropagating",
          "click a.js-remove-track": "destroyTrackView"
        },
        destroyTrackView: function(e) {
          e.preventDefault();
          return this.trigger("episode:delete", this.model);
        },
        flash: function(cssClass) {
          var $view;
          $view = this.$el;
          return $view.hide().toggleClass(cssClass).fadeIn(400, function() {
            return setTimeout((function() {
              return $view.toggleClass(cssClass);
            }), 300);
          });
        }
      });
      View.Tracks = Marionette.CompositeView.extend({
        tagName: "table",
        className: "large-8 small-12 columns",
        template: playlistTpl,
        itemView: View.Track,
        initialize: function() {
          return this.listenTo(this.collection, "reset", function() {
            return this.appendHtml = function(collectionView, itemView, index) {
              return collectionView.$el.append(itemView.el);
            };
          });
        },
        onCompositeCollectionRendered: function() {
          return this.appendHtml = function(collectionView, itemView, index) {
            return collectionView.$el.append(itemView.el);
          };
        },
        onItemviewEpisodeDelete: function() {
          return this.$el.fadeOut("slow", function() {
            return $(this).fadeIn("slow");
          });
        },
        flash: function(cssClass) {
          var $view;
          $view = this.$el;
          return $view.hide().toggleClass(cssClass).fadeIn(400, function() {
            return setTimeout((function() {
              return $view.toggleClass(cssClass);
            }), 300);
          });
        }
      });
      View.TrackExtended = Marionette.ItemView.extend({
        tagName: "tr",
        className: "playlist-item",
        template: playlistItemExtTpl,
        events: {
          "click a": "stopPropagating",
          "click a.js-remove-track": "destroyTrackView"
        },
        destroyTrackView: function(e) {
          e.preventDefault();
          return this.trigger("episode:delete", this.model);
        },
        flash: function(cssClass) {
          var $view;
          $view = this.$el;
          return $view.hide().toggleClass(cssClass).fadeIn(400, function() {
            return setTimeout((function() {
              return $view.toggleClass(cssClass);
            }), 300);
          });
        }
      });
      return View.TracksExtended = Marionette.CompositeView.extend({
        tagName: "table",
        className: "large-8 small-12 columns",
        template: playlistTpl,
        itemView: View.TrackExtended,
        initialize: function() {
          return this.listenTo(this.collection, "reset", function() {
            return this.appendHtml = function(collectionView, itemView, index) {
              return collectionView.$el.append(itemView.el);
            };
          });
        },
        onCompositeCollectionRendered: function() {
          return this.appendHtml = function(collectionView, itemView, index) {
            return collectionView.$el.append(itemView.el);
          };
        },
        onItemviewEpisodeDelete: function() {
          return this.$el.fadeOut("slow", function() {
            return $(this).fadeIn("slow");
          });
        },
        flash: function(cssClass) {
          var $view;
          $view = this.$el;
          return $view.hide().toggleClass(cssClass).fadeIn(400, function() {
            return setTimeout((function() {
              return $view.toggleClass(cssClass);
            }), 300);
          });
        }
      });
    });
    return Swabcast.EpisodesApp.Playlist.View;
  });

}).call(this);
