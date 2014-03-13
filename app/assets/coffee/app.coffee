define ["marionette", "apps/config/marionette/regions/dialog", "apps/config/marionette/regions/modal"], (Marionette) ->

  Swabcast = new Marionette.Application()
  Swabcast.debugging = true
  Swabcast.addRegions
    mainRegion: "#main-region"
    sideBarRegion: "#sidebar-region"
    libraryRegion: "#library-region"
    playerRegion: "#player"
    navRegion:"#nav-regions"
    dialogRegion: Marionette.Region.Dialog.extend(el: "#dialog-region")
    modalRegion: Marionette.Region.ModalRegion.extend(el: "#modal-region")

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
          Swabcast.navigate "library"
          Swabcast.trigger "media:all"
        if Swabcast.getCurrentRoute() is "library"
          Swabcast.trigger "media:all"
        if Swabcast.getCurrentRoute() is "playlist"
          Swabcast.trigger "media:all"
          console.log("playlist triggered")
          Swabcast.trigger("playlist:mainview")

        # if Swabcast.getCurrentRoute() is "subscriptions"
        #   require ["apps/subscriptions/subscriptions_app"], ->
        #     console.log("subscriptions triggered")
        #     Swabcast.trigger("subscriptions:all")

  Swabcast
