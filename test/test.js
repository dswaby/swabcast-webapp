(function() {

    var assert = require('assert');
    describe('Array', function () {
        describe('#indexOf()', function () {
            it('should return -1 when the value is not present', function () {
                assert.equal(-1, [1, 2, 3].indexOf(5));
                assert.equal(-1, [1, 2, 3].indexOf(0));
            });
        });
    });
}).call(this);

// describe('User', function(){
//   describe('#save()', function(){
//     it('should save without error', function(done){
//       var user = new User('Luna');
//       user.save(function(err){
//         if (err) throw err;
//         done();
//       });
//     });
//   });
// });

// (function() {
//   describe("Connection", function() {
//     var db, jane, loki, tobi;
//     db = new Connection;
//     tobi = new User("tobi");
//     loki = new User("loki");
//     jane = new User("jane");
//     beforeEach(function(done) {
//       db.clear(function(err) {
//         if (err) {
//           return done(err);
//         }
//         db.save([tobi, loki, jane], done);
//       });
//     });
//     describe("#find()", function() {
//       it("respond with matching records", function(done) {
//         db.find({
//           type: "User"
//         }, function(err, res) {
//           if (err) {
//             return done(err);
//           }
//           res.should.have.length(3);
//           done();
//         });
//       });
//     });
//   });

// }).call(this);
