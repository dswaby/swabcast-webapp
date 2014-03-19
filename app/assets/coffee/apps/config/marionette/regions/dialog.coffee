define ["marionette", "jquery-ui", "transit"], (Marionette) ->
  Marionette.Region.Dialog = Marionette.Region.extend(
    onShow: (view) ->
      $('body').addClass("locked")
      @listenTo view, "dialog:close", @closeDialog
      self = this
      dialogHeight = @winHeight()
      dialogWidth = @winWidth()
      @$el.dialog
        modal: true
        title: view.title
        height: @winHeight()
        # maxHeight: winHeight
        width: @winWidth()
        position: at: "center top"
        resizable: false
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
      return currentWindowWidth * 0.80

    winHeight: ->
      currentWindowHeight
      currentWindowHeight = $(window).height()
      if (currentWindowHeight <= 480)
        return currentWindowHeight *0.70
      return "auto"
  )
  Marionette.Region.Dialog
