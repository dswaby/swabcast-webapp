(function() {
  define(["app", "./../../app/assets/bower_components/chai/chai", "entities/feed"], function(Swabcast, chai) {
    var expect;
    expect = chai.expect;
    describe("Feed Model", function() {
      describe("Creation", function() {
        return it("expect \"/feed\" to have default values", function() {
          var feed;
          feed = new Swabcast.Entities.Feed();
          expect(feed).to.be.ok;
          expect(feed.urlRoot).to.equal("feeds");
          expect(feed.get("albumArt")).to.equal("default.jpg");
        });
      });
      describe("Validation", function() {
        it("expect \'Invalid\' if the feed does not contain episodes", function() {
          var feed, fn;
          feed = new Swabcast.Entities.Feed({
            "subscriptionTitle": "Test Feed",
            "albumArt": "test.jpg",
            "summary": "This is a test feed",
            "feedUrl": "http://test.com/test.xml",
            "authors": "Danny Swaby"
          });
          feed.on("invalid", function(model, error) {
            throw Error(model.get("subscriptionTitle") + " " + error);
          });
          fn = function() {
            feed.save({
              episodes: ""
            });
          };
          return expect(fn).to["throw"]("Test Feed must contain episodes attribute");
        });
      });
    });
  });

}).call(this);
