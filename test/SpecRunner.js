requirejs.config({
    baseUrl: "./../app/assets/js",
    paths: {
        backbone: "./../app/assets/bower_components/backbone/backbone"
        localstorage: "./../app/assets/bower_components/backbone.localstorage/backbone.localstorage"
        jquery: "./../app/assets/bower_components/jquery/jquery"
        "jquery-ui": "./../app/assets/bower_components/jquery-ui/ui/jquery-ui"
        underscore: "./../app/assets/bower_components/underscore/underscore"
        marionette: "./../app/assets/bower_components/backbone.marionette/lib/backbone.marionette"
        tpl: "./../app/assets/bower_components/requirejs-tpl/tpl"
        json2: "./../app/assets/bower_components/json2/json2"
        foundation: "./../app/assets/bower_components/foundation/js/foundation/foundation"
        offcanvas: "./../app/assets/bower_components/foundation/js/foundation/foundation.offcanvas"
        fastclick: "./../app/assets/bower_components/fastclick/lib/fastclick"
        toastr: "./../app/assets/bower_components/toastr/toastr"
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


