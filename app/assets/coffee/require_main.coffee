requirejs.config
  baseUrl: "assets/js"
  # urlArgs: 'cb=' + Math.random()

  paths:
    backbone: "vendor/backbone"
    localstorage: "vendor/backbone.localstorage"
    jquery: "vendor/jquery"
    "jquery-ui": "vendor/jquery-ui"
    underscore: "vendor/underscore"
    marionette: "vendor/backbone.marionette"
    tpl: "vendor/tpl"
    json2: "vendor/json2"
    foundation: "vendor/foundation"
    fastclick: "vendor/fastclick"
    # transit: "vendor/jquery.transit"



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

    foundation:
      deps: ["jquery"]
      exports: "Foundation"

    "jquery-ui": ["jquery"]

    fastclick:
      exports: ["FastClick"]

    localstorage: ["backbone"]

    "vendor/foundation.offcanvas":
      deps: ["jquery", "foundation"]

    # "vendor/foundation.reveal":
    #   deps: ["jquery", "foundation"]

    # "vendor/foundation.fastclick":
    #   deps: ["jquery", "foundation"]

    # "reveal": ["foundation"]

    # "offcanvas": ["foundation"]

  name: "main",
  out: "main.min.js"

#syphon:['backbone']
require ["app"], (Swabcast) ->
  Swabcast.start()

requirejs [
  "jquery"
  "foundation"
  "vendor/foundation.offcanvas"
  "fastclick"
], ($) ->

  (($, window, undefined_) ->
    $doc = $(document)
    Modernizr = window.Modernizr
    $(document).foundation()

  ) $, window
  return


