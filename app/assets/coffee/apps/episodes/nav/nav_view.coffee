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
        @trigger "nav:landing"

      resetLocalStorage: (e) ->
        e.preventDefault()
        localStorage.clear()
        location.reload()
        console.log('storage cleared')

      showAboutApp: ->
        e.preventDefault()

        @trigger "nav:static:about"

      notImplemented: (e) ->
        e.preventDefault()

        @trigger "nav:notimplemented"

      showLibrary: ->
        e.preventDefault()

        @trigger "nav:library"

    )

  Swabcast.EpisodesApp.Nav.View
