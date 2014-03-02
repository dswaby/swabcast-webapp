(function() {
  define(["app", "apps/episodes/player/player_view"], function(Swabcast, View) {
    Swabcast.module("EpisodesApp.Player", function(Player, Swabcast, Backbone, Marionette, $, _) {
      return Player.Controller = {
        showControls: function() {
          return require(["entities/player"], function() {
            var debugging, fetchPlayerData;
            debugging = true;
            fetchPlayerData = Swabcast.request("player:savedata");
            return $.when(fetchPlayerData).done(function(playerData) {
              var self;
              self = this;
              if (playerData) {
                self.logPlayerData();
              } else {

              }
              this.initializePlayer = function() {
                playerData = playerData || self.viewData();
                self.audioPlayer.createAudio();
                return self.updateAudio();
              };
              this.updateAudio = function(sourceUrl) {
                sourceUrl = sourceUrl || playerData.get("mediaUrl");
                self.audioPlayer.resetAudio();
                if (playerData.get("currentPosition") !== 0 && typeof playerData.get("currentPosition") === "number") {
                  self.audioPlayer.setAudioSource(sourceUrl);
                  self.audioPlayer.setPosition = playerData.get("currentPosition");
                } else {
                  self.audioPlayer.setAudioSource(sourceUrl);
                  self.audioPlayer.setPosition = 0;
                }
                return self.audioPlayer.audio.load();
              };
              this.removeCurrentAudio = function() {
                return self.audioPlayer.clearAudio();
              };
              this.newPlayerData = function(newModelData) {
                var newPlayerData;
                newPlayerData = new Swabcast.Entities.Player({
                  albumArt: newModelData.get("albumArt"),
                  mediaUrl: newModelData.get("mediaUrl"),
                  title: newModelData.get("episodeTitle"),
                  currentPosition: newModelData.get("currentPosition") || 0
                });
                return newPlayerData;
              };
              this.playNow = function(newModelData) {
                self.newPlayerData(newModelData);
                return self.audioPlayer.play();
              };
              this.defaultPlayerData = function() {
                var defaultData;
                defaultData = new Swabcast.Entities.Player({
                  albumArt: "default.jpg",
                  mediaUrl: "./assets/mp3/abranmepaso.mp3",
                  title: "defaultData",
                  currentPosition: 0
                });
                return defaultData;
              };
              this.viewData = function() {
                var newplayerdata, nextinq;
                nextinq = Swabcast.request("playlist:first");
                $.when(nextinq).done(function(track) {});
                if (nextinq) {
                  newplayerdata = new Swabcast.Entities.Player({
                    albumArt: nextinq.get("albumArt"),
                    mediaUrl: nextinq.get("mediaUrl"),
                    title: nextinq.get("episodeTitle"),
                    currentPosition: 0
                  });
                  return newplayerdata;
                }
                return self.defaultPlayerData();
              };
              this.audioPlayer = {
                createAudio: function() {
                  this.audio = new Audio();
                  return this.state = "disabled";
                },
                resetAudio: function() {
                  this.audio.remove();
                  this.audio = new Audio();
                  return this.audio.src = "";
                },
                play: function() {
                  if (this.state === "ready") {
                    this.audio.play();
                  }
                  return this.state = "playing";
                },
                pause: function() {
                  this.audio.pause();
                  return this.state = "ready";
                },
                setState: function(newState) {
                  if (!newState) {
                    return;
                  }
                  return this.state = newState;
                },
                setAudioSource: function(mediaUrl) {
                  this.audio.src = mediaUrl;
                  if (!mediaUrl || typeof mediaUrl !== "string") {
                    return;
                  }
                  return this.state = "ready";
                },
                clearAudio: function() {
                  this.audio.src = "";
                  this.audio.load();
                  return this.state = "disabled";
                },
                setPosition: function(time) {
                  if (typeof episodePosition === "number") {
                    return this.audio.currentTime = time;
                  }
                },
                skipback: function() {
                  if ((this.state === "ready" || this.state === "playing") && this.audio.currentTime > 45) {
                    this.audio.pause();
                    this.audio.currentTime = this.audio.currentTime - 45;
                    return this.audio.play();
                  }
                },
                skipahead: function() {
                  self = this;
                  if ((self.state === "ready" || self.state === "playing") && self.audio.currentTime + 45 <= self.audio.duration) {
                    self.audio.pause();
                    self.audio.currentTime = self.audio.currentTime + 45;
                    return self.audio.play();
                  }
                },
                currentMediaUrl: function() {
                  return this.audio.src;
                }
              };
              this.initializePlayer();
              this.playerControls = new View.Player({
                model: playerData
              });
              this.playerControls.on("episode:playpause", function() {
                switch (self.audioPlayer.state) {
                  case "disabled":
                  case "ready":
                    self.audioPlayer.play();
                    $("#play-icon").addClass("Hidden");
                    $("#pause-icon").removeClass("Hidden");
                    return self.audioPlayer.setState("playing");
                  case "playing":
                    self.audioPlayer.pause();
                    playerData.set({
                      currentPosition: self.audioPlayer.audio.currentTime
                    });
                    $("#play-icon").removeClass("Hidden");
                    $("#pause-icon").addClass("Hidden");
                    return self.audioPlayer.setState("ready");
                }
              });
              this.playerControls.listenTo(Player, "playlist:removed", function(deleted) {
                if (deleted.has("mediaUrl") && deleted.get("mediaUrl") === self.audioPlayer.audio.src) {
                  self.audioPlayer.audio.pause();
                  self.audioPlayer.audio.src = null;
                }
                return self.updatePlayer();
              });
              this.playerControls.on("episode:skipback", function() {
                return self.audioPlayer.skipback();
              });
              this.playerControls.on("episode:skipahead", function() {
                return self.audioPlayer.skipahead();
              });
              this.playerControls.on("episode:previous", function() {});
              this.playerControls.on("episode:next", function() {});
              Swabcast.commands.setHandler("player:empty", function() {
                self.playerControls.model.destroy();
                self.playerControls.model = self.defaultPlayerData();
                self.updateAudio();
                self.playerControls.render();
                return playerData.save();
              });
              Swabcast.commands.setHandler("player:playnow", function(episodeModel) {
                self.playerControls.model.destroy();
                self.newPlayerData(episodeModel);
                self.updateAudio();
                self.audioPlayer.play();
                self.playerControls.render();
                return playerData.save();
              });
              Swabcast.commands.setHandler("player:setepisode", function(episodeModel) {
                self.playerControls.model.destroy();
                self.playerControls.model = self.newPlayerData(episodeModel);
                self.updateAudio(episodeModel.get("mediaUrl"));
                self.playerControls.render();
                return playerData.save();
              });
              Swabcast.commands.setHandler("playlist:updatenowplaying", function(nextInPlaylist) {
                self.playerControls.model.destroy();
                self.playerControls.model = self.newPlayerData(nextInPlaylist);
                self.updateAudio(nextInPlaylist.get("mediaUrl"));
                self.playerControls.render();
                return playerData.save();
              });
              this.playerControls.listenTo(Player, "playlist:added", function(episodeModel) {});
              return Swabcast.playerRegion.show(this.playerControls);
            });
          });
        }
      };
    });
    return Swabcast.EpisodesApp.Player.Controller;
  });

}).call(this);