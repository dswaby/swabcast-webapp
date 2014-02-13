define ["app", "apps/config/storage/localstorage"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->
    Entities.Player = Backbone.Model.extend(urlRoot: "player")
    Entities.configureStorage Entities.Player
    initializePlayerSyncData = ->
      syncData = new Entities.Player(
        title: ""
        mediaUrl: ""
        albumArt: ""
        currentPosition: 0
      )
      syncData.save()

    API =
      getPlayer: ->
        playerSaveData = new Entities.Player(id: 0)
        defer = $.Deferred()
        setTimeout (->
          playerSaveData.fetch
            success: (data) ->
              defer.resolve data
            error: ->
              defer.resolve `undefined`

        ), 100
        promise = defer.promise()

        #$.when(promise).done(function(syncData) {
        #        			console.log("syncData:", syncData);
        #        			if(!syncData){
        #        				syncData = initializePlayerSyncData();
        #        			}
        #        		});
        defer.promise()

      playerReset: ->
        playerSaveData = new Entities.Player(id: 0)
        console.log "playerdata:reset triggered"

    Swabcast.reqres.setHandler "player:savedata", ->
      API.getPlayer()

    Swabcast.commands.setHandler "playerdata:remove", ->
      API.playerReset()

    Swabcast.commands.setHandler "playerdata:add", (episodeModel) ->
      API.updateSaveData episodeModel


  return
