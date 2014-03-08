define ["app", "tpl!apps/episodes/show/templates/episode_detailed_view.tpl", "tpl!apps/episodes/show/templates/missing_episode.tpl", "tpl!apps/episodes/show/templates/feed_detailed.tpl"], (Swabcast, episodeDetailedTpl, missingTpl, feedDetailsTpl) ->
  Swabcast.module "EpisodesApp.Show.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    View.EpisodeNotFound = Marionette.ItemView.extend(template: missingTpl)
    View.Episode = Marionette.ItemView.extend(
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
        console.log("show episode list triggered, event:", e)
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
    View.Feed = Marionette.ItemView.extend(
      template: feedDetailsTpl
      events:
        "click button.js-show-list": "showList"

      showList: (e) ->
        console.log("show feed list triggered, event:", e)
        e.stopPropagation()
        @trigger "view:show"
    )

  Swabcast.EpisodesApp.Show.View
