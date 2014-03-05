(function() {
  requirejs.config({
    jasmine: "../test/lib/jasmine-2.0.0/jasmine",
    "jasmine-html": "../test/lib/jasmine-2.0.0/jasmine-html",
    spec: "../test/spec"
  });

  ({
    shim: {
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

}).call(this);
