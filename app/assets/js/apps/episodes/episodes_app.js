(function() {
  define(["app"], function(Swabcast) {
    Swabcast.module("EpisodesApp", function(EpisodesApp, Swabcast, Backbone, Marionette, $, _) {
      var API;
      EpisodesApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
          episodes: "showPageMedia",
          "episodes/:id": "showEpisode",
          "episodes/:id/edit": "editEpisode",
          playlist: "showPlaylist"
        }
      });
      API = {
        showPageMedia: function() {
          require(["apps/episodes/playlist/playlist_controller"], function() {
            return EpisodesApp.Playlist.Controller.showTracks();
          });
          require(["apps/episodes/feed/feed_controller"], function() {
            return EpisodesApp.Feed.Controller.showFeeds();
          });
          require(["apps/episodes/player/player_controller"], function() {
            return EpisodesApp.Player.Controller.showControls();
          });
          return require(["apps/episodes/nav/nav_controller"], function() {
            return EpisodesApp.Nav.Controller.showNav();
          });
        },
        showPlaylistView: function(mainView) {
          require(["apps/episodes/playlist/playlist_controller"], function() {
            return EpisodesApp.Playlist.Controller.showTracks(mainView);
          });
          require(["apps/episodes/player/player_controller"], function() {
            return EpisodesApp.Player.Controller.showControls();
          });
          return require(["apps/episodes/nav/nav_controller"], function() {
            return EpisodesApp.Nav.Controller.showNav();
          });
        },
        showLibrary: function() {
          return require(["apps/episodes/feed/feed_controller"], function() {
            return EpisodesApp.Feed.Controller.showFeeds();
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
        }
      };
      Swabcast.on("media:all", function() {
        return API.showPageMedia();
      });
      Swabcast.on("episodes:library", function() {
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
      Swabcast.on("playist:mainview", function() {
        var mainview;
        console.log('playlist mainView triggered');
        mainview = true;
        return API.showPlaylistView(mainview);
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
