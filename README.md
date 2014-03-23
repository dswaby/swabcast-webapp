Swabcast
========

app dist preview [http://app.swa.by/](http://app.swa.by/)
generated source docs [http://app.swa.by/docs/](http://app.swa.by/docs/)
tests [http://swa.by/test/](http://app.swa.by/test/)

Want to contribute?
-------------------
This is a side project I have been working on I thought I would open source in case there is any interest.
It is still in very early development, server hasn't been fleshed out and it still uses static assets I have hardcoded.  Contributions or suggestions for improvements are welcome!

Requirements
  * compass
  * mongodb
  * nodejs

To install clone this repository, then from the repository folder run
```shell
 [sudo] npm install && bower install
```




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
    * foundation CSS/ fastclick

  * Server
    * node.js
    * express.js framework
    * mongodb
    * mongoose


  * Testing
    * phantomjs-mocha
    * mocha
    * chai

ASSUMPTIONS
-----------
> * GET /api/subscribed/   will return json representation of a users subscribed feeds
> * GET /api/playlist      will return json representation of episodes a user has subscribed to
> * GET /player            will check localstorage of browser for saved audio data

Bugs/In Prog
------------
  * Playlist tracks added not rendering until refresh
  * Smooth transitions currently not soo smooth
  * Disabling buttons that
  * Fix strange issue with new Date(milliseconds) where all dates
    set, regardless of ms passed in (typeof number), return Jan 5 1970
  * Styling BIG TIME, looking into [Topcoat][http://topcoat.io/topcoat/]
    consistent and minimal

Working
-------
  * AMD w/requirejs
  * Mocha BDD Tests
  * Audio Player Queueing
  * r.js optimizer
  * Grunt configuration
  * Express server and mongo config, API
  * Seperation of concerns using Marionette.js Modules
  * documentation generated with docco

Todo
----
  * Mocha TDD tests
  * Triggering Play now functionality in
  * Track removal, upnext on end of episode
  * Remove Audio preload
  * disable buttons
  * parsing collections from api calls so they create models correctly

Further plans
-------------
  * implement passport authentication and user registration
  * write rss scraper for periodically checking feeds and adding to collections as
    they come in, taken into consideration when creating mongo schema
  * sync time in current epiosode through webworker or setTimeout loop
  * Feed browser and management of subscriptions
  * Storing file data in indexedDB

