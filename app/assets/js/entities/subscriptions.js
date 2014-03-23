(function() {
  define(["app", "apps/config/storage/localstorage"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      var API;
      Entities.Subscription = Backbone.Model.extend({
        urlRoot: "subscription",
        defaults: {
          id: 0,
          imageURL: "default.jpg",
          title: "blank title",
          home: "",
          mediaUrl: "",
          author: "",
          subscribed: false,
          stats: {
            numberOfEpisodes: 0
          }
        },
        validate: function(attrs) {
          var errors;
          errors = {};
          if (!_.isEmpty(errors)) {
            return errors;
          }
        }
      });
      Entities.configureStorage(Entities.Subscription);
      Entities.SubscriptionsCollection = Backbone.Collection.extend({
        url: "subscriptions",
        model: Entities.Subscription,
        comparator: "id"
      });
      Entities.configureStorage(Entities.SubscriptionsCollection);
      API = {
        getSubscriptionEntity: function(uniqueId) {
          var defer, subscription;
          subscription = new Entities.Subscription({
            id: uniqueId
          });
          defer = $.Deferred();
          setTimeout((function() {
            return subscription.fetch({
              success: function(data) {
                return defer.resolve(data);
              },
              error: function() {
                return defer.resolve(undefined);
              }
            });
          }), 100);
          return defer.promise();
        },
        getSubscriptionEntities: function() {
          var defer, promise, subscriptions;
          subscriptions = new Entities.SubscriptionCollection();
          defer = $.Deferred();
          subscriptions.fetch({
            success: function(data) {
              return defer.resolve(data);
            }
          });
          promise = defer.promise();
          $.when(promise).done(function(subscriptions) {
            var models;
            if (subscriptions.length === 0) {
              models = initializeSubscriptions();
              return subscriptions.reset(models);
            }
          });
          return promise;
        }
      };
      Swabcast.reqres.setHandler("subscription:all", function() {
        return API.getSubscriptionEntities();
      });
      return Swabcast.reqres.setHandler("subscription:entity", function(uid) {
        return API.getSubscriptionEntity(uid);
      });
    });
  });

}).call(this);
