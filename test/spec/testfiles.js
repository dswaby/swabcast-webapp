(function() {
  define(["app", "./../../app/assets/bower_components/chai/chai", "./../../app/assets/bower_components/sinon/lib/sinon", "./../../../test/hello"], function(Swabcast, chai) {
    var expect;
    expect = chai.expect;
    describe("Test libraries", function() {
      return describe("Chai", function() {
        it("expect to be equal using \"/expect\" function", function() {
          var feeds;
          feeds = new Swabcast.Entities.Feed();
          expect(hello()).to.equal("Hello World");
        });
      });
    });
  });

}).call(this);
