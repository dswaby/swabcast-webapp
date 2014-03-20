<!-- episode_detailed_view -->
<br /><br />
<div class="panel">
    <div style="width:100%">
        <ul class="button-group">
          <li><a href="#" class="button dismiss"> <i class="icon-arrow-left"></i>Close</a></li>
          <!-- Add To Playlist -->
          <li><a href="#" class="button js-enqueue"><i class="icon-plus-sign"></i>Queue</a></li>
          <!-- Mark Played/Archive -->
          <li><a href="#" class="button js-archive"><i class="icon-plus-sign"></i>Archive</a></li>
        </ul>
    </div>

    <div class="large-9 small-12 columns">

        <img src=./assets/img/<%= albumArt %> alt="" class="library-image">
        <% if (typeof(feedUrl) !== "undefined") { %>
            <h6><a href="<%= feedUrl %>">Homepage</a><h6>
        <% } %>
        <% if (typeof(episodeSummary) != "undefined") { %>
            <p><%= episodeSummary %></p>
        <% } %>
        <% if (typeof(episodeSummary) === "undefined") { %>
            <p></p>
        <% } %>

    </div>
</div>

<div>
    <button class="button play-now">
        <i class="icon-play"></i>Play Now
    </button>
</div>