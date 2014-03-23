(function() {
  requirejs.define("entities/feed", function() {
    return {
      callback: function() {
        return "Stub";
      }
    };
  });

  describe("Testing \"Feed\"", function(done) {
    var Feed;
    Feed = void 0;
    beforeEach(function(done) {
      requirejs(["entities/feed"], function(_Module) {
        Feed = _Module;
        done();
        requirejs.undef("entities/feed");
      });
    });
    describe("#1 Feed Suite:", function() {
      it("Feed.test", function() {
        chai.expect(Feed.test).to.equal(true);
      });
    });
    describe("#2 Feed Suite:", function() {
      it("Feed Bar.bar", function() {
        chai.expect(Feed.bar.bar).to.equal("foo");
      });
      it("Feed.foo.callback (and stub)", function() {
        chai.expect(Feed.foo.callback()).to.equal("Original");
      });
      it("Array should be 2 (testing a fail)", function() {
        chai.expect([1, 2]).to.have.length(3);
      });
      it("Array should be 3", function() {
        chai.expect([1, 2, 3]).to.have.length(3);
      });
    });
  });

}).call(this);
