(function() {
  define(["app", "tpl!apps/episodes/player/templates/player_view.tpl"], function(Swabcast, playerTpl) {
    Swabcast.module("EpisodesApp.Player.View", function(View, Swabcast, Backbone, Marionette, $, _) {
      return View.Player = Marionette.ItemView.extend({
        template: playerTpl,
        events: {
          "click a.js-player-play": "play",
          "click a.js-player-back": "previous",
          "click a.js-player-jump-back": "skipback",
          "click a.js-player-jump-forward": "skipahead",
          "click a.js-player-forward": "next"
        },
        play: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:playpause");
        },
        previous: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:previous");
        },
        skipback: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:skipback");
        },
        skipahead: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:skipahead");
        },
        next: function(e) {
          e.preventDefault();
          e.stopPropagation();
          return this.trigger("episode:next");
        }
      });
    });
    return Swabcast.EpisodesApp.Player.View;
  });

}).call(this);
