define ["app", "apps/config/storage/localstorage"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->
    Entities.Episode = Backbone.Model.extend(
      urlRoot: "episode"
      defaults:
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
        "subscriptionTitle": ""
        "summary": ""
        "feedUrl": ""
        "authors": ""
      validate: (attrs) ->
        errors = []
        if !attrs.subscriptionTitle or attrs.subscriptionTitle == " "
          errors.push
            message : "Feed Entity must have valid title"
        if !attrs.episodes
          errors.push
            message : "must contain episodes attribute"

        errors if errors.length
    )
    Entities.configureStorage Entities.Feed
    Entities.Feeds = Backbone.Collection.extend(
      url: "feeds"
      model: Entities.Feed
    )
    Entities.configureStorage Entities.Feeds

    Entities.Static = Backbone.Collection.extend(
      url: "/serverdata/static_feeds.json"
      model: Entities.Feed
    )

    #Entities.configureStorage Entities.Feeds
    feeds = undefined
    initializeFeeds = ->
      feeds = new Entities.Feeds()
      feeds.url = '/serverdata/static_feeds.json'
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

      getEntitiesInLocalStorage: ->
        feeds = new Entities.Feeds()

        defer = $.Deferred()
        feeds.fetch success: (data) ->
          defer.resolve data

        promise = defer.promise()
        promise

      getStaticEntities: ->
        feeds = new Entities.Static()
        defer = $.Deferred()

        feeds.fetch success: (data) ->
          defer.resolve data

          # feeds.reset feeds.models
        defer.promise()

      getFeedEntities: ->
        feeds = new Entities.Feeds()
        fetchingLocalStorage = API.getEntitiesInLocalStorage()
        deferred = $.Deferred()
        promise = deferred.promise()
        fetchingLocalStorage.then (lsfeeds) ->
          if lsfeeds.length <= 1

            fetchingStatic = API.getStaticEntities()
            $.when(fetchingStatic).done (subscriptions) ->
              subscriptions.forEach (subscription) ->
                subscription.save()
              deferred.resolve subscriptions
          else
            deferred.resolve lsfeeds

        promise

      getPlaylistDisplayData: ->

    Swabcast.reqres.setHandler "entity:episode", (uuid) ->
      API.getEpisodeByUuid uuid

    Swabcast.reqres.setHandler "entities:library", ->
      API.getFeedEntities()

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
