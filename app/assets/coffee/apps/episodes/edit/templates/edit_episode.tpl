<br /><br />
<div class="container">
    <div class="hero-unit">
        <form>
            <div class="row">
                <div class="span3">
                    <img src=../serverdata/albumart/<%= albumArt %> alt="">
                </div>
                <div class="span6">
                    <h4> Podcast Title: </h4>
                    <input id="episode-episodeParent" name="episodeParent" type="text" value=<%= episodeParent %> />
                </div>
                <div class="span6">
                    <h4> Episode Title: </h4>
                    <input id="episode-episodeTitle" name="episodeTitle" type="text" value=<%= episodeTitle %> />
                </div>
            </div>
            <button class="btn js-submit">Update</button>
        </form>
    </div>
</div>