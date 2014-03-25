define ["marionette", "apps/config/marionette/regions/dialog"], (Marionette) ->

  Swabcast = new Marionette.Application()
  Swabcast.debugging = true
  Swabcast.addRegions
    sideBarRegion: "#sidebar-region"
    libraryRegion: "#library-region"
    playerRegion: "#player"
    navRegion:"#nav-regions"
    dialogRegion: Marionette.Region.Dialog.extend(el: "#dialog-region")
    notificationRegion: "#notification-region"
    navHelperRegion: "#navhelper-region"

  #route helpers
  Swabcast.navigate = (route, options) ->
    options or (options = {})
    Backbone.history.navigate route, options

  Swabcast.getCurrentRoute = ->
    Backbone.history.fragment

  #end route helpers
  Swabcast.on "initialize:after", ->
    require ["apps/episodes/episodes_app"], ->
      console.log "Swabcast episodes app started"
      if Backbone.history
        Backbone.history.start()
        if Swabcast.getCurrentRoute() is ""
          timeout = 3500
          Swabcast.navigate "library"
          # Adding timeout so that on initial load, in addition to needing to retrieve
          # data, will have time to load images
          Swabcast.trigger "media:all", timeout

        if Swabcast.getCurrentRoute() is "playlist"
          # Swabcast.trigger "media:all"
          Swabcast.trigger "playlist:landing"

        if Swabcast.getCurrentRoute() is "about"
          Swabcast.trigger "landing:about"



        # if Swabcast.getCurrentRoute() is "subscriptions"
        #   require ["apps/subscriptions/subscriptions_app"], ->
        #     console.log("subscriptions triggered")
        #     Swabcast.trigger("subscriptions:all")

  Swabcast
