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
      modalRegion: Marionette.Region.ModalRegion.extend({
        el: "#modal-region"
      })
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
            Swabcast.navigate("library");
            Swabcast.trigger("media:all");
          }
          if (Swabcast.getCurrentRoute() === "library") {
            Swabcast.trigger("media:all");
          }
          if (Swabcast.getCurrentRoute() === "test") {
            console.log("Testing");
          }
          if (Swabcast.getCurrentRoute() === "playlist") {
            Swabcast.trigger("media:all");
            console.log("playlist triggered");
            return Swabcast.trigger("playlist:mainview");
          }
        }
      });
    });
    return Swabcast;
  });

}).call(this);
