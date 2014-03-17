(function() {
  define(["app", "apps/episodes/static/static_view"], function(Swabcast, View) {
    Swabcast.module("EpisodesApp.Static", function(Static, Swabcast, Backbone, Marionette, $, _) {
      return Static.Controller = {
        showAboutApp: function() {
          var aboutApp;
          aboutApp = new View.AboutApp();
          return Swabcast.libraryRegion.show(aboutApp);
        },
        showAboutMe: function() {
          var aboutMe;
          aboutMe = new View.AboutMe();
          return Swabcast.libraryRegion.show(aboutMe);
        }
      };
    });
    return Swabcast.EpisodesApp.Static.Controller;
  });

}).call(this);
