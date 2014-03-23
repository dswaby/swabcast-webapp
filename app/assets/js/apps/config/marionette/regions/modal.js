(function() {
  define(["marionette", "tpl!common/templates/modal_dialog.tpl"], function(Marionette, view) {
    Marionette.Region.ModalRegion = Backbone.Marionette.Region.extend({
      el: "#foundation-modal",
      constructor: function() {
        _.bindAll(this, "getEl", "showModal", "hideModal");
        Backbone.Marionette.Region.prototype.constructor.apply(this, arguments);
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
        this.$el.modal.foundation("reveal", "open");
      },
      hideModal: function() {
        this.$el.modal.foundation("reveal", "close");
      }
    });
    return Marionette.Region.ModalRegion;
  });

}).call(this);
