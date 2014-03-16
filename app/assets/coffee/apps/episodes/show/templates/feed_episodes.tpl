
<div id="feed-head" class="row">
    <div id="color-wrapper" class="feed-head">
        <div class="large-4 columns">
            <img src=./assets/img/<%= albumArt %> alt="" class="library">
            <a href="<%= feedUrl %>"><h2 style="color:#fff"><%= subscriptionTitle %></h2></a>
        </div>
        <div class="large-4 columns">
            <br />
            <p style="color:#fff"><%= summary %></p>
            <br />
            <a href="<%= feedUrl %>"><h6><%= feedUrl %></h6></a>
            <% if (typeof(authors) !== "undefined") { %>
            <h6 class="subheader" style="color:#fff"><%= authors %></h6>
            <% } %>
        </div>
    </div>
</div>

<div style="height:100%;">
    <div id="list-color-wrapper" class="row feed-list">
        <table id="" class="large-8 large-centered small-12 columns" style="margin-bottom:85px;">
                <tbody id="episodes-list" style="width:96% !important;" >

                </tbody>
        </table>
    </div>
</div>