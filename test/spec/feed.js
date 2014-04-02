(function() {
  define(["app", "./../../app/assets/bower_components/chai/chai", "entities/feed"], function(Swabcast, chai) {
    var expect;
    expect = chai.expect;
    describe("Feed Model", function() {
      describe("Creation", function() {
        var feed;
        feed = new Swabcast.Entities.Feed();
        return it("expect \"/feed\" to have default values", function() {
          expect(feed).to.be.ok;
          expect(feed.urlRoot).to.equal("feeds");
        });
      });
      describe("Validation", function() {
        it("expect \'Invalid\' if the feed does not contain title", function() {
          var feed, fn;
          feed = new Swabcast.Entities.Feed({
            "subscriptionTitle": "",
            "episodes": []
          });
          feed.on("invalid", function(model, error) {
            throw Error(error[0].message);
          });
          fn = function() {
            feed.save();
          };
          return expect(fn).to["throw"]("Feed Entity must have valid title");
        });
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
            throw Error(model.get("subscriptionTitle") + " " + error[0].message);
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
