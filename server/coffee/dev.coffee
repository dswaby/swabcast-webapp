"use strict"
express = require("express")
http = require("http")
path = require("path")
async = require("async")
socketIO = require("socket.io")
mongoose = require("mongoose")
feeds = require("./../data/feeds")
baucis = require("baucis")


uristring = process.env.MONGOLAB_URI or process.env.MONGOHQ_URL or "mongodb://localhost/swabcast"
theport = process.env.PORT or 1337
mongoose.connect uristring, (err, res) ->
  if err
    console.log "ERROR connecting to: " + uristring + ". " + err
  else
    console.log "Succeeded connected to: " + uristring
  return

db = mongoose.connection
db.on "error", console.error.bind(console, "connection error:")
db.once "open", callback = ->
  app = express()
  app.configure ->
    app.set "port", theport
    app.set "views", __dirname + "./../../client/app"
    return

  
  # userauths Model Schema 
  LocalUserSchema = new mongoose.Schema(
    username: String
    salt: String
    hash: String
    userDocument: String
  )
  
  # FbUsers model Schema 
  FacebookUserSchema = new mongoose.Schema(
    fbId: String
    email:
      type: String
      lowercase: true

    name: String
    userDocument: String
  )
  
  # Subscription Model Schema 
  Keyword = new mongoose.Schema(keyword: String)
  Episode = new mongoose.Schema(
    uid: Number
    mediaUrl: String
    duration: Number
    episodeTitle: String
    episodeSummary: String
  )
  Subscription = new mongoose.Schema(
    feedUrl: String
    subscriptionTitle: String
    summary: String
    albumArt: String
    explicit: Boolean
    keywords: [Keyword]
    episodes: [Episode]
  )
  
  # UserDocument Model Schema 
  NewEpisodes = new mongoose.Schema(newEpisodes: String)
  KeywordPopulation = new mongoose.Schema(
    Keyword: String
    Count: Number
  )
  SubscribedEpisode = new mongoose.Schema(
    uid: Number
    mediaUrl: String
    episodeTitle: String
    episodeSummary: String
    duration: Number
    position: Number
    played: Boolean
    archived: Boolean
  )
  Subscribed = new mongoose.Schema(
    title: String
    feedUrl: String
    feedUid: String
    summary: String
    albumArt: String
    archived: Boolean
    newEpisodes: [NewEpisodes]
    keywords: [Keyword]
    episodes: [SubscribedEpisode]
  )
  UserDocument = new mongoose.Schema(
    userId: String
    keywordPopulation: [KeywordPopulation]
    subscriptions: [Subscribed]
  )
  Users = mongoose.model("userauths", LocalUserSchema)
  SubscriptionModel = mongoose.model("subscription", Subscription)
  UserDocumentModel = mongoose.model("userDocument", UserDocument)

# Clear the database of old vegetables
  mongoose.model("subscription").remove (error) ->
    throw error  if error
    
    # Put the fresh vegetables in the database
    mongoose.model("subscription").create feeds, (error) ->
      throw error  if error
      
      # Create the API routes
      baucis.rest "subscription"
      app.use "/api", baucis()
      
      # Create the app and listen for API requests
      return

    return



  app.use (req, res, next) ->
    console.log "%s %s", req.method, req.url
    next()
    return

  
  # mount static
  app.use express.static(path.join(__dirname, "./../../client/app/assets/"))
  app.use express.static(path.join(__dirname, "./../.tmp"))
  app.use express.bodyParser()
  app.use app.router
  app.use express.methodOverride()
  app.use express.errorHandler(
    dumpExceptions: true
    showStack: true
  )
  app.get "/", (req, res) ->
    res.sendfile path.join(__dirname, "./../../client/app/index.html")
    return
  

  app.get "/api", (request, response) ->
    response.send "Library API is running"
    return

  app.get "/api/subscriptions", (req, res) ->
    SubscriptionModel.find (err, subscriptions) ->
      unless err
        res.send subscriptions
      else
        console.log err


  app.get "/api/subscriptions/:id", (request, response) ->
    SubscriptionModel.findById request.params.id, (err, subscriptions) ->
      unless err
        response.send Subscription
      else
        console.log "subscription not found for id %s, error: %s", request.params.id, err


  app.post "/api/subscriptions", (request, response) ->
    Subscription = new SubscriptionModel(
      feedUrl: request.body.feedUrl
      subscriptionTitle: request.body.subscriptionTitle
      summary: request.body.summary
      albumArt: request.body.albumArt
      explicit: request.body.explicit
      keywords: null
      episodes: null
    )
    Subscription.save (err) ->
      unless err
        console.log "created"
      else
        console.log err

    response.send Subscription

  app.get "/api/subscribed", (req, res) ->
    SubscriptionModel.find (err, subscribed) ->
      unless err
        res.send subscribed
      else
        console.log err


  app.get "/api/subscribed/", (req, res) ->
    UserDocumentModel.findById "5302cf4471349a081e000007", (err, subscription) ->
      unless err
        res.send subscription
      else
        console.log "subscription not found for id %s, error: %s", req.params.id, err


  app.put "/api/subscribed/:id/episode/:episode/:action/", (req, res) ->
    SubscriptionModel.findById req.params.id, req.params.episode, req.params.action, (err, subscription) ->
      unless err
        res.send subscription
      else
        console.log "subscription not found for id %s, error: %s", req.params.id, err


  app.put "/api/subscribe/:id", (req) ->
    subscription = ->
      SubscriptionModel.findById req.params.id, (err, subscription) ->
        unless err
          subscription
        else
          console.log "subscription not found for id %s, error: %s", req.params.id, err


    s = new Subscribed(subscription)
    UserDocumentModel.findById req.authToken, (err, userDoc) ->
      unless err
        userDoc.Subscribed.push s
        console.log "success!"
      else
        console.log "subscription not found for id %s, error: %s", req.params.id, err

    return

  http.createServer(app).listen app.get("port"), ->
    console.log "Express App started!"
    return

  return
