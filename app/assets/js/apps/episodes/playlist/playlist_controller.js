(function() {
  define(["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller"], function(Swabcast, View) {
    Swabcast.module("EpisodesApp.Playlist", function(Playlist, Swabcast, Backbone, Marionette, $, _) {
      return Playlist.Controller = {
        showTracks: function() {
          var donut;
          donut = true;
          return require(["entities/playlist"], function() {
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
              require(["apps/episodes/list/list_controller"], function() {
                return playlistTracks.on("itemview:episode:delete", function(childView, model) {
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
              });
              playlistTracks.listenTo(Playlist, "playlist:enqueue", function(model) {
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
                  if (tracks.at(0) === newTrack) {
                    Swabcast.commands.execute("player:setepisode", newTrack);
                  }
                  if (!tracks.nowPlaying) {
                    return tracks.nowPlaying = newTrack;
                  }
                } else {
                  return console.log("In queue, send failure response");
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
    });
    return Swabcast.EpisodesApp.Playlist.Controller;
  });

}).call(this);
