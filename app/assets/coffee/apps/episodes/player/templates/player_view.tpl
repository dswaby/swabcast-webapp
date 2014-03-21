<!-- player_view.tpl -->
<div id="player-fill-left">
	<div id="album-preview">
		<% if (typeof(albumArt) != "undefined") { %>
			 <img id="player-art" src=./assets/img/<%= albumArt %> alt="">
		<% } %>
        <div class="player-preview">
    <% if (typeof(title) != "undefined") { %>
        <p style="height:100%;width:280px;overflow:auto;"><%= title %></p>
        <% } %>
    </div>
</div>

</div>
    <div id="controls" class="small-8 large-7 columns">
        <div id="player-main" class="span4">
            <div id="controls-wrapper">
                <!-- Initially Disabled -->
                <% if (typeof(mediaUrl) === "undefined" || mediaUrl === "") { %>
                    <a:disabled href="#" class="js-player-jump-back"><i class="fi-rewind-ten" style="font-size: 35px; padding-top:10px; margin-bottom:5px;margin-top:5px;"></i></a>
                    <a:disabled href="#" class="js-player-play">
                        <i id="play-icon" class="fi-play" style="font-size: 45px; padding-left:20px;"></i>
                        <i id="pause-icon" class="fi-pause Hidden" style="font-size: 45px; bottom:0; padding-left:20px;;"></i>
                    </a>
                <% } %>
                <!-- Media is ready -->
                <% if (typeof(mediaUrl) != "undefined" && mediaUrl != "") { %>
                    <a href="#" class="js-player-jump-back"><i class="fi-rewind-ten" style="font-size: 35px; padding-top:10px; margin-bottom:5px;"></i></a>
                    <a href="#" class="js-player-play">
                        <i id="play-icon" class="fi-play" style="font-size: 45px; padding-left:20px;"></i>
                        <i id="pause-icon" class="fi-pause Hidden" style="font-size: 45px; bottom:0; padding-left:20px;;"></i>
                    </a>
                <% } %>
            </div>
        </div>
    </div>
<div id="player-fill-right" class="small-4 large-4 columns"></div>