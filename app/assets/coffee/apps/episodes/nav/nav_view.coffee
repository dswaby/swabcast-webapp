define ["app", "tpl!apps/episodes/nav/templates/nav_view.tpl", "tpl!common/templates/nav_helper.tpl"], (Swabcast, navTpl, navHelper) ->
  Swabcast.module "EpisodesApp.Nav.View", (View, Swabcast, Backbone, Marionette, $, _) ->

    View.Layout = Marionette.Layout.extend(

    )

    View.Nav = Marionette.ItemView.extend(
      template: navTpl
      events:
        "click li.js-playlist": "showPlaylist",
        "click li.js-reset-local": "resetLocalStorage"
        "click li.js-not-implemented": "notImplemented"
        "click li.js-static-me": "showAboutMe"
        "click li.js-static-app": "showAboutApp"
        "click li.js-library-view": "showLibrary"

      showPlaylist: (e) ->
        e.preventDefault()
        Swabcast.trigger "playlist:mainview"

      resetLocalStorage: (e) ->
        e.preventDefault()
        e.stopPropagation()
        localStorage.clear()
        location.reload()
        console.log('storage cleared')

      showAboutApp: ->
        e.preventDefault()
        Swabcast.trigger "static:about:app"

      notImplemented: (e) ->
        e.preventDefault()
        Swabcast.trigger "feature:not:implemented"

      showLibrary: ->
        e.preventDefault()
        Swabcast.trigger "episodes:library"

    )

  Swabcast.EpisodesApp.Nav.View
