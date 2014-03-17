<!--   Playlist Layout -->
<% if (typeof(winHeight) !== "undefined") { %>
    <div id="now-playing-region" style="<%= winHeight %>"></div>
<% } %>
<% if (typeof(winHeight) === "undefined") { %>
    <div id="now-playing-region" style="min-height:550px;"></div>
<% } %>
<div id="playlist-region">
	<!-- <img src="http://placehold.it/500x500&text=Logo"> -->
</div>

<!-- End Playlist Layout  -->