(function() {
  define(["app", "apps/config/storage/localstorage"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      var API, initializePlaylist, playlistEpisodes;
      Entities.Episode = Backbone.Model.extend({
        urlRoot: "episode",
        defaults: {
          albumArt: "default.jpg",
          episodeTitle: "blank episode",
          episodeParent: "blank podcast",
          mediaUrl: "",
          enqueue: false
        },
        validate: function(attrs) {
          var errors;
          errors = {};
          if (!attrs.episodeTitle) {
            errors.episodeTitle = "Title Field Required";
          }
          if (!attrs.episodeParent) {
            errors.episodeParent = "Podcast Name required";
          } else {
            if (attrs.episodeParent.length < 2) {
              errors.episodeParent = "podcast name too short";
            }
          }
          if (!_.isEmpty(errors)) {
            return errors;
          }
        }
      });
      Entities.configureStorage(Entities.Episode);
      Entities.EpisodeCollection = Backbone.Collection.extend({
        url: "episodes",
        model: Entities.Episode,
        comparator: "id"
      });
      Entities.configureStorage(Entities.EpisodeCollection);
      Entities.PlaylistEpisode = Backbone.Model.extend({
        urlRoot: "playlist",
        defaults: {
          albumArt: "default.jpg",
          episodeTitle: "default playlist track",
          episodeParent: "default playlist track",
          mediaUrl: "httpEquiv:",
          enqueue: true,
          order: 0
        }
      });
      Entities.configureStorage(Entities.PlaylistEpisode);
      Entities.Playlist = Backbone.Collection.extend({
        url: "playlist",
        model: Entities.PlaylistEpisode,
        comparator: "order"
      });
      Entities.configureStorage(Entities.Playlist);
      playlistEpisodes = void 0;
      initializePlaylist = function() {
        playlistEpisodes = new Entities.Playlist([
          {
            uid: "cwgBtx7XPuAfJCAT8LZoK",
            episodeTitle: "67: something about somethin",
            episodeParent: "Primary Podcast",
            albumArt: "default.jpg",
            mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ080ImpactJS.mp3",
            id: "1",
            order: 8
          }, {
            uid: "VmchVNtrnEco2WKo7oxKH",
            episodeTitle: "68: something about somethin",
            episodeParent: "Primary Podcast",
            albumArt: "default.jpg",
            mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ080ImpactJS.mp3",
            id: "2",
            order: 1
          }, {
            uid: "VyBsTpEVVGHL6KiZ7XKTF",
            episodeTitle: "69: something about somethin",
            episodeParent: "Primary Podcast",
            albumArt: "default.jpg",
            mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ080ImpactJS.mp3",
            id: "3",
            order: 5
          }
        ]);
        return playlistEpisodes.forEach(function(playlistEp) {
          return playlistEp.save();
        });
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
          var defer, promise, queuedTracks;
          queuedTracks = new Entities.Playlist();
          defer = $.Deferred();
          queuedTracks.fetch({
            success: function(data) {
              return defer.resolve(data);
            }
          });
          promise = defer.promise();
          $.when(promise).done(function(queuedtracks) {
            return promise = queuedtracks.first();
          });
          return promise;
        },
        updatePlaylistOrder: function() {
          var highestOrder, queuedtracks;
          queuedtracks = getPlaylistEntities();
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
