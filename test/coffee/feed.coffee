define ["app",
  "./../../app/assets/bower_components/chai/chai",
  "entities/feed"
  ], (Swabcast, chai) ->
  #feeds = require("app","entities/feed")
  expect = chai.expect;
  describe "Feed Model", ->
    describe "Creation", ->
      it "expect \"/feed\" to have default values", ->
        feed = new Swabcast.Entities.Feed()
        expect(feed).to.be.ok
        expect(feed.urlRoot).to.equal("feeds")
        expect(feed.get("albumArt")).to.equal "default.jpg"
        return

    describe "Attributes", ->
      it "expect can set model Attributes", ->

        feed = new Swabcast.Entities.Feed()
        expect(feed).to.be.ok
        expect(feed.urlRoot).to.equal("feeds")
        return

      it "expect \"albumArt\" property to have a default image of \"default.jpg\" ", ->
        feeds = new Swabcast.Entities.Feed()
        expect(feeds).to.be.ok
        expect(feeds.get("albumArt")).to.equal "default.jpg"
        return

    describe "Validation", ->
      it "expect \'Invalid\' if the feed does not contain episodes", ->
        feed = new Swabcast.Entities.Feed(
          "subscriptionTitle": "Test Feed"
          "albumArt": "test.jpg"
          "summary": "This is a test feed"
          "feedUrl": "http://test.com/test.xml"
          "authors": "Danny Swaby"
        )
        feed.on "invalid", (model, error) ->
          throw Error(model.get("subscriptionTitle") + " " + error)
          return
        fn = ->
          feed.save episodes: ""
          return

        expect(fn).to.throw("Test Feed must contain episodes attribute")

      return
    return

  return