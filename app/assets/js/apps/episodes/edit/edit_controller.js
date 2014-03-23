Swabcast.module('EpisodesApp.Edit', function(Edit, Swabcast, Backbone, Marionette, $, _){
	'use strict';
	Edit.Controller = {
		editEpisode : function(id){
			var loadingView =  new Swabcast.Common.Views.Loading({
				title: 'Artificialy delaying this response',
				message: 'This is the view that will show if waiting for data'
			});
			Swabcast.mainRegion.show(loadingView);

			var fetchingEpisode = Swabcast.request('episode:entity', id);
			$.when(fetchingEpisode).done(function(episode){
				var view;
				if(episode !== undefined) {
					view = new Edit.Episode({
						model: episode,
                        generateTitle: true
					});
					view.on('form:submit', function(data){
						if (episode.save(data)){
							Swabcast.trigger('episode:show', episode.get('id'));
						}
						else {
							/*alert('Unable to save Data!!');*/ /*triggering on view*/
							view.triggerMethod('form:data:invalid', episode.validationError);
						}
					});
				}
				else {
					view = new Edit.EpisodeNotFound();
				}
			Swabcast.mainRegion.show(view);
			});
		}
	};
});