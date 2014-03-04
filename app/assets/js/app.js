(function() {
  define(["marionette", "apps/config/marionette/regions/dialog", "apps/config/marionette/regions/modal"], function(Marionette) {
    var Swabcast;
    Swabcast = new Marionette.Application();
    Swabcast.debugging = true;
    Swabcast.addRegions({
      mainRegion: "#main-region",
      sideBarRegion: "#sidebar-region",
      libraryRegion: "#library-region",
      playerRegion: "#player",
      navRegion: "#nav-regions",
      dialogRegion: Marionette.Region.Dialog.extend({
        el: "#dialog-region"
      }),
      modal: Marionette.Region.ModalRegion
    });
    Swabcast.navigate = function(route, options) {
      options || (options = {});
      return Backbone.history.navigate(route, options);
    };
    Swabcast.getCurrentRoute = function() {
      return Backbone.history.fragment;
    };
    Swabcast.on("initialize:after", function() {
      return require(["apps/episodes/episodes_app"], function() {
        console.log("Swabcast episodes app started");
        if (Backbone.history) {
          Backbone.history.start();
          if (Swabcast.getCurrentRoute() === "") {
            Swabcast.navigate("episodes");
            Swabcast.trigger("media:all");
          }
          if (Swabcast.getCurrentRoute() === "playlist") {
            console.log("playlist triggered");
            Swabcast.trigger("playlist:mainview");
          }
          if (Swabcast.getCurrentRoute() === "subscriptions") {
            return require(["apps/subscriptions/subscriptions_app"], function() {
              console.log("subscriptions triggered");
              return Swabcast.trigger("subscriptions:all");
            });
          }
        }
      });
    });
    return Swabcast;
  });

}).call(this);
