Swabcast.module('EpisodesApp.New', function(New, Swabcast, Backbone, Marionette, $, _){

    New.Episode = Swabcast.EpisodesApp.Common.Views.Form.extend({
        title : "new title",

        onRender: function(){
            this.$(".js-submit").text("Subscribe Podcast");
        }
    });
});
