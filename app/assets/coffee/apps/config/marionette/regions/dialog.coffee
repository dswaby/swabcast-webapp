define ["marionette", "jquery-ui"], (Marionette) ->
  Marionette.Region.Dialog = Marionette.Region.extend(
    onShow: (view) ->
      $('body').addClass("locked")
      @listenTo view, "dialog:close", @closeDialog
      self = this
      winheight = $(window).height() * 0.80
      dialogWidth = @winWidth()
      @$el.dialog
        modal: true
        title: view.title
        height: "auto"
        maxHeight: winheight
        width: dialogWidth
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
        return currentWindowWidth
      return currentWindowWidth * 0.80
  )
  Marionette.Region.Dialog
