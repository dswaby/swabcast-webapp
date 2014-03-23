(function() {
  define(["marionette"], function(Marionette) {
    Marionette.Region.ModalRegion = Marionette.Region.extend({
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
      setUiBindings: function(view) {
        $(document).on("open", "[data-reveal]", function() {
          var modal;
          modal = $(this);
        });
        $(document).on("opened", "[data-reveal]", function() {
          var modal;
          modal = $(this);
        });
        $(document).on("close", "[data-reveal]", function() {
          var modal;
          modal = $(this);
        });
        return $(document).on("closed", "[data-reveal]", function() {
          var modal;
          modal = $(this);
        });
      },
      showModal: function(view) {
        console.log("showModal triggered in ModalRegion, Fuck Yeah!!");
        view.on("close", this.hideModal, this);
        this.$el.modal("show");
      },
      hideModal: function() {
        this.$el.modal("hide");
      },
      close: function() {
        this.$el.foundation("reveal", "close");
      }
    });
    return Marionette.Region.ModalRegion;
  });

}).call(this);
