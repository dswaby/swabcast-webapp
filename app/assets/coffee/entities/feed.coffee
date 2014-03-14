define ["app", "apps/config/storage/localstorage"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->
    Entities.Episode = Backbone.Model.extend(
      urlRoot: "episode"
      defaults:
        "albumArt": "podcast-default.png"
        "episodeTitle": ""
        "mediaUrl": ""
        "enqueue": false
    )
    Entities.configureStorage Entities.Episode

    Entities.Episodes = Backbone.Collection.extend(
      url : "episode"
      model: Entities.Episode
      comparator: "episodeTitle"
    )
    Entities.configureStorage Entities.Episodes

    Entities.Feed = Backbone.Model.extend(
      urlRoot: "feeds"
      defaults:
        "id": ""
        "subscriptionTitle": ""
        "albumArt": "default.jpg"
        "summary": "na"
        "feedUrl": "http://somefeed.com/feed.xml"
        "authors": ""
    )
    Entities.configureStorage Entities.Feed
    Entities.Feeds = Backbone.Collection.extend(
      url: "feeds"
      model: Entities.Feed
    )
    Entities.configureStorage Entities.Feeds

    #Entities.configureStorage Entities.Feeds
    feeds = undefined
    initializeFeeds = ->
      feeds = new Entities.Feeds([])

      feeds.forEach (feed) ->

        #feed.tracks = Swabcast.Utils.Helpers.nestCollection(feed, 'tracks', new Entities.Episode(feed.get('tracks')));

        #feed.tracks.parent = this;
        feed.save()

      feeds.models

    API =
      getFeedEntity: (feedId) ->
        feed = new Entities.Feed(id: feedId)
        defer = $.Deferred()
        setTimeout (->
          feed.fetch
            success: (data) ->
              defer.resolve data

            error: ->
              defer.resolve `undefined`

        ), 500
        defer.promise()

      # episodeIdentifier consists of feedId + "-" followed by 7 digit numeric episodeId
      getEpisodeEntity: (episodeIdentifier) ->
        episodeString = episodeIdentifier.split("-",2)
        feed = new Entities.Feed(id: episodeString[0])
        defer = $.Deferred()
        setTimeout (->
          feed.fetch
            success: (data) ->
              feed = defer.resolve data
              for episode of episodes
                return episode if episode.id is episodeString[1]
                return null

            error: ->
              defer.resolve `undefined`

        ), 500
        defer.promise()

      getFeedEntities: ->
        feeds = new Entities.Feeds()
        defer = $.Deferred()
        feeds.fetch success: (data) ->
          defer.resolve data

        promise = defer.promise()
        $.when(promise).done (feeds) ->
          if feeds.length is 0
            models = initializeFeeds()
            feeds.reset models

        promise

      getPlaylistDisplayData: ->


    Swabcast.reqres.setHandler "episode:entity", (episodeId) ->
      API.getEpisodeEntity episodeId

    Swabcast.reqres.setHandler "entities:library", ->
      API.getFeedEntities()

    Swabcast.reqres.setHandler "feed:entity", (id) ->
      API.getFeedEntity id

    # for playlist entity, returns multidimensional array
    # consisting of unique episode identifier
    # and Episode Title
    Swabcast.reqres.setHandler "titles:episode:entity", (playlistIdentifiers) ->
      API.getPlaylistDisplayData playlistIdentifiers

  #end of module
  return
