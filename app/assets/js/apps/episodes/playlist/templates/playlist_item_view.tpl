<!-- playlist_item_view.tpl -->
<td class="js-episode-detail" style="padding:0;width:65px;height:65px;">
    <img src=./assets/img/<%= albumArt %> alt="" style="height:65px;width:65px;" />
</td>
<td class="js-episode-detail">
    <a class="js-"><i class="icon-circle-arrow-up"></i></a>
    <% if (typeof(feedUrl) !== "undefined") { %>
          <a href="<%= feedUrl %>" ><%= episodeTitle %></a> <br />
    <% } %>
    <% if (typeof(feedUrl) === "undefined") { %>
          <a href=" " ><%= episodeTitle %></a> <br />
    <% } %>
</td>
<td class="js-episode-detail">
    <a href="#" class="js-top-of-queue"><i style="font-size:20px" class="fi-arrow-up"></i></a>
</td>