define ["app", "tpl!apps/episodes/list/templates/episode_list.tpl", "tpl!apps/episodes/list/templates/episode_list_layout.tpl", "tpl!apps/episodes/list/templates/episode_list_panel.tpl", "tpl!apps/episodes/list/templates/episode_list_view.tpl"], (Swabcast, episodeListTpl, layoutTpl, panelTpl, listViewTpl) ->
  Swabcast.module "EpisodesApp.List.View", (View, Swabcast, Backbone, Marionette, $, _) ->
    View.Layout = Marionette.Layout.extend(
      template: layoutTpl
      regions:
        panelRegion: "#panel-region"
        episodesRegion: "#episodes-region"
    )
    View.Panel = Marionette.ItemView.extend(
      template: panelTpl
      triggers:
        "click button.js-new": "episode:new"
    )

    #table view for a single episode
    View.Episode = Marionette.ItemView.extend(
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
        @trigger "episode:edit", @model

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
          Swabcast.EpisodesApp.Playlist.trigger "playlist:enqueue", @model

      deleteClicked: (e) ->
        e.stopPropagation()
        @trigger "episode:delete", @model

      showClicked: (e) ->
        e.preventDefault()
        e.stopPropagation()
        @trigger "episode:show", @model

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
    View.Episodes = Marionette.CompositeView.extend(
      tagName: "table"
      className: "table table-hover"
      template: episodeListTpl
      itemView: View.Episode
      itemViewContainer: "tbody"
      initialize: ->
        @listenTo @collection, "reset", ->
          @appendHtml = (collectionView, itemView, index) ->
            collectionView.$el.append itemView.el


      onCompositeCollectionRendered: ->
        @appendHtml = (collectionView, itemView, index) ->
          collectionView.$el.prepend itemView.el

      onItemviewEpisodeDelete: ->
        @$el.fadeOut "slow", ->
          $(this).fadeIn "slow"

    )

  Swabcast.EpisodesApp.List.View
