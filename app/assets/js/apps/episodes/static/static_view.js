(function() {
  define(["app", "tpl!apps/episodes/static/templates/about_app_view.tpl", "tpl!apps/episodes/static/templates/about_me_view.tpl"], function(Swabcast, aboutAppTpl, aboutMeTpl) {
    Swabcast.module("EpisodesApp.Static.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      View.AboutApp = Marionette.ItemView.extend({
        template: aboutAppTpl
      });
      return View.AboutMe = Marionette.ItemView.extend({
        template: aboutMeTpl
      });
    });
    return Swabcast.EpisodesApp.Static.View;
  });

}).call(this);
