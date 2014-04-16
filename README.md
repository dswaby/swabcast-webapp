
Swabcast [![Build Status](https://secure.travis-ci.org/dswaby/swabcast-webapp.png?branch=master)](https://travis-ci.org/dswaby/swabcast-webapp)
========
> web app for playing audio feeds

###### [preview](http://app.swa.by/)


### contribute to this project or make it your own

This is a side project I have been working on when I have time.
It is still in very early stages, server hasn't been fleshed out and it still uses static assets I have hardcoded.  Contributions or suggestions for improvements are welcome!

Requirements
  * [compass](http://compass-style.org/)
  * [mongodb](http://www.mongodb.org/downloads)
  * [nodejs](http://nodejs.org/)



To install locally you'll need mocha-phantomjs for the test runner

```[sudo] npm install -g mocha-phantomjs```

if you dont have phantomjs installed run

```npm install -g mocha-phantomjs phantomjs```


If you want to generate sourcemaps to edit in chrome dev tools you can install compass-sourcemaps

```[sudo] gem install compass-sourcemaps --pre```


Install the foundation gem

```gem install foundation```

clone this repository, then install dependancys by running

```[sudo] npm install && bower install```


Default `grunt` task will compile coffescript/sass, generate sass sourcemaps, start express server, run mocha tests, and watch files.

If you get an error about not being able to connect to mongodb, make sure its installed run `mongod` and then restart `grunt` task

configured grunt tasks
```
       default  Alias for "dev", "connect:testserver", "express:dev",
                "shell:mocha-phantomjs", "watch" tasks.
           dev  subset of common development tasks used in other tasks
          test  for writing tests, only watches test folder and runs on change
          docs  generates docs from source and adds to dist/
         build  creates optimized distribution
```
Tests will run headless through phantom or with the default grunt task running can be viewed
in the browser at [http://localhost:1234/test/TestRunner.html](http://localhost:1234/test/TestRunner.html)


[app info](https://github.com/dswaby/swabstack/tree/master/app)
<br />
[server info](https://github.com/dswaby/swabstack/tree/master/server)

