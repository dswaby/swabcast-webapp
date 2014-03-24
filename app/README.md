Front End
=========


Used in this project
--------------------
  * development
    * Grunt
    * Coffeescript
    * requirejs

  * app
    * jquery, jquery-ui, transit.jquery
    * AMD with requirejs
    * almond.js - require.js shim
    * r.js optimizer
    * backbone.js
    * marionette.js
    * foundation CSS/ offcanvas
    * FastClick

  * Testing
    * phantomjs-mocha
    * mocha
    * chai

if you plan to contribute to this project, try to follow the style of [this](http://blog.sourcing.io/mvc-style-guide) post

Bugs/In Prog
------------
  * Playlist tracks added not rendering until refresh
  * Smooth transitions currently not soo smooth
  * Disabling buttons that
  * Fix strange issue with new Date(milliseconds) where all dates
    set, regardless of ms passed in (typeof number), return Jan 5 1970
    consistent and minimal

Working
-------
  * AMD w/requirejs
  * Mocha BDD Test setup, lacking necessary coverage atm
  * Audio Player Queueing
  * r.js optimized
  * Express static server and mongo config, API
  * documentation generated with docco

Todo
----
  * Mocha TDD tests
  * Triggering Play now functionality in
  * Track removal, upnext on end of episode
  * parsing collections returned from mongoose so models resolve correctly
  correctly

Further plans
-------------
  * implement passport authentication and user registration
  * write rss scraper for periodically checking feeds and adding to collections as
    they come in, taken into consideration when creating mongo schema
  * sync time in current epiosode through webworker or setTimeout loop
  * Feed browser and management of subscriptions
  * Storing file data in indexedDB