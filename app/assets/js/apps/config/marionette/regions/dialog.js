(function() {
  define(["marionette", "jquery-ui", "transit"], function(Marionette) {
    Marionette.Region.Dialog = Marionette.Region.extend({
      onShow: function(view) {
        var customClass, dialogHeight, dialogWidth, mobile, self, windowHeight, windowWidth;
        $('body').addClass("locked");
        this.listenTo(view, "dialog:close", this.closeDialog);
        self = this;
        windowWidth;
        windowWidth = $(window).width();
        windowHeight;
        windowHeight = $(window).height();
        mobile = this.isMobile(windowHeight, windowWidth);
        dialogWidth = mobile != null ? mobile : windowWidth * {
          0.7: "auto"
        };
        dialogHeight = mobile != null ? mobile : windowHeight * {
          0.75: "auto"
        };
        customClass = this.determineCustomClass;
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
      isMobile: function(height, width) {
        if (height <= 480 && width <= 320) {
          return true;
        }
        return false;
      }
    });
    return Marionette.Region.Dialog;
  });

}).call(this);
