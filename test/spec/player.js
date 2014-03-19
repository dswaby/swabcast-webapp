(function() {
  define(["app", "./../../app/assets/bower_components/chai/chai", "apps/episodes/player/player_controller"], function(Swabcast, chai) {
    var should;
    should = chai.should;
    describe("Player", function() {
      it("expect default \"urlRoot\" property to equal \"/feeds\"", function() {
        var player;
        player = new Swabcast.Entities.Feed();
        expect(feeds.urlRoot).to.equal("feeds");
      });
      return it("expect \"albumArt\" property to have a default image of \"default.jpg\" ", function() {
        var feeds;
        feeds = new Swabcast.Entities.Feed();
        expect(feeds.get("albumArt")).to.equal("default.jpg");
      });
    });
  });

}).call(this);
