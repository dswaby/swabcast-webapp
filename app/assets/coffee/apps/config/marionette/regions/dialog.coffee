define ["marionette", "jquery-ui", "transit"], (Marionette) ->
  Marionette.Region.Dialog = Marionette.Region.extend(
    onShow: (view) ->
      $('body').addClass("locked")
      @listenTo view, "dialog:close", @closeDialog

      self = this

      windowWidth
      windowWidth = $(window).width()
      windowHeight
      windowHeight = $(window).height()
      mobile =  @isMobile windowHeight, windowWidth


      dialogWidth = mobile ? windowWidth * 0.7 : "auto"
      dialogHeight = mobile ? windowHeight * 0.75 : "auto"

      customClass = @determineCustomClass
      @$el.dialog
        modal: true
        title: view.title
        height: dialogHeight
        # maxHeight: winHeight
        width: dialogWidth
        position: at: "center top"
        resizable: false
        # dialogClass:
        close: (e, ui) ->
          self.closeDialog()


    closeDialog: ->
      @stopListening()
      @close()
      $('body').removeClass("locked")
      @$el.dialog "destroy"

    isMobile: (height, width) ->
      if height <= 480 and width <= 320
          return true
        return false





  )
  Marionette.Region.Dialog
