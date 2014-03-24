# playlist.coffee
# in addition to being responsible for managing the playlist
# the playlist is responsible for s
define ["app", "apps/config/storage/localstorage", "entities/feed"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->
    Entities.QueuedEpisode = Entities.Episode.extend(
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

    playlist = undefined
    initializePlaylist = ->
      blankPlaylist = new Entities.Playlist()
      blankPlaylist.save()

    #public
    API =
      getEpisodeEntity: (uniqueId) ->
        episode = new Entities.Episode(id: uniqueId)
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
        queuedTracks = new Entities.Playlist()
        defer = $.Deferred()
        queuedTracks.fetch success: (data) ->
          defer.resolve data

        promise = defer.promise()
        $.when(promise).done (queuedtracks) ->

        promise

      addToPlaylist: (model) ->
        queuedTracks = @getPlaylistEntities()
        defer = $.Deferred()

        $.when(queuedTracks).done (tracks) ->
          highestOrder = undefined
          inQueue = undefined
          if tracks.length isnt 0
            inQueue = tracks.find((t) ->
              t.get("uid") is model.get("uid")
            )
            highestOrder = tracks.max((t) ->
              t.get "order"
            )
            highestOrder = highestOrder.get("order") + 1
          unless inQueue
            newTrack = new Swabcast.Entities.QueuedEpisode(
              uid: model.get("uid") or null
              albumArt: model.parent.get("albumArt") or "default.jpg"
              episodeTitle: model.get("episodeTitle") or " "
              feedUrl: model.parent.get("feedUrl") or " "
              episodeParent: model.parent.get("subscriptionTitle") or " "
              mediaUrl: model.get("mediaUrl") or null
              enqueue: true
              order: highestOrder or 1
            )
            tracks.add newTrack
            # tracks.save()
            # TODO should be saved here and then notify view new data available

            ####################################
            # DEBUGGING ONLY -- REMOVE THIS
            ####################################
            console.log("new track in playlist entity", newTrack)

            # Swabcast.trigger "playlist:enqueue", newTrack
            defer.resolve newTrack
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
            console.log t

    Swabcast.reqres.setHandler "entities:playlist", ->
      API.getPlaylistEntities()

    Swabcast.reqres.setHandler "episode:entity", (uid) ->
      API.getEpisodeEntity uid

    Swabcast.reqres.setHandler "episode:playlist", ->
      API.getPlaylistEntities()

    # Swabcast.reqres.setHandler "playlist:first", ->
    #   API.firstInPlaylist()

    Swabcast.reqres.setHandler "playlist:addtoqueue", (model) ->
      API.addToPlaylist model

  return
