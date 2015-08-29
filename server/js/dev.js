"use strict";
var async, baucis, callback, db, express, feeds, http, mongoose, path, socketIO, theport, uristring;

express = require("express");

http = require("http");

path = require("path");

async = require("async");

socketIO = require("socket.io");

mongoose = require("mongoose");

feeds = require("./../data/feeds");

baucis = require("baucis");

uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/swabcast";

theport = process.env.PORT || 1337;

mongoose.connect(uristring, function(err, res) {
  if (err) {
    console.log("ERROR connecting to: " + uristring + ". " + err);
  } else {
    console.log("Succeeded connected to: " + uristring);
  }
});

db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", callback = function() {
  var Episode, FacebookUserSchema, Keyword, KeywordPopulation, LocalUserSchema, NewEpisodes, Subscribed, SubscribedEpisode, Subscription, SubscriptionModel, UserDocument, UserDocumentModel, Users, app;
  app = express();
  app.configure(function() {
    app.set("port", theport);
    app.set("views", __dirname + "./../../client/app");
  });
  LocalUserSchema = new mongoose.Schema({
    username: String,
    salt: String,
    hash: String,
    userDocument: String
  });
  FacebookUserSchema = new mongoose.Schema({
    fbId: String,
    email: {
      type: String,
      lowercase: true
    },
    name: String,
    userDocument: String
  });
  Keyword = new mongoose.Schema({
    keyword: String
  });
  Episode = new mongoose.Schema({
    uid: Number,
    mediaUrl: String,
    duration: Number,
    episodeTitle: String,
    episodeSummary: String
  });
  Subscription = new mongoose.Schema({
    feedUrl: String,
    subscriptionTitle: String,
    summary: String,
    albumArt: String,
    explicit: Boolean,
    keywords: [Keyword],
    episodes: [Episode]
  });
  NewEpisodes = new mongoose.Schema({
    newEpisodes: String
  });
  KeywordPopulation = new mongoose.Schema({
    Keyword: String,
    Count: Number
  });
  SubscribedEpisode = new mongoose.Schema({
    uid: Number,
    mediaUrl: String,
    episodeTitle: String,
    episodeSummary: String,
    duration: Number,
    position: Number,
    played: Boolean,
    archived: Boolean
  });
  Subscribed = new mongoose.Schema({
    title: String,
    feedUrl: String,
    feedUid: String,
    summary: String,
    albumArt: String,
    archived: Boolean,
    newEpisodes: [NewEpisodes],
    keywords: [Keyword],
    episodes: [SubscribedEpisode]
  });
  UserDocument = new mongoose.Schema({
    userId: String,
    keywordPopulation: [KeywordPopulation],
    subscriptions: [Subscribed]
  });
  Users = mongoose.model("userauths", LocalUserSchema);
  SubscriptionModel = mongoose.model("subscription", Subscription);
  UserDocumentModel = mongoose.model("userDocument", UserDocument);
  mongoose.model("subscription").remove(function(error) {
    if (error) {
      throw error;
    }
    mongoose.model("subscription").create(feeds, function(error) {
      if (error) {
        throw error;
      }
      baucis.rest("subscription");
      app.use("/api", baucis());
    });
  });
  app.use(function(req, res, next) {
    console.log("%s %s", req.method, req.url);
    next();
  });
  app.use(express["static"](path.join(__dirname, "./../../client/app/assets/")));
  app.use(express["static"](path.join(__dirname, "./../.tmp")));
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.methodOverride());
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "./../../client/app/index.html"));
  });
  app.get("/api", function(request, response) {
    response.send("Library API is running");
  });
  app.get("/api/subscriptions", function(req, res) {
    return SubscriptionModel.find(function(err, subscriptions) {
      if (!err) {
        return res.send(subscriptions);
      } else {
        return console.log(err);
      }
    });
  });
  app.get("/api/subscriptions/:id", function(request, response) {
    return SubscriptionModel.findById(request.params.id, function(err, subscriptions) {
      if (!err) {
        return response.send(Subscription);
      } else {
        return console.log("subscription not found for id %s, error: %s", request.params.id, err);
      }
    });
  });
  app.post("/api/subscriptions", function(request, response) {
    Subscription = new SubscriptionModel({
      feedUrl: request.body.feedUrl,
      subscriptionTitle: request.body.subscriptionTitle,
      summary: request.body.summary,
      albumArt: request.body.albumArt,
      explicit: request.body.explicit,
      keywords: null,
      episodes: null
    });
    Subscription.save(function(err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return response.send(Subscription);
  });
  app.get("/api/subscribed", function(req, res) {
    return SubscriptionModel.find(function(err, subscribed) {
      if (!err) {
        return res.send(subscribed);
      } else {
        return console.log(err);
      }
    });
  });
  app.get("/api/subscribed/", function(req, res) {
    return UserDocumentModel.findById("5302cf4471349a081e000007", function(err, subscription) {
      if (!err) {
        return res.send(subscription);
      } else {
        return console.log("subscription not found for id %s, error: %s", req.params.id, err);
      }
    });
  });
  app.put("/api/subscribed/:id/episode/:episode/:action/", function(req, res) {
    return SubscriptionModel.findById(req.params.id, req.params.episode, req.params.action, function(err, subscription) {
      if (!err) {
        return res.send(subscription);
      } else {
        return console.log("subscription not found for id %s, error: %s", req.params.id, err);
      }
    });
  });
  app.put("/api/subscribe/:id", function(req) {
    var s, subscription;
    subscription = function() {
      return SubscriptionModel.findById(req.params.id, function(err, subscription) {
        if (!err) {
          return subscription;
        } else {
          return console.log("subscription not found for id %s, error: %s", req.params.id, err);
        }
      });
    };
    s = new Subscribed(subscription);
    UserDocumentModel.findById(req.authToken, function(err, userDoc) {
      if (!err) {
        userDoc.Subscribed.push(s);
        return console.log("success!");
      } else {
        return console.log("subscription not found for id %s, error: %s", req.params.id, err);
      }
    });
  });
  http.createServer(app).listen(app.get("port"), function() {
    console.log("Express App started!");
  });
});
