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
      foundation: "vendor/foundation"
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
      localstorage: ["backbone"],
      "vendor/foundation.offcanvas": {
        deps: ["jquery", "foundation"]
      },
      "vendor/foundation.reveal": {
        deps: ["jquery", "foundation"]
      }
    },
    name: "main",
    out: "main.min.js"
  });

  require(["app"], function(Swabcast) {
    return Swabcast.start();
  });

  requirejs(["jquery", "foundation", "vendor/foundation.offcanvas", "vendor/foundation.reveal"], function($) {
    (function($, window, undefined_) {
      var $doc, Modernizr;
      $doc = $(document);
      Modernizr = window.Modernizr;
      return $(document).foundation();
    })($, window);
  });

}).call(this);
