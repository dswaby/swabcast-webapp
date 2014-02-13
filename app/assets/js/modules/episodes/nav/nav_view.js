(function() {
  define(["app", "tpl!apps/episodes/nav/templates/nav_view.tpl"], function(Swabcast, navTpl) {
    Swabcast.module("EpisodesApp.Nav.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      return View.Nav = Marionette.ItemView.extend({
        template: navTpl,
        events: {
          "click li a.js-playlist": "showPlaylist",
          "click li.js-reset-local": "resetLocalStorage"
        },
        showPlaylist: function(e) {
          console.log('playlist clicked');
          e.preventDefault();
          e.stopPropagation();
          return Swabcast.trigger("playlist:mainview");
        },
        resetLocalStorage: function(e) {
          e.preventDefault();
          e.stopPropagation();
          console.log('clearing storage');
          localStorage.clear();
          location.reload();
          return console.log('storage cleared');
        }
      });
    });
    return Swabcast.EpisodesApp.Nav.View;
  });

}).call(this);
