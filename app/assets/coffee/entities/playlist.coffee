# playlist.coffee
define ["app", "apps/config/storage/localstorage", "entities/feed"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->
    Entities.QueuedEpisode = Backbone.Model.extend(
      url: "queuedtracks"
      urlRoot: "playlist"
      order: 0,
      validate: (attrs) ->
        "must have valid uid property"  unless attrs.uid
    )

    Entities.configureStorage Entities.QueuedEpisode

    Entities.Playlist = Backbone.Collection.extend(
      url: "playlist"
      model: Entities.QueuedEpisode
      comparator: "order"
    )
    Entities.configureStorage Entities.Playlist

    #public
    API =
      getEpisodeEntity: (uniqueId) ->
        episode = new Entities.QueuedEpisode(id: uniqueId)
        defer = $.Deferred()
        setTimeout (->
          episode.fetch
            success: (data) ->
              defer.resolve data

            error: ->
              defer.resolve `undefined`
        ), 100
        defer.promise()

      getPlaylistEntities: ->
        if queuedTracks
          console.log(queuedtracks)
          delete queuedTracks
        queuedTracks = new Entities.Playlist()
        defer = $.Deferred()
        queuedTracks.fetch
          success: (data) ->
            defer.resolve data

        defer.promise()

      addToPlaylist: (model) ->
        queuedTracks = @getPlaylistEntities()
        defer = $.Deferred()

        $.when(queuedTracks).done (queuedTracks) ->
          highestOrder = undefined
          inQueue = undefined
          if queuedTracks.length isnt 0
            inQueue = queuedTracks.find((t) ->
              t.get("uid") is model.get("uid")
            )
            highestOrder = queuedTracks.max((t) ->
              t.get "order"
            )
            highestOrder = highestOrder.get("order") + 1
          console.log("inQueue",inQueue)
          unless inQueue
            newTrack = new Swabcast.Entities.QueuedEpisode(
              uid: model.get("uid") or null
              albumArt: model.parent.get("albumArt") or null
              episodeTitle: model.get("episodeTitle") or " "
              feedUrl: model.parent.get("feedUrl") or " "
              episodeSummary: model.get("episodeSummary")
              episodeParent: model.parent.get("subscriptionTitle") or " "
              mediaUrl: model.get("mediaUrl") or null
              enqueue: true
              order: highestOrder or 1
            )
            queuedTracks.add newTrack
            newTrack.save()
            defer.resolve newTrack.get("id")
          else
            defer.resolve "fail"
        defer.promise()

      #has to be a more efficient way of doing this
      updatePlaylistOrder: ->
        queuedtracks = @getPlaylistEntities()
        return  if queuedtracks.length is 0

        #get the highestOrderedTrackNumber
        highestOrder = queuedtracks.max((t) ->
          t.get "order"
        )

        #update order attribute for all models
        if highestOrder - 1 isnt queuedtracks.length
          console.log "updating track order attributes"
          queuedtracks.forEach (t) ->
            t.set order: t.indexOf(@model) + 1
            t.save()

    Swabcast.reqres.setHandler "entities:playlist", ->
      API.getPlaylistEntities()

    Swabcast.reqres.setHandler "playlist:episode", (uid) ->
      API.getEpisodeEntity uid

    Swabcast.reqres.setHandler "episode:playlist", ->
      API.getPlaylistEntities()

    Swabcast.reqres.setHandler "playlist:addtoqueue", (model) ->
      API.addToPlaylist model

  return
