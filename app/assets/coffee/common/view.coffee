define ["app", "tpl!common/templates/loadingView.tpl", "tpl!common/templates/notification_box.tpl", "tpl!common/templates/nav_helper.tpl"],
(Swabcast, loadingView, notificationView, navHelper) ->
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

      onRender: ->

      serializeData: ->
        buttonText: @buttonText

      navigateToLibrary: (e) ->
        e.preventDefault()
        e.stopPropagation()
        Swabcast.navigate "library"
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

      serializeData: ->
        buttonText: @buttonText

      onBeforeClose: ->
        # @$el.slideUp "slow"

      navigateToLibrary: (e) ->
        e.preventDefault()
        e.stopPropagation()
        Swabcast.navigate "library"
        Swabcast.trigger "episodes:library"
        Swabcast.trigger "episodes:playlist"
        Swabcast.libraryRegion.close()
        @close()
    )
  Swabcast.Common.Views
