requirejs.config
  baseUrl: "../assets/js"
  paths:
    backbone: "vendor/backbone"
    localstorage: "vendor/backbone.localstorage"
    jquery: "vendor/jquery"
    "jquery-ui": "vendor/jquery-ui"
    underscore: "vendor/underscore"
    marionette: "vendor/backbone.marionette"
    tpl: "vendor/tpl"
    json2: "vendor/json2"
    # foundation: "vendor/foundation"
    # offcanvas: "vendor/foundation.offcanvas"
    # reveal: "vendor/foundation.reveal"
    jasmine: "../test/lib/jasmine-2.0.0/jasmine",
    "jasmine-html": "../test/lib/jasmine-2.0.0/jasmine-html",
    spec: "../test/spec"

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
      deps: ""
      exports: "jasmine"

    "jasmine-html":
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

require [
  "app"
  "jasmine-html"
], ($, jasmine) ->
  jasmineEnv = jasmine.getEnv()
  jasmineEnv.updateInterval = 1000
  htmlReporter = new jasmine.HtmlReporter()
  jasmineEnv.addReporter htmlReporter
  jasmineEnv.specFilter = (spec) ->
    htmlReporter.specFilter spec

  specs = []
  specs.push "lib/jasmine/spec/notepadSpec"
  $ ->
    require specs, (spec) ->
      jasmineEnv.execute()
      return

    return

  return
