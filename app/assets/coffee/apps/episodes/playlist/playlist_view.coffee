# TODO - split this out into multiple regions, there are way to many views in here
define ["app",
"tpl!apps/episodes/playlist/templates/playlist_item_view.tpl",
"tpl!apps/episodes/playlist/templates/playlist_item_view_extended.tpl",
"tpl!apps/episodes/playlist/templates/playlist_layout.tpl",
"tpl!apps/episodes/playlist/templates/manage_playlist_layout.tpl",
"tpl!apps/episodes/playlist/templates/playlist.tpl",
"tpl!apps/episodes/playlist/templates/playlist_empty.tpl",
"tpl!apps/episodes/playlist/templates/playlist_episode_detail_view.tpl"
],
(Swabcast, playlistItemTpl, playlistItemExtTpl, playlistLayoutTpl, managePlaylistTpl, playlistTpl, emptyPlaylistTpl, episodeDetailTpl) ->
  Swabcast.module "EpisodesApp.Playlist.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    View.Layout = Marionette.Layout.extend(
      template: playlistLayoutTpl
      regions:
        nowPlayingRegion: "#now-playing-region"
        playlistRegion: "#playlist-region"
    )

    View.ManagePlaylistLayout = Marionette.Layout.extend(
      template: managePlaylistTpl
      regions:
        managementBoxRegion: "#management-box"
        managePlaylistRegion: "#manage-playlist-region"
    )

    View.Track = Marionette.ItemView.extend(
      tagName: "tr"
      className: "playlist-item"
      template: playlistItemTpl
      events:
        "click a": "stopPropagating"
        "click a.js-remove-track": "destroyTrackView"
        "click td.js-episode-detail": "showEpisodeDialog"

      destroyTrackView: (e) ->
        e.preventDefault()
        @trigger "episode:delete", @model

      flash: (cssClass) ->
        $view = @$el
        $view.hide().toggleClass(cssClass).fadeIn 400, ->
          setTimeout (->
            $view.toggleClass cssClass
          ), 300

      fadeOut: ->
        @$el.fadeIn "slow", ->
          $(this).fadeOut "slow"

      showEpisodeDialog: (e)->
        e.preventDefault()
        e.stopPropagation()
        @trigger "playlist:episode:detail", @model
    )

    View.Tracks = Marionette.CompositeView.extend(
      tagName: "table"
      className: "playlist-row"
      template: playlistTpl
      itemView: View.Track
      initialize: ->
        @listenTo @collection, "reset", ->
          @appendHtml = (collectionView, itemView, index) ->
            collectionView.$el.append itemView.el

      onCompositeCollectionRendered: ->
        @appendHtml = (collectionView, itemView, index) ->
          collectionView.$el.append itemView.el

      onPlaylistEnqueue: (model) ->
        # console.log(model)

      onItemviewEpisodeDelete: ->
        @$el.fadeIn "slow", ->
          $(this).fadeOut "slow"

      onItemviewEpisodeRemove: ->
        @$el.fadeIn "slow", ->
          $(this).fadeOut "slow"

      fadeOut: ->
        @$el.fadeIn "slow", ->
          $(this).fadeOut "slow"

      flash: (cssClass) ->
        $view = @$el
        $view.hide().toggleClass(cssClass).fadeIn 400, ->
          setTimeout (->
            $view.toggleClass cssClass
          ), 300


    )

    View.TrackExtended = Marionette.ItemView.extend(
      tagName: "tr"
      className: "playlist-item"
      template: playlistItemExtTpl
      events:
        "click a": "stopPropagating"
        "click a.js-remove-track": "destroyTrackView"

      destroyTrackView: (e) ->
        e.preventDefault()
        @trigger "episode:delete", @model

      flash: (cssClass) ->
        $view = @$el
        $view.hide().toggleClass(cssClass).fadeIn 400, ->
          setTimeout (->
            $view.toggleClass cssClass
          ), 300
    )

    View.TracksExtended = Marionette.CompositeView.extend(
      tagName: "table"
      className: "large-8 small-12 columns main-view"
      id: "#tracks-extended-collection"
      template: playlistTpl
      itemView: View.TrackExtended
      initialize: ->
        @listenTo @collection, "reset", ->
          @appendHtml = (collectionView, itemView, index) ->
            collectionView.$el.append itemView.el

      onCompositeCollectionRendered: ->
        @appendHtml = (collectionView, itemView, index) ->
          collectionView.$el.append itemView.el

      onItemviewEpisodeDelete: ->
        @$el.fadeOut "slow", ->
          $(this).fadeIn "slow"


      flash: (cssClass) ->
        $view = @$el
        $view.hide().toggleClass(cssClass).fadeIn 400, ->
          setTimeout (->
            $view.toggleClass cssClass
          ), 300
    )

    View.EpisodeDetail = Marionette.ItemView.extend(
      tagName: "div"
      template: episodeDetailTpl
      events:
        "click a.dismiss": "closeDialog"
        "click td.js-show-archive": "archiveEpisode"
        "click td.js-show-favorite": "favoriteEpisode"
        "click td.js-remove-from-queue": "removeFromQueue"
        "click button.js-play-now": "playNow"
        "click .ui-widget-overlay": "closeDialog"

      initialize: ->
        console.log("EpisodeDetail View", @model)
        @title = @model.get("episodeTitle")

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

      removeFromQueue: (e)->
        e.preventDefault()
        e.stopPropagation()
        @trigger "dialog:close"
        @trigger "episode:remove", @model

      onItemviewEpisodeDelete: ->
        @trigger "dialog:close"
        @$el.fadeOut "slow", ->
          $(this).fadeIn "slow"

    )


    View.EmptyPlaylist = Marionette.ItemView.extend(
      tagName: "div"
      className: "playlist-empty"
      template: emptyPlaylistTpl
    )
  Swabcast.EpisodesApp.Playlist.View
