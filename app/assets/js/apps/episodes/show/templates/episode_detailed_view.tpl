<!-- episode_detailed_view -->
<br /><br />
<div class="panel">

    <div class="large-3 small-3 columns">

        <img src=./assets/img/<%= albumArt %> alt="" class="library-image" style="float:left;">
        <% if (typeof(feedUrl) !== "undefined") { %>
            <h6><a href="<%= feedUrl %>">Homepage</a><h6>
        <% } %>
    </div>
    <div class="large-9 small-8 columns">
        <h4 class="fancy-font"><%= episodeTitle %></h4>

        <% if (typeof(episodeSummary) != "undefined") { %>
            <p><%= episodeSummary %></p>
        <% } %>
        <% if (typeof(episodeSummary) === "undefined") { %>
            <p></p>
        <% } %>

    </div>
</div>

<div style="bottom: 4px;">
    <button class="button dismiss">
        <i class="icon-arrow-left"></i>Close
    </button>
    <button class="button js-enqueue">
        <i class="icon-plus-sign"></i>Queue
    </button>
</div>