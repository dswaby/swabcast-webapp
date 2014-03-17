#important, we do not want to close this view,
# even though this is cached, opening and closing this view
# is proving to be problematic with image loading
# due to the large amount of images loading in this view
# we will need to hide and reveal this region to prevent reloading images
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

      animateOut: ->
        console.log("TODO: animate this view into view, DERPPP")

      animateIn: ->
        console.log("TODO: animate this view out of view")

    )
    View.FeedLibraryView = Marionette.CollectionView.extend(
      template: libraryViewTpl
      itemView: View.FeedView
    )

  Swabcast.EpisodesApp.Feed.View
