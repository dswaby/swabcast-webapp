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
      foundation: "vendor/foundation",
      jasmine: "vendor/jasmine",
      "jasmine-html": "vendor/jasmine-html",
      spec: "../../../test/jasmine/spec/"
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
      },
      "vendor/foundation.fastclick": {
        deps: ["jquery", "foundation"]
      },
      jasmine: {
        exports: "jasmine"
      },
      "jasmine-html": {
        deps: ["jasmine"]
      },
      exports: "jasmine"
    },
    name: "main",
    out: "main.min.js"
  });

  require(["vendor/underscore", "vendor/jquery", "vendor/jasmine-html"], function(_, $, jasmine) {
    var htmlReporter, jasmineEnv, specs;
    jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;
    htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };
    specs = [];
    specs.push("spec/FeedSpec");
    $(function() {
      require(specs, function() {
        jasmineEnv.execute();
      });
    });
  });

}).call(this);
