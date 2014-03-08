swabcast
========
![Dont be a hater](https://github.com/dswaby/swabcast/blob/master/lolcommits/donthate.png?raw=true)
this repo is for a podcast management site for finding, listening to, syncing and managing podcast feeds

current preview can be found @ [http://swa.by/staging/](http://swa.by/staging/)

This is the repository for the frontend

Using several common lightweight but powerful library

using [backbone.js](http://backbonejs.org/) and [backbone.marionette.js](https://github.com/marionettejs/backbone.marionette) to provide basic structure for js

Following similar patterns found in [Backbone.Marionette.js: A simple Introduction](https://leanpub.com/marionette-gentle-introduction) , would definitly recomend this book

which makes use of the eventaggregator pattern.  Application is organized by breaking application into sub application modules which are responsible for individual backbone.marionette regions. Each Sub application is broken down into regions which are managed by a _controller.js and a _feed.js, view templates are fond in respective region subfolder templates/ folder, backbone model representations are organized in entities/ folder.

Using [requirejs](http://requirejs.org/) for dependany management and uses [underscore templating](http://documentcloud.github.io/underscore/#template)

Set up [Jasmine](http://pivotal.github.io/jasmine/) unit tests for testing however as of this README, project currently lacking any meaningful tests


Configured with a [Grunt.js](http://gruntjs.com/) task runner to run several tasks, hinting, live reload, etcgi


[TODO, goals, expectations, assumtions, etc](https://github.com/dswaby/swabcast/blob/master/TODO.md)


Fuck the API for now, just going to use player.fm's data until the front end of this shit is where I want it to be


example url for json formatted episode feed

https://player.fm/series/8394/at/1386971610.json?episode_detail=full






