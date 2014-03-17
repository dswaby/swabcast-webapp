define ["app", "tpl!apps/episodes/static/templates/about_app_view.tpl", "tpl!apps/episodes/static/templates/about_me_view.tpl"], (Swabcast, aboutAppTpl, aboutMeTpl) ->
  Swabcast.module "EpisodesApp.Static.View", (View, Swabcast, Backbone, Marionette, $, _) ->

    View.AboutApp = Marionette.ItemView.extend(
      template: aboutAppTpl
    )

    View.AboutMe = Marionette.ItemView.extend(
      template: aboutMeTpl
    )

  Swabcast.EpisodesApp.Static.View
