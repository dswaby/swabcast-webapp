<!-- manage_playlist_layout.tpl -->
<% if (typeof(winHeight) !== "undefined") { %>
    <div id="manage-playlist-region" style="min-height:<%= winHeight %>"></div>
<% } %>
<% if (typeof(winHeight) === "undefined") { %>
    <div id="manage-playlist-region" style="min-height:550px;"></div>
<% } %>