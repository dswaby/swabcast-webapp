<br /><br />
<div class="panel">
    <div class="row">
        <div class="large-6 columns">
            <h2><%= episodeParent %></h2>

            <img src=./assets/img/<%= albumArt %> alt="" class="library" style="float:left; max-width:300px">
        </div>
        <div class="large-6 columns">
            <a href="<%= typeof(feedUrl)!== 'undefined' ?  feedUrl : '' %>"><h6><%= typeof(feedUrl)!== 'undefined' ?  feedUrl : '' %></h6></a>
            <h4><%= episodeTitle %></h4>
            <% if (typeof(episodeSummary) != "undefined") { %>
                <p><%= episodeSummary %></p>
            <% } %>
            <% if (typeof(episodeSummary) === "undefined") { %>
                <p>Episode Summary not available</p>
            <% } %>
            <button class="button js-show-list">
                <i class="icon-arrow-left"></i>
                Back
            </button>
            <button class="button js-enqueue">
                <i class="icon-plus-sign"></i>
                Queue
            </button>
        </div>
        <div>
        </div>
    </div>
</div>
