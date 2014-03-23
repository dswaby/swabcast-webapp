define ["app",
  "apps/episodes/player/player_view",
  "./../../app/assets/bower_components/chai/chai",
  "entities/player",
  "apps/episodes/player/player_controller"
  ], (Swabcast, View, chai) ->
  # Chai should reference
  # var should = require('chai').should() //actually call the the function
  #   , foo = 'bar'
  #   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

  # foo.should.be.a('string');
  # foo.should.equal('bar');
  # foo.should.have.length(3);
  # beverages.should.have.property('tea').with.length(3);


  expect = chai.expect
  should = chai.Should()
  describe "Player", ->
    describe "Model", ->
      it "test1", ->
        playerData = new Swabcast.Entities.Episode()
        return
      #test views
      it "test2", ->
        return
      it "test3", ->
        return
      it "test4", ->
        feeds = new Swabcast.Entities.Episode()
        # expect(feeds.get("albumArt")).to.equal "default.jpg"
        return
    describe "View", ->
      it "expect playerView to be a div", ->
        playerView = new View.Player
        expect(playerView.$el[0].tagName).to.equal('DIV')
        return
      #test views
      it "player views should take a an episode model", ->
        playerData = new Swabcast.Entities.Episode(
          uid: "episode1-333"
          albumArt: " "
          episodeTitle: "Episode1"
          feedUrl: "http://episode1.test"
          episodeParent: "Swabcast Playlist"
          mediaUrl: "episode1.mp3"
          enqueue: true
          order: 1
        )
        playerView = new View.Player(model: playerData)
        expect(playerView.model).to.equal(playerData)
        return
      it "player views should take a an episode model", ->
        playerData = new Swabcast.Entities.Episode(
          uid: "episode1-333"
          albumArt: " "
          episodeTitle: "Episode1"
          feedUrl: "http://episode1.test"
          episodeParent: "Swabcast Playlist"
          mediaUrl: "episode1.mp3"
          enqueue: true
          order: 1
        )
        playerView = new View.Player(model: playerData)
        console.log(playerView)
        return
      it "test4", ->
        feeds = new Swabcast.Entities.Episode()
        # expect(feeds.get("albumArt")).to.equal "default.jpg"
        return

    describe "Controller", ->
      it "test1", ->
        playerData = new Swabcast.Entities.Episode()
        return
      #test views
      it "test2", ->
        return
      it "test3", ->
        return
      it "test4", ->
        feeds = new Swabcast.Entities.Episode()
        # expect(feeds.get("albumArt")).to.equal "default.jpg"
        return
  return

