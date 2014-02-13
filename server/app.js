'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
// var baucis = require('baucis');
var socketIO = require('socket.io');
var mongoose = require('mongoose');


// start mongoose
mongoose.connect('mongodb://localhost/subscriptions');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    /*
    * Schema for a subscription model
    * @property feedUid
    * referenced by episode schema 
    * @readOnly
    */
    var Subscription = new mongoose.Schema({
        feedUid: String,
        feedUrl: String,
        subscriptionTitle: String,
        summary: String,
        albumArt: String,
        keywords: [{
            keyword: String
        }]
    });
    /* @uses Subscription Schema
    * @uses mongoose.model
    */
    var SubscriptionModel = mongoose.model( 'Subscription', Subscription );
    /*
    * Schema for an episode model
    * @property subscription_id
    * references subscription.
    * @readOnly
    */
    var Episode = new mongoose.Schema({
        uid: Number,
        mediaUrl: String,
        episodeTitle: String,
        episodeSummary: String, 
        duration: Number,
        subscription_id: String
    });
    /*
    * Schema for a individual user subscription model
    * includes flags for data/usage
    */
    var Subscribed = new mongoose.Schema({
        feedUid: String,
        feedUrl: String,
        subscriptionTitle: String,
        summary: String,
        albumArt: String,
        keywords: [{
            keyword: String
        }],
        explicit: Boolean,
        episodes: [{
            uid: Number,
            mediaUrl: String,
            episodeTitle: String,
            episodeSummary: String, 
            duration: Number,
            episodePosition: Number,
            archived: Boolean,
            publishDate: Date
        }]
    });
    /* 
    * @uses Subscription Schema
    * @uses mongoose.model
    */
    var SubscribedModel = mongoose.model( 'Subscribed', Subscribed );
    /* 
    * TODO - add checking validation for existing
    * TODO - if (!exists) {attempt parsing/retrieving based on URL}
    * Schema for custom subscription feed
    */
    var CustomRSS = new mongoose.Schema({
        feedUrl: String
    });
    var CustomFeedModel = mongoose.model( 'CustomRSS', CustomRSS );


    /* set Baucis */
    // baucis.rest({
    //     singular: 'test'
    // });

    var app = express();

    app.configure(function(){
        app.set('port', 9000);

        app.set('view engine', 'handlebars');
        app.set('views', __dirname + '../app/scripts/views');
    });

    // app.use('/api/v1', baucis());

    // simple log
    app.use(function(req, res, next){
      console.log('%s %s', req.method, req.url);
      next();
    });

    // mount static
    // app.use(express.static( path.join( __dirname, '../app') ));
    // app.use(express.static( path.join( __dirname, '../.tmp') ));


    // route index.html
    app.get('/', function(req, res){
      res.sendfile( path.join( __dirname, '../app/index.html' ) );
    });

    /* HTTP Method GET
    * @uses Subscription
    * URL api/subscriptions
    * @param req request
    * @param res response 
    * @return returns all subscription info models
    *
    * @example request
        jQuery.get('api/subscriptions', function(data, textStatus, jqXHR) {
            console.log(textStatus); //success or err
            console.log(jqXHR); //object
        });
    */
    app.get('api/subscriptions', function (req, res) {
        return SubscriptionModel.find (function( err, subscriptions) {
            if (!err) {
                return res.send(subscriptions);
            } else {
                return console.log( err );
            }
        });
    });

    /* HTTP Method GET
    * URL api/subscribed
    * @param req request
    * @param res response 
    * @return collection of all subscribed documents
    *
    * @example request
        jQuery.get('api/subscribed', function(data, textStatus, jqXHR) {
            console.log(textStatus); //success or err
            console.log(jqXHR); //object
        });
    */
    app.get('api/subscribed', function (req, res) {
        return SubscribedModel.find (function( err, subscribed) {
            if (!err) {
                return res.send(subscribed);
            } else {
                return console.log( err );
            }
        });
    });

    /*
    * URL api/subscribed/:id
    * @param id subscribed feedUid
    * @return 
    */
    app.get('api/subscribed/:id', function (req, res) {
        return SubscriptionModel.findById ( req.params.id, function( err, subscription) {
            if (!err) {
                return res.send(subscription);
            } else {
                return console.log( "subscription not found for id %s, error: %s", req.params.id, err );
            }
        });
    });
    /*
    * URL api/subscriptions/:id
    * @param id subscription ID
    * @return 
    */
    app.get('api/subscriptions/:id', function (req, res) {
        return SubscriptionModel.findById ( req.params.id, function( err, subscription) {
            if (!err) {
                return res.send(subscription);
            } else {
                return console.log( "subscription not found for id %s, error: %s", req.params.id, err );
            }
        });
    });

    // TODO implement checking of existing subscriptions, if not, trying to parse url based on url providd
    app.post('api/custom', function (req, res) {
        var customRSS = new customFeedModel({
            feedUrl = req.body.feedUrl
        });
        customRSS.save( function (err) {
            if (!err) {
                return console.log(added);
            } else {
                return console.log( err );
            }
        });
        return res.send(customRSS);
    });

    // start server
    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express App started!');
    });
});


