(function() {
  define(["app"], function(Swabcast) {
    Swabcast.module("EpisodesApp", function(EpisodesApp, Swabcast, Backbone, Marionette, $, _) {
      var API;
      EpisodesApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
          library: "showPageMedia",
          "episodes/:id": "showEpisode",
          "feed/:id": "showFeedEpisodesOnLoad",
          "episodes/:id/edit": "editEpisode",
          playlist: "showPlaylistOnLoad"
        }
      });
      API = {
        showPageMedia: function() {
          var options;
          options = false;
          require(["apps/episodes/nav/nav_controller"], function() {
            console.log("showPageMedia");
            return EpisodesApp.Nav.Controller.showNav();
          });
          require(["apps/episodes/player/player_controller"], function() {
            return EpisodesApp.Player.Controller.showControls();
          });
          require(["apps/episodes/playlist/playlist_controller"], function() {
            return EpisodesApp.Playlist.Controller.showTracks(options);
          });
          return require(["apps/episodes/feed/feed_controller"], function() {
            return EpisodesApp.Feed.Controller.showFeeds();
          });
        },
        showPlaylistMain: function() {
          var options;
          options = true;
          return require(["apps/episodes/playlist/playlist_controller"], function() {
            console.log("showPlaylistMain");
            return EpisodesApp.Playlist.Controller.showTracks(options);
          });
        },
        showLibrary: function() {
          return require(["apps/episodes/feed/feed_controller"], function() {
            return EpisodesApp.Feed.Controller.showFeeds();
          });
        },
        showAboutApp: function() {
          return require(["apps/episodes/static/static_controller"], function() {
            return EpisodesApp.Static.Controller.showAboutApp();
          });
        },
        showAboutMe: function() {
          return require(["apps/episodes/static/static_controller"], function() {
            return EpisodesApp.Static.Controller.showAboutMe();
          });
        },
        listEpisodes: function() {
          return require(["apps/episodes/list/list_controller"], function() {
            return EpisodesApp.List.Controller.listEpisodes();
          });
        },
        showEpisode: function(id) {
          return EpisodesApp.Show.Controller.showEpisode(id);
        },
        editEpisode: function(id) {
          return EpisodesApp.Edit.Controller.editEpisode(id);
        },
        showPlaylist: function() {
          return require(["apps/episodes/playlist/playlist_controller"], function() {
            console.log("showPlaylist");
            return EpisodesApp.Playlist.Controller.showTracks();
          });
        },
        showEpisodeDetails: function(model) {
          return require(["apps/episodes/feed/feed_controller"], function() {
            return EpisodesApp.Feed.Controller.showEpisodeDetails(model);
          });
        },
        showFeedDetails: function(model) {
          return require(["apps/episodes/feed/feed_controller"], function() {
            return EpisodesApp.Feed.Controller.showFeedDetails(model);
          });
        },
        showFeedEpisodes: function(model) {
          return require(["apps/episodes/feed/feed_controller"], function() {
            return EpisodesApp.Feed.Controller.showEpisodeList(model);
          });
        },
        showFeedEpisodesOnLoad: function(id) {
          require(["apps/episodes/nav/nav_controller"], function() {
            return EpisodesApp.Nav.Controller.showNav();
          });
          require(["apps/episodes/playlist/playlist_controller"], function() {
            console.log("showFeedEpisodesOnLoad");
            return EpisodesApp.Playlist.Controller.showTracks();
          });
          require(["apps/episodes/player/player_controller"], function() {
            return EpisodesApp.Player.Controller.showControls();
          });
          return require(["apps/episodes/feed/feed_controller"], function() {
            return EpisodesApp.Feed.Controller.showFeedEpisodesById(id);
          });
        },
        showPlaylistOnLoad: function() {
          var options;
          options = true;
          require(["apps/episodes/nav/nav_controller"], function() {
            return EpisodesApp.Nav.Controller.showNav();
          });
          require(["apps/episodes/playlist/playlist_controller"], function() {
            console.log("showPlaylistOnLoad");
            return EpisodesApp.Playlist.Controller.showTracks(options);
          });
          return require(["apps/episodes/player/player_controller"], function() {
            return EpisodesApp.Player.Controller.showControls();
          });
        },
        featureNotImplemented: function() {
          return require(["apps/episodes/feed/feed_controller"], function() {
            return EpisodesApp.Feed.Controller.notImplemented();
          });
        }
      };
      Swabcast.on("media:all", function() {
        return API.showPageMedia();
      });
      Swabcast.on("episodes:library", function() {
        Swabcast.navigate("library");
        return API.showLibrary();
      });
      Swabcast.on("episodes:list", function() {
        Swabcast.navigate("episodes");
        return API.listEpisodes();
      });
      Swabcast.on("episode:show", function(id) {
        Swabcast.navigate("episodes/" + id);
        return API.showEpisode(id);
      });
      Swabcast.on("episode:edit", function(id) {
        Swabcast.navigate("episodes/" + id + "/edit");
        return API.editEpisode(id);
      });
      Swabcast.on("episodes:playlist", function() {
        return API.showPlaylist();
      });
      Swabcast.on("episode:details", function(model) {
        return API.showEpisodeDetails(model);
      });
      Swabcast.on("feed:details", function(model) {
        return API.showFeedDetails(model);
      });
      Swabcast.on("feature:not:implemented", function() {
        return API.featureNotImplemented();
      });
      Swabcast.on("feed:episodelist", function(model) {
        Swabcast.navigate("feed/" + model.get("id"));
        return API.showFeedEpisodes(model);
      });
      Swabcast.on("playlist:mainview", function() {
        Swabcast.navigate("playlist");
        return API.showPlaylistMain();
      });
      Swabcast.on("static:about:app", function() {
        return API.showAboutApp();
      });
      Swabcast.on("static:about:me", function() {
        return API.showAboutMe();
      });
      return Swabcast.addInitializer(function() {
        return new EpisodesApp.Router({
          controller: API
        });
      });
    });
    return Swabcast.EpisodesApp;
  });

}).call(this);
