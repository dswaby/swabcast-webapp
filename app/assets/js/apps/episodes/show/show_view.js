(function() {
  define(["app", "tpl!apps/episodes/show/templates/episode_detailed_view.tpl", "tpl!apps/episodes/show/templates/missing_episode.tpl", "tpl!apps/episodes/show/templates/feed_detailed.tpl", "tpl!apps/episodes/show/templates/feed_episodes.tpl", "tpl!apps/episodes/show/templates/episode_item_view.tpl"], function(Swabcast, episodeDetailedTpl, missingTpl, feedDetailedTpl, feedEpisodesTpl, episodeItemViewTpl) {
    Swabcast.module("EpisodesApp.Show.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      View.EpisodeNotFound = Marionette.ItemView.extend({
        template: missingTpl
      });
      View.EpisodeDetail = Marionette.ItemView.extend({
        template: episodeDetailedTpl,
        events: {
          "click button.js-show-list": "showList",
          "click a.js-edit": "editClicked",
          "click button.js-enqueue": "queueEpisode"
        },
        editClicked: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:edit", this.model);
        },
        showList: function(e) {
          console.log("show episode list triggered, event:");
          e.stopPropagation();
          return this.trigger("episodes:list");
        },
        queueEpisode: function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (this.model.get("enqueue") === false) {
            Swabcast.EpisodesApp.Playlist.trigger("playlist:enqueue", this.model);
            this.model.set("enqueue", true);
          }
          return this.trigger("dialog:close");
        }
      });
      View.Feed = Marionette.ItemView.extend({
        template: feedDetailedTpl,
        events: {
          "click button.js-show-list": "showList"
        },
        showList: function(e) {
          console.log("show feed list triggered, event:", e);
          e.stopPropagation();
          return this.trigger("view:show");
        }
      });
      View.EpisodeListItem = Marionette.ItemView.extend({
        className: "tracklist",
        tagName: "tr",
        template: episodeItemViewTpl,
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
      return View.EpisodeList = Marionette.CompositeView.extend({
        className: "episodes-table-wrapper",
        tagname: "table",
        template: feedEpisodesTpl,
        itemView: View.EpisodeListItem,
        itemViewContainer: "tbody",
        events: {
          "click a.js-episode-list-modal": "showEpisodesDialog",
          "click a.js-feed-details": "showFeedEpisodes"
        },
        initialize: function() {
          var parent, trackList;
          console.log("recieved model", this.model);
          parent = this.model;
          trackList = new Swabcast.Entities.Episodes(this.model.get("episodes"));
          this.title = this.model.get("subscriptionTitle");
          this.collection = trackList;
          this.collection.each(function(track) {
            return track.parent = parent;
          });
          return {
            appendHtml: function(collectionView, itemView) {
              return collectionView.$("#episodes-list").append(itemView.el);
            }
          };
        },
        onRender: function() {
          if (this.model.get("enqueue") === true) {
            return this.$el.addClass("disabled");
          }
        },
        highlightName: function() {
          return this.$el.toggleClass("success");
        },
        showFeedEpisodes: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return Swabcast.trigger("feed:details", this.model);
        }
      });
    });
    return Swabcast.EpisodesApp.Show.View;
  });

}).call(this);
