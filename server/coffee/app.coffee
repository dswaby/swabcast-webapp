"use strict"
express = require("express")
http = require("http")
path = require("path")
async = require("async")
baucis = require("baucis")
socketIO = require("socket.io")
mongoose = require("mongoose")
passport = require("passport")
LocalStrategy = require("passport-local").Strategy
FacebookStrategy = require("passport-facebook").Strategy
uristring = process.env.MONGOLAB_URI or process.env.MONGOHQ_URL or "mongodb://localhost/swabcast"
theport = process.env.PORT or 9000

# Makes connection asynchronously.  Mongoose will queue up database
# operations and release them when the connection is complete.
mongoose.connect uristring, (err, res) ->
  if err
    console.log "ERROR connecting to: " + uristring + ". " + err
  else
    console.log "Succeeded connected to: " + uristring
  return

db = mongoose.connection
db.on "error", console.error.bind(console, "connection error:")
db.once "open", callback = ->
  
  # userauths Model Schema 
  
  # FbUsers model Schema 
  
  # Subscription Model Schema 
  
  # UserDocument Model Schema 
  
  # @Model UsersModel 
  
  # @Model Facebook Users Model 
  
  # @Model SubscriptionModel 
  
  # @Model UserDocumentModel 
  
  #
  #     * TODO - add checking validation for existing
  #     * TODO - if (!exists) {attempt parsing/retrieving based on URL}
  #     * Schema for custom subscription feed
  #     
  
  # var CustomRSS = new mongoose.Schema({
  #     feedUrl: String
  # });
  # var CustomFeedModel = mongoose.model( 'CustomRSS', CustomRSS );
  # simple log
  
  # mount static
  
  # include passport authentication middleware
  
  #passport local strategy
  
  # // set the user to req.user and establish a session via a cookie set in the user’s browser
  authenticatedOrNot = (req, res, next) ->
    if req.isAuthenticated()
      next()
    else
      res.redirect "/login"
    return
  userExist = (req, res, next) ->
    Users.count
      username: req.body.username
    , (err, count) ->
      if count is 0
        next()
      else
        
        # req.session.error = "User Exist"
        res.redirect "/singup"
      return

    return
  app = express()
  app.configure ->
    app.set "port", theport
    app.set "views", __dirname + "../../client/dist"
    return

  LocalUserSchema = new mongoose.Schema(
    username: String
    salt: String
    hash: String
    userDocument: String
  )
  FacebookUserSchema = new mongoose.Schema(
    fbId: String
    email:
      type: String
      lowercase: true

    name: String
    userDocument: String
  )
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
  FbUsers = mongoose.model("fbs", FacebookUserSchema)
  SubscriptionModel = mongoose.model("subscription", Subscription)
  UserDocumentModel = mongoose.model("userDocument", UserDocument)
  app.use (req, res, next) ->
    console.log "%s %s", req.method, req.url
    next()
    return

  app.use express.static(path.join(__dirname, "../../client/dist/"))
  app.use express.static(path.join(__dirname, "../.tmp"))
  app.use express.cookieParser()
  app.use express.bodyParser()
  app.use app.router
  app.use express.methodOverride()
  app.use express.errorHandler(
    dumpExceptions: true
    showStack: true
  )
  app.use express.session(secret: "SECRET")
  app.use passport.initialize()
  app.use passport.session()
  passport.use new LocalStrategy((username, password, done) ->
    Users.findOne
      username: username
    , (err, user) ->
      return done(err)  if err
      unless user
        return done(null, false,
          message: "Incorrect username."
        )
      hash password, user.salt, (err, hash) ->
        return done(err)  if err
        return done(null, user)  if hash is user.hash
        done null, false,
          message: "Incorrect password."

        return

      return

    return
  )
  passport.use new FacebookStrategy(
    clientID: "YOUR ID"
    clientSecret: "YOUR CODE"
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  , (accessToken, refreshToken, profile, done) ->
    FbUsers.findOne
      fbId: profile.id
    , (err, oldUser) ->
      if oldUser
        done null, oldUser
      else
        newUser = new FbUsers(
          fbId: profile.id
          email: profile.emails[0].value
          name: profile.displayName
        ).save((err, newUser) ->
          throw err  if err
          done null, newUser
          return
        )
      return

    return
  )
  passport.serializeUser (user, done) ->
    done null, user.id
    return

  passport.deserializeUser (id, done) ->
    Users.findById id, (err, user) ->
      done err  if err
      done null, user
      return

    return

  
  ###*
  @SECTION API
  ###
  app.get "/auth/facebook", passport.authenticate("facebook",
    scope: "email"
  )
  app.get "/auth/facebook/callback", passport.authenticate("facebook",
    failureRedirect: "/login"
  ), (req, res) ->
    res.render "loggedin",
      user: req.user

    return

  app.get "/", (req, res) ->
    res.sendfile path.join(__dirname, "../../client/dist/index.html")
    return

  app.get "/api", (request, response) ->
    response.send "Library API is running"
    return

  app.get "/api/static_collection/", (request, response) ->
    response.sendfile path.join(__dirname, "../../client/dist/static_feeds.json")
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
    
    #will need to get auth_token and retrieve UserDocumentModel._id
    UserDocumentModel.findById "5302cf4471349a081e000007", (err, subscription) ->
      unless err
        res.send subscription
      else
        console.log "subscription not found for id %s, error: %s", req.params.id, err


  
  #TODO - validate
  app.put "/api/subscribed/:id/episode/:episode/:action/", (req, res) ->
    SubscriptionModel.findById req.params.id, req.params.episode, req.params.action, (err, subscription) ->
      unless err
        res.send subscription
      else
        console.log "subscription not found for id %s, error: %s", req.params.id, err


  app.put "/api/subscribe/:id", (req) ->
    
    # get subscription from subscriptions collection
    subscription = ->
      SubscriptionModel.findById req.params.id, (err, subscription) ->
        unless err
          subscription
        else
          console.log "subscription not found for id %s, error: %s", req.params.id, err


    s = new Subscribed(subscription)
    
    #copy subscription to user subscribed document
    UserDocumentModel.findById req.authToken, (err, userDoc) ->
      unless err
        userDoc.Subscribed.push s
        console.log "success!"
      else
        console.log "subscription not found for id %s, error: %s", req.params.id, err

    return

  
  # TODO implement adding custom subscription
  # start server
  http.createServer(app).listen app.get("port"), ->
    console.log "Express App started!"
    return

  return
