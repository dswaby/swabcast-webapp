define ["app", "apps/episodes/static/static_view"], (Swabcast, View) ->
  Swabcast.module "EpisodesApp.Static", (Static, Swabcast, Backbone, Marionette, $, _) ->
    Static.Controller =
      showAboutApp: ->
        require ["common/view"], (CommonViews) ->
          backButton = new CommonViews.NavHelper(
            buttonText: "Back to subscriptions"
          )
          Swabcast.navHelperRegion.show backButton

        aboutApp = new View.AboutApp()
        Swabcast.libraryRegion.show aboutApp

  Swabcast.EpisodesApp.Static.Controller