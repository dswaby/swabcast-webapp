define ["app", "apps/config/storage/localstorage", "entities/feed"], (Swabcast) ->
  # Generated by CoffeeScript 1.6.3
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->
    API = undefined
    initializePlayerSyncData = undefined
    Entities.Player = Backbone.Model.extend(urlRoot: "player")
    Entities.configureStorage Entities.Player
    initializePlayerSyncData = ->
      syncData = undefined
      syncData = new Swabcast.Entities.Episode(
        title: ""
        mediaUrl: ""
        albumArt: ""
        currentPosition: 0
      )
      syncData.save()

    API =
      getPlayer: ->
        defer = undefined
        playerSaveData = undefined
        promise = undefined
        playerSaveData = new Swabcast.Entities.Episode(id: 0)
        defer = $.Deferred()
        setTimeout (->
          playerSaveData.fetch
            success: (data) ->
              defer.resolve data

            error: ->
              defer.resolve `undefined`

        ), 100
        promise = defer.promise()
        defer.promise()

      playerReset: ->
        playerSaveData = undefined
        playerSaveData = new Swabcast.Entities.Episode(id: 0)
        console.log "playerdata:reset triggered"

    Swabcast.reqres.setHandler "player:savedata", ->
      API.getPlayer()

    Swabcast.commands.setHandler "playerdata:remove", ->
      API.playerReset()

    Swabcast.commands.setHandler "playerdata:add", (episodeModel) ->
      API.updateSaveData episodeModel




  return
