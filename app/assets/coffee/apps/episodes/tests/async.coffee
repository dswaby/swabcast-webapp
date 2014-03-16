describe "Connection", ->
  db = new Connection
  tobi = new User("tobi")
  loki = new User("loki")
  jane = new User("jane")
  beforeEach (done) ->
    db.clear (err) ->
      return done(err)  if err
      db.save [
        tobi
        loki
        jane
      ], done
      return

    return

  describe "#find()", ->
    it "respond with matching records", (done) ->
      db.find
        type: "User"
      , (err, res) ->
        return done(err)  if err
        res.should.have.length 3
        done()
        return

      return

    return
  return
