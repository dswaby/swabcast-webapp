(function() {
  define(["app", "tpl!apps/episodes/nav/templates/nav_view.tpl", "tpl!common/templates/nav_helper.tpl"], function(Swabcast, navTpl, navHelper) {
    Swabcast.module("EpisodesApp.Nav.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      View.Layout = Marionette.Layout.extend();
      View.NavHelper = Marionette.ItemView.extend({
        template: navHelper,
        events: {
          "click js-library-back": "navigateToLibrary"
        },
        initialize: function(options) {
          options = options || {};
          return this.buttonText = options.buttonText || "Back";
        },
        onRender: function() {
          return this.$el.transition({
            x: 0
          }, 500, "ease");
        },
        serializeData: function() {
          return {
            buttonText: this.buttonText
          };
        },
        onBeforeClose: function() {
          return this.$el.transition({
            perspective: "100px",
            rotate3d: "1,1,0,180deg"
          });
        },
        navigateToLibrary: function() {
          this.$el.transition({
            perspective: "100px",
            rotate3d: "1,1,0,180deg"
          });
          Swabcast.trigger("episodes:library");
          return this.close();
        }
      });
      return View.Nav = Marionette.ItemView.extend({
        template: navTpl,
        events: {
          "click li.js-playlist": "showPlaylist",
          "click li.js-reset-local": "resetLocalStorage",
          "click li.js-not-implemented": "notImplemented",
          "click li.js-static-me": "showAboutMe",
          "click li.js-static-app": "showAboutApp",
          "click li.js-library-view": "showLibrary"
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
        },
        showLibrary: function() {
          return Swabcast.trigger("episodes:library");
        }
      });
    });
    return Swabcast.EpisodesApp.Nav.View;
  });

}).call(this);
