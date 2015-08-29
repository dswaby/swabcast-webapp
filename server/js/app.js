"use strict";
var FacebookStrategy, LocalStrategy, async, baucis, callback, db, express, http, mongoose, passport, path, socketIO, theport, uristring;

express = require("express");

http = require("http");

path = require("path");

async = require("async");

baucis = require("baucis");

socketIO = require("socket.io");

mongoose = require("mongoose");

passport = require("passport");

LocalStrategy = require("passport-local").Strategy;

FacebookStrategy = require("passport-facebook").Strategy;

uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/swabcast";

theport = process.env.PORT || 9000;

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
  var Episode, FacebookUserSchema, FbUsers, Keyword, KeywordPopulation, LocalUserSchema, NewEpisodes, Subscribed, SubscribedEpisode, Subscription, SubscriptionModel, UserDocument, UserDocumentModel, Users, app, authenticatedOrNot, userExist;
  authenticatedOrNot = function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/login");
    }
  };
  userExist = function(req, res, next) {
    Users.count({
      username: req.body.username
    }, function(err, count) {
      if (count === 0) {
        next();
      } else {
        res.redirect("/singup");
      }
    });
  };
  app = express();
  app.configure(function() {
    app.set("port", theport);
    app.set("views", __dirname + "../../client/dist");
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
  FbUsers = mongoose.model("fbs", FacebookUserSchema);
  SubscriptionModel = mongoose.model("subscription", Subscription);
  UserDocumentModel = mongoose.model("userDocument", UserDocument);
  app.use(function(req, res, next) {
    console.log("%s %s", req.method, req.url);
    next();
  });
  app.use(express["static"](path.join(__dirname, "../../client/dist/")));
  app.use(express["static"](path.join(__dirname, "../.tmp")));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.methodOverride());
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.use(express.session({
    secret: "SECRET"
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(function(username, password, done) {
    Users.findOne({
      username: username
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      hash(password, user.salt, function(err, hash) {
        if (err) {
          return done(err);
        }
        if (hash === user.hash) {
          return done(null, user);
        }
        done(null, false, {
          message: "Incorrect password."
        });
      });
    });
  }));
  passport.use(new FacebookStrategy({
    clientID: "YOUR ID",
    clientSecret: "YOUR CODE",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  }, function(accessToken, refreshToken, profile, done) {
    FbUsers.findOne({
      fbId: profile.id
    }, function(err, oldUser) {
      var newUser;
      if (oldUser) {
        done(null, oldUser);
      } else {
        newUser = new FbUsers({
          fbId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName
        }).save(function(err, newUser) {
          if (err) {
            throw err;
          }
          done(null, newUser);
        });
      }
    });
  }));
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    Users.findById(id, function(err, user) {
      if (err) {
        done(err);
      }
      done(null, user);
    });
  });

  /**
  @SECTION API
   */
  app.get("/auth/facebook", passport.authenticate("facebook", {
    scope: "email"
  }));
  app.get("/auth/facebook/callback", passport.authenticate("facebook", {
    failureRedirect: "/login"
  }), function(req, res) {
    res.render("loggedin", {
      user: req.user
    });
  });
  app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "../../client/dist/index.html"));
  });
  app.get("/api", function(request, response) {
    response.send("Library API is running");
  });
  app.get("/api/static_collection/", function(request, response) {
    response.sendfile(path.join(__dirname, "../../client/dist/static_feeds.json"));
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
