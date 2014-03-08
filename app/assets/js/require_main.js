(function() {
  requirejs.config({
    baseUrl: "assets/js",
    paths: {
      backbone: "vendor/backbone",
      localstorage: "vendor/backbone.localstorage",
      jquery: "vendor/jquery",
      "jquery-ui": "vendor/jquery-ui",
      underscore: "vendor/underscore",
      marionette: "vendor/backbone.marionette",
      tpl: "vendor/tpl",
      json2: "vendor/json2",
      f: "vendor/foundation"
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
      "jquery-ui": ["jquery"],
      localstorage: ["backbone"],
      "vendor/foundation.offcanvas": {
        deps: ["jquery"]
      },
      "vendor/foundation": {
        deps: ["jquery"]
      },
      "vendor/foundation.reveal": {
        deps: ["jquery"]
      }
    },
    name: "main",
    out: "main.min.js"
  });

  require(["app"], function(Swabcast) {
    return Swabcast.start();
  });

}).call(this);
