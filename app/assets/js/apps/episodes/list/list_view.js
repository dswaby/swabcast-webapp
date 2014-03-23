(function() {
  define(["app", "tpl!apps/episodes/list/templates/episode_list.tpl", "tpl!apps/episodes/list/templates/episode_list_layout.tpl", "tpl!apps/episodes/list/templates/episode_list_panel.tpl", "tpl!apps/episodes/list/templates/episode_list_view.tpl"], function(Swabcast, episodeListTpl, layoutTpl, panelTpl, listViewTpl) {
    Swabcast.module("EpisodesApp.List.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      View.Layout = Marionette.Layout.extend({
        template: layoutTpl,
        regions: {
          panelRegion: "#panel-region",
          episodesRegion: "#episodes-region"
        }
      });
      View.Panel = Marionette.ItemView.extend({
        template: panelTpl,
        triggers: {
          "click button.js-new": "episode:new"
        }
      });
      View.Episode = Marionette.ItemView.extend({
        tagName: "tr",
        template: listViewTpl,
        events: {
          click: "highlightName",
          "click button.js-delete": "deleteClicked",
          "click td a.js-edit": "editClicked",
          "click td a.js-show": "showClicked",
          "click td button.js-enqueue": "toggleQueue"
        },
        onRender: function() {
          if (this.model.get("enqueue") === true) {
            return this.$el.addClass("disabled");
          }
        },
        editClicked: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:edit", this.model);
        },
        highlightName: function() {
          return this.$el.toggleClass("success");
        },
        toggleQueue: function(e) {
          e.preventDefault();
          e.stopPropagation();
          this.$el.addClass("disabled");
          if (this.model.get("enqueue") === false) {
            this.model.set({
              enqueue: true
            });
            return Swabcast.EpisodesApp.Playlist.trigger("playlist:enqueue", this.model);
          }
        },
        deleteClicked: function(e) {
          e.stopPropagation();
          return this.trigger("episode:delete", this.model);
        },
        showClicked: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:show", this.model);
        },
        remove: function() {
          var self;
          self = this;
          return this.$el.fadeOut(function() {
            return Marionette.ItemView.prototype.remove.call(self);
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
        },
        removeCss: function(cssClass) {
          var $view;
          $view = this.$el;
          return $view.removeClass(cssClass);
        }
      });
      return View.Episodes = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: episodeListTpl,
        itemView: View.Episode,
        itemViewContainer: "tbody",
        initialize: function() {
          return this.listenTo(this.collection, "reset", function() {
            return this.appendHtml = function(collectionView, itemView, index) {
              return collectionView.$el.append(itemView.el);
            };
          });
        },
        onCompositeCollectionRendered: function() {
          return this.appendHtml = function(collectionView, itemView, index) {
            return collectionView.$el.prepend(itemView.el);
          };
        },
        onItemviewEpisodeDelete: function() {
          return this.$el.fadeOut("slow", function() {
            return $(this).fadeIn("slow");
          });
        }
      });
    });
    return Swabcast.EpisodesApp.List.View;
  });

}).call(this);
