(function() {
  define(["app"], function(Swabcast) {
    Swabcast.module("SubscriptionsApp", function(SubscriptionsApp, Swabcast, Backbone, Marionette, $, _) {
      var API;
      SubscriptionsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
          subscriptions: "showSubscriptionsList"
        }
      });
      API = {
        showSubscriptionsList: function() {
          return require(["apps/subscriptions/list/list_controller"], function() {
            return SubscriptionsApp.List.Controller.showSubscriptionsList();
          });
        }
      };
      Swabcast.on("subscriptions:all", function() {
        return API.showSubscriptionsList();
      });
      return Swabcast.addInitializer(function() {
        return new SubscriptionsApp.Router({
          controller: API
        });
      });
    });
    return Swabcast.SubscriptionsApp;
  });

}).call(this);
