(function() {
  define(["app", "tpl!apps/episodes/edit/templates/edit_episode.tpl"], function(Swabcast, editTpl) {
    Swabcast.module("EpisodesApp.Common.Views", function(Views, Swabcast, Backbone, Marionette, $, _) {
      return Views.Form = Marionette.ItemView.extend({
        template: editTpl,
        events: {
          "click button.js-submit": "submitClicked",
          "click button.js-show-list": "showList"
        },
        submitClicked: function(e) {
          var data;
          e.preventDefault();
          data = Backbone.Syphon.serialize(this);
          return this.trigger("form:submit", data);
        },
        showList: function(e) {
          e.preventDefault();
          if (this.options.asModal) {
            return this.trigger("episodes:list");
          } else {
            this.close();
            return Swabcast.trigger("dialog:close");
          }
        },
        onFormDataInvalid: function(errors) {
          var $view, clearErrors, markErrors;
          $view = this.$el;
          clearErrors = function() {
            var $form;
            $form = $view.find("form");
            $form.find(".help-inline.error").each(function() {
              return $(this).remove();
            });
            return $form.find(".control-group.error").each(function() {
              return $(this).removeClass("error");
            });
          };
          markErrors = function(value, key) {
            var $controlGroup, $errorEl;
            $controlGroup = $view.find("#episode-" + key).parent();
            $errorEl = $("<span>", {
              "class": "help-inline error",
              text: value
            });
            return $controlGroup.append($errorEl).addClass("error");
          };
          clearErrors();
          return _.each(errors, markErrors);
        }
      });
    });
    return Swabcast.Common.Views;
  });

}).call(this);
