<!-- Feed Detailed Template -->
<br /><br />
<div class="container">
    <div class="panel">
        <div class="">
            <div class="">
                <img src=./assets/img/<%= albumArt %> alt="" class="library" style="max-width:300px;">
            </div>
            <div class="">
            <a href="<%= feedUrl %>"><h2><%= subscriptionTitle %></h2>
            <a href="<%= feedUrl %>"><h6><%= feedUrl %></h6></a>
            <p><%= summary %></p>
                <button class="btn btn-small js-show-list">
                    <i class="icon-arrow-left"></i>
                    Back
                </button>
            </div>
        </div>
    </div>
</div>
<!-- End Feed Detailed Template -->