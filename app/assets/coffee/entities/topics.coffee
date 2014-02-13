define ["app", "apps/config/storage/localstorage"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->
    Entities.Topic = Backbone.Model.extend(
      urlRoot: "topic"
      defaults:
        id: 0
        imageURL: "default.jpg"
        title: "blank title"
        home: "" #feed homepage
        mediaUrl: ""
        author: ""
        subscribed: false
        stats:
          numberOfEpisodes: 0

      validate: (attrs) ->
        errors = {}
        # errors.topicTitle = "Title Field Required"  unless attrs.topicTitle
        errors  unless _.isEmpty(errors)
    )
    Entities.TopicsCollection = Backbone.Collection.extend(
      url: "topics"
      model: Entities.Topic
      comparator: "id"
    )
    Entities.configureStorage Entities.TopicsCollection

    #public
    API =
      getTopicEntity: (uniqueId) ->
        topic = new Entities.Topic(id: uniqueId)
        defer = $.Deferred()
        setTimeout (->
          topic.fetch
            success: (data) ->
              defer.resolve data

            error: ->
              defer.resolve `undefined`

        ), 100
        defer.promise()

      getTopicEntities: ->
        topics = new Entities.TopicCollection()
        defer = $.Deferred()
        topics.fetch success: (data) ->
          defer.resolve data

        promise = defer.promise()
        $.when(promise).done (topics) ->
          if topics.length is 0
            models = initializeTopics()
            topics.reset models

        promise

    Swabcast.reqres.setHandler "topic:all", ->
      API.getTopicEntities()

    Swabcast.reqres.setHandler "topic:entity", (uid) ->
      API.getTopicEntity uid


  return
