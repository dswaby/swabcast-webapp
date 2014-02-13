define ["app", "apps/config/storage/localstorage"], (Swabcast) ->
  Swabcast.module "Entities", (Entities, Swabcast, Backbone, Marionette, $, _) ->
    Entities.Episode = Backbone.Model.extend(
      urlRoot: "episode"
      defaults:
        albumArt: "default.jpg"
        episodeTitle: "blank episode"
        episodeParent: "blank podcast"
        mediaUrl: ""
        enqueue: false

      validate: (attrs) ->
        errors = {}
        errors.episodeTitle = "Title Field Required"  unless attrs.episodeTitle
        unless attrs.episodeParent
          errors.episodeParent = "Podcast Name required"
        else
          errors.episodeParent = "podcast name too short"  if attrs.episodeParent.length < 2
        errors  unless _.isEmpty(errors)
    )
    Entities.configureStorage Entities.Episode
    Entities.EpisodeCollection = Backbone.Collection.extend(
      url: "episodes"
      model: Entities.Episode
      comparator: "id"
    )
    Entities.configureStorage Entities.EpisodeCollection
    Entities.PlaylistEpisode = Backbone.Model.extend(
      urlRoot: "playlist"
      defaults:
        albumArt: "default.jpg"
        episodeTitle: "default playlist track"
        episodeParent: "default playlist track"
        mediaUrl: "httpEquiv:"
        enqueue: true
        order: 0
    )
    Entities.configureStorage Entities.PlaylistEpisode
    Entities.Playlist = Backbone.Collection.extend(
      url: "playlist"
      model: Entities.PlaylistEpisode
      comparator: "order"
    )
    Entities.configureStorage Entities.Playlist
    playlistEpisodes = undefined
    initializePlaylist = ->
      playlistEpisodes = new Entities.Playlist([
        uid: "cwgBtx7XPuAfJCAT8LZoK"
        episodeTitle: "67: something about somethin"
        episodeParent: "Primary Podcast"
        albumArt: "default.jpg"
        mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ080ImpactJS.mp3"
        id: "1"
        order: 8
      ,
        uid: "VmchVNtrnEco2WKo7oxKH"
        episodeTitle: "68: something about somethin"
        episodeParent: "Primary Podcast"
        albumArt: "default.jpg"
        mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ080ImpactJS.mp3"
        id: "2"
        order: 1
      ,
        uid: "VyBsTpEVVGHL6KiZ7XKTF"
        episodeTitle: "69: something about somethin"
        episodeParent: "Primary Podcast"
        albumArt: "default.jpg"
        mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ080ImpactJS.mp3"
        id: "3"
        order: 5
      ])
      playlistEpisodes.forEach (playlistEp) ->
        playlistEp.save()



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
        queuedTracks.fetch success: (data) ->
          defer.resolve data

        promise = defer.promise()
        $.when(promise).done (queuedtracks) ->
          promise = queuedtracks.first()

        promise


      #has to be a more efficient way of doing this
      updatePlaylistOrder: ->
        queuedtracks = getPlaylistEntities()
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
