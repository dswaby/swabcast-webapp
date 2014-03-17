<br /><br />
<div class="panel">
    <div class="row">
        <div class="span2">
            <img src=./assets/img/<%= albumArt %> alt="" class="library" style="max-width:300px">
            <h2><%= episodeParent %></h2>
        </div>
        <div class="span8">
            <a href="<%= feedUrl %>"><h6><%= feedUrl %></h6></a>
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
