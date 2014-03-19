(function() {
  define(["app", "apps/episodes/static/static_view"], function(Swabcast, View) {
    Swabcast.module("EpisodesApp.Static", function(Static, Swabcast, Backbone, Marionette, $, _) {
      return Static.Controller = {
        showAboutApp: function() {
          var aboutApp;
          require(["common/view"], function(CommonViews) {
            var backButton;
            backButton = new CommonViews.NavHelper({
              buttonText: "Back to subscriptions"
            });
            return Swabcast.navRegion.attachView(backButton);
          });
          aboutApp = new View.AboutApp();
          return Swabcast.libraryRegion.show(aboutApp);
        },
        showAboutMe: function() {
          var aboutMe;
          require(["common/view"], function(CommonViews) {
            var backButton;
            backButton = new CommonViews.NavHelper({
              buttonText: "Back to subscriptions"
            });
            return Swabcast.navRegion.attachView(backButton);
          });
          aboutMe = new View.AboutMe();
          return Swabcast.libraryRegion.show(aboutMe);
        }
      };
    });
    return Swabcast.EpisodesApp.Static.Controller;
  });

}).call(this);
