define ["marionette", "jquery-ui"], (Marionette) ->
  Marionette.Region.Dialog = Marionette.Region.extend(
    onShow: (view) ->
      $('body').addClass("locked")
      @listenTo view, "dialog:close", @closeDialog
      self = this
      dialogWidth = @winWidth()
      dialogHeight = @winHeight()
      @$el.dialog
        modal: true
        title: view.title
        height: dialogHeight
        width: dialogWidth
        position: at: "center top"
        draggable:false
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
        if (currentWindowWidth <= 1001)
          return (currentWindowWidth * 0.62).toFixed()
        return (currentWindowWidth * 0.42).toFixed()

    winHeight: ->
      height
      height = $(window).height()
      if (height <= 600)
        return (height * 0.85).toFixed()
      else
        return (height * 0.60).toFixed()
        #
  )
  Marionette.Region.Dialog
