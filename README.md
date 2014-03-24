Swabcast
========
> web app for playing audio feeds

###### [preview](http://app.swa.by/)

######  [generated source docs](http://app.swa.by/docs/)

###### [tests](http://app.swa.by/test/)


Want to contribute?
-------------------
This is a side project I have been working on I thought I would open source in case there is any interest.
It is still in very early development, server hasn't been fleshed out and it still uses static assets I have hardcoded.  Contributions or suggestions for improvements are welcome!

[app info](https://github.com/dswaby/swabstack/tree/master/app)
<br />
[server info](https://github.com/dswaby/swabstack/tree/master/server)


Requirements
  * [compass-sourcemaps --pre](http://compass-style.org/)
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

Default `grunt` task will compile coffescript/sass, generate sass sourcemaps, start express server, run mocha tests, and watch files. Just run

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


