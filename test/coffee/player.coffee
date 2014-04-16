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
      describe "Creation", ->
        it "expect \"player\" to have default values", ->
          player = new Swabcast.Entities.PlayerData()
          expect(player).to.be.ok
          expect(player.currentPosition).to.equal(0)
          expect(player.url).to.equal("player")

      describe "Validation", ->
        it "expect \'Invalid\' if the playerData does not contain media url", ->
          player = new Swabcast.Entities.PlayerData(
            "uid": 15154574515
          )
          player.on "invalid", (model, error) ->
            throw Error(error[0].message)
            return
          fn = ->
            player.save()
            return

          expect(fn).to.throw("Player data must have media url")


        it "expect \'Invalid\' if the playerData does not contain uid", ->
          player = new Swabcast.Entities.PlayerData(
            "mediaUrl": "http://www.testurl.com/blah.mp3"
          )
          player.on "invalid", (model, error) ->
            throw Error(error[0].message)
            return
          fn = ->
            player.save()
            return
          expect(fn).to.throw("Player data must have valid uid")
        return

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

    describe "View", ->

      before ->
        #create test fixture
        @$fixture = $("<div id='player'></div>")
        return

      beforeEach ->
        # empty and rebind
        @$fixture.empty().appendTo($("#fixtures"))

        @view = new View.Player(
          el: @$fixture
          model: new Swabcast.Entities.PlayerData()
        )

        @view.render()

      afterEach ->
        #clean up
        @view.model.destroy()
        return

      after ->
        $("#fixtures").empty()

      it "can render empty model", ->
        $playerimage = $("#player-art")
        expect($playerimage.prop("src")).to.equal("http://localhost:1234/img/podcast-default.png")
        # expect($playerimage().toLowerCase()).to.equal("../img/podcast-default.png")

        return
      it "player views should correctly render an episode model", ->
        model = new Swabcast.Entities.PlayerData(
          "albumArt":"default.jpg"
          "title":"Test Episode"
        )
        @view.model = model
        @view.render()
        $playerimage = $("#player-art")
        expect($playerimage.prop("src")).to.equal("http://localhost:1234/serverdata/albumart/default.jpg")
        return


    describe "Controller", ->
      it "should create an audio instance if view model is not empty", ->

      # it "test1", ->
      #   playerData = new Swabcast.Entities.Episode()
      #   return

  return

