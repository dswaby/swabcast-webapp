<!-- manage_playlist_layout.tpl -->
<div id="management-box" style="margin-top:55px;"></div>
<% if (typeof(winHeight) !== "undefined") { %>
    <div id="manage-playlist-region" style="min-height:<%= winHeight %>"></div>
<% } %>
<% if (typeof(winHeight) === "undefined") { %>
    <div id="manage-playlist-region" style="min-height:550px;"></div>
<% } %>