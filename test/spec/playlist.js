(function() {
  define(["app", "apps/episodes/playlist/playlist_view", "./../../app/assets/bower_components/chai/chai", "apps/episodes/playlist/playlist_controller", "entities/playlist"], function(Swabcast, View, chai) {
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
    describe("View", function() {
      before(function() {
        this.$layoutfixture = $("<div id='now-playing-region'></div><div id='playlist-region'></div>");
      });
      beforeEach(function() {
        var playlist, track1, track2;
        this.$layoutfixture.empty().appendTo($("#fixtures"));
        this.layout = new View.Layout({
          el: this.$layoutfixture
        });
        playlist = new Swabcast.Entities.Playlist();
        this.view = new View.Tracks({
          el: "#playlist-region",
          collection: playlist
        });
        this.layout.on("show", function() {
          return Swabcast.playlistRegion.show(this.view);
        });
        track1 = new Swabcast.Entities.QueuedEpisode({
          id: 123,
          episodeTitle: "Track 1",
          albumArt: " ",
          episodeParent: "Test Feed",
          mediaUrl: "httpL//track1.mp3",
          episodeSummary: "This is track 1, used for testing playlist view",
          uid: "fo3ihr34",
          order: 1
        });
        track2 = new Swabcast.Entities.QueuedEpisode({
          id: 1234,
          episodeTitle: "Track 2",
          albumArt: " ",
          episodeParent: "Test Feed",
          mediaUrl: "httpL//track2.mp3",
          episodeSummary: "This is track 2, used for testing playlist view",
          uid: "fo3ihr34",
          order: 2
        });
        playlist.add(track1, track2);
        this.view.render();
        return this.view.collection.add(track1);
      });
      afterEach(function() {});
      after(function() {});
      it("can render empty model", function() {
        var $playlistRegion;
        $playlistRegion = $("#playlist-region");
      });
      return it("views should correctly render item", function() {});
    });
    return;
  });

}).call(this);
