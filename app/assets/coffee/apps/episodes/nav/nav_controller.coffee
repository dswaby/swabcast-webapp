define ["app", "apps/episodes/nav/nav_view"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Nav", (Nav, Swabcast, Backbone, Marionette, $, _) ->
    Nav.Controller =
      showNav: ->
        navView = new View.Nav()

        navView.on "nav:landing", ->
          Swabcast.trigger "playlist:landing"

        navView.on "nav:library", ->
          Swabcast.trigger "episodes:library"

        navView.on "nav:playlist", ->
          Swabcast.trigger "playlist:landing"

        navView.on "nav:notimplemented", ->
          Swabcast.trigger "feature:not:implemented"

        navView.on "nav:static:about", ->
          Swabcast.trigger "static:about:app"

        Swabcast.navRegion.show navView

  Swabcast.EpisodesApp.Nav.Controller
