(function() {
  define(["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller"], function(Swabcast, View) {
    Swabcast.module("EpisodesApp.Playlist", function(Playlist, Swabcast, Backbone, Marionette, $, _) {
      return Playlist.Controller = {
        showTracks: function(extendedView) {
          extendedView = extendedView || false;
          return require(["entities/playlist", "apps/episodes/list/list_controller"], function() {
            var fetchingPlaylist, playlistLayout;
            fetchingPlaylist = Swabcast.request("entities:playlist");
            playlistLayout = new View.Layout();
            $.when(fetchingPlaylist).done(function(tracks) {
              var newTrack, playlistTracks, self;
              self = this;
              if (typeof tracks.at(0) !== "undefined") {
                this.nowPlaying = tracks.at(0);
              }
              playlistTracks = void 0;
              if (extendedView) {
                console.log("showing extended view");
                playlistTracks = new View.TracksExtended({
                  collection: tracks
                });
              } else {
                console.log("showing regular view");
                playlistTracks = new View.Tracks({
                  collection: tracks
                });
              }
              playlistTracks.on("itemview:episode:delete", function(childView, model) {
                var modelUid;
                if (typeof tracks.at(1) === "undefined" && tracks.length === 1) {
                  Swabcast.commands.execute("playerdata:remove");
                  Swabcast.commands.execute("player:empty");
                }
                if (tracks.at(0) === model && tracks.length >= 2) {
                  Swabcast.commands.execute("playlist:updatenowplaying", tracks.at(1));
                }
                modelUid = model.get("uid");
                model.destroy();
                return Swabcast.EpisodesApp.List.trigger("episode:removefromqueue", modelUid);
              });
              if (!inQueue) {
                newTrack = new Swabcast.Entities.PlaylistEpisode({
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
                if (tracks.at(0) === newTrack) {
                  Swabcast.commands.execute("player:setepisode", newTrack);
                }
                if (!tracks.nowPlaying) {
                  tracks.nowPlaying = newTrack;
                }
              } else {
                console.log("maybe throw error?");
              }
              playlistLayout.on("show", function() {
                return playlistLayout.playlistRegion.show(playlistTracks);
              });
              return playlistTracks.on("playlist:update", function(childView, model) {
                return playlistTracks.children.findByModel(model).flash("success");
              });
            });
            if (extendedView) {
              Swabcast.sideBarRegion.close();
              require(["common/view"], function(CommonViews) {
                var backButton, winheight;
                backButton = new CommonViews.NavHelper({
                  buttonText: "Back to subscriptions"
                });
                backButton.on("click button.js-library-back", function() {
                  return Swabcast.trigger("episodes:playlist");
                });
                Swabcast.navHelperRegion.show(backButton);
                return winheight = $(window).height() - 75;
              });
              return Swabcast.libraryRegion.show(playlistLayout);
            } else {
              return Swabcast.sideBarRegion.show(playlistLayout);
            }
          });
        }
      };
    });
    return Swabcast.EpisodesApp.Playlist.Controller;
  });

}).call(this);
