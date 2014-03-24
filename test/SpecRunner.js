
requirejs.config({
    baseUrl: "./../app/assets/js",
    paths: {
      backbone: "vendor/backbone",
      localstorage: "vendor/backbone.localstorage",
      jquery: "vendor/jquery",
      "jquery-ui": "vendor/jquery-ui",
      underscore: "vendor/underscore",
      marionette: "vendor/backbone.marionette",
      tpl: "vendor/tpl",
      json2: "vendor/json2",
      foundation: "vendor/foundation",
      chai: "../app/assets/bower_components/chai/chai",
      mocha: "../app/assets/bower_components/mocha/mocha"
    },
    shim: {
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ["jquery", "underscore", "json2"],
        exports: "Backbone"
      },
      marionette: {
        deps: ["backbone"],
        exports: "Marionette"
      },
      foundation: {
        deps: ["jquery"],
        exports: "Foundation"
      },
      "jquery-ui": ["jquery"],
      transit: {
        deps: ["jquery"]
      },
      localstorage: ["backbone"],
      "vendor/foundation.offcanvas": {
        deps: ["jquery", "foundation"]
      },
      "vendor/foundation.reveal": {
        deps: ["jquery", "foundation"]
      },
      "vendor/foundation.fastclick": {
        deps: ["jquery", "foundation"]
      }
    }
});

require([
  //files being tested
  "app",
  "./../../../test/spec/entitiesTestSuite",
  "./../../../test/spec/feed",
  "./../../../test/spec/playlist",
  "./../../../test/spec/player"

],
function(Swabcast) {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { mocha.run(); }
});


