(function() {
  define(["marionette", "jquery-ui", "transit"], function(Marionette) {
    Marionette.Region.Dialog = Marionette.Region.extend({
      onShow: function(view) {
        var dialogWidth, self, winheight;
        $('body').addClass("locked");
        this.listenTo(view, "dialog:close", this.closeDialog);
        self = this;
        winheight = $(window).height() * 0.80;
        dialogWidth = this.winWidth();
        return this.$el.dialog({
          modal: true,
          title: view.title,
          height: "auto",
          maxHeight: winheight,
          width: dialogWidth,
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
      },
      winWidth: function() {
        currentWindowWidth;
        var currentWindowWidth;
        currentWindowWidth = $(window).width();
        if (currentWindowWidth <= 320) {
          return currentWindowWidth;
        }
        return currentWindowWidth * 0.80;
      }
    });
    return Marionette.Region.Dialog;
  });

}).call(this);
