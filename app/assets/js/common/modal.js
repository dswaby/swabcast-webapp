(function() {
  define(["app"], function(Swabcast) {
    Swabcast.module("EpisodesApp.Common.Modal", function(Views, Swabcast, Backbone, Marionette, $, _) {
      var Modal;
      return Modal = Backbone.Marionette.Region.extend({
        el: "#foundation-modal"
      }, {
        constructor: function() {
          _.bindAll(this);
          Backbone.Marionette.Region.prototype.constructor.apply(this, arguments_);
          this.on("view:show", this.showModal, this);
        },
        getEl: function(selector) {
          var $el;
          $el = $(selector);
          $el.on("hidden", this.close);
          return $el;
        },
        showModal: function(view) {
          view.on("close", this.hideModal, this);
          this.$el.modal("show");
        },
        hideModal: function() {
          this.$el.modal("hide");
        }
      });
    });
    return EpisodesApp.Common.Modal;
  });

}).call(this);
