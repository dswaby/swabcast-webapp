<br /><br />
<div class="container">
    <div class="hero-unit">
        <div class="row">
            <div class="span2">
                <img src=./assets/img/<%= albumArt %> alt="">
                <h2><%= episodeParent %></h2>
            </div>
            <div class="span8">
            <% if (typeof(feedUrl) !== "undefined") { %>
                <h6><a href="<%= feedUrl %>">Homepage</a><h6>
            <% } %>
                <h4><%= episodeTitle %></h4>

                <p><%= episodeSummary %></p>
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
</div>