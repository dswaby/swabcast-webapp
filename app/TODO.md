> This is a personal project/ proof of concept/ learning project

Goals
=====
> so i recently found a site that does many of the things I hope to achieve in this app
>
> see [player.fm](http://player.fm)
> however, it is a rather poor implementation and lacks a decent implementation of a mobile web version,
> it does however have native apps for Android and iOS


**Primary Goal**
Create a native feeling web application for managing podcasts

*	individual user accounts
*	be able to search, add, and sync podcast subscriptions
*	be able to manually add feeds via xml or atom feed url
*	be able to create playlists, listen to episodes, mark played/archive listened to episodes
*	make use offline storage/indexDb
*	be able to sync episode current position
*	load optimized version via bookmark on iOS, see [forecast.io] [forecast] on iPhone




[forecast]: http://forecast.io/  "Forecast.io"

My focus here is on the UI and mobile web experience

Assumptions
===========
> subject to change
* Using Asp.net MVC 4 or in Ruby possibly using Sinatra or Padrino
* RESTful
* JS is AMD
* Tested, optimized
* Using mongodb to store user subscriptions and feed data in corresponding MongoDocs
	(ie episodes data,played episodes, episodes in playlists, archived/hidden episodes, last played position/completed)
* Using either websockets/ nodejs/ long polling to update episode positions
* Parse XML/Atom feeds
* Create repository for storing, updating, retrieving and adding XML feed data



List of Related Repos To Reference/Research or use for inspiration
------------------------------------------------------------------

* https://github.com/davatron5000/TimeJump
