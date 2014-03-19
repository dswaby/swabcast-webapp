<!-- episode_detailed_view -->
<br /><br />
<div class="panel">

    <div class="large-4 small-4 columns">
        <% if (typeof(feedUrl) !== "undefined") { %>
            <h6><a href="<%= feedUrl %>">Homepage</a><h6>
        <% } %>
        <img src=./assets/img/<%= albumArt %> alt="" class="library-image" style="float:left;">
        <h4 class="fancy-font"><%= episodeTitle %></h4>
    </div>
    <div class="large-4 small-8 columns">
        <% if (typeof(episodeSummary) != "undefined") { %>
            <p style="font-size:9px;"><%= episodeSummary %></p>
        <% } %>
        <% if (typeof(episodeSummary) === "undefined") { %>
            <p></p>
        <% } %>

    </div>
</div>

<div>
    <button class="button dismiss">
        <i class="icon-arrow-left"></i>Close
    </button>
    <button class="button js-enqueue">
        <i class="icon-plus-sign"></i>Queue
    </button>
</div>