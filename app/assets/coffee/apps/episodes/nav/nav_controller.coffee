define ["app", "apps/episodes/nav/nav_view"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Nav", (Nav, Swabcast, Backbone, Marionette, $, _) ->
    Nav.Controller =
      showNav: ->
        navigationRegion = new View.Nav()

        Swabcast.navRegion.show navigationRegion

  Swabcast.EpisodesApp.Nav.Controller
