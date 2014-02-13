(function() {
  define(["app", "tpl!apps/subscriptions/list/templates/subscription_list.tpl", "tpl!apps/subscriptions/list/templates/subscription_list_layout.tpl", "tpl!apps/subscriptions/list/templates/subscription_list_panel.tpl", "tpl!apps/subscriptions/list/templates/subscription_list_view.tpl"], function(Swabcast, subscriptionListTpl, layoutTpl, panelTpl, listViewTpl) {
    Swabcast.module("SubscriptionsApp.List.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      View.Layout = Marionette.Layout.extend({
        template: layoutTpl,
        regions: {
          panelRegion: "#panel-region",
          subscriptionsRegion: "#subscriptions-region"
        }
      });
      View.Panel = Marionette.ItemView.extend({
        template: panelTpl,
        triggers: {
          "click button.js-new": "subscription:new"
        }
      });
      View.Subscription = Marionette.ItemView.extend({
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
          return this.trigger("subscription:edit", this.model);
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
            return Swabcast.SubscriptionsApp.Playlist.trigger("playlist:enqueue", this.model);
          }
        },
        deleteClicked: function(e) {
          e.stopPropagation();
          return this.trigger("subscription:delete", this.model);
        },
        showClicked: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("subscription:show", this.model);
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
      return View.Subscriptions = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: subscriptionListTpl,
        itemView: View.Subscription,
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
        onItemviewSubscriptionDelete: function() {
          return this.$el.fadeOut("slow", function() {
            return $(this).fadeIn("slow");
          });
        }
      });
    });
    return Swabcast.SubscriptionsApp.List.View;
  });

}).call(this);
