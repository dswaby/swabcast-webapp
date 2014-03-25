'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
// var baucis = require('baucis');
var socketIO = require('socket.io');
var mongoose = require('mongoose');
// var passport = require("passport");
// var LocalStrategy = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;

var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/swabcast';
var theport = process.env.PORT || 9000;
// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function(err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    var app = express();
    app.configure(function() {
        app.set('port', theport);
        app.set('view engine', 'handlebars');
        app.set('views', __dirname + '../app/scripts/views');
    });
    /* userauths Model Schema */
    var LocalUserSchema = new mongoose.Schema({
        username: String,
        salt: String,
        hash: String,
        userDocument: String
    });
    /* FbUsers model Schema */
    var FacebookUserSchema = new mongoose.Schema({
        fbId: String,
        email: {
            type: String,
            lowercase: true
        },
        name: String,
        userDocument: String
    });
    /* Subscription Model Schema */
    var Keyword = new mongoose.Schema({
        keyword: String
    });
    var Episode = new mongoose.Schema({
        uid: Number,
        mediaUrl: String,
        duration: Number,
        episodeTitle: String,
        episodeSummary: String
    });
    var Subscription = new mongoose.Schema({
        feedUrl: String,
        subscriptionTitle: String,
        summary: String,
        albumArt: String,
        explicit: Boolean,
        keywords: [Keyword],
        episodes: [Episode]
    });
    /* UserDocument Model Schema */
    var NewEpisodes = new mongoose.Schema({
        newEpisodes: String
    });
    var KeywordPopulation = new mongoose.Schema({
        Keyword: String,
        Count: Number
    });
    var SubscribedEpisode = new mongoose.Schema({
        uid: Number,
        mediaUrl: String,
        episodeTitle: String,
        episodeSummary: String,
        duration: Number,
        position: Number,
        played: Boolean,
        archived: Boolean
    });
    var Subscribed = new mongoose.Schema({
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
    var UserDocument = new mongoose.Schema({
        userId: String,
        keywordPopulation: [KeywordPopulation],
        subscriptions: [Subscribed]
    });
    /* @Model UsersModel */
    var Users = mongoose.model('userauths', LocalUserSchema);
    /* @Model Facebook Users Model */
    // var FbUsers = mongoose.model('fbs', FacebookUserSchema);
    /* @Model SubscriptionModel */
    var SubscriptionModel = mongoose.model('subscription', Subscription);
    /* @Model UserDocumentModel */
    var UserDocumentModel = mongoose.model('userDocument', UserDocument);
    /*
     * TODO - add checking validation for existing
     * TODO - if (!exists) {attempt parsing/retrieving based on URL}
     * Schema for custom subscription feed
     */
    // var CustomRSS = new mongoose.Schema({
    //     feedUrl: String
    // });
    // var CustomFeedModel = mongoose.model( 'CustomRSS', CustomRSS );
    // simple log
    app.use(function(req, res, next) {
        console.log('%s %s', req.method, req.url);
        next();
    });
    // mount static
    app.use(express.static(path.join(__dirname, '../app')));
    app.use(express.static(path.join(__dirname, '../.tmp')));
    // include passport authentication middleware
    // app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use( app.router );
    app.use( express.methodOverride() );
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
    // app.use(express.session({
    //     secret: 'SECRET'
    // }));
    // app.use(passport.initialize());
    // app.use(passport.session());
    //passport local strategy
    // passport.use(new LocalStrategy(function(username, password, done) {
    //     Users.findOne({
    //         username: username
    //     }, function(err, user) {
    //         if (err) {
    //             return done(err);
    //         }
    //         if (!user) {
    //             return done(null, false, {
    //                 message: 'Incorrect username.'
    //             });
    //         }
    //         hash(password, user.salt, function(err, hash) {
    //             if (err) {
    //                 return done(err);
    //             }
    //             if (hash == user.hash) return done(null, user);
    //             done(null, false, {
    //                 message: 'Incorrect password.'
    //             });
    //         });
    //     });
    // }));
    // passport.use(new FacebookStrategy({
    //     clientID: 'YOUR ID',
    //     clientSecret: 'YOUR CODE',
    //     callbackURL: 'http://localhost:3000/auth/facebook/callback'
    // }, function(accessToken, refreshToken, profile, done) {
    //     FbUsers.findOne({
    //         fbId: profile.id
    //     }, function(err, oldUser) {
    //         if (oldUser) {
    //             done(null, oldUser);
    //         } else {
    //             var newUser = new FbUsers({
    //                 fbId: profile.id,
    //                 email: profile.emails[0].value,
    //                 name: profile.displayName
    //             }).save(function(err, newUser) {
    //                 if (err) {
    //                     throw err;
    //                 }
    //                 done(null, newUser);
    //             });
    //         }
    //     });
    // }));
    // // set the user to req.user and establish a session via a cookie set in the user’s browser
    // passport.serializeUser(function(user, done) {
    //     done(null, user.id);
    // });
    // passport.deserializeUser(function(id, done) {
    //     Users.findById(id, function(err, user) {
    //         if (err) {
    //             done(err);
    //         }
    //         done(null, user);
    //     });
    // });

    // function authenticatedOrNot(req, res, next) {
    //     if (req.isAuthenticated()) {
    //         next();
    //     } else {
    //         res.redirect('/login');
    //     }
    // }

    // function userExist(req, res, next) {
    //     Users.count({
    //         username: req.body.username
    //     }, function(err, count) {
    //         if (count === 0) {
    //             next();
    //         } else {
    //             // req.session.error = "User Exist"
    //             res.redirect('/singup');
    //         }
    //     });
    // }
    /**
     **  @SECTION API
     **/
    // app.get('/auth/facebook', passport.authenticate('facebook', {
    //     scope: 'email'
    // }));
    // app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    //     failureRedirect: '/login'
    // }), function(req, res) {
    //     res.render('loggedin', {
    //         user: req.user
    //     });
    // });
    app.get('/', function(req, res) {
        res.sendfile(path.join(__dirname, '../app/index.html'));
    });
    app.get( '/api', function( request, response ) {
        response.send( 'Library API is running' );
    });
    app.get( '/api/static_collection/', function( request, response ) {
        response.sendfile(path.join(__dirname, '../app/static_feeds.json'));
    });
    app.get('/api/subscriptions', function(req, res) {
        return SubscriptionModel.find(function(err, subscriptions) {
            if (!err) {
                return res.send(subscriptions);
            } else {
                return console.log(err);
            }
        });
    });
    app.get('/api/subscriptions/:id', function(request, response) {
        return SubscriptionModel.findById(request.params.id, function(err, subscriptions) {
            if (!err) {
                return response.send(Subscription);
            } else {
                return console.log('subscription not found for id %s, error: %s', request.params.id, err);
            }
        });
    });
    app.post( '/api/subscriptions', function( request, response ) {

        var Subscription = new SubscriptionModel({
            feedUrl: request.body.feedUrl,
            subscriptionTitle: request.body.subscriptionTitle,
            summary: request.body.summary,
            albumArt: request.body.albumArt,
            explicit: request.body.explicit,
            keywords: null,
            episodes: null
        });
        Subscription.save( function( err ) {
            if( !err ) {
                return console.log( 'created' );
            } else {
                return console.log( err );
            }
        });
        return response.send( Subscription );
    });
    app.get('/api/subscribed', function(req, res) {
        return SubscriptionModel.find(function(err, subscribed) {
            if (!err) {
                return res.send(subscribed);
            } else {
                return console.log(err);
            }
        });
    });
    app.get('/api/subscribed/', function(req, res) {
        //will need to get auth_token and retrieve UserDocumentModel._id
        return UserDocumentModel.findById('5302cf4471349a081e000007', function(err, subscription) {
            if (!err) {
                return res.send(subscription);
            } else {
                return console.log('subscription not found for id %s, error: %s', req.params.id, err);
            }
        });
    });
    //TODO - validate
    app.put('/api/subscribed/:id/episode/:episode/:action/', function(req, res) {
        return SubscriptionModel.findById(req.params.id, req.params.episode, req.params.action, function(err, subscription) {
            if (!err) {
                return res.send(subscription);
            } else {
                return console.log('subscription not found for id %s, error: %s', req.params.id, err);
            }
        });
    });
    app.put('/api/subscribe/:id', function(req) {
        // get subscription from subscriptions collection
        var subscription = function() {
            return SubscriptionModel.findById(req.params.id, function(err, subscription) {
                if (!err) {
                    return subscription;
                } else {
                    return console.log('subscription not found for id %s, error: %s', req.params.id, err);
                }
            });
        };
        var s = new Subscribed(subscription);
        //copy subscription to user subscribed document
        UserDocumentModel.findById(req.authToken, function(err, userDoc) {
            if (!err) {
                userDoc.Subscribed.push(s);
                return console.log('success!');
            } else {
                return console.log('subscription not found for id %s, error: %s', req.params.id, err);
            }
        });
    });
    // TODO implement adding custom subscription
    // start server
    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express App started!');
    });
});


