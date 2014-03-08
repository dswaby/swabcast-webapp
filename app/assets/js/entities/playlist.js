(function() {
  define(["app", "apps/config/storage/localstorage"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      var API, initializePlaylist, playlist;
      Entities.Playlist = Backbone.Model.extend({
        url: "api/playlist",
        defaults: {
          name: "default",
          episodes: []
        },
        validate: function(attrs) {
          var epId, epInfo, _i, _len, _ref;
          if (attrs.episodes.length) {
            _ref = attrs.episodes;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              epId = _ref[_i];
              epInfo = epId.split("-", 2);
              if (epId[0].length > 32) {
                return "Error with subscription Id for playlist item";
              }
              if (epId[1].length > 32) {
                return "Playlist Error";
              }
            }
          }
        }
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
        getEpisodeEntities: function() {
          var defer, episodes, promise;
          episodes = new Entities.EpisodeCollection();
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
      Swabcast.reqres.setHandler("episode:entities", function() {
        return API.getEpisodeEntities();
      });
      Swabcast.reqres.setHandler("episode:entity", function(uid) {
        return API.getEpisodeEntity(uid);
      });
      Swabcast.reqres.setHandler("episode:playlist", function() {
        return API.getPlaylistEntities();
      });
      return Swabcast.reqres.setHandler("playlist:first", function() {
        return API.firstInPlaylist();
      });
    });
  });

}).call(this);
