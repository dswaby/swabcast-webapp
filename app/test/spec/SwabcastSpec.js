(function() {
  require(["entities/feed"], function() {
    return describe("Episode", function() {
      var episode, feed;
      episode = void 0;
      feed = void 0;
      beforeEach(function() {
        episode = new Swabcast.Entities.Episode();
        feed = new Swabcast.Entities.Feed();
      });
      return it("should be defined", function() {
        expect(episode.get("enqueue")).toEqual(false);
        expect(episode.get("albumArt")).toEqual("default.jpg");
      });
    });
  });

  describe("Player", function() {
    var player, song;
    player = void 0;
    song = void 0;
    beforeEach(function() {
      player = new Player();
      song = new Song();
    });
    it("should be able to play a Song", function() {
      player.play(song);
      expect(player.currentlyPlayingSong).toEqual(song);
      expect(player).toBePlaying(song);
    });
    describe("when song has been paused", function() {
      beforeEach(function() {
        player.play(song);
        player.pause();
      });
      it("should indicate that the song is currently paused", function() {
        expect(player.isPlaying).toBeFalsy();
        expect(player).not.toBePlaying(song);
      });
      it("should be possible to resume", function() {
        player.resume();
        expect(player.isPlaying).toBeTruthy();
        expect(player.currentlyPlayingSong).toEqual(song);
      });
    });
    it("tells the current song if the user has made it a favorite", function() {
      spyOn(song, "persistFavoriteStatus");
      player.play(song);
      player.makeFavorite();
      expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });
    describe("#resume", function() {
      it("should throw an exception if song is already playing", function() {
        player.play(song);
        expect(function() {
          player.resume();
        }).toThrowError("song is already playing");
      });
    });
  });

}).call(this);
