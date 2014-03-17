(function() {
  define(["app", "tpl!apps/episodes/nav/templates/nav_view.tpl"], function(Swabcast, navTpl) {
    Swabcast.module("EpisodesApp.Nav.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      return View.Nav = Marionette.ItemView.extend({
        template: navTpl,
        events: {
          "click li.js-playlist": "showPlaylist",
          "click li.js-reset-local": "resetLocalStorage",
          "click li.js-not-implemented": "notImplemented",
          "click li.js-static-me": "showAboutMe",
          "click li.js-static-app": "showAboutApp"
        },
        showPlaylist: function(e) {
          return Swabcast.trigger("playlist:mainview");
        },
        resetLocalStorage: function(e) {
          e.preventDefault();
          e.stopPropagation();
          localStorage.clear();
          location.reload();
          return console.log('storage cleared');
        },
        showAboutMe: function() {
          return Swabcast.trigger("static:about:me");
        },
        showAboutApp: function() {
          return Swabcast.trigger("static:about:app");
        },
        notImplemented: function(e) {
          console.log("not implemented yet :(");
          return Swabcast.trigger("feature:not:implemented");
        }
      });
    });
    return Swabcast.EpisodesApp.Nav.View;
  });

}).call(this);
