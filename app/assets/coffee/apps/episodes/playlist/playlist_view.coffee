define ["app",
"tpl!apps/episodes/playlist/templates/playlist_item_view.tpl",
"tpl!apps/episodes/playlist/templates/playlist_item_view_extended.tpl",
"tpl!apps/episodes/playlist/templates/playlist_layout.tpl",
"tpl!apps/episodes/playlist/templates/playlist_layout_extended.tpl",
"tpl!apps/episodes/playlist/templates/playlist.tpl"],
(Swabcast, playlistItemTpl, playlistItemExtTpl, playlistLayoutTpl, playlistLayoutExtendedTpl, playlistTpl) ->
  Swabcast.module "EpisodesApp.Playlist.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    View.Layout = Marionette.Layout.extend(
      template: playlistLayoutTpl
      regions:
        nowPlayingRegion: "#now-playing-region"
        playlistRegion: "#playlist-region"
    )

    View.LayoutExtended = Marionette.Layout.extend(
      template: playlistLayoutExtendedTpl
      regions:
        nowPlayingRegion: "#now-playing-region"
        playlistRegion: "#playlist-region"
    )

    View.Track = Marionette.ItemView.extend(
      tagName: "tr"
      className: "playlist-item"
      template: playlistItemTpl
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
        console.log(model)

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



  Swabcast.EpisodesApp.Playlist.View
