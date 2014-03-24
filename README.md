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

(Info on front-end)[https://github.com/dswaby/swabstack/tree/master/app]
(Info on server)[https://github.com/dswaby/swabstack/tree/master/server]


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


