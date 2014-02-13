(function() {
  define(["app", "tpl!apps/common/templates/spinner.tpl"], function(Swabcast, spinnerTpl) {
    Swabcast.module("Common.Views", function(Views, Swabcast, Backbone, Marionette, $, _) {
      return Views.Loading = Marionette.ItemView.extend({
        template: spinnerTpl,
        initialize: function(options) {
          options = options || {};
          this.title = options.title || "Loading Data";
          return this.message = options.message || "Plaease Wait";
        },
        serializeData: function() {
          return {
            title: this.title,
            message: this.message
          };
        },
        onShow: function() {
          var opts;
          opts = {
            lines: 13,
            length: 20,
            width: 10,
            radius: 35,
            corners: 1,
            rotate: 0,
            direction: 1,
            color: "#000",
            speed: 2,
            trail: 60,
            shadow: true,
            hwaccel: false,
            className: "spinner",
            zIndex: 2e9,
            top: "30px",
            left: "auto"
          };
          return $("#spinner").spin(opts);
        }
      });
    });
    return Common.Views;
  });

}).call(this);
