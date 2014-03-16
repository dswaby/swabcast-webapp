assert = require("assert")
describe "Array", ->
  describe "#indexOf()", ->
    it "should return -1 when the value is not present", ->
      assert.equal -1, [
        1
        2
        3
      ].indexOf(5)
      assert.equal -1, [
        1
        2
        3
      ].indexOf(0)
      return

    return

  return

describe "Array", ->
  describe "#indexOf()", ->
    it "should return -1 when the value is not present", ->
      [
        1
        2
        3
      ].indexOf(5).should.equal -1
      [
        1
        2
        3
      ].indexOf(0).should.equal -1
      return

    return

  return

describe "User", ->
  describe "#save()", ->
    it "should save without error", (done) ->
      user = new User("Luna")
      user.save (err) ->
        throw err  if err
        done()
        return

      return

    return

  return
