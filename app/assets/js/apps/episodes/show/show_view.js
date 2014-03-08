(function() {
  define(["app", "tpl!apps/episodes/show/templates/episode_detailed_view.tpl", "tpl!apps/episodes/show/templates/missing_episode.tpl", "tpl!apps/episodes/show/templates/feed_detailed.tpl"], function(Swabcast, episodeDetailedTpl, missingTpl, feedDetailsTpl) {
    Swabcast.module("EpisodesApp.Show.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      View.EpisodeNotFound = Marionette.ItemView.extend({
        template: missingTpl
      });
      View.Episode = Marionette.ItemView.extend({
        template: episodeDetailedTpl,
        events: {
          "click button.js-show-list": "showList",
          "click a.js-edit": "editClicked",
          "click button.js-enqueue": "queueEpisode"
        },
        editClicked: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:edit", this.model);
        },
        showList: function(e) {
          console.log("show episode list triggered, event:", e);
          e.stopPropagation();
          return this.trigger("episodes:list");
        },
        queueEpisode: function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (this.model.get("enqueue") === false) {
            Swabcast.EpisodesApp.Playlist.trigger("playlist:enqueue", this.model);
            this.model.set("enqueue", true);
          }
          return this.trigger("dialog:close");
        }
      });
      return View.Feed = Marionette.ItemView.extend({
        template: feedDetailsTpl,
        events: {
          "click button.js-show-list": "showList"
        },
        showList: function(e) {
          console.log("show feed list triggered, event:", e);
          e.stopPropagation();
          return this.trigger("view:show");
        }
      });
    });
    return Swabcast.EpisodesApp.Show.View;
  });

}).call(this);
