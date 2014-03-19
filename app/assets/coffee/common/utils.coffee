define ["app"], (Swabcast) ->

  Swabcast.module "Common.Utils", (Utils, Swabcast, Backbone, Marionette, $, _) ->

    # nested model reference
    # https://gist.github.com/geddski/1610397
    Utils.Helpers =
      nestCollection: (model, attributeName, nestedCollection) ->

        #setup nested references
        i = 0

        while i < nestedCollection.length
          model.attributes[attributeName][i] = nestedCollection.at(i).attributes
          i++

        #create empty arrays if none
        nestedCollection.bind "add", (initiative) ->
          model.attributes[attributeName] = []  unless model.get(attributeName)
          model.get(attributeName).push initiative.attributes

        nestedCollection.bind "remove", (initiative) ->
          updateObj = {}
          updateObj[attributeName] = _.without(model.get(attributeName), initiative.attributes)
          model.set updateObj

        nestedCollection

  Swabcast.Common.Utils
