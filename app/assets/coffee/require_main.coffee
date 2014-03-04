requirejs.config
  baseUrl: "assets/js"
  paths:
    backbone: "vendor/backbone"
    localstorage: "vendor/backbone.localstorage"
    jquery: "vendor/jquery"
    "jquery-ui": "vendor/jquery-ui"
    underscore: "vendor/underscore"
    marionette: "vendor/backbone.marionette"
    tpl: "vendor/tpl"
    json2: "vendor/json2"
    jasmine: "../test/lib/jasmine-2.0.0/jasmine", "../test/lib/jasmine-2.0.0/jasmine-html"
    # foundation: "vendor/foundation"
    # offcanvas: "vendor/foundation.offcanvas"
    # reveal: "vendor/foundation.reveal"

  #syphon: 'vendor/backbone.syphon',
  shim:
    underscore:
      exports: "_"

    backbone:
      deps: ["jquery", "underscore", "json2"]
      exports: "Backbone"

    marionette:
      deps: ["backbone"]
      exports: "Marionette"

    "jquery-ui": ["jquery"]

    #   'spin.jquery':['jquery'],
    #   spin: ['spin.jquery'],
    localstorage: ["backbone"]

    jasmine:
      exports: "jasmine"
      "jasmine-html"
        deps: ["jasmine"]
        exports: "jasmine"


    # foundation: ["jquery"]
    #   deps:
    #   exports: "fn"

    # "reveal": ["foundation"]

    # "offcanvas": ["foundation"]


#syphon:['backbone']
require ["app"], (Swabcast) ->
  Swabcast.start()
