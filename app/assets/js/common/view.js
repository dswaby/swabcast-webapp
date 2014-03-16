(function() {
  define(["app", "tpl!common/templates/loadingView.tpl", "tpl!common/templates/notification_box.tpl", "tpl!common/templates/nav_helper.tpl"], function(Swabcast, loadingView, notificationView, navHelper) {
    Swabcast.module("Common.Views", function(Views, Swabcast, Backbone, Marionette, $, _) {
      Views.Loading = Marionette.ItemView.extend({
        template: loadingView,
        initialize: function(options) {
          options = options || {};
          this.title = options.title || "Loading";
          return this.message = options.message || "Plaease Wait..";
        },
        serializeData: function() {
          return {
            title: this.title,
            message: this.message
          };
        }
      });
      Views.Notification = Marionette.ItemView.extend({
        template: notificationView,
        initialize: function(options) {
          options = options || {};
          this.title = options.title || "Alert!";
          this.message = options.message || "This is an alert.";
          return this.alert = options.alert || "info";
        },
        serializeData: function() {
          return {
            title: this.title,
            message: this.message,
            alert: this.alert
          };
        }
      });
      return Views.NavHelper = Marionette.ItemView.extend({
        template: navHelper,
        events: {
          "click button.js-library-back": "navigateToLibrary"
        },
        initialize: function(options) {
          options = options || {};
          return this.buttonText = options.buttonText || "Back";
        },
        serializeData: function() {
          return {
            buttonText: this.buttonText
          };
        },
        navigateToLibrary: function() {
          Swabcast.trigger("episodes:library");
          return this.el.close;
        }
      });
    });
    return Swabcast.Common.Views;
  });

}).call(this);
