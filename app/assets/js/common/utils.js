(function() {
  define(["app"], function(Swabcast) {
    Swabcast.module("Common.Utils", function(Utils, Swabcast, Backbone, Marionette, $, _) {
      return Utils.Helpers = {
        nestCollection: function(model, attributeName, nestedCollection) {
          var i;
          i = 0;
          while (i < nestedCollection.length) {
            model.attributes[attributeName][i] = nestedCollection.at(i).attributes;
            i++;
          }
          nestedCollection.bind("add", function(initiative) {
            if (!model.get(attributeName)) {
              model.attributes[attributeName] = [];
            }
            return model.get(attributeName).push(initiative.attributes);
          });
          nestedCollection.bind("remove", function(initiative) {
            var updateObj;
            updateObj = {};
            updateObj[attributeName] = _.without(model.get(attributeName), initiative.attributes);
            return model.set(updateObj);
          });
          return nestedCollection;
        }
      };
    });
    return Swabcast.Common.Utils;
  });

}).call(this);
