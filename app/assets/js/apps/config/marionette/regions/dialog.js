(function() {
  define(["marionette", "jquery-ui"], function(Marionette) {
    Marionette.Region.Dialog = Marionette.Region.extend({
      onShow: function(view) {
        var self, winheight;
        $('body').addClass("locked");
        this.listenTo(view, "dialog:close", this.closeDialog);
        self = this;
        winheight = $(window).height() * 0.80;
        return this.$el.dialog({
          modal: true,
          title: view.title,
          height: "auto",
          maxHeight: winheight,
          width: "80%",
          position: {
            at: "center top"
          },
          resizable: false,
          close: function(e, ui) {
            return self.closeDialog();
          }
        });
      },
      closeDialog: function() {
        this.stopListening();
        this.close();
        $('body').removeClass("locked");
        return this.$el.dialog("destroy");
      }
    });
    return Marionette.Region.Dialog;
  });

}).call(this);
