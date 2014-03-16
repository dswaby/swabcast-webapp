# demonstrating how to create stubs for dependencies
requirejs.define "entities/feed", ->

  # swaps out the Foo module. A common case in tests.
  # This changes the callback property from 'Original' to 'Stub'
  callback: ->
    "Stub"


# begin mocha test
describe "Testing \"Feed\"", (done) ->

  # our test file is declared here, but loaded async
  Feed = undefined
  beforeEach (done) ->
    # beforeEach will cause the suites to fire async if the `done`
    # parameter is used. Function.length > 0 tells mocha to pause
    # until the callback is fired - done() in this case
    # load our file
    # Must use a fully qualified path, as requirejs is first invoked here;
    # it does not recognize relative paths from the spec
    requirejs ["entities/feed"], (_Module) ->

      # set our declared test file
      Feed = _Module
      done()

      # this unloads our stub, in case other specs need to use
      # the original
      requirejs.undef "entities/feed"
      return
    return

  # start 1st suite
  describe "#1 Feed Suite:", ->
    it "Feed.test", ->
      chai.expect(Feed.test).to.equal true
      return
    return

  # start 2nd suite
  describe "#2 Feed Suite:", ->
    it "Feed Bar.bar", ->
      chai.expect(Feed.bar.bar).to.equal "foo"
      return

    # This test should fail because of our stub at the top of the file
    it "Feed.foo.callback (and stub)", ->
      chai.expect(Feed.foo.callback()).to.equal "Original"
      return

    it "Array should be 2 (testing a fail)", ->
      chai.expect([
        1
        2
      ]).to.have.length 3
      return
    # ...and then continue
    it "Array should be 3", ->
      chai.expect([
        1
        2
        3
      ]).to.have.length 3
      return
    return
  return
