define ["app",
  "./../../app/assets/bower_components/chai/chai",
  "entities/feed"
  ], (Swabcast, chai) ->
  #feeds = require("app","entities/feed")
  expect = chai.expect;
  describe "Feeds", ->
    describe "Feed Model", ->
      it "expect default \"urlRoot\" property to equal \"/api/samples\"", ->

        feeds = new Swabcast.Entities.Feed()
        expect(feeds.urlRoot).to.equal("feeds")
        return

      it "expect \"albumArt\" property to have a default image of \"default.jpg\" ", ->
        feeds = new Swabcast.Entities.Feed()
        expect(feeds.albumArt).to.equal "default.jpg"
        return
    return

  return