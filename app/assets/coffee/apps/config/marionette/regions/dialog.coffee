define ["marionette", "jquery-ui"], (Marionette) ->
  Marionette.Region.Dialog = Marionette.Region.extend(
    onShow: (view) ->
      $('body').addClass("locked")
      @listenTo view, "dialog:close", @closeDialog
      self = this
      winheight = $(window).height() * 0.80;
      @$el.dialog
        modal: true
        title: view.title
        height: "auto"
        maxHeight: winheight
        width: "80%"
        position: at: "center top"
        resizable: false
        close: (e, ui) ->
          self.closeDialog()


    closeDialog: ->
      @stopListening()
      @close()
      $('body').removeClass("locked")
      @$el.dialog "destroy"
  )
  Marionette.Region.Dialog
