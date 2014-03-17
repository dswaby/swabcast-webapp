define ["app", "tpl!apps/episodes/nav/templates/nav_view.tpl"], (Swabcast, navTpl) ->
  Swabcast.module "EpisodesApp.Nav.View", (View, Swabcast, Backbone, Marionette, $, _) ->

    View.Nav = Marionette.ItemView.extend(
      template: navTpl
      events:
        "click li.js-playlist": "showPlaylist",
        "click li.js-reset-local": "resetLocalStorage"
        "click li.js-not-implemented": "notImplemented"
        "click li.js-static-me": "showAboutMe"


      showPlaylist: (e) ->
        Swabcast.trigger "playlist:mainview"

      resetLocalStorage: (e) ->
        e.preventDefault()
        e.stopPropagation()
        localStorage.clear()
        location.reload()
        console.log('storage cleared')

      showAboutMe: ->
        Swabcast.trigger "static:about:me"

      showAboutApp: ->
        Swabcast.trigger "static:about:app"

      notImplemented: (e) ->
        console.log("not implemented yet :(")
        Swabcast.trigger "feature:not:implemented"

    )

  Swabcast.EpisodesApp.Nav.View
