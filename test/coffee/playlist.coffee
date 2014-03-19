define ["app",
  "./../../app/assets/bower_components/chai/chai",
  "entities/playlist"
  ], (Swabcast, chai) ->
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


    # it "expect \"albumArt\" property to have a default image of \"default.jpg\" ", ->
    #   feeds = new Swabcast.Entities.Feed()
    #   expect(feeds.albumArt).to.equal "default.jpg"
    #   return
  return

