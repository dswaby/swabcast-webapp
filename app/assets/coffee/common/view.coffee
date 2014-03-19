define ["app", "tpl!common/templates/loadingView.tpl", "tpl!common/templates/notification_box.tpl", "tpl!common/templates/nav_helper.tpl"], (Swabcast, loadingView, notificationView, navHelper) ->
  Swabcast.module "Common.Views", (Views, Swabcast, Backbone, Marionette, $, _) ->
    # View for displing animated spinner gif when loading next view
    Views.Loading = Marionette.ItemView.extend(
      template: loadingView
      initialize: (options) ->
        options = options or {}
        @title = options.title or "Loading"
        @message = options.message or "Plaease Wait.."

      serializeData: ->
        title: @title
        message: @message
    )
    # view for displaying 'alerts'
    Views.Notification = Marionette.ItemView.extend(
      template: notificationView
      initialize: (options) ->
        options = options or {}
        @title = options.title or "Alert!"
        @message = options.message or "This is an alert."
        # alert types - success, warning, info
        @alert = options.alert or "info"

      serializeData: ->
        title: @title
        message: @message
        alert: @alert
    )
    # view for navigation element, currently just adds button for navigating back to library
    Views.NavHelper = Marionette.ItemView.extend(
      template: navHelper
      events:
        "click a.js-library-back": "navigateToLibrary"

      initialize: (options) ->
        options = options or {}
        @buttonText = options.buttonText or "Back"

      onRender: ->
        # @$el.transition
        #   y: 0
        #   , 500, "ease"

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
