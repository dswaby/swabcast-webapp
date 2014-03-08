(function() {
  define(["app", "apps/episodes/playlist/playlist_view", "apps/episodes/player/player_controller"], function(Swabcast, View) {
    Swabcast.module("EpisodesApp.Playlist", function(Playlist, Swabcast, Backbone, Marionette, $, _) {
      return Playlist.Controller = {
        showTracks: function(mainScreen) {
          mainScreen = mainScreen || false;
          return require(["entities/playlist"], function() {
            var playlistIds, playlistLayout;
            playlistIds = Swabcast.request("episode:playlist");
            playlistLayout = new View.Layout();
            $.when(playlistIds).done(function(list) {
              var episodes, playlistTracks, self;
              episodes = list.get("episodes");
              console.log(list);
              self = this;
              if (typeof episodes[0] !== "undefined") {
                this.nowPlaying = episodes[0];
              }
              playlistTracks = new View.Tracks({
                collection: list
              });
              require(["apps/episodes/list/list_controller"], function() {
                return playlistTracks.on("itemview:episode:delete", function(childView, model) {
                  var modelUid;
                  if (typeof episodes[1] === "undefined" && episodes.length === 1) {
                    Swabcast.commands.execute("playerdata:remove");
                    Swabcast.commands.execute("player:empty");
                  }
                  if (episodes[0] === model && episodes.length >= 2) {
                    Swabcast.commands.execute("playlist:updatenowplaying", episodes[1]);
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
                if (list.length !== 0) {
                  inQueue = list.find(function(t) {
                    return t.get("uid") === model.get("uid");
                  });
                  highestOrder = list.max(function(t) {
                    return t.get("order");
                  });
                  highestOrder = highestOrder.get("order") + 1;
                }
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
                  list.add(newTrack);
                  newTrack.save();
                  if (list.at(0) === newTrack) {
                    Swabcast.commands.execute("player:setepisode", newTrack);
                  }
                  if (!list.nowPlaying) {
                    return list.nowPlaying = newTrack;
                  }
                } else {

                }
              });
              playlistLayout.on("show", function() {
                return playlistLayout.playlistRegion.show(playlistTracks);
              });
              return playlistTracks.on("playlist:update", function(childView, model) {
                return playlistTracks.children.findByModel(model).flash("success");
              });
            });
            if (mainScreen === true) {
              console.log('show playlist triggered');
              return Swabcast.libraryRegion.show(playlistLayout);
            } else {
              return Swabcast.sideBarRegion.show(playlistLayout);
            }
          });
        },
        showPlaylistMain: function() {
          return console.log("BLAH");
        }
      };
    });
    return Swabcast.EpisodesApp.Playlist.Controller;
  });

}).call(this);
