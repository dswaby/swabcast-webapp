define ["app",
"tpl!apps/episodes/show/templates/episode_detailed_view.tpl",
"tpl!apps/episodes/show/templates/missing_episode.tpl",
"tpl!apps/episodes/show/templates/feed_detailed.tpl",
"tpl!apps/episodes/show/templates/feed_episodes.tpl",
"tpl!apps/episodes/show/templates/episode_item_view.tpl"],
(Swabcast, episodeDetailedTpl, missingTpl, feedDetailedTpl, feedEpisodesTpl, episodeItemViewTpl) ->
  Swabcast.module "EpisodesApp.Show.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    View.EpisodeNotFound = Marionette.ItemView.extend(template: missingTpl)
    # view for displaying summary page of individual episode
    View.EpisodeDetail = Marionette.ItemView.extend(
      template: episodeDetailedTpl
      events:
        "click button.js-show-list": "showList"
        "click a.js-edit": "editClicked"
        "click button.js-enqueue": "queueEpisode"

      editClicked: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "episode:edit", @model

      showList: (e) ->
        console.log("show episode list triggered, event:",)
        e.stopPropagation()
        @trigger "episodes:list"

      queueEpisode: (e) ->
        e.preventDefault()
        e.stopPropagation()
        if @model.get("enqueue") is false
          Swabcast.EpisodesApp.Playlist.trigger "playlist:enqueue", @model
          @model.set "enqueue", true
        @trigger "dialog:close"
    )
    # view for displaying summary page of feed
    # episodes are not displayed in this view
    View.Feed = Marionette.ItemView.extend(
      template: feedDetailedTpl
      events:
        "click button.js-show-list": "showList"

      showList: (e) ->
        console.log("show feed list triggered, event:", e)
        e.stopPropagation()
        @trigger "view:show"
    )

    View.EpisodeListItem = Marionette.ItemView.extend(
      className: "tracklist"
      tagName: "tr"
      template: episodeItemViewTpl
      events:
        "click a.js-enqueue": "toggleQueue"
        "click a.js-feedview": "feedDetails"
        "click a.js-view-detail": "showClicked"

      destroyTrackView: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "episode:delete", @model
        console.log "clicked", @model

      showClicked: (e) ->
        e.preventDefault()
        e.stopPropagation()
        Swabcast.trigger "episode:details", @model

      toggleQueue: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @$el.addClass "disabled"
        if @model.get("enqueue") is false
          @model.set enqueue: true
          @model.save()
          Swabcast.EpisodesApp.Playlist.trigger "playlist:enqueue", @model
    )

    # view for displaying list of episodes for current view
    View.EpisodeList = Marionette.CompositeView.extend(
      className: "episodes-table-wrapper"
      tagname: "table"
      template: feedEpisodesTpl
      itemView: View.EpisodeListItem
      itemViewContainer: "tbody"

      events:
        "click a.js-episode-list-modal": "showEpisodesDialog"
        "click a.js-feed-details": "showFeedEpisodes"

      initialize: ->
        console.log("recieved model", @model)
        parent = @model
        trackList = new Swabcast.Entities.Episodes(@model.get("episodes"))
        @title = @model.get("subscriptionTitle")
        @collection = trackList
        @collection.each (track) ->
          track.parent = parent

        appendHtml: (collectionView, itemView) ->
          collectionView.$("#episodes-list").append itemView.el

      onRender: ->
        @$el.addClass "disabled"  if @model.get("enqueue") is true

      highlightName: ->
        @$el.toggleClass "success"

      showFeedEpisodes: (e) ->
        e.preventDefault()
        e.stopPropagation()

        Swabcast.trigger "feed:details", @model
    )

  Swabcast.EpisodesApp.Show.View
