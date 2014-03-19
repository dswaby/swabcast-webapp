<!-- episode_detailed_view -->
<br /><br />
<div class="panel">
    <div>
        <button class="button dismiss">
            <i class="icon-arrow-left"></i>Close
        </button>
        <button class="button js-enqueue">
            <i class="icon-plus-sign"></i>Queue
        </button>
    </div>
    <div class="large-4 small-4 columns">
        <h6 class="fancy-font"><%= episodeParent %></h6>

        <img src=./assets/img/<%= albumArt %> alt="" class="library-image" style="float:left;">
    </div>
    <div class="large-4 small-4 columns">
        <a href="<%= typeof(feedUrl)!== 'undefined' ?  feedUrl : '' %>"><h6><%= typeof(feedUrl)!== 'undefined' ?  feedUrl : '' %></h6></a>
        <h4><%= episodeTitle %></h4>
        <% if (typeof(episodeSummary) != "undefined") { %>
            <p><%= episodeSummary %></p>
        <% } %>
        <% if (typeof(episodeSummary) === "undefined") { %>
            <p>Episode Summary not available</p>
        <% } %>

    </div>
</div>
