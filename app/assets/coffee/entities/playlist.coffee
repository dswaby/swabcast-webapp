define ["app", "apps/config/storage/localstorage", "entities/feed"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->

    Entities.QueuedEpisode = Entities.Episode.extend(
      urlRoot: "playlist"
      order: 0
    )

    Entities.Playlist = Entities.Episodes.extend(
      url: "playlist"
      model: Entities.QueuedEpisode
      comparator: "id"
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
        episodes = new Entities.Playlist()
        defer = $.Deferred()
        episodes.fetch success: (data) ->
          defer.resolve data

        promise = defer.promise()
        $.when(promise).done (episodes) ->
          if episodes.length is 0
            models = initializeEpisodes()
            episodes.reset models

        promise

      getPlaylistEntities: ->
        queuedTracks = new Entities.Playlist()
        defer = $.Deferred()
        queuedTracks.fetch success: (data) ->
          defer.resolve data

        promise = defer.promise()
        $.when(promise).done (queuedtracks) ->

        promise

      firstInPlaylist: ->
        queuedTracks = new Entities.Playlist()
        defer = $.Deferred()
        queuedTracks.fetch
        success: (playlist) ->
          episodes = playlist.get("episodes")
          if episodes.length
            defer.resolve episodes[0]
          else
            defer.resolve 'undefined'
        error: ->
            defer.resolve `undefined`

        defer.promise()
        # $.when(promise).done (playlist) ->
        #   episodes = playlist.get("episodes")
        #   if not episodes.length
        #     return promise

        #   promise = Entities.Feed.getEpisodeEntity(playlist.episodes[0])

        # promise


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

    Swabcast.reqres.setHandler "playlist:first", ->
      API.firstInPlaylist()


  return
