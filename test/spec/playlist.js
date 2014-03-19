(function() {
  define(["app", "./../../app/assets/bower_components/chai/chai", "entities/playlist"], function(Swabcast, chai) {
    var expect;
    expect = chai.expect;
    describe("Playlist", function() {
      return it("expect playlist collection to contain QueuedEpisode models", function() {
        var episode1, episode2, playlist;
        episode1 = new Swabcast.Entities.QueuedEpisode({
          uid: "episode1-333",
          albumArt: "somephoto.png",
          episodeTitle: "Episode1",
          feedUrl: "http://episode1.test",
          episodeParent: "Swabcast Playlist",
          mediaUrl: "episode1.mp3",
          enqueue: true,
          order: 1
        });
        episode2 = new Swabcast.Entities.QueuedEpisode({
          uid: "episode2-3333",
          albumArt: "somephoto.png",
          episodeTitle: "Episode1",
          feedUrl: "http://episode1.test",
          episodeParent: "Swabcast Playlist",
          mediaUrl: "episode1.mp3",
          enqueue: true,
          order: 1
        });
        playlist = new Swabcast.Entities.Playlist();
        playlist.add(episode1);
        playlist.add(episode2);
        expect(playlist.length).to.equal(2);
      });
    });
    describe("Playlist Model", function() {
      return it("invalid if \"uid\" is missing or \"\"", function() {
        var episode1, fn;
        episode1 = new Swabcast.Entities.QueuedEpisode({
          episodeTitle: 'Episode1'
        });
        episode1.on("invalid", function(model, error) {
          throw Error(model.get("episodeTitle") + " " + error);
        });
        fn = function() {
          episode1.save({
            uid: ""
          });
        };
        expect(fn).to["throw"]("Episode1 must have valid uid property");
      });
    });
  });

}).call(this);
