define ["marionette", "tpl!common/templates/modal_dialog.tpl"], (Marionette, view) ->
  Marionette.Region.ModalRegion = Backbone.Marionette.Region.extend(
    el: "#foundation-modal"
    constructor: ->
      _.bindAll this, "getEl", "showModal", "hideModal"
      Backbone.Marionette.Region::constructor.apply this, arguments
      @on "view:show", @showModal, this
      return

    getEl: (selector) ->
      $el = $(selector)
      $el.on "hidden", @close
      $el

    showModal: (view) ->
      view.on "close", @hideModal, this
      @$el.modal.foundation "reveal", "open"
      return

    hideModal: ->
      @$el.modal.foundation "reveal", "close"
      return
  )
  Marionette.Region.ModalRegion