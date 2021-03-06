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
      tagName: "div"
      template: episodeDetailedTpl
      events:
        "click .ui-dialog-titlebar": "closeDialog"
        "click a.dismiss": "closeDialog"
        "click td.js-show-enqueue": "queueEpisode"
        "click td.js-show-archive": "archiveEpisode"
        "click td.js-show-favorite": "favoriteEpisode"
        "click button.js-play-now": "playNow"
        "click .ui-widget-overlay": "closeDialog"

      initialize: ->
        @title = @model.get("subscriptionTitle")

      # editClicked: (e) ->
      #   e.preventDefault()
      #   e.stopPropagation()
      #   @trigger "episode:edit", @model

      closeDialog: (e) ->
        @trigger "dialog:close"

      archiveEpisode: (e) ->
        e.preventDefault()
        e.stopPropagation()
        console.log("mark episode as archived")
        @trigger "dialog:close"

      favoriteEpisode: (e) ->
        e.preventDefault()
        e.stopPropagation()
        console.log("mark episode as favorite")
        @trigger "dialog:close"

      playNow: (e) ->
        e.preventDefault()
        e.stopPropagation()
        uuid = @model.parent.get("id") + "-!" + @model.get("uid")
        @trigger "player:playnow", uuid
        @trigger "dialog:close"

      queueEpisode: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @$el.addClass "disabled"

        if @model.get("enqueue") is false
          Swabcast.EpisodesApp.Playlist.trigger "episode:enqueue", @model
          @model.set "enqueue", true
        @trigger "dialog:close"
    )
    View.Feed = Marionette.ItemView.extend(
      template: feedDetailedTpl
      events:
        "click div.ui-dialog-titlebar": "closeDialog"
        "click button.js-show-go-back": "goBack"

      initialize: ->
        @title = @model.get("subscriptionTitle")

      goBack: (e) ->
        e.stopPropagation()
        @trigger "dialog:close"

      closeDialog: (e) ->
        @trigger "dialog:close"
    )

    View.EpisodeListItem = Marionette.ItemView.extend(
      className: "tracklist"
      tagName: "tr"
      template: episodeItemViewTpl
      events:
        "click td.js-show-enqueue": "toggleQueue"
        "click a.js-show-feedview": "feedDetails"
        "click td.js-show-view-detail": "showClicked"
        "click a.js-show-preview-audio": "previewAudio"

      onRender: ->
        window.scrollTo(0,0)
      initialize: ->

      templateHelpers:
        month: [
          "Jan"
          "Feb"
          "Mar"
          "Apr"
          "May"
          "June"
          "July"
          "Aug"
          "Sept"
          "Oct"
          "Nov"
          "Dec"
        ]
        createDate: (ms) ->
          return new Date()

        getPublishedDay: (ms) ->
          e = @createDate(ms)
          e.getDay()

        getPublishedMonth: (ms) ->
          e = @createDate(ms)
          @month[e.getMonth()]


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
          # TODO - trigger controller, send to playlist from it
          # view should be logicless
          Swabcast.EpisodesApp.Playlist.trigger "episode:enqueue", @model
          @model.set "enqueue", true
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
      id: "episodes-table-wrapper"
      template: feedEpisodesTpl
      itemView: View.EpisodeListItem
      itemViewContainer: "tbody"

      events:
        "click a.js-show-favorite-feed": "showFeedEpisodes"

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
        e.preventDefault()
        e.stopPropagation()
        # @trigger "feed:details", @model
        Swabcast.trigger "feed:details", @model
      onBeforeClose: ->,

    )

  Swabcast.EpisodesApp.Show.View
