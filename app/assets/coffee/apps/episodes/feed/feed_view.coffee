define ["app","tpl!apps/episodes/feed/templates/feed_layout.tpl",
"tpl!apps/episodes/feed/templates/feed_view.tpl",
"tpl!apps/episodes/feed/templates/library_view.tpl",
"tpl!apps/episodes/feed/templates/tracklist.tpl",
"tpl!apps/episodes/feed/templates/not_found.tpl"],
(Swabcast, feedLayoutTpl, feedViewTpl, libraryViewTpl, tracklistTpl, notFoundTpl) ->
  Swabcast.module "EpisodesApp.Feed.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    View.Layout = Marionette.Layout.extend(
      template: feedLayoutTpl
      regions:
        podcastDetailsRegion: "#podcast-details"
        feedItemsCollectionRegion: "#feeditems-collection"
    )

    View.FeedNotFound = Marionette.ItemView.extend(
      tagName: "div"
      className: "not-found"
      template: notFoundTpl
      events:
        "click button.library-back": "backToLibrary"

        backToLibrary: (e) ->
          e.preventDefault()
          e.stopPropagation()
          Swabcast.trigger "episodes:library"
    )

    View.FeedView = Marionette.ItemView.extend(
      tagname: "table"
      template: feedViewTpl
      events:
        "click a.js-episode-list": "showEpisodeList"
        "click a.js-feed-details": "showFeedDetails"

      highlightName: ->
        @$el.toggleClass "success"

      showFeedDetails: (e) ->
        e.preventDefault()
        e.stopPropagation()
        Swabcast.trigger "feed:details", @model

      showEpisodeList: (e) ->
        e.preventDefault()
        e.stopPropagation()
        Swabcast.trigger "feed:episodelist", @model

    )
    View.FeedLibraryView = Marionette.CollectionView.extend(
      template: libraryViewTpl
      itemView: View.FeedView
    )

  Swabcast.EpisodesApp.Feed.View
