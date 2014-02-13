define ["app", "apps/config/storage/localstorage"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->
    Entities.Subscription = Backbone.Model.extend(
      urlRoot: "subscription"
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
        # errors.subscriptionTitle = "Title Field Required"  unless attrs.subscriptionTitle
        errors  unless _.isEmpty(errors)
    )
    Entities.configureStorage Entities.Subscription
    Entities.SubscriptionsCollection = Backbone.Collection.extend(
      url: "subscriptions"
      model: Entities.Subscription
      comparator: "id"
    )
    Entities.configureStorage Entities.SubscriptionsCollection


    #public
    API =
      getSubscriptionEntity: (uniqueId) ->
        subscription = new Entities.Subscription(id: uniqueId)
        defer = $.Deferred()
        setTimeout (->
          subscription.fetch
            success: (data) ->
              defer.resolve data

            error: ->
              defer.resolve `undefined`

        ), 100
        defer.promise()

      getSubscriptionEntities: ->
        subscriptions = new Entities.SubscriptionCollection()
        defer = $.Deferred()
        subscriptions.fetch success: (data) ->
          defer.resolve data

        promise = defer.promise()
        $.when(promise).done (subscriptions) ->
          if subscriptions.length is 0
            models = initializeSubscriptions()
            subscriptions.reset models

        promise



    Swabcast.reqres.setHandler "subscription:all", ->
      API.getSubscriptionEntities()

    Swabcast.reqres.setHandler "subscription:entity", (uid) ->
      API.getSubscriptionEntity uid


  return
