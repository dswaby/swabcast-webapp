(function() {
  define(["app", "apps/config/storage/localstorage", "entities/feed"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      var API, initializePlaylist, playlist;
      Entities.QueuedEpisode = Entities.Episode.extend({
        urlRoot: "playlist",
        order: 0
      });
      Entities.configureStorage(Entities.QueuedEpisode);
      Entities.Playlist = Backbone.Collection.extend({
        url: "playlist",
        model: Entities.QueuedEpisode,
        comparator: "id"
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
          var defer, episodes, promise;
          episodes = new Entities.Playlist();
          defer = $.Deferred();
          episodes.fetch({
            success: function(data) {
              return defer.resolve(data);
            }
          });
          promise = defer.promise();
          $.when(promise).done(function(episodes) {
            var models;
            if (episodes.length === 0) {
              models = initializeEpisodes();
              return episodes.reset(models);
            }
          });
          return promise;
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
                albumArt: model.parent.get("albumArt") || null,
                episodeTitle: model.get("episodeTitle") || null,
                feedUrl: model.parent.get("feedUrl") || null,
                episodeParent: model.parent.get("subscriptionTitle") || null,
                mediaUrl: model.get("mediaUrl") || null,
                enqueue: true,
                order: highestOrder || 1
              });
              tracks.add(newTrack);
              newTrack.save();
              Swabcast.trigger("episodes:playlist");
              return defer.resolve("success");
            } else {
              return defer.resolve("fail");
            }
          });
          return defer.promise();
        },
        firstInPlaylist: function() {
          var defer, queuedTracks;
          queuedTracks = new Entities.Playlist();
          defer = $.Deferred();
          queuedTracks.fetch;
          ({
            success: function(playlist) {
              var episodes;
              episodes = playlist.get("episodes");
              if (episodes.length) {
                return defer.resolve(episodes[0]);
              } else {
                return defer.resolve('undefined');
              }
            },
            error: function() {
              return defer.resolve(undefined);
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
      Swabcast.reqres.setHandler("playlist:first", function() {
        return API.firstInPlaylist();
      });
      return Swabcast.reqres.setHandler("playlist:addtoqueue", function(model) {
        return API.addToPlaylist(model);
      });
    });
  });

}).call(this);
