define ["app", "apps/subscriptions/show/show_view"], (Swabcast, View) ->
  Swabcast.module "SubscriptionsApp.Show", (Show, Swabcast, Backbone, Marionette, $, _) ->
    Show.Controller = showEpisode: (id) ->
      loadingView = new Swabcast.Common.Views.Loading(
        title: "Artificially delaying this response"
        message: "This is the view that will show if waiting for data"
      )
      Swabcast.mainRegion.show loadingView
      fetchingSubscription = Swabcast.request("subscription:entity", id)
      $.when(fetchingSubscription).done (episode) ->
        subscriptionView = undefined
        if subscription isnt `undefined`
          subscriptionView = new View.Subscription(model: episode)
          subscriptionView.on "subscription:edit", (episode) ->
            Swabcast.trigger "subscription:edit", episode.get("id")

        else
          subscriptionView = new Show.EpisodeNotFound()
        Swabcast.mainRegion.show subscriptionView


  Swabcast.EpisodesApp.Show.Controller
