define ["app", "apps/config/storage/localstorage"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->
    Entities.Episode = Backbone.Model.extend(
      urlRoot: "episode"
      defaults:
        "albumArt": "podcast-default.png"
        "episodeTitle": ""
        "mediaUrl": ""
        "enqueue": false
        "publishedAt": 0
    )
    # TODO - validations

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
        "summary": ""
        "feedUrl": ""
        "authors": ""
    )
    Entities.configureStorage Entities.Feed
    Entities.Feeds = Backbone.Collection.extend(
      url: "feeds"
      model: Entities.Feed
    )
    Entities.configureStorage Entities.Feeds

    Entities.Static = Backbone.Collection.extend(
      url: "/api/static_collection/"
      model: Entities.Feed
    )

    #Entities.configureStorage Entities.Feeds
    feeds = undefined
    initializeFeeds = ->
      feeds = new Entities.Feeds()
      feeds.url = '/api/static_collection/'
      fetchStatic = feeds.fetch()
      $.when(fetchStatic).done (subscriptions) ->
        subscriptions.forEach (feed) ->
          subscriptions.save()
        subscriptions.models

    API =
      # get feed model by Id
      getFeedEntity: (feedId) ->
        console.log("feedId", feedId)
        feed = new Entities.Feed(id: feedId)
        defer = $.Deferred()
        feed.fetch success: (data) ->
          defer.resolve data
        feed.fetch error: ->
            # error: ->
          defer.resolve `undefined`

        defer.promise()

      # episodeIdentifier consists of feedId + "-" followed by 7 digit numeric episodeId
      getEpisodeByUuid: (uuid) ->
        # uuid = FeedID-EpisodeUid
        # TODO - a more efficient way of doing this
        episodeString = uuid.split("-!",2)
        defer = $.Deferred()
        fetchFeeds = API.getFeedEntities()
        promise = defer.promise()
        $.when(fetchFeeds).done (feeds) ->
          subscription = feeds.get(episodeString[0])
          episodes = subscription.get("episodes")
          episodes.forEach (episode) ->
            if episode.uid == episodeString[1]
              found = new Entities.Episode(
                "albumArt": subscription.get("albumArt") or "podcast-default.png"
                "episodeTitle": episode.title or null
                "mediaUrl": episode.mediaUrl or null
                "publishedAt": episode.publishedAt or null
                "episodeSummary": episode.episodeSummary or null
                "duration": episode.duration or null
              )
              defer.resolve found
        promise

      getFeedEntities: ->
        feeds = new Entities.Feeds()
        defer = $.Deferred()
        feeds.fetch success: (data) ->
          defer.resolve data

        promise = defer.promise()
        $.when(promise).done (feeds) ->
          if feeds.length is 0
            subscriptions = API.getStaticEntities()
            $.when(subscriptions).done (subs) ->
              subs.forEach (feed) ->
                feed.save()
            feeds.reset subscriptions
        promise

      getStaticEntities: ->
        feeds = new Entities.Static()
        defer = $.Deferred()
        feeds.fetch success: (data) ->
          defer.resolve data
        promise = defer.promise()
        promise

      getPlaylistDisplayData: ->


    Swabcast.reqres.setHandler "entity:episode", (uuid) ->
      API.getEpisodeByUuid uuid

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
