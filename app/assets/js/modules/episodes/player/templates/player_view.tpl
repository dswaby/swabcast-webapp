<!-- Player View Template -->
<div class="row">
    <div id="player-fill-left" class="small-4 large-5 columns">
    	<div id="album-preview">
    		<% if (typeof(albumArt) != "undefined") { %>
   			 <img id="player-art" src=./assets/img/<%= albumArt %> alt="">
				<% } %>
    	</div>
    	<div class="player-preview">
    	<% if (typeof(title) != "undefined") { %>
    		<p style="height:100%;width:280px;overflow:auto;"><%= title %></p>
    		<% } %>
    	</div>
    </div>
    <div id="controls" class="small-8 large-7 columns">
        <div id="player-main" class="span4">
            <div id="controls-wrapper">
        		<a href="#" class="js-player-jump-back"><i class="fi-rewind" style="font-size: 35px; padding-top:10px; margin-bottom:5px;"></i></a>
        		<a href="#" class="js-player-play">
        			<i id="play-icon" class="fi-play" style="font-size: 45px; padding-left:20px;"></i>
        			<i id="pause-icon" class="fi-pause Hidden" style="font-size: 45px; bottom:0; padding-left:20px;;"></i>
        		</a>
        		<a href="#" class="js-player-jump-forward"><i class="fi-fast-forward" style="font-size: 35px; margin-left:20px; margin-bottom:15px;"></i></a>
            </div>
        </div>
	</div>

	<div id="player-fill-right" class="small-4 large-4 columns"></div>
</div>
<!-- End Player View Template -->