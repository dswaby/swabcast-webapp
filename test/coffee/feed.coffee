define ["app",
  "./../../app/assets/bower_components/chai/chai",
  "entities/feed"
  ], (Swabcast, chai) ->
  #feeds = require("app","entities/feed")
  expect = chai.expect;
  describe "Feed Model", ->
    describe "Creation", ->
      feed = new Swabcast.Entities.Feed()
      it "expect \"/feed\" to have default values", ->

        expect(feed).to.be.ok
        expect(feed.urlRoot).to.equal("feeds")
        return

    describe "Validation", ->

      it "expect \'Invalid\' if the feed does not contain title", ->
        feed = new Swabcast.Entities.Feed(
          "subscriptionTitle": ""
          "episodes": []
          "albumArt": "test.jpg"
          "summary": "This is a test feed"
          "feedUrl": "http://test.com/test.xml"
          "authors": "Danny Swaby"
        )
        feed.on "invalid", (model, error) ->
          console.log(error)
          throw Error(error[0].message)
          return
        fn = ->
          feed.save subscriptionTitle: ""
          return

        expect(fn).to.throw("Feed Entity must have valid title")

      it "expect \'Invalid\' if the feed does not contain episodes", ->
        feed = new Swabcast.Entities.Feed(
          "subscriptionTitle": "Test Feed"
          "albumArt": "test.jpg"
          "summary": "This is a test feed"
          "feedUrl": "http://test.com/test.xml"
          "authors": "Danny Swaby"
        )
        feed.on "invalid", (model, error) ->
          throw Error(model.get("subscriptionTitle") + " " + error[0].message)
          return
        fn = ->
          feed.save episodes: ""
          return

        expect(fn).to.throw("Test Feed must contain episodes attribute")

      return
    return

  return