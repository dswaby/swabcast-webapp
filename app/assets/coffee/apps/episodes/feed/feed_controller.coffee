define ["app", "apps/episodes/feed/feed_view", "apps/episodes/show/show_view"], (Swabcast, View, ShowView) ->
  Swabcast.module "EpisodesApp.Feed", (Feed, Swabcast, Backbone, Marionette, $, _) ->
    Feed.Controller =
      showFeeds: ->
        require ["entities/feed"], ->
          fetchingLibrary = Swabcast.request("entities:library")
          feedLayout = new View.Layout()
          $.when(fetchingLibrary).done (feeds) ->
            subscriptions = new View.FeedLibraryView(collection: feeds)
            feedLayout.on "show", ->
              feedLayout.feedItemsCollectionRegion.show subscriptions

          Swabcast.libraryRegion.show feedLayout

      showEpisodeDetails: (model) ->
        console.log("show episode details triggered, model: ", model)
        model.set
          episodeParent: model.parent.get("subscriptionTitle")
          albumArt: model.parent.get("albumArt")
          feedUrl: model.parent.get("feedUrl")

        view = new ShowView.Episode(model: model)
        view.on "episodes:list", ->
          view.trigger "view:close"

        require ["apps/config/marionette/regions/modal"], ->
          Swabcast.modalRegion.show view

      showFeedDetails: (model) ->
        console.log("show feed details triggered, model: ", model)
        view = new ShowView.Feed(model: model)
        view.on "episodes:list", ->
          view.trigger "dialog:close"

        require ["apps/config/marionette/regions/modal"], ->
          Swabcast.modalRegion.show view

  Swabcast.EpisodesApp.Feed.Controller
