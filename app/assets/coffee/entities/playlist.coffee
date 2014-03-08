define ["app", "apps/config/storage/localstorage"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->

    Entities.Playlist = Backbone.Model.extend(
      url: "api/playlist"
      defaults:
        name: "default"
        episodes: []
      validate: (attrs) ->
        if attrs.episodes.length
          for epId in attrs.episodes
            epInfo = epId.split("-",2)
            if epId[0].length > 32
              return "Error with subscription Id for playlist item"
            if epId[1].length > 32
              return "Playlist Error"
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

      getEpisodeEntities: ->
        episodes = new Entities.EpisodeCollection()
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


    Swabcast.reqres.setHandler "episode:entities", ->
      API.getEpisodeEntities()

    Swabcast.reqres.setHandler "episode:entity", (uid) ->
      API.getEpisodeEntity uid

    Swabcast.reqres.setHandler "episode:playlist", ->
      API.getPlaylistEntities()

    Swabcast.reqres.setHandler "playlist:first", ->
      API.firstInPlaylist()


  return
