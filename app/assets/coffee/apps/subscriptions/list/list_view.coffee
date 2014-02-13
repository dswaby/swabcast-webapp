define ["app", "tpl!apps/subscriptions/list/templates/subscription_list.tpl", "tpl!apps/subscriptions/list/templates/subscription_list_layout.tpl",
"tpl!apps/subscriptions/list/templates/subscription_list_panel.tpl", "tpl!apps/subscriptions/list/templates/subscription_list_view.tpl"],
(Swabcast, subscriptionListTpl, layoutTpl, panelTpl, listViewTpl) ->
  Swabcast.module "SubscriptionsApp.List.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    View.Layout = Marionette.Layout.extend(
      template: layoutTpl
      regions:
        panelRegion: "#panel-region"
        subscriptionsRegion: "#subscriptions-region"
    )
    View.Panel = Marionette.ItemView.extend(
      template: panelTpl
      triggers:
        "click button.js-new": "subscription:new"
    )

    #table view for a single subscription
    View.Subscription = Marionette.ItemView.extend(
      tagName: "tr"
      template: listViewTpl
      events:
        click: "highlightName"
        "click button.js-delete": "deleteClicked"
        "click td a.js-edit": "editClicked"
        "click td a.js-show": "showClicked"
        "click td button.js-enqueue": "toggleQueue"

      onRender: ->
        @$el.addClass "disabled"  if @model.get("enqueue") is true

      editClicked: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "subscription:edit", @model

      highlightName: ->
        @$el.toggleClass "success"

      toggleQueue: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @$el.addClass "disabled"
        if @model.get("enqueue") is false
          @model.set enqueue: true

          #this.model.save();

          #Swabcast.trigger('playlist:sync');
          Swabcast.SubscriptionsApp.Playlist.trigger "playlist:enqueue", @model

      deleteClicked: (e) ->
        e.stopPropagation()
        @trigger "subscription:delete", @model

      showClicked: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "subscription:show", @model

      remove: ->
        self = this
        @$el.fadeOut ->
          Marionette.ItemView::remove.call self


      flash: (cssClass) ->
        $view = @$el
        $view.hide().toggleClass(cssClass).fadeIn 400, ->
          setTimeout (->
            $view.toggleClass cssClass
          ), 300


      removeCss: (cssClass) ->
        $view = @$el
        $view.removeClass cssClass
    )
    View.Subscriptions = Marionette.CompositeView.extend(
      tagName: "table"
      className: "table table-hover"
      template: subscriptionListTpl
      itemView: View.Subscription
      itemViewContainer: "tbody"
      initialize: ->
        @listenTo @collection, "reset", ->
          @appendHtml = (collectionView, itemView, index) ->
            collectionView.$el.append itemView.el


      onCompositeCollectionRendered: ->
        @appendHtml = (collectionView, itemView, index) ->
          collectionView.$el.prepend itemView.el

      onItemviewSubscriptionDelete: ->
        @$el.fadeOut "slow", ->
          $(this).fadeIn "slow"

    )

  Swabcast.SubscriptionsApp.List.View
