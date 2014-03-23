(function() {
  define(["app", "apps/config/storage/localstorage"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      var API;
      Entities.Topic = Backbone.Model.extend({
        urlRoot: "topic",
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
      Entities.TopicsCollection = Backbone.Collection.extend({
        url: "topics",
        model: Entities.Topic,
        comparator: "id"
      });
      Entities.configureStorage(Entities.TopicsCollection);
      API = {
        getTopicEntity: function(uniqueId) {
          var defer, topic;
          topic = new Entities.Topic({
            id: uniqueId
          });
          defer = $.Deferred();
          setTimeout((function() {
            return topic.fetch({
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
        getTopicEntities: function() {
          var defer, promise, topics;
          topics = new Entities.TopicCollection();
          defer = $.Deferred();
          topics.fetch({
            success: function(data) {
              return defer.resolve(data);
            }
          });
          promise = defer.promise();
          $.when(promise).done(function(topics) {
            var models;
            if (topics.length === 0) {
              models = initializeTopics();
              return topics.reset(models);
            }
          });
          return promise;
        }
      };
      Swabcast.reqres.setHandler("topic:all", function() {
        return API.getTopicEntities();
      });
      return Swabcast.reqres.setHandler("topic:entity", function(uid) {
        return API.getTopicEntity(uid);
      });
    });
  });

}).call(this);
