define ["marionette"], (Marionette) ->
    Marionette.Region.ModalRegion = Marionette.Region.extend(
        constructor: ->
            _.bindAll this
            Backbone.Marionette.Region::constructor.apply this, arguments_
            @on "view:show", @showModal, this
            return

        getEl: (selector) ->
            $el = $(selector)
            $el.on "hidden", @close
            $el

        setUiBindings: (view) ->
            $(document).on "open", "[data-reveal]", ->
              modal = $(this)
              return

            $(document).on "opened", "[data-reveal]", ->
              modal = $(this)
              return

            $(document).on "close", "[data-reveal]", ->
              modal = $(this)

              return

            $(document).on "closed", "[data-reveal]", ->
              modal = $(this)
              return

        showModal: (view) ->
            console.log("showModal triggered in ModalRegion, Fuck Yeah!!")

            view.on "close", @hideModal, this
            @$el.modal "show"
            return

        hideModal: ->
            @$el.modal "hide"
            return


        close: ->
            @$el.foundation "reveal", "close"
            return
    )
    Marionette.Region.ModalRegion