<!-- feed_episodes.tpl -->
<div id="feed-head" class="row">
    <div id="color-wrapper" class="feed-head">
        <div class="large-9 small-12 columns">
        <a href="<%= feedUrl %>"><h2 style="color:#fff"><%= subscriptionTitle %></h2></a>
            <img src=./assets/img/<%= albumArt %> alt="" class="library-image">
            <% if (typeof(feedUrl) !== "undefined") { %>
                <a href="<%= feedUrl %>"><h6>Visit Feed HomePage</h6></a>
            <% } %>


            <% if (typeof(authors) !== "undefined") { %>
                <h6 class="subheader" style="color:#fff"><%= authors %></h6>
            <% } %>
            <br />
            <div style="width:85%; overflow:auto;float:left;">
                <p style="color:#fff;"><%= summary %></p>
            <br />

            </div>
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