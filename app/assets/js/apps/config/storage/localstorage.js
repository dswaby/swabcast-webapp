(function() {
  define(["app", "localstorage"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      "use strict";
      var StorageMixin, findStorageKey;
      findStorageKey = function(entity) {
        if (entity.urlRoot) {
          return _.result(entity, "urlRoot");
        }
        if (entity.url) {
          return _.result(entity, "url");
        }
        if (entity.collection && entity.collection.url) {
          return _.result(entity.collection, "url");
        }
        throw new Error("Unable to determine storage key");
      };
      StorageMixin = function(entityPrototype) {
        var storageKey;
        storageKey = findStorageKey(entityPrototype);
        return {
          localStorage: new Backbone.LocalStorage(storageKey)
        };
      };
      return Entities.configureStorage = function(entity) {
        return _.extend(entity.prototype, new StorageMixin(entity.prototype));
      };
    });
    return Swabcast.Entities.configureStorage;
  });

}).call(this);
