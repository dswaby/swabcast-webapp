define ["app", "apps/episodes/feed/feed_view",
"apps/episodes/show/show_view",
"apps/config/marionette/regions/dialog"],
(Swabcast, View, ShowView) ->
  Swabcast.module "EpisodesApp.Feed", (Feed, Swabcast, Backbone, Marionette, $, _) ->
    Feed.Controller =
      showFeeds: (timeOut) ->
        timeOut = timeOut or 0
        require ["common/view"], (CommonViews) ->
          loadingView = new CommonViews.Loading(
            title: "Loading feeds"
            message: "content will appear shortly"
          )
          Swabcast.libraryRegion.show loadingView

        require ["entities/feed"], ->
          fetchingLibrary = Swabcast.request("entities:library")
          feedLayout = new View.Layout()
          $.when(fetchingLibrary).done (feeds) ->
            subscriptions = new View.FeedLibraryView(collection: feeds)
            feedLayout.on "show", ->
              feedLayout.feedItemsCollectionRegion.show subscriptions

            if timeOut is 0
              Swabcast.libraryRegion.show feedLayout
            else
              setTimeout (->
                Swabcast.libraryRegion.show feedLayout
              ), timeOut

      showEpisodeDetails: (model) ->
        model.set
          episodeParent: model.parent.get("subscriptionTitle")
          albumArt: model.parent.get("albumArt")
          feedUrl: model.parent.get("feedUrl")

        view = new ShowView.EpisodeDetail(model: model)
        view.title = model.get("episodeTitle")
        view.on "episodes:list", ->
          view.trigger "view:close"
        view.on "player:playnow", (uuid) ->
          # send to player controller
          # require ["apps/episodes/player/player_controller"], ->
          Swabcast.commands.execute "player:playnow", uuid

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
            title: "Loading Feed"
            message: "stand by"
          )
          Swabcast.libraryRegion.show loadingView
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
