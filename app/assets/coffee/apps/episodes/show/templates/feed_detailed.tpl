<!-- Feed Detailed Template -->
<br /><br />
<div class="container">
    <div class="panel">
        <div class="">
            <div class="large-6 columns">
                <img src=./assets/img/<%= albumArt %> alt="" class="library">
            </div>
            <div class="large-6 columns">
                <% if (typeof(feedUrl) !== "undefined") { %>
                <a href="<%= feedUrl %>"><h2><%= subscriptionTitle %></h2>

                    <h6><a href="<%= feedUrl %>">Homepage</a><h6>
                <% } %>
                <p><%= summary %></p>
                <button class="button js-show-go-back">
                    <i class="icon-arrow-left"></i>
                    Back
                </button>
            </div>
        </div>
    </div>
</div>
<!-- End Feed Detailed Template -->