(function() {
  define(["app", "apps/episodes/player/player_view", "./../../app/assets/bower_components/chai/chai", "entities/player", "apps/episodes/player/player_controller"], function(Swabcast, View, chai) {
    var expect, should;
    expect = chai.expect;
    should = chai.Should();
    describe("Player", function() {
      describe("Model", function() {
        describe("Creation", function() {
          return it("expect \"player\" to have default values", function() {
            var player;
            player = new Swabcast.Entities.PlayerData();
            expect(player).to.be.ok;
            expect(player.currentPosition).to.equal(0);
            return expect(player.url).to.equal("player");
          });
        });
        describe("Validation", function() {
          it("expect \'Invalid\' if the playerData does not contain media url", function() {
            var fn, player;
            player = new Swabcast.Entities.PlayerData({
              "uid": 15154574515
            });
            player.on("invalid", function(model, error) {
              throw Error(error[0].message);
            });
            fn = function() {
              player.save();
            };
            return expect(fn).to["throw"]("Player data must have media url");
          });
          it("expect \'Invalid\' if the playerData does not contain uid", function() {
            var fn, player;
            player = new Swabcast.Entities.PlayerData({
              "mediaUrl": "http://www.testurl.com/blah.mp3"
            });
            player.on("invalid", function(model, error) {
              throw Error(error[0].message);
            });
            fn = function() {
              player.save();
            };
            return expect(fn).to["throw"]("Player data must have valid uid");
          });
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
      describe("View", function() {
        before(function() {
          this.$fixture = $("<div id='player'></div>");
        });
        beforeEach(function() {
          this.$fixture.empty().appendTo($("#fixtures"));
          this.view = new View.Player({
            el: this.$fixture,
            model: new Swabcast.Entities.PlayerData()
          });
          return this.view.render();
        });
        afterEach(function() {
          this.view.model.destroy();
        });
        after(function() {
          return $("#fixtures").empty();
        });
        it("can render empty model", function() {
          var $playerimage;
          $playerimage = $("#player-art");
          expect($playerimage.prop("src")).to.equal("http://localhost:1234/img/podcast-default.png");
        });
        return it("player views should correctly render an episode model", function() {
          var $playerimage, model;
          model = new Swabcast.Entities.PlayerData({
            "albumArt": "default.jpg",
            "title": "Test Episode"
          });
          this.view.model = model;
          this.view.render();
          $playerimage = $("#player-art");
          expect($playerimage.prop("src")).to.equal("http://localhost:1234/serverdata/albumart/default.jpg");
        });
      });
      return describe("Controller", function() {});
    });
  });

}).call(this);
