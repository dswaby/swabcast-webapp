<!-- playlist template playlist_episode_detail_view -->
<div class="panel">
    <div style="width:100%">

          <!-- <li><a href="#" class="dismiss"> <i class="icon-arrow-left"></i>Close</a></li> -->
          <!-- Add To Playlist -->
        <table width="100%;" class="modal-row">
            <tr>
                <td class="modal-row js-remove-from-queue">
                    <a href="#" class=""><i class="fi-x-circle modal-big-icons" style="margin-left:45px;"></i></a>
                    <br />
                    <a href="#">Remove from playlist</a>
                </td>
                <td class="modal-row js-show-archive">
                    <a href="#"><i class="fi-archive modal-big-icons"></i> </a>
                    <br />
                    <a href="#" style="margin-left:15px;">Archive</a>
                </td>
                  <td class="modal-row js-show-favorite">
                    <a href="#"><i class="fi-star modal-big-icons"></i></a>
                    <br />
                    <a href="#" style="margin-left:30px;">Fav</a>
                </td>

            </tr>
        </table>

    </div>

    <img src=../serverdata/albumart/<%= albumArt %> alt="" class="library-image" />

    <div class="modal-text-content">

        <% if (typeof(feedUrl) !== "undefined") { %>
            <a href="<%= feedUrl %>">Homepage</a>
        <% } %>

        <% if (typeof(episodeSummary) != "undefined") { %>
            <p><%= episodeSummary %></p>
        <% } %>
        <% if (typeof(episodeSummary) === "undefined") { %>
            <p></p>
        <% } %>
    </div>


</div>
<div class="dialog-absolute-bottom" style="width: 100%;">
    <button class="button js-play-now" style="width:100%;">
        <i class="icon-play"></i>Play Now
    </button>
</div>
