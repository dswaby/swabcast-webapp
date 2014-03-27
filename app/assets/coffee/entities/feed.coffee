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
      url: "/static_feeds.json"
      model: Entities.Feed
    )

    #Entities.configureStorage Entities.Feeds
    feeds = undefined
    initializeFeeds = ->
      feeds = new Entities.Feeds()
      feeds.url = '/static_feeds.json'
      fetchStatic = feeds.fetch()
      $.when(fetchStatic).done (subscriptions) ->
        subscriptions.forEach (feed) ->
          feed.save()
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
        console.log(uuid)
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
            if episode.uid.toString() == episodeString[1]
              episode.parent = subscription
              found = new Entities.Episode( _.clone(episode) )
              found.set("albumArt": episode.parent.get("albumArt"))

              console.log(found)
              defer.resolve found
        promise

      updateFeedEpisodeByUuid: (uuid, attributesHash) ->
        # uuid = FeedID-EpisodeUid
        # attributesHash, propertys to set on the model, ie (currentPosition: 534522, archived: true, enqueue, true)
        episodeString = uuid.split("-!",2)
        defer = $.Deferred()
        fetchFeeds = API.getFeedEntities()
        promise = defer.promise()
        $.when(fetchFeeds).done (feeds) ->
          subscription = feeds.get(episodeString[0])
          episodes = subscription.get("episodes")
          episodes.forEach (episode) ->
            if episode.uid.toString() == episodeString[1]
              #not sure if this will work, may need to find
              episode.set(attributesHash)
              # save the subscription since it is the model
              subscription.save()
              defer.resolve "success"
        promise

      getFeedEntities: ->
        feeds = new Entities.Feeds()
        defer = $.Deferred()
        feeds.fetch success: (data) ->
          defer.resolve data

        promise = defer.promise()
        $.when(promise).done (feeds) ->
          if feeds.length is 0
            models = API.getStaticEntities()
            $.when(models).done (subs) ->
              subs.forEach (feed) ->
                feed.save()
              feeds.reset subs
        promise

      getStaticEntities: ->
        feeds = new Entities.Static()
        defer = $.Deferred()

        feeds.fetch success: (data) ->
          defer.resolve data
          feeds.reset feeds.models
        defer.promise()

      getAllEntities: ->
        feeds = new Entities.Feeds()
        fetchingLocalStorage = API.getFeedEntities()
        deferred = $.Deferred()
        $.when(fetchingLocalStorage).done (lsfeeds) ->
          if lsfeeds.length is 0
            fetchingStatic = API.getStaticEntities()
            $.when(fetchingStatic).done (feeds) ->
              deferred.resolve feeds
              feeds.forEach (feed) ->
                feed.save()
          else
            deferred.resolve lsfeeds


      getPlaylistDisplayData: ->

    Swabcast.reqres.setHandler "entity:episode", (uuid) ->
      API.getEpisodeByUuid uuid

    Swabcast.reqres.setHandler "entities:library", ->
      API.getStaticEntities()

    Swabcast.reqres.setHandler "feed:entity", (id) ->
      API.getFeedEntity id

    ## handler for adding attributes for an episode in a subscription
    # ie
    #   uuid = 3143143u1049-!12123
    #   hash =
    #      currentPositoin: 92340234
    #      enqueue: true
    ##  addingAttributes = Swabcast.request("entity:episode:attributes", uuid, hash)
    Swabcast.reqres.setHandler "entity:episode:attributes", (uuid, attributesHash) ->
      API.updateFeedEpisodeByUuid uuid, attributesHash
  #end of module
  return
