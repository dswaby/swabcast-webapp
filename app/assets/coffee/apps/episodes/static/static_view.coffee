define ["app", "tpl!apps/episodes/static/templates/about_app_view.tpl"], (Swabcast, aboutAppTpl, aboutMeTpl) ->
  Swabcast.module "EpisodesApp.Static.View", (View, Swabcast, Backbone, Marionette, $, _) ->

    View.AboutApp = Marionette.ItemView.extend(
      template: aboutAppTpl
    )

  Swabcast.EpisodesApp.Static.View
