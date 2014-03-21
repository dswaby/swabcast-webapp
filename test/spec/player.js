(function() {
  define(["app", "./../../app/assets/bower_components/chai/chai", "entities/player", "apps/episodes/player/player_controller"], function(Swabcast, chai) {
    var expect;
    expect = chai.expect;
    describe("Player Controller", function() {
      it("expect disabled icons on initialization", function() {
        var player;
        player = new Swabcast.Entities.Feed();
      });
      it("audio.state should be disabled", function() {});
      it("if in disabled state, should updates player controls and preview view when onPlayerSetEpisode() is triggered", function() {});
      return it("expect \"albumArt\" property to have a default image of \"default.jpg\" ", function() {
        var feeds;
        feeds = new Swabcast.Entities.Feed();
      });
    });
  });

}).call(this);
