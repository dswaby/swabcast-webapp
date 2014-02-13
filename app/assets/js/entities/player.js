(function() {
  define(["app", "apps/config/storage/localstorage"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      var API, initializePlayerSyncData;
      Entities.Player = Backbone.Model.extend({
        urlRoot: "player"
      });
      Entities.configureStorage(Entities.Player);
      initializePlayerSyncData = function() {
        var syncData;
        syncData = new Entities.Player({
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
          playerSaveData = new Entities.Player({
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
          playerSaveData = new Entities.Player({
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
