Swabcast
========
> web app for playing audio feeds

###### [preview](http://app.swa.by/)

######  [generated source docs](http://app.swa.by/docs/)

###### [tests](http://app.swa.by/test/)

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

Want to contribute?
-------------------
This is a side project I have been working on I thought I would open source in case there is any interest.
It is still in very early development, server hasn't been fleshed out and it still uses static assets I have hardcoded.  Contributions or suggestions for improvements are welcome!

Requirements
  * [compass](http://compass-style.org/)
  * [mongodb](http://www.mongodb.org/downloads)
  * [nodejs](http://nodejs.org/)



To install locally you'll need mocha-phantomjs for the test runner

```npm install -g mocha-phantomjs```

if you dont have phantomjs installed run ```npm install -g mocha-phantomjs phantomjs```

Install the foundation gem

```gem install foundation```

clone this repository, then from the root directory run

```[sudo] npm install && bower install```

this will install all dependancies

To generate the project files and run test server run

`grunt`

Here is a list of the grunt tasks
```
       compass  Compile Sass to CSS using Compass *
        cssmin  Minify CSS *
     requirejs  Build a RequireJS project. *
       express  Start an express web server *
       connect  Start a connect web server. *
         watch  Run predefined tasks whenever watched files change.
        coffee  Compile CoffeeScript files into JavaScript *
          copy  Copy files. *
         docco  Docco processor. *
    targethtml  Produces html-output depending on grunt release version *
         shell  Run shell commands *
             a  Alias for "dev", "connect:testserver", "express:dev", "watch"
                tasks.
       default  Alias for "dev", "connect:testserver", "express:dev",
                "shell:mocha-phantomjs", "watch" tasks.
           dev  Alias for "copy:vendorjs", "copy:templates", "compass:app",
                "coffee", "targethtml:app" tasks.
         build  Alias for "copy:templates", "copy:components", "copy:assets",
                "shell:buildRequire", "targethtml:dist", "compass:app",
                "cssmin", "copy:requireBuilt" tasks.
          test  Alias for "coffee:testcoffee", "connect:testserver",
                "watch:tests" tasks.
          docs  Alias for "docco", "copy:docs" tasks.
```

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