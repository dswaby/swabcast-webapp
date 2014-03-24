define ["app", "tpl!apps/episodes/player/templates/player_view.tpl", ], (Swabcast, playerTpl) ->
  Swabcast.module "EpisodesApp.Player.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    View.Layout = Marionette.Layout.extend(
      template: playerTpl
      regions:
        "player-preview": "#"
        "nowPlayingInfo":"#"
    )

    View.Player = Marionette.ItemView.extend(
      template: playerTpl
      events:
        "click a.js-player-play": "play"
        "click a.js-player-back": "previous"
        "click a.js-player-jump-back": "skipback"
        "click a.js-player-jump-forward": "skipahead"
        "click a.js-player-forward": "next"

      play: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "episode:playpause"

      previous: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "episode:previous"

      skipback: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "episode:skipback"

      skipahead: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "episode:skipahead"

      next: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "episode:next"
    )

  Swabcast.EpisodesApp.Player.View
