define ["app", "tpl!common/templates/loadingView.tpl", "tpl!common/templates/notification_box.tpl", "tpl!common/templates/nav_helper.tpl"], (Swabcast, loadingView, notificationView, navHelper) ->
  Swabcast.module "Common.Views", (Views, Swabcast, Backbone, Marionette, $, _) ->
    Views.Loading = Marionette.ItemView.extend(
      template: loadingView
      initialize: (options) ->
        options = options or {}
        @title = options.title or "Loading"
        @message = options.message or "Plaease Wait.."

      serializeData: ->
        title: @title
        message: @message

      # onShow: ->
      #   opts =
      #     lines: 13
      #     length: 20
      #     width: 10
      #     radius: 35
      #     corners: 1
      #     rotate: 0
      #     direction: 1
      #     color: "#000"
      #     speed: 2
      #     trail: 60
      #     shadow: true
      #     hwaccel: false
      #     className: "spinner"
      #     zIndex: 2e9
      #     top: "30px"
      #     left: "auto"

      #   $("#spinner").spin opts
    )
    Views.Notification = Marionette.ItemView.extend(
      template: notificationView
      initialize: (options) ->
        options = options or {}
        @title = options.title or "Alert!"
        @message = options.message or "This is an alert."
        @alert = options.alert or "info"
        # alert types - success, warning, info

      serializeData: ->
        title: @title
        message: @message
        alert: @alert
    )

    Views.NavHelper = Marionette.ItemView.extend(
      template: navHelper
      events:
        "click button.js-library-back": "navigateToLibrary"

      initialize: (options) ->
        options = options or {}
        @buttonText = options.buttonText or "Back"

      serializeData: ->
        buttonText: @buttonText

      onBeforeClose: ->
        @$el.transition
          perspective: "100px"
          rotate3d: "1,1,0,180deg"


      navigateToLibrary: ->
        @$el.transition
          perspective: "100px"
          rotate3d: "1,1,0,180deg"
        Swabcast.trigger "episodes:library"
        @close()
    )


  Swabcast.Common.Views
