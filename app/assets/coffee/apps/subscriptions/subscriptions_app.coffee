define ["app"], (Swabcast) ->
  Swabcast.module "SubscriptionsApp", (SubscriptionsApp, Swabcast, Backbone, Marionette, $, _) ->
    SubscriptionsApp.Router = Marionette.AppRouter.extend(appRoutes:
      subscriptions: "showSubscriptionsList"
    )
    API =
      showSubscriptionsList: ->
        require ["apps/subscriptions/list/list_controller"], ->
          SubscriptionsApp.List.Controller.showSubscriptionsList()

    Swabcast.on "subscriptions:all", ->
      API.showSubscriptionsList()

    Swabcast.addInitializer ->
      new SubscriptionsApp.Router(controller: API)

  Swabcast.SubscriptionsApp
