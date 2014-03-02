(function() {
  define(["marionette", "jquery-ui"], function(Marionette) {
    Marionette.Region.Dialog = Marionette.Region.extend({
      onShow: function(view) {
        var self;
        this.listenTo(view, "dialog:close", this.closeDialog);
        self = this;
        return this.$el.dialog({
          modal: true,
          title: view.title,
          height: "auto",
          width: "auto",
          close: function(e, ui) {
            return self.closeDialog();
          }
        });
      },
      closeDialog: function() {
        this.stopListening();
        this.close();
        return this.$el.dialog("destroy");
      }
    });
    return Marionette.Region.Dialog;
  });

}).call(this);
