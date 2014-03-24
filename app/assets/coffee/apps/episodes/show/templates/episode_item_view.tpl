<!-- episode_item_view.tpl -->
<td class="js-show-view-detail table-date">

    <h5>
      <%= getPublishedMonth(publishedAt) %>
    </h5>

    <p>
      <%= getPublishedDay(publishedAt) %>
    </p>
</td>
<td class="js-show-view-detail">
    <a style="margin-left:5px;font-size:14px" ><%= episodeTitle %></a>
    <a class="feed-color"><i class="fi-eye"></i></a>
</td>

<td class="js-show-enqueue" style="width:40px;">
    <div class="icon-closure">
        <a><i class="fi-plus"></i></a>
    </div>
</td>