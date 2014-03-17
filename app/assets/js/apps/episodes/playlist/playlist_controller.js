(function() {
  define(["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller"], function(Swabcast, View) {
    Swabcast.module("EpisodesApp.Playlist", function(Playlist, Swabcast, Backbone, Marionette, $, _) {
      Playlist.Controller = {
        showTracks: function() {
          return require(["entities/playlist", "apps/episodes/list/list_controller"], function() {
            var fetchingPlaylist, playlistLayout;
            fetchingPlaylist = Swabcast.request("entities:playlist");
            playlistLayout = new View.Layout();
            $.when(fetchingPlaylist).done(function(tracks) {
              var playlistTracks, self;
              self = this;
              if (typeof tracks.at(0) !== "undefined") {
                this.nowPlaying = tracks.at(0);
              }
              playlistTracks = new View.Tracks({
                collection: tracks
              });
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
              playlistTracks.listenTo(Playlist, "playlist:enqueue", function() {
                var newTrack;
                tracks.fetch();
                playlistTracks.render();
                if (tracks.length === 1) {
                  newTrack = tracks.at(0);
                  if (tracks.at(0) === newTrack) {
                    Swabcast.commands.execute("player:setepisode", newTrack);
                  }
                  if (!tracks.nowPlaying) {
                    return tracks.nowPlaying = newTrack;
                  }
                }
              });
              playlistLayout.on("show", function() {
                return playlistLayout.playlistRegion.show(playlistTracks);
              });
              return playlistTracks.on("playlist:update", function(childView, model) {
                return playlistTracks.children.findByModel(model).flash("success");
              });
            });
            return Swabcast.sideBarRegion.show(playlistLayout);
          });
        }
      };
      return {
        logThisMessage: function() {
          return console.log("this message");
        }
      };
    });
    return Swabcast.EpisodesApp.Playlist.Controller;
  });

}).call(this);
