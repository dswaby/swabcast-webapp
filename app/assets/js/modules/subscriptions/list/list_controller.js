(function() {
  define(["app", "apps/subscriptions/list/list_view"], function(Swabcast, View) {
    Swabcast.module("SubscriptionsApp.List", function(List, Swabcast, Backbone, Marionette, $, _) {
      return List.Controller = {
        showTracks: function() {
          return require(["entities/subscriptions"], function() {
            var fetchingList, listLayout;
            fetchingList = Swabcast.request("subscriptions:all");
            listLayout = new View.Layout();
            return $.when(fetchingList).done(function(subscriptions) {
              var self;
              self = this;
              subscriptions = new View.Tracks({
                collection: feeds
              });
              require(["apps/subscriptions/list/list_controller"], function() {
                return subscriptions.on("itemview:episode:delete", function(childView, model) {
                  return model.destroy();
                });
              });
              subscriptions.listenTo(List, "subscriptions:add", function(model) {
                var highestOrder, newSubscription, subscribed;
                highestOrder = void 0;
                subscribed = void 0;
                if (feeds.length !== 0) {
                  subscribed = feeds.find(function(t) {
                    return t.get("uid") === model.get("uid");
                  });
                  highestOrder = feeds.max(function(t) {
                    return t.get("order");
                  });
                  highestOrder = highestOrder.get("order") + 1;
                }
                if (!subscribed) {
                  newSubscription = new Swabcast.Entities.Subscription({
                    uid: model.get("uid") || null,
                    albumArt: model.parent.get("albumArt") || null,
                    episodeTitle: model.get("episodeTitle") || null,
                    feedUrl: model.parent.get("feedUrl") || null,
                    episodeParent: model.parent.get("subscriptionTitle") || null,
                    mediaUrl: model.get("mediaUrl") || null,
                    enqueue: true,
                    order: highestOrder || 1
                  });
                  feeds.add(newSubscription);
                  return newSubscription.save();
                } else {

                }
              });
              listLayout.on("show", function() {
                return listLayout.listRegion.show(subscriptions);
              });
              return subscriptions.on("list:update", function(childView, model) {
                return subscriptions.children.findByModel(model).flash("success");
              });
            });
          });
        }
      };
    });
    return Swabcast.EpisodesApp.List.Controller;
  });

}).call(this);
