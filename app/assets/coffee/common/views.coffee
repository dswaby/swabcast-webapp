define ["app", "tpl!apps/episodes/edit/templates/edit_episode.tpl"], (Swabcast, editTpl) ->
  Swabcast.module "EpisodesApp.Common.Views", (Views, Swabcast, Backbone, Marionette, $, _) ->
    Views.Form = Marionette.ItemView.extend(
      template: editTpl
      events:
        "click button.js-submit": "submitClicked"
        "click button.js-show-list": "showList"

      submitClicked: (e) ->
        e.preventDefault()
        data = Backbone.Syphon.serialize(this)
        @trigger "form:submit", data

      showList: (e) ->
        e.preventDefault()
        if @options.asModal
          @trigger "episodes:list"
        else
          @close()
          Swabcast.trigger "dialog:close"

      onFormDataInvalid: (errors) ->
        $view = @$el
        clearErrors = ->
          $form = $view.find("form")
          $form.find(".help-inline.error").each ->
            $(this).remove()

          $form.find(".control-group.error").each ->
            $(this).removeClass "error"


        markErrors = (value, key) ->
          $controlGroup = $view.find("#episode-" + key).parent()
          $errorEl = $("<span>",
            class: "help-inline error"
            text: value
          )
          $controlGroup.append($errorEl).addClass "error"

        clearErrors()
        _.each errors, markErrors
    )

  Swabcast.Common.Views
