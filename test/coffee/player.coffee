define ["app",
  "./../../app/assets/bower_components/chai/chai",
  "apps/episodes/player/player_controller"

  ], (Swabcast, chai) ->
  #feeds = require("app","entities/feed")
  should = chai.should;
  describe "Player", ->
    it "expect default \"urlRoot\" property to equal \"/feeds\"", ->

      player = new Swabcast.Entities.Feed()
      expect(feeds.urlRoot).to.equal("feeds")
      return

    it "expect \"albumArt\" property to have a default image of \"default.jpg\" ", ->
      feeds = new Swabcast.Entities.Feed()
      expect(feeds.get("albumArt")).to.equal "default.jpg"
      return
  return

