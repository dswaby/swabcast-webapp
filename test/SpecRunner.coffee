requirejs.config
  baseUrl: "./../app/assets/js"
  paths:
    backbone: "./../bower_components/backbone/backbone"
    localstorage: "./../bower_components/backbone.localstorage/backbone.localstorage"
    jquery: "./../bower_components/jquery/jquery"
    "jquery-ui": "./../bower_components/jquery-ui/ui/jquery-ui"
    underscore: "./../bower_components/underscore/underscore"
    marionette: "./../bower_components/backbone.marionette/lib/backbone.marionette"
    tpl: "./../bower_components/requirejs-tpl/tpl"
    json2: "./../bower_components/json2/json2"
    foundation: "./../bower_components/foundation/js/foundation/foundation"
    offcanvas: "./../bower_components/foundation/js/foundation/foundation.offcanvas"
    fastclick: "./../bower_components/fastclick/lib/fastclick"
    toastr: "./../bower_components/toastr/toastr"
    chai: "../bower_components/chai/chai"
    mocha: "../bower_components/mocha/mocha"


  # sinon: "../bower_components/sinon/lib/sinon"
  shim:
    underscore:
      exports: "_"

    backbone:
      deps: [
        "jquery"
        "underscore"
        "json2"
      ]
      exports: "Backbone"

    marionette:
      deps: ["backbone"]
      exports: "Marionette"

    foundation:
      deps: ["jquery"]
      exports: "Foundation"

    "jquery-ui": ["jquery"]
    transit:
      deps: ["jquery"]

    localstorage: ["backbone"]
    "./../bower_components/foundation/js/foundation/foundation.offcanvas":
      deps: [
        "jquery"
        "foundation"
      ]

    "./../bower_components/fastclick/lib/fastclick":
      deps: [
        "jquery"
        "foundation"
      ]

require [

  #files being tested
  "./../../../test/hello"
  "./../../../test/spec/testfiles"
  "./../../../test/spec/feed"
  "./../../../test/spec/playlist"
  "./../../../test/spec/player"
  "./../../../test/spec/swabcast"
], (Swabcast) ->
  if window.mochaPhantomJS
    mochaPhantomJS.run()
  else
    mocha.run()
