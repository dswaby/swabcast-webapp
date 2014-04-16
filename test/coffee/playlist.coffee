define ["app",
  "apps/episodes/playlist/playlist_view",
  "./../../app/assets/bower_components/chai/chai",
  "apps/episodes/playlist/playlist_controller",
  "entities/playlist"
  ], (Swabcast, View, chai) ->
  expect = chai.expect;
  describe "Playlist", ->
    it "expect playlist collection to contain QueuedEpisode models", ->
      episode1 = new Swabcast.Entities.QueuedEpisode(
        uid: "episode1-333"
        albumArt: "somephoto.png"
        episodeTitle: "Episode1"
        feedUrl: "http://episode1.test"
        episodeParent: "Swabcast Playlist"
        mediaUrl: "episode1.mp3"
        enqueue: true
        order: 1
      )
      episode2 = new Swabcast.Entities.QueuedEpisode(
        uid: "episode2-3333"
        albumArt: "somephoto.png"
        episodeTitle: "Episode1"
        feedUrl: "http://episode1.test"
        episodeParent: "Swabcast Playlist"
        mediaUrl: "episode1.mp3"
        enqueue: true
        order: 1
      )

      playlist = new Swabcast.Entities.Playlist()

      playlist.add episode1
      playlist.add episode2

      expect(playlist.length).to.equal(2)

      return

  describe "Playlist Model", ->
    it "invalid if \"uid\" is missing or \"\"", ->
      episode1 = new Swabcast.Entities.QueuedEpisode(
        episodeTitle: 'Episode1'
      )
      episode1.on "invalid", (model, error) ->
        throw Error(model.get("episodeTitle") + " " + error)
        return
      fn = ->
        episode1.save uid: ""
        return

      expect(fn).to.throw("Episode1 must have valid uid property")

      return
  describe "View", ->

    before ->
      #create test fixture
      @$layoutfixture = $("<div id='now-playing-region'></div><div id='playlist-region'></div>")
      return

    beforeEach ->
      # empty and rebind
      @$layoutfixture.empty().appendTo($("#fixtures"))

      @layout = new View.Layout(
        el: @$layoutfixture
      )

      playlist = new Swabcast.Entities.Playlist()
      @view = new View.Tracks(
        el: "#playlist-region"
        collection: playlist
      )

      @layout.on "show", ->
        Swabcast.playlistRegion.show @view

      track1 = new Swabcast.Entities.QueuedEpisode(
        id: 123
        episodeTitle: "Track 1"
        albumArt: " "
        episodeParent: "Test Feed"
        mediaUrl: "httpL//track1.mp3"
        episodeSummary: "This is track 1, used for testing playlist view"
        uid: "fo3ihr34"
        order: 1
      )
      track2 = new Swabcast.Entities.QueuedEpisode(
        id: 1234
        episodeTitle: "Track 2"
        albumArt: " "
        episodeParent: "Test Feed"
        mediaUrl: "httpL//track2.mp3"
        episodeSummary: "This is track 2, used for testing playlist view"
        uid: "fo3ihr34"
        order: 2
      )
      playlist.add(track1, track2)

      @view.render()

      @view.collection.add(track1)


    afterEach ->
      # clean up
      # @track1.destroy()
      # @track2.destroy()
      return

    after ->
      # $("#fixtures").empty()

    it "can render empty model", ->
      $playlistRegion = $("#playlist-region")

      # $playerimage = $("#player-art")
      # expect($playerimage.prop("src")).to.equal("http://localhost:1234/img/podcast-default.png")

      return
    it "views should correctly render item", ->
      # model = new Swabcast.Entities.PlayerData(
      #   "albumArt":"default.jpg"
      #   "title":"Test Episode"
      # )
      # @view.model = model
      # @view.render()
      # $playerimage = $("#player-art")
      # expect($playerimage.prop("src")).to.equal("http://localhost:1234/serverdata/albumart/default.jpg")
  return


  return

