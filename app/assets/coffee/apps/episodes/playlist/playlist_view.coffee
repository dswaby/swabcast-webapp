define ["app", "tpl!apps/episodes/playlist/templates/playlist_item_view.tpl",
"tpl!apps/episodes/playlist/templates/playlist_layout.tpl",
"tpl!apps/episodes/playlist/templates/playlist.tpl"],
(Swabcast, playlistItemTpl, playlistLayoutTpl, playlistTpl) ->
  Swabcast.module "EpisodesApp.Playlist.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    View.Layout = Marionette.Layout.extend(
      template: playlistLayoutTpl
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

    View.Tracks = Marionette.CompositeView.extend(
      tagName: "table"
      className: "playlist"
      template: playlistTpl
      itemView: View.Track
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

  Swabcast.EpisodesApp.Playlist.View
