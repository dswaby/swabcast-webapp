<!--  FeedView Template  -->
	<div class="large-5 small-12 columns">
		<a data-reveal-id=<%= feedUid %>-episodes  href="#"><img style="" src=./assets/img/<%= albumArt %> alt=""></a>
		<a class="js-feed-details" href=""><h5><%= subscriptionTitle %></h5></a>
					<h6 class="subheader">Author Name</h6>
		<div id=<%= feedUid %>-episodes class="reveal-modal" data-reveal>
			<div class="library episodes-list" style="width:100%; height:200px; overflow:auto; margin-bottom:50px;
			border-style:solid; border-width:3px; border-color:#fefefe;">
				<table style="width:100%">
					<tbody id="episodes-container" style="width:100% !important;" >

					</tbody>
				</table>
			</div>
			<a class="close-reveal-modal">&#215;</a>
		</div>
	</div>
<!--  End FeedView Template  -->