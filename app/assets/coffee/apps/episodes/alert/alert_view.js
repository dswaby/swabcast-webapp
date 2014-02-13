Swabcast.module('EpisodesApp.Alert', function(Alert, Swabcast, Backbone, Marionette, $, _){
    Alert.Failure = Marionette.ItemView.extend({
        template: "#alert-view",

        display: function(cssClass){
            var $view = this.$el;
            $view.toggle(400, function() {
                setTimeout(function(){
                    $view.toggle();
                }, 300);
            });
        },

    });


});