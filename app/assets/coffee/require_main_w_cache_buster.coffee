requirejs.config
  baseUrl: "assets/js"
  urlArgs: 'bust=' + Math.random()

  paths:
    backbone: "./../bower_components/backbone/backbone"
    localstorage: "./../bower_components/backbone.localstorage/backbone.localstorage"
    jquery: "./../bower_components/jquery/jquery"
    "jquery-ui": "./../bower_components/jquery-ui/ui/jquery-ui"
    underscore: "./../bower_components/underscore/underscore"
    marionette: "./../bower_components/backbone.marionette/lib/backbone.marionette"
    tpl: "./../bower_components/requirejs-tpl"
    json2: "./../bower_components/json2/json2"
    foundation: "./../bower_components/foundation/js/foundation/foundation"
    offcanvas: "./../bower_components/foundation/js/foundation/foundation.offcanvas"
    fastclick: "./../bower_components/fastclick/lib/fastclick"
    toastr: "./../bower_components/toastr/toastr"

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

    toastr:
      deps: ["jquery"]
      exports: "toastr"

    localstorage: ["backbone"]

    offcanvas:
      deps: ["jquery", "foundation"]

  name: "main",
  out: "main.min.js"

#syphon:['backbone']
require ["app"], (Swabcast) ->
  Swabcast.start()

requirejs [
  "jquery"
  "foundation"
  "offcanvas"
  "fastclick"
  "toastr"
], ($) ->

  (($, window, undefined_) ->
    $doc = $(document)
    Modernizr = window.Modernizr
    $(document).foundation()
  ) $, window
  return


