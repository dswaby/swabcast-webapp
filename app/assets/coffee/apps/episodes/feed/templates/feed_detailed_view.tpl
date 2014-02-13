<br /><br />
<div class="container" class="reveal-modal" data-reveal>
    <div class="hero-unit">
        <div class="row">
            <div class="span2">
                <img src=./assets/img/<%= albumArt %> alt="">
                <h2><%= episodeParent %></h2>
            </div>
            <div class="span8">
            <a href="<%= feedUrl %>"><h6><%= feedUrl %></h6></a>
                <h4><%= episodeTitle %></h4>

                <p><%= episodeSummary %></p>
                <button class="btn btn-small js-show-list">
                    <i class="icon-arrow-left"></i>
                    Back
                </button>

                <button class="btn btn-small js-enqueue">
                    <i class="icon-plus-sign"></i>
                    Queue
                </button>
            </div>
            <div>
        </div>
    </div>
</div>
</div>