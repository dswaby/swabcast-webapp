Swabcast
========

  -  Bugs/In Prog
      * Playlist tracks added not rendering until refresh
      * Smooth transitions currently not soo smooth
      * Disabling buttons that
      * Fix strange issue with new Date(milliseconds) where all dates
        set, regardless of ms passed in (typeof number), return Jan 5 1970
      * Styling BIG TIME, looking into [Topcoat][http://topcoat.io/topcoat/]
        consistent and minimal



    Working
      * AMD w/requirejs
      * Mocha BDD Tests
      * Audio Player Queueing
      * r.js optimizer
      * Grunt configuration
      * Express server and mongo config, API
      * Seperation of concerns using Marionette.js Modules
      * documentation generated with docco

    Todo
      * Mocha TDD tests
      * Triggering Play now functionality in
      * Track removal, upnext on end of episode
      * Remove Audio preload
      * disable buttons
      * parsing collections from api calls so they create models correctly
      *

    Further plans
      * implement passport authentication and user registration
      * write rss scraper for periodically checking feeds and adding to collections as
        they come in, taken into consideration when creating mongo schema
      * sync time in current epiosode through webworker or setTimeout loop
      * Feed browser and management of subscriptions
      * Storing file data in indexedDB
