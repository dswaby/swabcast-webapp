(function() {
  define(["app", "tpl!apps/episodes/show/templates/episode_detailed_view.tpl", "tpl!apps/episodes/show/templates/missing_episode.tpl", "tpl!apps/episodes/show/templates/feature_not_implemented.tpl", "tpl!apps/episodes/show/templates/feed_detailed.tpl", "tpl!apps/episodes/show/templates/feed_episodes.tpl", "tpl!apps/episodes/show/templates/episode_item_view.tpl"], function(Swabcast, episodeDetailedTpl, missingTpl, featureNotImplemented, feedDetailedTpl, feedEpisodesTpl, episodeItemViewTpl) {
    Swabcast.module("EpisodesApp.Show.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      View.FeatureNotImplemented = Marionette.ItemView.extend({
        template: featureNotImplemented,
        events: {
          "click button.js-back-button": "goBack"
        },
        initialize: function() {
          return this.title = "Feature Not Implemented Yet";
        },
        goBack: function(e) {
          return this.trigger("dialog:close");
        }
      });
      View.EpisodeNotFound = Marionette.ItemView.extend({
        template: missingTpl
      });
      View.EpisodeDetail = Marionette.ItemView.extend({
        template: episodeDetailedTpl,
        events: {
          "click a.dismiss": "closeDialog",
          "click a.js-edit": "editClicked",
          "click a.js-enqueue": "queueEpisode"
        },
        initialize: function() {
          return this.title = this.model.get("subscriptionTitle");
        },
        editClicked: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:edit", this.model);
        },
        closeDialog: function(e) {
          return this.trigger("dialog:close");
        },
        queueEpisode: function(e) {
          var addToPlaylist, episodeElement;
          e.preventDefault();
          e.stopPropagation();
          this.$el.addClass("disabled");
          if (this.model.get("enqueue") === false) {
            this.model.set({
              enqueue: true
            });
            this.model.save();
            addToPlaylist = Swabcast.request("playlist:addtoqueue", this.model);
            episodeElement = this.$el;
            $.when(addToPlaylist).done(function(apiResponse) {
              if (typeof apiResponse === "string") {
                console.log("we dun goofed");
                episodeElement.toggleClass("danger-zone").fadeIn(400, function() {
                  return setTimeout((function() {
                    return $(this).toggleClass("danger-zone");
                  }), 300);
                });
              }
              if (typeof apiResponse === "object") {
                Swabcast.EpisodesApp.Playlist.trigger("playlist:enqueue", this.apiResponse);
                return episodeElement.fadeOut("slow", function() {
                  return $(this).fadeIn("slow");
                });
              }
            });
          }
          return this.trigger("dialog:close");
        }
      });
      View.Feed = Marionette.ItemView.extend({
        template: feedDetailedTpl,
        events: {
          "click button.js-back-button": "goBack"
        },
        initialize: function() {
          return this.title = this.model.get("subscriptionTitle");
        },
        goBack: function(e) {
          e.stopPropagation();
          return this.trigger("dialog:close");
        }
      });
      View.EpisodeListItem = Marionette.ItemView.extend({
        className: "tracklist",
        tagName: "tr",
        template: episodeItemViewTpl,
        events: {
          "click a.js-enqueue": "toggleQueue",
          "click a.js-feedview": "feedDetails",
          "click td.js-view-detail": "showClicked",
          "click a.js-preview-audio": "previewAudio"
        },
        onBeforeRender: function() {},
        initialize: function() {},
        templateHelpers: {
          month: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
          createDate: function(ms) {
            return new Date(ms);
          },
          getPublishedDay: function(ms) {
            var e;
            e = this.createDate(ms);
            return e.getDay();
          },
          getPublishedMonth: function(ms) {
            var e;
            e = this.createDate(ms);
            return this.month[e.getMonth()];
          }
        },
        destroyTrackView: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:delete", this.model);
        },
        showClicked: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return Swabcast.trigger("episode:details", this.model);
        },
        toggleQueue: function(e) {
          var addToPlaylist, episodeElement;
          e.preventDefault();
          e.stopPropagation();
          this.$el.addClass("disabled");
          if (this.model.get("enqueue") === false) {
            this.model.set({
              enqueue: true
            });
            this.model.save();
            addToPlaylist = Swabcast.request("playlist:addtoqueue", this.model);
            episodeElement = this.$el;
            $.when(addToPlaylist).done(function(apiResponse) {
              if (typeof apiResponse === "string") {
                console.log("we dun goofed");
                episodeElement.toggleClass("danger-zone").fadeIn(400, function() {
                  return setTimeout((function() {
                    return $(this).toggleClass("danger-zone");
                  }), 300);
                });
              }
              if (typeof apiResponse === "object") {
                Swabcast.EpisodesApp.Playlist.trigger("playlist:enqueue", this.apiResponse);
                return episodeElement.fadeOut("slow", function() {
                  return $(this).fadeIn("slow");
                });
              }
            });
            return this.trigger("dialog:close");
          }
        },
        previewAudio: function(e) {
          e.preventDefault();
          return e.stopPropagation();
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
          console.log("WHAT THE FUCK");
          e.preventDefault();
          e.stopPropagation();
          return Swabcast.trigger("feed:details", this.model);
        }
      });
    });
    return Swabcast.EpisodesApp.Show.View;
  });

}).call(this);
