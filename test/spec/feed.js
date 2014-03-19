(function() {
  define(["app", "./../../app/assets/bower_components/chai/chai", "entities/feed"], function(Swabcast, chai) {
    var expect;
    expect = chai.expect;
    describe("Feeds", function() {
      describe("Feed Model", function() {
        it("expect default \"urlRoot\" property to equal \"/feeds\"", function() {
          var feeds;
          feeds = new Swabcast.Entities.Feed();
          expect(feeds.urlRoot).to.equal("feeds");
        });
        return it("expect \"albumArt\" property to have a default image of \"default.jpg\" ", function() {
          var feeds;
          feeds = new Swabcast.Entities.Feed();
          expect(feeds.get("albumArt")).to.equal("default.jpg");
        });
      });
    });
  });

}).call(this);
