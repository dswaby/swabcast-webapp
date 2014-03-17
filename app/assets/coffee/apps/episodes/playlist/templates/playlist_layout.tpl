<!--   Playlist Layout -->
<div id="now-playing-region">
  <!-- <img src="http://placehold.it/500x500&text=Logo"> -->
</div>
<% if (typeof(winHeight) !== "undefined") { %>
    <div id="playlist-region" style="<%= winHeight %>"></div>
<% } %>
<% if (typeof(winHeight) === "undefined") { %>
    <div id="playlist-region" style="min-height:550px;"></div>
<% } %>


<!-- End Playlist Layout  -->