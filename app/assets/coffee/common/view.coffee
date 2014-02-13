define ["app", "tpl!apps/common/templates/spinner.tpl"], (Swabcast, spinnerTpl) ->
  Swabcast.module "Common.Views", (Views, Swabcast, Backbone, Marionette, $, _) ->
    Views.Loading = Marionette.ItemView.extend(
      template: spinnerTpl
      initialize: (options) ->
        options = options or {}
        @title = options.title or "Loading Data"
        @message = options.message or "Plaease Wait"

      serializeData: ->
        title: @title
        message: @message

      onShow: ->
        opts =
          lines: 13
          length: 20
          width: 10
          radius: 35
          corners: 1
          rotate: 0
          direction: 1
          color: "#000"
          speed: 2
          trail: 60
          shadow: true
          hwaccel: false
          className: "spinner"
          zIndex: 2e9
          top: "30px"
          left: "auto"

        $("#spinner").spin opts
    )

  Common.Views
