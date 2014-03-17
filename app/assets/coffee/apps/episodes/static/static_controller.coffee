define ["app", "apps/episodes/static/static_view"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Static", (Static, Swabcast, Backbone, Marionette, $, _) ->
    Static.Controller =
      showAboutApp: ->
        aboutApp = new View.AboutApp()

        Swabcast.libraryRegion.show aboutApp

      showAboutMe: ->
        aboutMe = new View.AboutMe()

        Swabcast.libraryRegion.show aboutMe

  Swabcast.EpisodesApp.Static.Controller