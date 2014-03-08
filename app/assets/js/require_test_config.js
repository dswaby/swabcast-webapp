(function() {
  requirejs.config({
    baseUrl: "../assets/js",
    paths: {
      backbone: "vendor/backbone",
      localstorage: "vendor/backbone.localstorage",
      jquery: "vendor/jquery",
      "jquery-ui": "vendor/jquery-ui",
      underscore: "vendor/underscore",
      marionette: "vendor/backbone.marionette",
      tpl: "vendor/tpl",
      json2: "vendor/json2",
      jasmine: "../test/lib/jasmine-2.0.0/jasmine",
      "jasmine-html": "../test/lib/jasmine-2.0.0/jasmine-html",
      spec: "../test/spec"
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
      jasmine: {
        deps: "",
        exports: "jasmine"
      },
      "jasmine-html": {
        deps: ["jasmine"],
        exports: "jasmine"
      }
    }
  });

  require(["app"], function(Swabcast) {
    return Swabcast.start();
  });

  require(["app", "jasmine-html"], function($, jasmine) {
    var htmlReporter, jasmineEnv, specs;
    jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;
    htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };
    specs = [];
    specs.push("lib/jasmine/spec/notepadSpec");
    $(function() {
      require(specs, function(spec) {
        jasmineEnv.execute();
      });
    });
  });

}).call(this);
