(function() {
  describe("Connection", function() {
    var db, jane, loki, tobi;
    db = new Connection;
    tobi = new User("tobi");
    loki = new User("loki");
    jane = new User("jane");
    beforeEach(function(done) {
      db.clear(function(err) {
        if (err) {
          return done(err);
        }
        db.save([tobi, loki, jane], done);
      });
    });
    describe("#find()", function() {
      it("respond with matching records", function(done) {
        db.find({
          type: "User"
        }, function(err, res) {
          if (err) {
            return done(err);
          }
          res.should.have.length(3);
          done();
        });
      });
    });
  });

}).call(this);
