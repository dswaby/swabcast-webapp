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


      showAboutMe: ->
        require ["common/view"], (CommonViews) ->
          backButton = new CommonViews.NavHelper(
            buttonText: "Back to subscriptions"
          )
          Swabcast.navHelperRegion.show backButton

        aboutMe = new View.AboutMe()
        Swabcast.libraryRegion.show aboutMe

  Swabcast.EpisodesApp.Static.Controller