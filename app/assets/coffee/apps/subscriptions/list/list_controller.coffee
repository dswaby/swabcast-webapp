define ["app", "apps/subscriptions/list/list_view"], (Swabcast, View) ->
  Swabcast.module "SubscriptionsApp.List", (List, Swabcast, Backbone, Marionette, $, _) ->
    List.Controller = showTracks: ->

      #require(['common/views'], function(){
      #                    var loadingView = new Swabcast.Common.Views.Loading();
      #                    Swabcast.libraryRegion.show(loadingView);
      #                });
      require ["entities/subscriptions"], ->
        fetchingList = Swabcast.request("subscriptions:all")
        listLayout = new View.Layout()
        $.when(fetchingList).done (subscriptions) ->
          self = this
          subscriptions = new View.Tracks(collection: feeds)
          require ["apps/subscriptions/list/list_controller"], ->
            subscriptions.on "itemview:episode:delete", (childView, model) ->
              model.destroy()

          subscriptions.listenTo List, "subscriptions:add", (model) ->
            highestOrder = undefined
            subscribed = undefined
            if feeds.length isnt 0

              #check if exists (prob better way)
              subscribed = feeds.find((t) ->
                t.get("uid") is model.get("uid")
              )
              highestOrder = feeds.max((t) ->
                t.get "order"
              )
              highestOrder = highestOrder.get("order") + 1

            #if not in list, copy attributes to subsctiption model
            unless subscribed
              newSubscription = new Swabcast.Entities.Subscription(
                uid: model.get("uid") or null
                albumArt: model.parent.get("albumArt") or null
                episodeTitle: model.get("episodeTitle") or null
                feedUrl: model.parent.get("feedUrl") or null
                episodeParent: model.parent.get("subscriptionTitle") or null
                mediaUrl: model.get("mediaUrl") or null
                enqueue: true
                order: highestOrder or 1
              )
              feeds.add newSubscription
              newSubscription.save()

            #TODO - send to playerSaveData and to playercontrols
            else

          listLayout.on "show", ->
            listLayout.listRegion.show subscriptions

          subscriptions.on "list:update", (childView, model) ->
            subscriptions.children.findByModel(model).flash "success"


        #Swabcast.sideBarRegion.show listLayout


  Swabcast.EpisodesApp.List.Controller
