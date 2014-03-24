<!-- show template episode_detailed_view -->
<br /><br />
<div class="panel">
    <div style="width:100%">

          <!-- <li><a href="#" class="dismiss"> <i class="icon-arrow-left"></i>Close</a></li> -->
          <!-- Add To Playlist -->
        <table width="225px;" class="modal-row">
            <tr>
                <td class="modal-row js-show-enqueue">
                    <a href="#" class=""><i class="fi-plus"></i></a>
                    <br />
                    <a href="#">Queue</a>
                </td>
                <td class="modal-row js-show-archive">
                    <a href="#"><i class="fi-archive"></i> </a>
                    <br />
                    <a href="#">Archive</a>
                </td>
                  <td class="modal-row js-show-favorite">
                    <a href="#"><i class="fi-star"></i></a>
                    <br />
                    <a href="#">Fav</a>
                </td>

            </tr>
        </table>

        <!-- button class="button dismiss">
            <i class="icon-arrow-left"></i>Close
        </button> -->
        <!-- <button class="button js-enqueue">
            <i class="icon-plus-sign"></i>Queue
        </button> -->
        <!-- <button class="button js-enqueue">
            <i class="icon-plus-sign"></i>Archive
        </button> -->
        <!-- <button class="button js-enqueue">
            <i class="icon-plus-sign"></i>Mark Played
        </button> -->
    </div>

    <div class="large-9 small-12 columns">

        <img src=./assets/img/<%= albumArt %> alt="" class="library-image">
        <% if (typeof(feedUrl) !== "undefined") { %>
            <h6><a href="<%= feedUrl %>">Homepage</a><h6>
        <% } %>
        <% if (typeof(episodeSummary) != "undefined") { %>
            <p><%= episodeSummary %></p>
        <% } %>
        <% if (typeof(episodeSummary) === "undefined") { %>
            <p></p>
        <% } %>

    </div>


</div>
<div class="dialog-fixed-bottom" style="width: 100%;">
    <button class="button js-play-now" style="width:100%;">
        <i class="icon-play"></i>Play Now
    </button>
</div>

