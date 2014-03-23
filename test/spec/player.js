(function() {
  define(["app", "apps/episodes/player/player_view", "./../../app/assets/bower_components/chai/chai", "entities/player", "apps/episodes/player/player_controller"], function(Swabcast, View, chai) {
    var expect, should;
    expect = chai.expect;
    should = chai.Should();
    describe("Player", function() {
      describe("Model", function() {
        it("test1", function() {
          var playerData;
          playerData = new Swabcast.Entities.Episode();
        });
        it("test2", function() {});
        it("test3", function() {});
        return it("test4", function() {
          var feeds;
          feeds = new Swabcast.Entities.Episode();
        });
      });
      describe("View", function() {
        it("expect playerView to be a div", function() {
          var playerView;
          playerView = new View.Player;
          expect(playerView.$el[0].tagName).to.equal('DIV');
        });
        it("player views should take a an episode model", function() {
          var playerData, playerView;
          playerData = new Swabcast.Entities.Episode({
            uid: "episode1-333",
            albumArt: " ",
            episodeTitle: "Episode1",
            feedUrl: "http://episode1.test",
            episodeParent: "Swabcast Playlist",
            mediaUrl: "episode1.mp3",
            enqueue: true,
            order: 1
          });
          playerView = new View.Player({
            model: playerData
          });
          expect(playerView.model).to.equal(playerData);
        });
        it("player views should take a an episode model", function() {
          var playerData, playerView;
          playerData = new Swabcast.Entities.Episode({
            uid: "episode1-333",
            albumArt: " ",
            episodeTitle: "Episode1",
            feedUrl: "http://episode1.test",
            episodeParent: "Swabcast Playlist",
            mediaUrl: "episode1.mp3",
            enqueue: true,
            order: 1
          });
          playerView = new View.Player({
            model: playerData
          });
          console.log(playerView);
        });
        return it("test4", function() {
          var feeds;
          feeds = new Swabcast.Entities.Episode();
        });
      });
      return describe("Controller", function() {
        it("test1", function() {
          var playerData;
          playerData = new Swabcast.Entities.Episode();
        });
        it("test2", function() {});
        it("test3", function() {});
        return it("test4", function() {
          var feeds;
          feeds = new Swabcast.Entities.Episode();
        });
      });
    });
  });

}).call(this);
