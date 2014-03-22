(function() {
  define(["app", "apps/config/storage/localstorage", "entities/feed"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      var API, episodeToSet, initializePlaylist, playlist;
      Entities.QueuedEpisode = Entities.Episode.extend({
        urlRoot: "playlist",
        order: 0,
        validate: function(attrs) {
          if (!attrs.uid) {
            return "must have valid uid property";
          }
        }
      });
      Entities.configureStorage(Entities.QueuedEpisode);
      Entities.Playlist = Backbone.Collection.extend({
        url: "playlist",
        model: Entities.QueuedEpisode,
        comparator: "order"
      });
      Entities.configureStorage(Entities.Playlist);
      playlist = void 0;
      initializePlaylist = function() {
        var blankPlaylist;
        blankPlaylist = new Entities.Playlist();
        return blankPlaylist.save();
      };
      API = {
        getEpisodeEntity: function(uniqueId) {
          var defer, episode;
          episode = new Entities.Episode({
            id: uniqueId
          });
          defer = $.Deferred();
          setTimeout((function() {
            return episode.fetch({
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
        getPlaylistEntities: function() {
          var defer, promise, queuedTracks;
          queuedTracks = new Entities.Playlist();
          defer = $.Deferred();
          queuedTracks.fetch({
            success: function(data) {
              return defer.resolve(data);
            }
          });
          promise = defer.promise();
          $.when(promise).done(function(queuedtracks) {});
          return promise;
        },
        addToPlaylist: function(model) {
          var defer, queuedTracks;
          queuedTracks = this.getPlaylistEntities();
          defer = $.Deferred();
          $.when(queuedTracks).done(function(tracks) {
            var highestOrder, inQueue, newTrack;
            highestOrder = void 0;
            inQueue = void 0;
            if (tracks.length !== 0) {
              inQueue = tracks.find(function(t) {
                return t.get("uid") === model.get("uid");
              });
              highestOrder = tracks.max(function(t) {
                return t.get("order");
              });
              highestOrder = highestOrder.get("order") + 1;
            }
            if (!inQueue) {
              newTrack = new Swabcast.Entities.QueuedEpisode({
                uid: model.get("uid") || null,
                albumArt: model.parent.get("albumArt") || "default.jpg",
                episodeTitle: model.get("episodeTitle") || "",
                feedUrl: model.parent.get("feedUrl") || "",
                episodeParent: model.parent.get("subscriptionTitle") || "",
                mediaUrl: model.get("mediaUrl") || null,
                enqueue: true,
                order: highestOrder || 1
              });
              tracks.add(newTrack);
              newTrack.save();
              console.log("new track in playlist entity", newTrack);
              return defer.resolve(newTrack);
            } else {
              return defer.resolve("fail");
            }
          });
          return defer.promise();
        },
        updatePlaylistOrder: function() {
          var highestOrder, queuedtracks;
          queuedtracks = this.getPlaylistEntities();
          if (queuedtracks.length === 0) {
            return;
          }
          highestOrder = queuedtracks.max(function(t) {
            return t.get("order");
          });
          if (highestOrder - 1 !== queuedtracks.length) {
            console.log("updating track order attributes");
            return queuedtracks.forEach(function(t) {
              t.set({
                order: t.indexOf(this.model) + 1
              });
              t.save();
              return console.log(t);
            });
          }
        }
      };
      Swabcast.reqres.setHandler("entities:playlist", function() {
        return API.getPlaylistEntities();
      });
      Swabcast.reqres.setHandler("episode:entity", function(uid) {
        return API.getEpisodeEntity(uid);
      });
      Swabcast.reqres.setHandler("episode:playlist", function() {
        return API.getPlaylistEntities();
      });
      Swabcast.reqres.setHandler("playlist:addtoqueue", function(model) {
        return API.addToPlaylist(model);
      });
      episodeToSet = API.getPlaylistEntities();
      console.log("on load");
      return $.when(episodeToSet).done(function(episodes) {
        var playerEpisode;
        console.log("episodes", episodes.models[0]);
        playerEpisode;
        if (episodes.at(0)) {
          return playerEpisode = episodes.models[0];
        }
      });
    });
  });

}).call(this);
