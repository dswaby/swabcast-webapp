define ["marionette", "jquery-ui", "transit"], (Marionette) ->
  Marionette.Region.Dialog = Marionette.Region.extend(
    onShow: (view) ->
      $('body').addClass("locked")
      @listenTo view, "dialog:close", @closeDialog
      self = this
      dialogWidth = @winWidth()
      dialogHeight = @winHeight()
      console.log(dialogWidth)
      @$el.dialog
        modal: true
        title: view.title
        height: dialogHeight
        # maxHeight: winHeight
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
      if (currentWindowWidth <= 640)
        return (currentWindowWidth *0.90).toFixed()
      else
        return (currentWindowWidth * 0.62).toFixed()

    winHeight: ->
      height
      height = $(window).height()
      if (height <= 800)
        return (height * 0.85).toFixed()
      else
        return (height * 0.42).toFixed()
  )
  Marionette.Region.Dialog
