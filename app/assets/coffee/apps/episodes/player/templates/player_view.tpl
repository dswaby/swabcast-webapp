<!-- player_view.tpl -->
<div id="player-fill-left">
	<div id="album-preview">
		<% if (typeof(albumArt) != "undefined") { %>
			 <img class="player-art" src=./img/<%= albumArt %> alt="">
		<% } %>
        <div class="player-preview">
    <% if (typeof(title) != "undefined") { %>
        <p><%= title %></p>
        <% } %>
    </div>
</div>

</div>
    <div id="controls" class="small-8 large-7 columns">
        <div id="player-main" class="span4">
            <div id="controls-wrapper">
                <!-- Initially Disabled -->
                    <!-- duration<p> </p> -->

                <% if (typeof(mediaUrl) === "undefined" || mediaUrl === "") { %>
                    <a:disabled href="#" class="js-player-jump-back player-controls"><i class="fi-rewind-ten"></i></a>
                    <a:disabled href="#" class="js-player-play player-controls">
                        <i id="play-icon" class="fi-play"></i>
                        <i id="pause-icon" class="fi-pause Hidden"></i>
                    </a>
                    <a:disabled href="#" class="js-player-jump-forward player-controls"><i class="fi-rewind-ten"></i></a>
                <% } %>
                <!-- Media is ready -->
                <% if (typeof(mediaUrl) != "undefined" && mediaUrl != "") { %>
                    <a href="#" class="js-player-jump-back player-controls"><i class="fi-rewind-ten"></i></a>
                    <a href="#" class="js-player-play player-controls">
                        <i id="play-icon" class="fi-play"></i>
                        <i id="pause-icon" class="fi-pause Hidden"></i>
                    </a>
                    <a href="#" class="js-player-jump-forward player-controls"><i class="fi-rewind-ten"></i></a>
                <% } %>
            </div>
        </div>
    </div>
<div id="player-fill-right" class="small-4 large-4 columns"></div>