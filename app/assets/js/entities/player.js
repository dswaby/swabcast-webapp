(function() {
  define(["app", "apps/config/storage/localstorage", "entities/feed"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      var API, initializePlayerSyncData;
      API = void 0;
      initializePlayerSyncData = void 0;
      Entities.Player = Backbone.Model.extend({
        urlRoot: "player"
      });
      Entities.configureStorage(Entities.Player);
      initializePlayerSyncData = function() {
        var syncData;
        syncData = void 0;
        syncData = new Swabcast.Entities.Episode({
          title: "",
          mediaUrl: "",
          albumArt: "",
          currentPosition: 0
        });
        return syncData.save();
      };
      API = {
        getPlayer: function() {
          var defer, playerSaveData, promise;
          defer = void 0;
          playerSaveData = void 0;
          promise = void 0;
          playerSaveData = new Swabcast.Entities.Episode({
            id: 0
          });
          defer = $.Deferred();
          setTimeout((function() {
            return playerSaveData.fetch({
              success: function(data) {
                return defer.resolve(data);
              },
              error: function() {
                return defer.resolve(undefined);
              }
            });
          }), 100);
          promise = defer.promise();
          return defer.promise();
        },
        playerReset: function() {
          var playerSaveData;
          playerSaveData = void 0;
          playerSaveData = new Swabcast.Entities.Episode({
            id: 0
          });
          return console.log("playerdata:reset triggered");
        }
      };
      Swabcast.reqres.setHandler("player:savedata", function() {
        return API.getPlayer();
      });
      Swabcast.commands.setHandler("playerdata:remove", function() {
        return API.playerReset();
      });
      return Swabcast.commands.setHandler("playerdata:add", function(episodeModel) {
        return API.updateSaveData(episodeModel);
      });
    });
  });

}).call(this);
