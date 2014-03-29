(function() {
  define(["app", "./../../app/assets/bower_components/chai/chai"], function(Swabcast, chai) {
    var expect;
    expect = chai.expect;
    describe("Swabcast", function() {
      describe("Entities", function() {
        it("expect to be defined", function() {
          return expect(Swabcast.Entities).to.include.keys("Episode", "Episodes", "Feed", "Feeds", "Playlist", "Static", "QueuedEpisode");
        });
      });
      return describe("Regions", function() {
        it("expect regions to be defined", function() {
          return expect(Swabcast).to.include.keys("libraryRegion", "dialogRegion", "navRegion", "playerRegion", "sideBarRegion");
        });
      });
    });
  });

}).call(this);
