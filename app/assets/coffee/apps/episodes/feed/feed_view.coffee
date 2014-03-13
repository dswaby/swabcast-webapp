define ["app","tpl!apps/episodes/feed/templates/feed_layout.tpl", "tpl!apps/episodes/feed/templates/feed_view.tpl", "tpl!apps/episodes/feed/templates/library_view.tpl", "tpl!apps/episodes/feed/templates/tracklist.tpl"], (Swabcast, feedLayoutTpl, feedViewTpl, libraryViewTpl, tracklistTpl) ->
  Swabcast.module "EpisodesApp.Feed.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    View.Layout = Marionette.Layout.extend(
      template: feedLayoutTpl
      regions:
        podcastDetailsRegion: "#podcast-details"
        feedItemsCollectionRegion: "#feeditems-collection"
    )
    # View.TrackView = Marionette.ItemView.extend(
    #   className: "tracklist"
    #   tagName: "tr"
    #   #template: modalDialogTpl
    #   template: tracklistTpl
    #   events:
    #     "click a.js-enqueue": "toggleQueue"
    #     "click a.js-feedview": "feedDetails"
    #     "click a.js-view-detail": "showClicked"

    #   destroyTrackView: (e) ->
    #     e.preventDefault()
    #     e.stopPropagation()
    #     @trigger "episode:delete", @model
    #     console.log "clicked", @model

    #   showClicked: (e) ->
    #     e.preventDefault()
    #     e.stopPropagation()
    #     Swabcast.trigger "episode:details", @model

    #   toggleQueue: (e) ->
    #     e.preventDefault()
    #     e.stopPropagation()
    #     @$el.addClass "disabled"
    #     if @model.get("enqueue") is false
    #       @model.set enqueue: true
    #       @model.save()
    #       Swabcast.EpisodesApp.Playlist.trigger "playlist:enqueue", @model
    # )
    View.FeedView = Marionette.ItemView.extend(
      # className: "feed-detail-view-dialog"
      tagname: "table"
      template: feedViewTpl
      # itemView: View.TrackView
      events:
        "click a.js-episode-list": "showEpisodeList"
        "click a.js-feed-details": "showFeedDetails"

      # initialize: ->
      #   parent = @model
      #   trackList = new Swabcast.Entities.Episodes(@model.get("episodes"))
      #   @collection = trackList
      #   @collection.each (track) ->
      #     track.parent = parent

      # appendHtml: (collectionView, itemView) ->
      #   collectionView.$("#episodes-container").append itemView.el

      # onRender: ->
      #   @$el.addClass "disabled"  if @model.get("enqueue") is true

      highlightName: ->
        @$el.toggleClass "success"

      showFeedDetails: (e) ->
        e.preventDefault()
        e.stopPropagation()
        Swabcast.trigger "feed:details", @model

      showEpisodeList: (e) ->
        e.preventDefault()
        e.stopPropagation()
        console.log("sending model to 'feed:episodelist'", @model)
        Swabcast.trigger "feed:episodelist", @model

    )
    View.FeedLibraryView = Marionette.CollectionView.extend(
      template: libraryViewTpl
      itemView: View.FeedView
    )

  Swabcast.EpisodesApp.Feed.View
