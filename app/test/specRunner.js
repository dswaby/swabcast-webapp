(function() {
  (function() {
    "use strict";
    var specs;
    require.config({
      baseUrl: "..",
      paths: {
        jasmine: "tests/lib/jasmine-2.0.0/jasmine",
        "jasmine-html": "tests/lib/jasmine-2.0.0/jasmine-html",
        boot: "tests/lib/jasmine-2.0.0/boot"
      },
      shim: {
        jasmine: {
          exports: "jasmine"
        },
        "jasmine-html": {
          deps: ["jasmine"],
          exports: "jasmine"
        },
        boot: {
          deps: ["jasmine", "jasmine-html"],
          exports: "jasmine"
        }
      }
    });
    specs = ["tests/spec/routerSpec"];
    require(["boot"], function() {
      require(specs, function() {
        window.onload();
      });
    });
  })();

}).call(this);
