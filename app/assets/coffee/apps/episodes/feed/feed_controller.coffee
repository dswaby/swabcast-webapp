define ["app", "apps/episodes/feed/feed_view",
"apps/episodes/show/show_view",
"apps/config/marionette/regions/dialog"],
(Swabcast, View, ShowView) ->
  Swabcast.module "EpisodesApp.Feed", (Feed, Swabcast, Backbone, Marionette, $, _) ->
    Feed.Controller =
      showFeeds: ->
        require ["common/view"], (CommonViews) ->
          loadingView = new CommonViews.Loading(
            title: "Artificialy delaying this response"
            message: "This is the view that will show if waiting for data"
          )
          Swabcast.libraryRegion.show loadingView
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
        view.title = model.get("episodeTitle")
        view.on "episodes:list", ->
          view.trigger "view:close"

        Swabcast.dialogRegion.show view

      showEpisodeList: (model)->
        view = new ShowView.EpisodeList(model: model)
        view.on "episodes:list", ->
          view.trigger "view:close"
        require ["common/view"], (CommonViews) ->
          backButton = new CommonViews.NavHelper(
            buttonText: "Back to subscriptions"
          )
          Swabcast.navHelperRegion.show backButton

        Swabcast.libraryRegion.show view

      showFeedEpisodesById: (id) ->
        require ["common/view"], (CommonViews) ->
          loadingView = new CommonViews.Loading(
            title: "Artificialy delaying this response"
            message: "This is the view that will show if waiting for data"
          )
          Swabcast.libraryRegion.show loadingView
        #   return
        # require ["common/view"], (CommonView) ->
          backButton = new CommonViews.NavHelper(
            buttonText: "Back to subscriptions"
          )
          Swabcast.navHelperRegion.show backButton
          return
        require ["entities/feed"], ->
          fetchingFeed = Swabcast.request("feed:entity", id)
          $.when(fetchingFeed).done (feed) ->
            view = undefined
            if feed isnt `undefined`
              view = new ShowView.EpisodeList(model: feed)
            else
              view = new View.FeedNotFound()
            Swabcast.libraryRegion.show view
            return

      showFeedDetails: (model) ->
        view = new ShowView.Feed(model: model)
        view.on "episodes:list", ->
          view.trigger "dialog:close"

        Swabcast.dialogRegion.show view

      notImplemented: ->
        view = new ShowView.FeatureNotImplemented()
        view.on "episodes:list", ->
          view.trigger "dialog:close"

        Swabcast.dialogRegion.show view

  Swabcast.EpisodesApp.Feed.Controller
