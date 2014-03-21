define ["app",
  "./../../app/assets/bower_components/chai/chai",
  "entities/player",
  "apps/episodes/player/player_controller"
  ], (Swabcast, chai) ->
  #feeds = require("app","entities/feed")
  expect = chai.expect
  describe "Player Controller", ->
    it "expect disabled icons on initialization", ->

      player = new Swabcast.Entities.Feed()
      return

    #test views
    it "audio.state should be disabled", ->
      return

    it "if in disabled state, should updates player controls and preview view when onPlayerSetEpisode() is triggered", ->
      return

    it "expect \"albumArt\" property to have a default image of \"default.jpg\" ", ->
      feeds = new Swabcast.Entities.Feed()
      # expect(feeds.get("albumArt")).to.equal "default.jpg"
      return

  return

