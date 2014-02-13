define ["app", "tpl!apps/episodes/nav/templates/nav_view.tpl"], (Swabcast, navTpl) ->
  Swabcast.module "EpisodesApp.Nav.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    
    View.Nav = Marionette.ItemView.extend(
      template: navTpl
      events:
        "click li a.js-playlist": "showPlaylist",
        "click li.js-reset-local": "resetLocalStorage"

      showPlaylist: (e) ->
        console.log('playlist clicked')
        e.preventDefault()
        e.stopPropagation()
        Swabcast.trigger "playlist:mainview"

      resetLocalStorage: (e) ->
        e.preventDefault()
        e.stopPropagation()
        console.log('clearing storage')
        localStorage.clear()
        location.reload()
        console.log('storage cleared')
    )

  Swabcast.EpisodesApp.Nav.View
