<!-- feed_episodes.tpl -->
<div id="feed-head" class="row">
    <div id="color-wrapper" class="feed-head">
        <div class="large-3 small-3 columns">
            <img src=./assets/img/<%= albumArt %> alt="" class="library-image">
            <% if (typeof(feedUrl) !== "undefined") { %>
                <a href="<%= feedUrl %>"><h6>HomePage</h6></a>
            <% } %>

        </div>
        <div class="large-6 small-6 columns">
            <a href="<%= feedUrl %>"><h2 style="color:#fff"><%= subscriptionTitle %></h2></a>
            <br />
            <p style="color:#fff"><%= summary %></p>
            <br />
            <% if (typeof(authors) !== "undefined") { %>
            <h6 class="subheader" style="color:#fff"><%= authors %></h6>
            <% } %>
        </div>
    </div>
</div>

<div style="height:100%;">
    <div id="list-color-wrapper" class="row feed-list">
        <table id="" class="large-10 large-centered small-12 columns" style="margin-bottom:85px;">
                <tbody id="episodes-list">

                </tbody>
        </table>
    </div>
</div>