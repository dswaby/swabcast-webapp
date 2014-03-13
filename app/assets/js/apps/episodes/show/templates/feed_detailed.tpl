<!-- Feed Detailed Template -->
<br /><br />
<div class="container">
    <div class="panel">
        <div class="">
            <div class="large-6 columns">
                <img src=./assets/img/<%= albumArt %> alt="" class="library">
            </div>
            <div class="large-6 columns">
                <a href="<%= feedUrl %>"><h2><%= subscriptionTitle %></h2>
                <a href="<%= feedUrl %>"><h6><%= feedUrl %></h6></a>
                <p><%= summary %></p>
                <button class="button js-back-button">
                    <i class="icon-arrow-left"></i>
                    Back
                </button>
            </div>
        </div>
    </div>
</div>
<!-- End Feed Detailed Template -->