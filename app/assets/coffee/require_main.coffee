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
    foundation: "vendor/foundation"
    transmit: "vendor/jquery.transmit"

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

    transmit:
      deps: ["jquery"]

    #   'spin.jquery':['jquery'],
    #   spin: ['spin.jquery'],
    localstorage: ["backbone"]

    "vendor/foundation.offcanvas":
      deps: ["jquery", "foundation"]

    "vendor/foundation.reveal":
      deps: ["jquery", "foundation"]

    "vendor/foundation.fastclick":
      deps: ["jquery", "foundation"]

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
  "vendor/foundation.reveal"
  "vendor/foundation.fastclick"
], ($) ->

  (($, window, undefined_) ->
    $doc = $(document)
    Modernizr = window.Modernizr
    $(document).foundation()

  ) $, window
  return


