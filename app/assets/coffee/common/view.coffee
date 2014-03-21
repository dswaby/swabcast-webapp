define ["app", "tpl!common/templates/loadingView.tpl", "tpl!common/templates/notification_box.tpl", "tpl!common/templates/nav_helper.tpl", "transit"], (Swabcast, loadingView, notificationView, navHelper) ->
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

      onBeforeRender: ->
        # console.log(@$el)
      onRender: ->
        # @$el.slideDown 200000, ->
        #   console.log("slideUp")
        #   y: 500
        #   easing:'snap',
        #   duration: 20000

      serializeData: ->
        buttonText: @buttonText

      onBeforeClose: ->
        @$el.slideUp 20000, ->
        # console.log("penis ", $@el)
          # console.log("slideUp")

      navigateToLibrary: ->
        Swabcast.trigger "episodes:library"
        @close()
    )

    Views.NavPlaylistHelper = Marionette.ItemView.extend(
      template: navHelper
      events:
        "click div .js-library-back": "navigateToLibrary"

      initialize: (options) ->
        options = options or {}
        @buttonText = options.buttonText or "Back"


      onRender: ->

        #   y: 500
        #   easing:'snap',
        #   duration: 20000

      serializeData: ->
        buttonText: @buttonText

      onBeforeClose: ->
        # @$el.slideUp "slow"

      navigateToLibrary: ->
        Swabcast.trigger "episodes:library"
        Swabcast.trigger "episodes:playlist"
        @close()
    )
  Swabcast.Common.Views
