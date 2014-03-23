(function() {
  define(["app", "apps/episodes/nav/nav_view"], function(Swabcast, View) {
    Swabcast.module("EpisodesApp.Nav", function(Nav, Swabcast, Backbone, Marionette, $, _) {
      return Nav.Controller = {
        showNav: function() {
          var navigationRegion;
          navigationRegion = new View.Nav();
          return Swabcast.navRegion.show(navigationRegion);
        }
      };
    });
    return Swabcast.EpisodesApp.Nav.Controller;
  });

}).call(this);
