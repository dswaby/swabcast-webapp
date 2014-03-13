define ["app", "apps/episodes/feed/feed_view", "apps/episodes/show/show_view", "apps/config/marionette/regions/dialog"], (Swabcast, View, ShowView) ->
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
        model.set
          episodeParent: model.parent.get("subscriptionTitle")
          albumArt: model.parent.get("albumArt")
          feedUrl: model.parent.get("feedUrl")

        view = new ShowView.EpisodeDetail(model: model)
        console.log("show episode details triggered, model: ", model)
        view.on "episodes:list", ->
          view.trigger "view:close"

        Swabcast.dialogRegion.show view

      showEpisodeList: (model)->
        console.log("Feed controller recieved model, creating showview.episodelist", model)
        console.log(model)
        view = new ShowView.EpisodeList(model: model)
        view.on "episodes:list", ->
          view.trigger "view:close"

        Swabcast.dialogRegion.show view

      showFeedDetails: (model) ->
        view = new ShowView.Feed(model: model)
        view.on "episodes:list", ->
          view.trigger "dialog:close"

        Swabcast.dialogRegion.show view

  Swabcast.EpisodesApp.Feed.Controller
