Swabcast.module('EpisodesApp.Alert', function(Alert, Swabcast, Backbone, Marionette, $, _){
    Alert.Controller = {
        showAlert: function(errors){

            var $view = this.$el;

            var clearErrors = function(){
                var $form = $view.find('form');
                $form.find('.help-inline.error').each(function() {
                    $(this).remove();
                });
                $form.find('.control-group.error').each(function() {
                    $(this).removeClass('error');
                });
            };
            var markErrors = function(value, key) {
                var $controlGroup = $view.find('#episode-' + key).parent();
                var $errorEl = $('<span>', {class: 'help-inline error', text: value});
                $controlGroup.append($errorEl).addClass('error');
            };

            clearErrors();
            _.each(errors, markErrors);
        }
    };
});