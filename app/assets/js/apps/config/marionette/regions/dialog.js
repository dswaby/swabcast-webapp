(function() {
  define(["marionette", "jquery-ui", "transit"], function(Marionette) {
    Marionette.Region.Dialog = Marionette.Region.extend({
      onShow: function(view) {
        var dialogHeight, dialogWidth, self;
        $('body').addClass("locked");
        this.listenTo(view, "dialog:close", this.closeDialog);
        self = this;
        dialogWidth = this.winWidth();
        dialogHeight = this.winHeight();
        console.log(dialogWidth);
        return this.$el.dialog({
          modal: true,
          title: view.title,
          height: dialogHeight,
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
        if (currentWindowWidth <= 640) {
          return (currentWindowWidth * 0.90).toFixed();
        } else {
          return (currentWindowWidth * 0.62).toFixed();
        }
      },
      winHeight: function() {
        height;
        var height;
        height = $(window).height();
        if (height <= 800) {
          return (height * 0.85).toFixed();
        } else {
          return (height * 0.42).toFixed();
        }
      }
    });
    return Marionette.Region.Dialog;
  });

}).call(this);
