define ["app",
"tpl!apps/episodes/show/templates/episode_detailed_view.tpl",
"tpl!apps/episodes/show/templates/missing_episode.tpl",
"tpl!apps/episodes/show/templates/feature_not_implemented.tpl",
"tpl!apps/episodes/show/templates/feed_detailed.tpl",
"tpl!apps/episodes/show/templates/feed_episodes.tpl",
"tpl!apps/episodes/show/templates/episode_item_view.tpl"],
(Swabcast, episodeDetailedTpl, missingTpl, featureNotImplemented, feedDetailedTpl, feedEpisodesTpl, episodeItemViewTpl) ->
  Swabcast.module "EpisodesApp.Show.View", (View, Swabcast, Backbone, Marionette, $, _) ->

    View.FeatureNotImplemented = Marionette.ItemView.extend(
      template: featureNotImplemented
      events:
        "click button.js-back-button": "goBack"

      initialize: ->
        @title = "Feature Not Implemented Yet"

      goBack: (e) ->
        #e.stopPropagation()
        @trigger "dialog:close"
    )
    # view for displaying summary page of individual episode
    View.EpisodeNotFound = Marionette.ItemView.extend(template: missingTpl)
    # view for displaying summary page of individual episode
    View.EpisodeDetail = Marionette.ItemView.extend(
      template: episodeDetailedTpl
      events:
        "click button.dismiss": "closeDialog"
        "click a.js-edit": "editClicked"
        "click button.js-enqueue": "queueEpisode"

      initialize: ->
        @title = @model.get("subscriptionTitle")

      editClicked: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "episode:edit", @model

      closeDialog: (e) ->
        @trigger "dialog:close"

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
        "click button.js-back-button": "goBack"

      initialize: ->
        @title = @model.get("subscriptionTitle")

      goBack: (e) ->
        e.stopPropagation()
        @trigger "dialog:close"
    )

    View.EpisodeListItem = Marionette.ItemView.extend(
      className: "tracklist"
      tagName: "tr"
      template: episodeItemViewTpl
      events:
        "click a.js-enqueue": "toggleQueue"
        "click a.js-feedview": "feedDetails"
        "click td.js-view-detail": "showClicked"
        "click a.js-preview-audio": "previewAudio"

      destroyTrackView: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "episode:delete", @model

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
        @$el.fadeOut "slow", ->
          $(this).fadeIn "slow"
        @trigger "dialog:close"

      previewAudio: (e)->
        e.preventDefault()
        e.stopPropagation()

      flash: (cssClass) ->
        $view = @$el
        $view.hide().toggleClass(cssClass).fadeIn 400, ->
          setTimeout (->
            $view.toggleClass cssClass
          ), 300
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
        console.log("WHAT THE FUCK")

        e.preventDefault()
        e.stopPropagation()

        Swabcast.trigger "feed:details", @model
    )

  Swabcast.EpisodesApp.Show.View
