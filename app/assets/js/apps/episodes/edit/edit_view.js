define(['app', 'apps/episodes/common/views'],
 function(Swabcast){
    Swabcast.module('EpisodesApp.Edit.View', function(Edit, Swabcast, Backbone, Marionette, $, _){
    	Edit.Episode = Swabcast.EpisodesApp.Common.Views.Form.extend({

    		initialize: function(){
    			this.title = "Edit this episode of " + this.model.get('episodeParent');
    		},

            onRender: function(){
                if(this.options.generateTitle){
                    var $title = $('<h1>', {text: this.title});
                    this.$el.prepend($title);
                }
                this.$(".js-submit").text("Update");
            }
    	});
    });
    return Swabcast.EpisodesApp.Edit.View;
});