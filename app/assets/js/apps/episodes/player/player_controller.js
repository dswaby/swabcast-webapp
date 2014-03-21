(function() {
  define(["app", "apps/episodes/player/player_view"], function(Swabcast, View) {
    Swabcast.module("EpisodesApp.Player", function(Player, Swabcast, Backbone, Marionette, $, _) {
      return Player.Controller = {
        showControls: function() {
          return require(["entities/player"], function() {
            var playerData, self;
            self = this;
            playerData = null;
            self = this;
            this.initializePlayer = function() {
              playerData = self.defaultPlayerState();
              self.audioPlayer.createAudio();
              return self.updateAudio();
            };
            this.updateAudio = function(source, options) {
              var opts;
              opts = options || {};
              if (playerData) {
                opts.currentPosition = playerData.get("currentPosition") || 0;
              }
              if (source && source !== "") {
                self.audioPlayer.resetAudio(source);
                self.audioPlayer.setAudioSource(source);
                self.audioPlayer.setPosition = options.currentPosition;
                return self.audioPlayer.audio.load();
              }
            };
            this.removeCurrentAudio = function() {
              return self.audioPlayer.clearAudio();
            };
            this.newPlayerData = function(newModelData) {
              var newPlayerData;
              console.log("model data", newModelData);
              newPlayerData = new Swabcast.Entities.Episode({
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
            this.defaultPlayerState = function() {
              var defaultData;
              defaultData = new Swabcast.Entities.Episode({
                albumArt: "default.jpg",
                mediaUrl: "",
                title: "",
                currentPosition: 0
              });
              return defaultData;
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
                playerData.set("currentPosition", this.audio.currentTime);
                playerData.save();
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
              setAudioOptions: function(options) {},
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
            Swabcast.commands.setHandlers({
              "player:empty": function() {
                var sourceUrl;
                console.log("player:empty");
                sourceUrl = "";
                self.playerControls.model.destroy();
                self.playerControls.model = self.defaultPlayerState();
                self.updateAudio(sourceUrl);
                self.playerControls.render();
                return playerData.save();
              },
              "player:playnow": function(episodeModel) {
                var options, sourceUrl;
                console.log("player:playnow", episodeModel);
                sourceUrl = episodeModel.get("mediaUrl") || "";
                options = {};
                options.preload = true;
                self.playerControls.model.destroy();
                self.newPlayerData(episodeModel);
                self.updateAudio(sourceUrl, options);
                self.audioPlayer.play();
                self.playerControls.render();
                return playerData.save();
              },
              "player:setepisode": function(episodeModel) {
                var options;
                console.log("player:setepisode", episodeModel);
                options = {};
                options.preload = true;
                self.playerControls.model.destroy();
                self.playerControls.model = self.newPlayerData(episodeModel);
                self.updateAudio(episodeModel.get("mediaUrl"), options);
                self.playerControls.render();
                return playerData.save();
              },
              "playlist:updatenowplaying": function(episodeModel) {
                var options;
                console.log("playlist:updatenowplaying", episodeModel);
                options = {};
                options.preload = true;
                self.playerControls.model.destroy();
                self.playerControls.model = self.newPlayerData(episodeModel);
                self.updateAudio(episodeModel.get("mediaUrl"), options);
                self.playerControls.render();
                return playerData.save();
              }
            });
            return Swabcast.playerRegion.show(this.playerControls);
          });
        }
      };
    });
    return Swabcast.EpisodesApp.Player.Controller;
  });

}).call(this);
