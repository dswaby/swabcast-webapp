define ["marionette", "jquery-ui", "transit"], (Marionette) ->
  Marionette.Region.Dialog = Marionette.Region.extend(
    onShow: (view) ->
      $('body').addClass("locked")
      @listenTo view, "dialog:close", @closeDialog
      self = this
      dialogWidth = @winWidth()
      @$el.dialog
        modal: true
        title: view.title
        height: $(window).height() * 0.70
        # maxHeight: winHeight
        width: dialogWidth
        position: at: "center top"
        resizable: true
        close: (e, ui) ->
          self.closeDialog()


    closeDialog: ->
      @stopListening()
      @close()
      $('body').removeClass("locked")
      @$el.dialog "destroy"

    winWidth: ->
      currentWindowWidth
      currentWindowWidth = $(window).width()
      if (currentWindowWidth <= 320)
        return currentWindowWidth *0.90
      else
        return "auto"

      winHeight: ->
        height
        height = $(window).height()
        if (height <= 640)
          return height * 0.78
        else
          return "auto"
  )
  Marionette.Region.Dialog
