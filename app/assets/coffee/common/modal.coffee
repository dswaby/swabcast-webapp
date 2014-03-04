define ["app"], (Swabcast) ->
    Swabcast.module "EpisodesApp.Common.Modal", (Views, Swabcast, Backbone, Marionette, $, _) ->
        Modal = Backbone.Marionette.Region.extend(
            el: "#foundation-modal"
          constructor: ->
            _.bindAll this
            Backbone.Marionette.Region::constructor.apply this, arguments_
            @on "view:show", @showModal, this
            return

          getEl: (selector) ->
            $el = $(selector)
            $el.on "hidden", @close
            $el

          showModal: (view) ->
            view.on "close", @hideModal, this
            @$el.modal "show"
            return

          hideModal: ->
            @$el.modal "hide"
            return
        )

    EpisodesApp.Common.Modal
