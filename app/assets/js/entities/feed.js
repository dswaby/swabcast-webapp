(function() {
  define(["app", "apps/config/storage/localstorage"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      var API, feeds, initializeFeeds;
      Entities.Episode = Backbone.Model.extend({
        urlRoot: "episode",
        defaults: {
          "albumArt": "podcast-default.png",
          "episodeTitle": "",
          "mediaUrl": "",
          "enqueue": false
        }
      });
      Entities.configureStorage(Entities.Episode);
      Entities.Episodes = Backbone.Collection.extend({
        url: "episode",
        model: Entities.Episode,
        comparator: "episodeTitle"
      });
      Entities.configureStorage(Entities.Episodes);
      Entities.Feed = Backbone.Model.extend({
        urlRoot: "feeds",
        defaults: {
          "id": "",
          "subscriptionTitle": "",
          "albumArt": "default.jpg",
          "summary": "na",
          "feedUrl": "http://somefeed.com/feed.xml",
          "authors": ""
        }
      });
      Entities.configureStorage(Entities.Feed);
      Entities.Feeds = Backbone.Collection.extend({
        url: "feeds",
        model: Entities.Feed
      });
      Entities.configureStorage(Entities.Feeds);
      feeds = void 0;
      initializeFeeds = function() {
        feeds = new Entities.Feeds([
          {
            "id": 8396,
            "feedUrl": "http://shoptalkshow.om",
            "mediaUrl": "http://shoptalkshow.com/feed/podcast/",
            "authors": "ShopTalk",
            "subscriptionTitle": "ShopTalk",
            "summary": "ShopTalk is a podcast about front end web design, development and UX. Each week Chris Coyier and Dave Rupert are joined by a special guest to talk shop and answer listener submitted questions.",
            "albumArt": "shoptalk.jpeg",
            "episodes": [
              {
                "uid": 36537622,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/510/0/157058-106-with-nick-pettit.mp3",
                "explicit": false,
                "episodeTitle": "106: With Nick Pettit",
                "episodeSummary": "This week we were joined by Nick Pettit, educator at Treehouse, an online learning platform. We talked about (roughly in order): News’n’Links’n’Drama: 17:25 Correction regarding Drupal and 1000 script/style files. 20:10 Github releases Atom, a hackable text editor Q &amp; A: 23:29 I’m curious about making the shift from HTML, CSS, jQuery, WordPress development to... <a href=\"http://shoptalkshow.com/episodes/106-nick-pettit/\" title=\"Read 106: With Nick Pettit\">Read more »</a>",
                "publishedAt": 1394547940,
                "size": 34686773,
                "duration": 4303
              }, {
                "uid": 36212854,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/508/0/154220-105-rapidfire-24.mp3",
                "explicit": false,
                "episodeTitle": "105: RAPIDFIRE 24",
                "episodeSummary": "This week it’s another RAPIDFIRE! We take listener questions and try to answer them as best we can within a 3 minute time constraint. We talked about (roughly in order): Q &amp; A: 2:19 What’s the best way to release a tiny JQuery plugin? 6:14 My question is about Grunt and requireJS: if I concatenate... <a href=\"http://shoptalkshow.com/episodes/105-rapidfire-24/\" title=\"Read 105: RAPIDFIRE 24\">Read more »</a>",
                "publishedAt": 1393620849,
                "size": 28966109,
                "duration": 3609
              }, {
                "uid": 36057303,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/504/0/152437-104-with-leslie-jensen-inman.mp3",
                "explicit": false,
                "episodeTitle": "104: With Leslie Jensen-Inman",
                "episodeSummary": "This week we were joined by Dr. Leslie Jensen-Inman, headmaster of the Unicorn Institute (aka Center Centre) in Chattanooga, TN. We talked about (roughly in order): 26:50 Firefox 26 now supporting audio decoding Q &amp; A: 29:20 Will Center Center have online classes? 30:34 Do you guys have any experience with the WordPress plug-in WP... <a href=\"http://shoptalkshow.com/episodes/104-leslie-jensen-inman/\" title=\"Read 104: With Leslie Jensen-Inman\">Read more »</a>",
                "publishedAt": 1393036447,
                "size": 29577344,
                "duration": 3666
              }, {
                "uid": 35986838,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/500/0/152062-103-with-louis-lazeris.mp3",
                "explicit": false,
                "episodeTitle": "103: With Louis Lazaris",
                "episodeSummary": "This week we were joined by Louis Lazeris. Louis is the curator of the Web Tools Weekly email newsletters, and co-author of HTML5 &amp; CSS3 for the Real World. We talked about (roughly in order): News’n’Links’n’Drama: 8:54 w3schools: The Ugly, the Bad, and the Good Q &amp; A: 20:54 Is there any good solution on... <a href=\"http://shoptalkshow.com/episodes/103-louis-lazaris/\" title=\"Read 103: With Louis Lazaris\">Read more »</a>",
                "publishedAt": 1392869108,
                "size": 29068805,
                "duration": 3601
              }, {
                "uid": 35848240,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/499/0/150063-102-rapidfire-23.mp3",
                "explicit": false,
                "episodeTitle": "102: Rapidfire 23",
                "episodeSummary": "This week it’s another RAPIDFIRE!!! We take listener questions and try to answer them as best we can within a 3 minute time constraint. We talked about (roughly in order): Q &amp; A: 3:07 HTML email is super fun to design for, so I’m a little surprised that you guys aren’t all about it, and... <a href=\"http://shoptalkshow.com/episodes/102-rapidfire-23/\" title=\"Read 102: Rapidfire 23\">Read more »</a>",
                "publishedAt": 1392244589,
                "size": 29896832,
                "duration": 3725
              }, {
                "uid": 35736650,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/496/0/148777-101-with-john-resig.mp3",
                "explicit": false,
                "episodeTitle": "#101: With John Resig",
                "episodeSummary": "This week we were joined by John Resig. John is the Dean of Computer Science at Khan Academy and the creator of the jQuery JavaScript library. He’s also the author of the books Pro JavaScript Techniques and Secrets of the JavaScript Ninja. We talked about (roughly in order): Q &amp; A: 42:08 Is it worth... <a href=\"http://shoptalkshow.com/episodes/101-john-resig/\" title=\"Read #101: With John Resig\">Read more »</a>",
                "publishedAt": 1391804397,
                "size": 32624768,
                "duration": 4066
              }, {
                "uid": 35589999,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/492/0/146822-100-with-rachel-andrew.mp3",
                "explicit": false,
                "episodeTitle": "100: With Rachel Andrew",
                "episodeSummary": "This week we were joined by Rachel Andrew, author and purveyor of Perch, a lightweight PHP content management system. We talked about (roughly in order): News’n’Links’n’Drama: 10:23 CSS Regions Considered Harmful 16:40 Squarespace Logo 21:06 Google Webfonts: The Spy Inside Q &amp; A: 26:55 One thing that’s not very well known is that Perch actually... <a href=\"http://shoptalkshow.com/episodes/100-rachel-andrew/\" title=\"Read 100: With Rachel Andrew\">Read more »</a>",
                "publishedAt": 1391118234,
                "size": 29149312,
                "duration": 3632
              }, {
                "uid": 35476590,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/489/0/145281-099-with-jonathan-mahoney.mp3",
                "explicit": false,
                "episodeTitle": "099: With Jonathan Mahoney",
                "episodeSummary": "This week we were joined by Jonathan Mahoney, a UX Architect for a B2B enterprise company. We talked about (roughly in order): News’n’Links’n’Drama: 12:55 Myth Busting: CSS Animations vs. JavaScript 17:33 When to use target=”_blank”? 23:17 Google bought Nest Q &amp; A: 25:20 Should I convert my existing website to be responsive, or start over... <a href=\"http://shoptalkshow.com/episodes/099-jonathan-mahoney/\" title=\"Read 099: With Jonathan Mahoney\">Read more »</a>",
                "publishedAt": 1390586207,
                "size": 27033728,
                "duration": 3368
              }, {
                "uid": 35347845,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/486/0/143243-098-lyza-danger-gardner.mp3",
                "explicit": false,
                "episodeTitle": "098: With Lyza Danger Gardner",
                "episodeSummary": "This week we were joined by Lyza Danger Gardner. We talked about (roughly in order): News’n’Links’n’Drama: 12:33 Web Standards Killed The HTML Star, and Is Web Design Dead? 21:40 Grunt is dead? What about Gulp? Q &amp; A: 27:04 I’m curious to know how we as a community are handling touch events on mobile devices... <a href=\"http://shoptalkshow.com/episodes/098-lyza-danger-gardner/\" title=\"Read 098: With Lyza Danger Gardner\">Read more »</a>",
                "publishedAt": 1389846151,
                "size": 30345344,
                "duration": 3782
              }, {
                "uid": 35161487,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/484/0/097_Mina_Markham.mp3",
                "explicit": false,
                "episodeTitle": "097: With Mina Markham",
                "episodeSummary": "This week we were joined by Mina Markham, a Sass-lovin’ designer and developer from Dallas, Texas. She’s a Syracuse University alum, part-time freelancer, full-time Parago employee, and soon-to-be Girl Develop It teacher. We talked about (roughly in order): News’n’Links’n’Drama Myth.io: “CSS Level 4 kind of stuff” Q &amp; A 17:01 I’ve just started using Compass... <a href=\"http://shoptalkshow.com/episodes/097-mina-markham/\" title=\"Read 097: With Mina Markham\">Read more »</a>",
                "publishedAt": 1388079144,
                "size": 30383096,
                "duration": 3765
              }, {
                "uid": 34836747,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/482/0/136861-096-rapidfire-22.mp3",
                "explicit": false,
                "episodeTitle": "096: Rapidfire #22",
                "episodeSummary": "This week is another RAPIDFIRE!!! We talked about (roughly in order): Q &amp; A: 2:02 Should I use “.mainNav” or “nav.main”? Do you see any issues with using either? 4:54 I’m looking to find a new job. How should I approach employers when I’m not proud of the sites I’ve been working on? 7:18 I... <a href=\"http://shoptalkshow.com/episodes/096-rapidfire-22/\" title=\"Read 096: Rapidfire #22\">Read more »</a>",
                "publishedAt": 1387208294,
                "size": 25557120,
                "duration": 3163
              }, {
                "uid": 34629014,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/478/0/136283-095-with-daniel-mall.mp3",
                "explicit": false,
                "episodeTitle": "095: With Daniel Mall",
                "episodeSummary": "This week we were joined by super-designer Dan Mall. Dan currently runs Superfriend.ly, is a co-host of the Businessology podcast, and previously worked at Happy Cog and Big Spaceship. We talked about (roughly in order): News’n’Links’n’Drama: 17:10 CSSOff #hotdrama: Dan made a PSD that was too good. Q &amp; A: 33:02 In defense of AMPPS…... <a href=\"http://shoptalkshow.com/episodes/095-daniel-mall/\" title=\"Read 095: With Daniel Mall\">Read more »</a>",
                "publishedAt": 1386701918,
                "size": 29950080,
                "duration": 3732
              }, {
                "uid": 34390636,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/474/0/134654-094-with-emily-dunkle.mp3",
                "explicit": false,
                "episodeTitle": "094: With Emily Dunkle",
                "episodeSummary": "This week we were joined by Emily Dunkle. Emily is a UI &amp; UX Designer from Massachusetts. She believes in semantic markup, design of all kinds, and a good old-fashioned legal pad. We talked about (roughly in order): Q &amp; A: 16:37 My company’s IT department has taken over our website. What can I do... <a href=\"http://shoptalkshow.com/episodes/094-emily-dunkle/\" title=\"Read 094: With Emily Dunkle\">Read more »</a>",
                "publishedAt": 1386109065,
                "size": 31096960,
                "duration": 3856
              }, {
                "uid": 33785749,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/472/0/132312-093-rapidfire-21.mp3",
                "explicit": false,
                "episodeTitle": "093: RAPIDFIRE #21",
                "episodeSummary": "This week, it’s another RAPID FIRE!!! Chris and Dave take on listener questions, fast and furious. 2:27 Do you guys have any advice when the time comes to hand over a WordPress site? 5:57 What are your opinions about disabilities (hopefully about stuttering but not necessary) in the workplace? 9:06 How do I address responsiveness... <a href=\"http://shoptalkshow.com/episodes/093-rapidfire-21/\" title=\"Read 093: RAPIDFIRE #21\">Read more »</a>",
                "publishedAt": 1385158395,
                "size": 29530240,
                "duration": 3660
              }, {
                "uid": 33639033,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/464/0/131434-092-with-dudley-storey.mp3",
                "explicit": false,
                "episodeTitle": "092: With Dudley Storey",
                "episodeSummary": "This week we were joined by Dudley Storey. Dudley is a teacher, craftsman, designer &amp; writer, and the author of Pro CSS3 Animation. News’n’Links’n’Drama: 7:00 Webkit hates src-N End Of Year Responsive Images Report 13:14 CSSOff 2013 17:20 Learn jQuery from Scratch (CSS-Tricks Class) Q &amp; A: 21:15 Is it worth taking the time to... <a href=\"http://shoptalkshow.com/episodes/092-with-dudley-storey/\" title=\"Read 092: With Dudley Storey\">Read more »</a>",
                "publishedAt": 1384892192,
                "size": 31856768,
                "duration": 3950
              }, {
                "uid": 33356609,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/468/0/129716-091-js-jabber-crossover.mp3",
                "explicit": false,
                "episodeTitle": "091: With Jamison Dance AND Merrick Christensen",
                "episodeSummary": "This week we were joined by Merrick and Jamison from the Javascript Jabber podcast. They are both super awesome at javascript and very handsome. We talked about (roughly in order): News’n’Links’n’Drama: 10:42 Responsive Web Design: Relying Too Much On Screen Size by LukeW Rebuttal by Ethan Marcotte: RESPONSIVE DESIGN, SCREENS, AND SHEARING LAYERS PPK: Of... <a href=\"http://shoptalkshow.com/episodes/091-js-jabber/\" title=\"Read 091: With Jamison Dance AND Merrick Christensen\">Read more »</a>",
                "publishedAt": 1384270583,
                "size": 29849728,
                "duration": 3731
              }, {
                "uid": 33057072,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/462/0/127943-090-with-pamela-fox.mp3",
                "explicit": false,
                "episodeTitle": "090: With Pamela Fox",
                "episodeSummary": "This week we were joined by Pamela Fox, a web developer and educator currently working at Khan Academy. We talked about (roughly in order): News’n’Links’n’Drama: 9:30 Big Snow Tiny Conf 10:30 Automating Workflow Slide Deck Q &amp; A: 14:54 I’m sold on GIT and have used it locally on my machine. How can I go... <a href=\"http://shoptalkshow.com/episodes/090-pamela-fox/\" title=\"Read 090: With Pamela Fox\">Read more »</a>",
                "publishedAt": 1383661233,
                "size": 31252608,
                "duration": 3875
              }, {
                "uid": 32836743,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/457/0/126438-089-with-karen-mcgrane.mp3",
                "explicit": false,
                "episodeTitle": "089: With Karen McGrane",
                "episodeSummary": "This week we were joined by Karen McGrane. Karen is a mobile content strategist and has a fantastic book called Content Strategy for Mobile. We talked about (roughly in order): News’n’Links’n’Drama: 24:08 Front End Architechture Showdown CSS Cargo Cult 25:19 Does our Industry have a Drinking Problem? 29:34 Scroll Hijacking Q &amp; A: 34:56 Why... <a href=\"http://shoptalkshow.com/episodes/089-karen-mcgrane/\" title=\"Read 089: With Karen McGrane\">Read more »</a>",
                "publishedAt": 1383172951,
                "size": 32184448,
                "duration": 3992
              }, {
                "uid": 32553489,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/453/0/124664-088-with-scott-jehl.mp3",
                "explicit": false,
                "episodeTitle": "088: With Scott Jehl",
                "episodeSummary": "This week we were joined by Scott Jehl, a progressive enhancer at Filament Group. We talked about (roughly in order): News’n’Links’n’Drama: 15:48 Godaddy aquired Media Temple Q &amp; A: 24:30 I want to use a ‘mobile first’ approach, but the client wants to see the desktop version first. How would you solve this little problem?... <a href=\"http://shoptalkshow.com/episodes/088-scott-jehl/\" title=\"Read 088: With Scott Jehl\">Read more »</a>",
                "publishedAt": 1382476646,
                "size": 34836608,
                "duration": 4323
              }, {
                "uid": 32348061,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/444/0/123327-087-with-nicholas-gallagher.mp3",
                "explicit": false,
                "episodeTitle": "087: With Nicolas Gallagher",
                "episodeSummary": "This week we were joined by Nicolas Gallagher, CSS expert. We talked about (roughly in order): News’n’Links’n’Drama: 8:29 EFF gets involved in DRM Q &amp; A: 13:40 I’m a front end developer working in Rails these days. I want an automated way to produce styles guides. How do you produce guides for your clients? Have... <a href=\"http://shoptalkshow.com/episodes/087-nicolas-gallagher/\" title=\"Read 087: With Nicolas Gallagher\">Read more »</a>",
                "publishedAt": 1381959299,
                "size": 30300288,
                "duration": 3756
              }, {
                "uid": 32111032,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/439/0/120469-086-with-jenn-schiffer.mp3",
                "explicit": false,
                "episodeTitle": "086: With Jenn Schiffer",
                "episodeSummary": "This week we were joined by Jenn Schiffer. Jenn works at sports-ball and knows Michael Jordan. She also makes websites! We talked about (roughly in order): Q &amp; A: 9:51 How can we go about getting back in touch with our inner creative coder? And how can we start introducing this back into our ‘bread... <a href=\"http://shoptalkshow.com/episodes/086-with-jenn-schiffer/\" title=\"Read 086: With Jenn Schiffer\">Read more »</a>",
                "publishedAt": 1381355303,
                "size": 29014144,
                "duration": 3595
              }, {
                "uid": 31892954,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/434/0/119092-085-with-kimberly-blessing.mp3",
                "explicit": false,
                "episodeTitle": "085: With Kimberly Blessing",
                "episodeSummary": "This week we were joined by Kimberly Blessing. We talked about (roughly in order): News’n’Links’n’Drama: 6:17 CERN – The birth of the web The first web browser FORK THE LINE-MODE BROWSER Q &amp; A: 16:02 What are your opinions on the nonstandard mozmm units? See also : Blog post. 24:20 I was wondering if either... <a href=\"http://shoptalkshow.com/episodes/085-with-kimberly-blessing/\" title=\"Read 085: With Kimberly Blessing\">Read more »</a>",
                "publishedAt": 1380815067,
                "size": 26992768,
                "duration": 3343
              }, {
                "uid": 26416307,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/431/0/111080-084-rapidfire-20.mp3",
                "explicit": false,
                "episodeTitle": "084: RAPIDFIRE #20",
                "episodeSummary": "It’s time for another RAPIDFIRE! No news, no drama, just lots of question and answer action. Q &amp; A: 0:51 How do you prefer ordering your queries within your stylesheet? Is mobile-first really the best strategy here? 8:27 Would either of you have any insights as to how to test, target, and develop for the... <a href=\"http://shoptalkshow.com/episodes/084-rapidfire-20/\" title=\"Read 084: RAPIDFIRE #20\">Read more »</a>",
                "publishedAt": 1377788248,
                "size": 28299729,
                "duration": 3505
              }, {
                "uid": 25647103,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/429/0/111077-083-with-flo-motlik.mp3",
                "explicit": false,
                "episodeTitle": "083: With Florian Motlik",
                "episodeSummary": "This week we were joined by Florian Motlik. Flo is an awesome programmer an a co-founder of Codeship.io, a part of Codestars Boston. This episode is a deep dive into continuous deployment and automation. We talked about (roughly in order): Q &amp; A: 13:08 I would like to use Git for version control, and set... <a href=\"http://shoptalkshow.com/episodes/083-with-florian-motlik/\" title=\"Read 083: With Florian Motlik\">Read more »</a>",
                "publishedAt": 1377698578,
                "size": 31236224,
                "duration": 3873
              }, {
                "uid": 25086885,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/360/0/109751-082-with-jason-santa-maria.mp3",
                "explicit": false,
                "episodeTitle": "082: With Jason Santa Maria",
                "episodeSummary": "This week we were joined by Jason Santa Maria, a designer currently in Brooklyn, New York. You might know Jason from his work on Typekit or more recently the writing collaboration tool Editorially. Or perhaps from past work like the WordPress logo and from working at renowned web studio Happy Cog. We talked about (roughly... <a href=\"http://shoptalkshow.com/episodes/082-with-jason-santa-maria/\" title=\"Read 082: With Jason Santa Maria\">Read more »</a>",
                "publishedAt": 1376832407,
                "size": 29954848,
                "duration": 3712
              }, {
                "uid": 25330262,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/357/0/109752-081-with-geri-coady.mp3",
                "explicit": false,
                "episodeTitle": "081: With Geri Coady",
                "episodeSummary": "This week we were joined by Geri Coady, an illustrator, designer, and author from Newfoundland, Canada. We talked about (roughly in order): News’n’Links’n’Drama 17:51 WooThemes Price Change, also here 22:00 Chrome’s password saving drama Q &amp; A 29:02 Are there any particular hues and shades of colors that are particularly inaccessible or render unfaithfully? Also,... <a href=\"http://shoptalkshow.com/episodes/081-with-geri-coady/\" title=\"Read 081: With Geri Coady\">Read more »</a>",
                "publishedAt": 1376577128,
                "size": 29132931,
                "duration": 3609
              }, {
                "uid": 25330263,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/352/0/109753-080-rapidfire-19.mp3",
                "explicit": false,
                "episodeTitle": "080: RAPIDFIRE #19",
                "episodeSummary": "It’s time for another RAPIDFIRE! We talk about (roughly in order): Q &amp; A 2:30 Which books would you recommend learning about CSS and /or UX design? 6:32 There is a lot of hype around the Hammer and Mixture static site generators right now. Can teams work on these together, or are they just made... <a href=\"http://shoptalkshow.com/episodes/080-rapidfire-18/\" title=\"Read 080: RAPIDFIRE #19\">Read more »</a>",
                "publishedAt": 1375371677,
                "size": 28852271,
                "duration": 3574
              }, {
                "uid": 25330264,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/355/0/109754-079-with-travis-miller.mp3",
                "explicit": false,
                "episodeTitle": "079: With Travis Miller",
                "episodeSummary": "This week we were joined by Travis Miller, a full stack developer at SPARK. Chris and Dave met Travis at Front End Conf where he gave a talk about hip hop and the web. We talk about (roughly in order): News’n’Links’n’Drama: 9:24 Why You Shouldn’t Tell That Random Girl On The Street That She’s Hot... <a href=\"http://shoptalkshow.com/episodes/079-with-travis-miller/\" title=\"Read 079: With Travis Miller\">Read more »</a>",
                "publishedAt": 1375219174,
                "size": 30428813,
                "duration": 3771
              }, {
                "uid": 25330265,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/353/0/109755-078-with-rick-blalock.mp3",
                "explicit": false,
                "episodeTitle": "078: With Rick Blalock",
                "episodeSummary": "This week we were joined by mobile architect Rick Blalock. Rick currently works at Appcelerator, a framework for building out native applications in Javascript. Rick also knows quite a bit about Joomla. We talked about (roughly in order): News’n’Links’n’Drama: 12:30 Why mobile apps are slow 21:17 Tweetbot Neue 22:42 Clear up EE drama: Brandon Kelley... <a href=\"http://shoptalkshow.com/episodes/078-with-rick-blalock/\" title=\"Read 078: With Rick Blalock\">Read more »</a>",
                "publishedAt": 1374618580,
                "size": 32077244,
                "duration": 3977
              }, {
                "uid": 25330266,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/351/0/109756-077-rapidfire-18.mp3",
                "explicit": false,
                "episodeTitle": "077: RAPIDFIRE #18",
                "episodeSummary": "This week it’s another RAPIDFIRE! We talked about (roughly in order): Q &amp; A 2:23 I recently ran the W3C Markup Validation tool on one of my WordPress site. I was amazed to see how many errors came up… Do you have any suggestions for validating my markup? 9:19 Should I learn Haml or Emmet... <a href=\"http://shoptalkshow.com/episodes/077-rapidfire-18/\" title=\"Read 077: RAPIDFIRE #18\">Read more »</a>",
                "publishedAt": 1373545425,
                "size": 35093865,
                "duration": 4354
              }, {
                "uid": 25330267,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/347/0/109757-076-with-tim-sabat-and-alex-vazquez.mp3",
                "explicit": false,
                "episodeTitle": "076: With Tim Sabat and Alex Vazquez",
                "episodeSummary": "This week we were joined by Tim Sabat and Alex Vazquez. Like Chris, Tim and Alex worked at Wufoo, then SurveyMonkey after the acquisition. Now all three of them are the founders of CodePen. We talk about (roughly in order): News’n’Links’n’Drama 13:02 Expression Engine Drama – “Competition Ethics &amp; Add-ons” 17:40 Firefox 23: Disable Javascript... <a href=\"http://shoptalkshow.com/episodes/076-with-tim-sabat-and-alex-vazquez/\" title=\"Read 076: With Tim Sabat and Alex Vazquez\">Read more »</a>",
                "publishedAt": 1373315450,
                "size": 32111726,
                "duration": 3981
              }, {
                "uid": 25330268,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/348/0/109758-075-with-tim-kadlec.mp3",
                "explicit": false,
                "episodeTitle": "075: With Tim Kadlec",
                "episodeSummary": "This week we were joined by Tim Kadlec. Tim is a front end developer, blogger, book author, and started the web conference Breaking Development at his previous job. We talk about (roughly in order): News’n’Links’n’Drama 3:40 “Just Build Websites!” Soundbyte 5:30 Breaking Development Conf 9:30 Tim’s Drama: Science and responsive images 19:15 “The Sidebar In... <a href=\"http://shoptalkshow.com/episodes/075-with-tim-kadlec/\" title=\"Read 075: With Tim Kadlec\">Read more »</a>",
                "publishedAt": 1372942492,
                "size": 31491570,
                "duration": 3904
              }, {
                "uid": 25330269,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/345/0/109759-live-from-front-end-conf.mp3",
                "explicit": false,
                "sequence": null,
                "episodeTitle": "Live from Front-End Conf",
                "episodeSummary": "This episode of Shop Talk was filmed before a live studio audience. Thanks to Dan &amp; Cherrie Denney for inviting us down to Front-End Design Conference in St. Petersburg, Florida. Chris played the banjo a bit and Dave wore a Floridian shirt. It is a spectacular conference and a lot of fun was had. We... <a href=\"http://shoptalkshow.com/episodes/live-from-front-end-conf/\" title=\"Read Live from Front-End Conf\">Read more »</a>",
                "publishedAt": 1372182780,
                "size": 27928916,
                "duration": 1745
              }, {
                "uid": 25330270,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/342/0/109760-074-with-noah-stokes.mp3",
                "explicit": false,
                "episodeTitle": "074: With Noah Stokes",
                "episodeSummary": "This week we were joined by Noah Stokes, founder and partner of Bold (a web design studio) as well as a designer and front end coder with the best of them. Noah is also a professional newscaster, blogger‘, and speaker. We talked about (roughly in order): News’n’Links’n’Drama: 9:57 PRISM 13:05 “Ughck. Images.” 17:47 More about... <a href=\"http://shoptalkshow.com/episodes/074-with-noah-stokes/\" title=\"Read 074: With Noah Stokes\">Read more »</a>",
                "publishedAt": 1372103551,
                "size": 30742492,
                "duration": 3810
              }, {
                "uid": 25330271,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/340/0/109761-073-with-val-head.mp3",
                "explicit": false,
                "episodeTitle": "073: With Val Head",
                "episodeSummary": "This week we were joined by Val Head. Val is a designer and consultant. She co-founded Web Design Day and Refresh Pittsburgh, is the Managing Editor of CreativeJS.com, and just released the CSS Animations Pocket Guide on Five Simple Steps. We have some sponsor spots open! Get your thing in front of lots of smart,... <a href=\"http://shoptalkshow.com/episodes/073-with-val-head/\" title=\"Read 073: With Val Head\">Read more »</a>",
                "publishedAt": 1371576976,
                "size": 29244526,
                "duration": 3623
              }, {
                "uid": 25330272,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/338/0/109762-072-with-raquel-velez.mp3",
                "explicit": false,
                "episodeTitle": "072: With Raquel Velez",
                "episodeSummary": "This week we were joined by Raquel Velez, an all around web and robot hacker focusing on Node.js at the moment at Storify. We talked about (roughly in order): News’n’Links’n’Drama: 5:30 Why is Node good for robots? Q &amp; A: 14:50 I was wondering if you could talk about what the ideal scenario is to... <a href=\"http://shoptalkshow.com/episodes/072-with-raquel-velez/\" title=\"Read 072: With Raquel Velez\">Read more »</a>",
                "publishedAt": 1370906832,
                "size": 30278975,
                "duration": 3752
              }, {
                "uid": 25330273,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/333/0/109763-071-rapidfire-17.mp3",
                "explicit": false,
                "episodeTitle": "071: RAPIDFIRE #17",
                "episodeSummary": "This week we have a special RAPIDFIRE episode for you! We’re gonna answer as many of your questions as possible, as best as we can (in three minutes or less)! We talked about (roughly in order): Q &amp; A 2:50 I’m trying to think about mobile first. Is serving HTML content through JavaScript bad? Can... <a href=\"http://shoptalkshow.com/episodes/071-rapidfire-17/\" title=\"Read 071: RAPIDFIRE #17\">Read more »</a>",
                "publishedAt": 1369922447,
                "size": 28317284,
                "duration": 3507
              }, {
                "uid": 25330274,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/329/0/109764-070-with-hampton-catlin.mp3",
                "explicit": false,
                "episodeTitle": "070: With Hampton Catlin",
                "episodeSummary": "This week we were joined by Hampton Catlin. Hampton is the inventor of Sass and Haml, the original creator of Wikipedia Mobile, and several successful iPhone applications including Dictionary! Hampton is currently building crazy new technologies to mobilize the web at Moovweb. We talked about (roughly in order): News’n’Links’n’Drama 19:20 Welcome, Recent Graduates by Mike... <a href=\"http://shoptalkshow.com/episodes/070-with-hampton-catlin/\" title=\"Read 070: With Hampton Catlin\">Read more »</a>",
                "publishedAt": 1369890134,
                "size": 29957982,
                "duration": 3712
              }, {
                "uid": 25330275,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/327/0/109765-069-with-mike-taylor.mp3",
                "explicit": false,
                "episodeTitle": "069: With Mike Taylor",
                "episodeSummary": "This week we were joined by Mike Taylor, a whitespace strategist from Opera. We talked about (roughly in order): News’n’Links’n’Drama: 6:37 The W3C added EME Spec (aka DRM for video) Q &amp; A 19:24 Percentages seem to render different in Opera, what’s the deal? Should I use media queries instead? 23:42 Wouldn’t it be nice... <a href=\"http://shoptalkshow.com/episodes/069-with-mike-taylor/\" title=\"Read 069: With Mike Taylor\">Read more »</a>",
                "publishedAt": 1369171130,
                "size": 28602813,
                "duration": 3543
              }, {
                "uid": 25330276,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/323/0/109766-068-with-ben-schwarz.mp3",
                "explicit": false,
                "episodeTitle": "068: With Ben Schwarz",
                "episodeSummary": "This week we were joined by Ben Schwarz, a full stack web hacker, tool maker, and tip sharer from Melbourne, Australia. We talked about (roughly in order): News’n’Links’n’Drama: 4:00 Ben’s latest project Gallery CSS 11:30 Global Accessibility Awareness Day 14:50 National Fart JavaScript Awareness Day Q &amp; A: 16:30 When does Ben use Grunt JS... <a href=\"http://shoptalkshow.com/episodes/068-with-ben-schwarz/\" title=\"Read 068: With Ben Schwarz\">Read more »</a>",
                "publishedAt": 1368649621,
                "size": 33453166,
                "duration": 4149
              }, {
                "uid": 25330277,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/317/0/109767-067-with-pam-selle.mp3",
                "explicit": false,
                "episodeTitle": "067: With Pam Selle",
                "episodeSummary": "This week we were joined by Pam Selle, a full stack developer in many languages and all around hacker from Philly. Pam works at AxisPhilly, teaches for GirlDevelopIt, and blogs at The Webivore. We talk about (roughly in order): News’n’Links’n’Drama 1:50 Introducing Pam Selle 2:45 Pam’s day job: Axis Philly 4:00 Girl Develop It 8:37... <a href=\"http://shoptalkshow.com/episodes/067-with-pam-selle/\" title=\"Read 067: With Pam Selle\">Read more »</a>",
                "publishedAt": 1367950924,
                "size": 39239965,
                "duration": 3898
              }, {
                "uid": 25330278,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/300/0/109768-066-rapidfire-16.mp3",
                "explicit": false,
                "episodeTitle": "066: RAPIDFIRE #16",
                "episodeSummary": "Another classic RAPIDFIRE! No guests, no drama, no news, just all redhot question on answer action. What do you use to concatenate JavaScript files before production on Windows? Aren’t thinks like history.pushState just new JavaScript things, not HTML5? Can Sublime Text help with re-usable components? How do you diagram these fancy one-page style apps? How... <a href=\"http://shoptalkshow.com/episodes/066-rapidfire-16/\" title=\"Read 066: RAPIDFIRE #16\">Read more »</a>",
                "publishedAt": 1366898402,
                "size": 37198081,
                "duration": 4649
              }, {
                "uid": 25330279,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/313/0/109769-065-with-ben-frain.mp3",
                "explicit": false,
                "episodeTitle": "065: With Ben Frain",
                "episodeSummary": "This week we were joined by Ben Frain, a web developer, technology columnist, and book author from Cheshire, UK. Ben has written for major publications like MacUser, .net, and The Guardian and is also a very famous television actor. We talked about (roughly in order): News’n'Links’n'Drama Seven Rules nonsense. Aral Balkan’s Slide &amp; Stage The... <a href=\"http://shoptalkshow.com/episodes/056-with-ben-frain/\" title=\"Read 065: With Ben Frain\">Read more »</a>",
                "publishedAt": 1366740579,
                "size": 31444036,
                "duration": 3898
              }, {
                "uid": 25330280,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/290/0/109770-064-rapidfire-15.mp3",
                "explicit": false,
                "episodeTitle": "064: RAPIDFIRE #15",
                "episodeSummary": "Another RAPIDFIRE episode where Dave and Chris answer as many questions as possible. No guests, no news, no drama, just all question on answer action. This time they set a timer so no answer may exceed 3 minutes! 2:43 Should you learn jQuery or JavaScript first? 5:30 How come two scripts seem to work fine... <a href=\"http://shoptalkshow.com/episodes/064-rapidfire-15/\" title=\"Read 064: RAPIDFIRE #15\">Read more »</a>",
                "publishedAt": 1365688801,
                "size": 27195272,
                "duration": 3367
              }, {
                "uid": 25330281,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/307/0/109771-063-with-rachel-nabors.mp3",
                "explicit": false,
                "episodeTitle": "063: With Rachel Nabors",
                "episodeSummary": "This week we were joined by Rachel Nabors, a cartoonist, illustrator, designer, and front end developer out of Raleigh, North Carolina. Rachel is highly interested in animations and sound in CSS and JavaScript. We talk about (roughly in order): News’n'Links’n'Drama 11:34 – hgroup removed from HTML 5.1 16:25 – Copy vs. Design (Robert Williams, Tim... <a href=\"http://shoptalkshow.com/episodes/with-rachel-nabors/\" title=\"Read 063: With Rachel Nabors\">Read more »</a>",
                "publishedAt": 1365550814,
                "size": 34536934,
                "duration": 4284
              }, {
                "uid": 25330282,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/298/0/109772-062-with-brandon-mathis.mp3",
                "explicit": false,
                "episodeTitle": "062: With Brandon Mathis",
                "episodeSummary": "This week we were joined by Brandon Mathis, a web worker out of Birmingham, Alabama working for MongoHQ. Brandon is on the Compass team and is the creator of the static site generator Octopress. We talk about (roughly in order): News’n'Links (9:41) – Getting Started with Octopress Q &amp; A (26:32) – Regenerating sprites with... <a href=\"http://shoptalkshow.com/episodes/062-with-brandon-mathis/\" title=\"Read 062: With Brandon Mathis\">Read more »</a>",
                "publishedAt": 1364857782,
                "size": 30445323,
                "duration": 3805
              }, {
                "uid": 25330283,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/292/0/109773-061-with-alex-sexton.mp3",
                "explicit": false,
                "episodeTitle": "061: With Alex Sexton",
                "episodeSummary": "This week we were joined by Alex Sexton, a JavaScript developer for BazaarVoice, ex-yayQuery star, Modernizr team member, YepNope inventor, TXJS organizer, and essentially the world’s best loved ginger. We talked about (roughly in order): New’n'Links’n'Drama Donglegate: Venture Beat, Hacker News, Amanda Blum, Estelle Weyl Are UX and Design different? Dan Eden, Mark Otto Done... <a href=\"http://shoptalkshow.com/episodes/061-with-alex-sexton/\" title=\"Read 061: With Alex Sexton\">Read more »</a>",
                "publishedAt": 1364415426,
                "size": 31646120,
                "duration": 3923
              }, {
                "uid": 25330284,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/288/0/109774-060-with-samantha-warren.mp3",
                "explicit": false,
                "episodeTitle": "060: With Samantha Warren",
                "episodeSummary": "This week we were joined by Samantha Warren, a designer and recent San Fransico-ite. She moved from Washington D.C. to work for Twitter. Samantha is known for her love of all things typography and design and speaks at conferences around the world about these things. Most recently, about Style Tiles, a concept for showing design... <a href=\"http://shoptalkshow.com/episodes/060-with-samantha-warren/\" title=\"Read 060: With Samantha Warren\">Read more »</a>",
                "publishedAt": 1363637226,
                "size": 32152950,
                "duration": 3987
              }, {
                "uid": 25330285,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/281/0/109775-059-with-lara-swanson.mp3",
                "explicit": false,
                "episodeTitle": "059: With Lara Swanson",
                "episodeSummary": "This week we were joined by Lara Swanson, formerly UX manager at Dyn and now a manager of mobile web at Etsy. Lara has long been a champion of web performance, UX, and being a good front end developer. We talk about (roughly in order): News’n'Links’n'Drama LayerVault vs. DesignModo “Pinkifying the recruiting process” FRED Client-Hints... <a href=\"http://shoptalkshow.com/episodes/059-with-lara-swanson/\" title=\"Read 059: With Lara Swanson\">Read more »</a>",
                "publishedAt": 1363123118,
                "size": 32120921,
                "duration": 3983
              }, {
                "uid": 25330286,
                "mediaUrl": "http://shoptalkshow.com/podpress_trac/feed/278/0/109776-058-with-derek-featherstone.mp3",
                "explicit": false,
                "episodeTitle": "058: With Derek Featherstone",
                "episodeSummary": "This week we were joined by Derek Featherstone, an accessibility specialist and leader of Simply Accessible, a consulting firm in Ottawa, Canada. The full show transcript is available here. We talk about (roughly in order): News’n'Links’n'Drama ARIA tree roles, not so simple Nav in lists discussion again Q &amp; A Does display: table; have an... <a href=\"http://shoptalkshow.com/episodes/058-with-derek-featherstone/\" title=\"Read 058: With Derek Featherstone\">Read more »</a>",
                "publishedAt": 1362409205,
                "size": 32537835,
                "duration": 4035
              }
            ]
          }, {
            "id": 199,
            "home": "http://javascriptjabber.com",
            "url": "http://feeds.feedburner.com/javascriptjabber",
            "author": "Charles Max Wood, AJ O'Neal, Jamison Dance, Joe Eames, Tim Caswell, Merrick Christensen",
            "subscriptionTitle": "Javascript Jabber",
            "summary": "A technical discussion of JavaScript related topics. Things like Node.js, Web Frameworks, JSON, CoffeeScript, Event and Object models and much more.",
            "albumArt": "jsj.png",
            "episodes": [
              {
                "uid": 36568194,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ100.mp3",
                "explicit": false,
                "episodeTitle": "100 JSJ Centennial Episode Celebration",
                "episodeSummary": "Panel Aaron Frost (twitter github blog) Merrick Christensen (twitter github) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 07:45 – JSJ Opening Music Mystery Inu: The Bailing 09:39 – Crazy Recording Locations 12:57 – Favorite […]",
                "publishedAt": 1394629215,
                "size": 47295985,
                "duration": 2956
              }, {
                "uid": 36348056,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ099NPMInc.mp3",
                "explicit": false,
                "episodeTitle": "099 JSJ npm, Inc. with Isaac Schlueter, Laurie Voss, and Rod Boothby",
                "episodeSummary": "Panel Isaac Schlueter (twitter github blog) Laurie Voss (twitter github blog) Rod Boothby (twitter blog) Aaron Frost (twitter github blog) Jamison Dance (twitter github blog) AJ O’Neal (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:33 – npm, Inc. Services &amp; Possible Features Joyent 05:06 […]",
                "publishedAt": 1394028011,
                "size": 54363716,
                "duration": 3398
              }, {
                "uid": 36150212,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ098AssembleIO.mp3",
                "explicit": false,
                "episodeTitle": "098 JSJ Assemble.io with Brian Woodward and Jon Schlinkert",
                "episodeSummary": "Panel Jon Schlinkert (twitter github) Brian Woodward (twitter github blog) Joe Eames (twitter github blog) Aaron Frost (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:44 – Jon and Brian Introductions Sellside 05:14 – Assemble.io Assemble.io (GitHub) Jekyll 12:34 – Resources Foundation […]",
                "publishedAt": 1393423257,
                "size": 42146341,
                "duration": 2634
              }, {
                "uid": 35983180,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ097GulpJS.mp3",
                "explicit": false,
                "episodeTitle": "097 JSJ Gulp.js with Eric Schoffstall",
                "episodeSummary": "Panel Eric Schoffstall (twittergithubblog) Aaron Frost (twitter github blog) Jamison Dance (twitter github blog) AJ O’Neal (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:47 – Eric Schoffstall Introduction FRACTAL 02:35 – Gulp 05:11 – Streams 07:51 – Gulp vs Grunt 09:22 […]",
                "publishedAt": 1392818449,
                "size": 40885755,
                "duration": 2555
              }, {
                "uid": 35889579,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ096LargeSinglePageApps.mp3",
                "explicit": false,
                "episodeTitle": "096 JSJ The Challenges of Large Single Page JavaScript Applications with Bart Wood",
                "episodeSummary": "Panel Bart Wood (twitter github) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:29 – Bart Wood Introduction 02:12 – The Frontend Backbone.js 02:48 – Working on Single Page Applications 05:56 – Limitations Memory JSFiddle 09:51 – Online Practice Management Solution 11:40 – Other Storage […]",
                "publishedAt": 1392386405,
                "size": 43217595,
                "duration": 2701
              }, {
                "uid": 35735301,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ095AngularUI.mp3",
                "explicit": false,
                "episodeTitle": "095 JSJ AngularUI with Dean Sofer",
                "episodeSummary": "Panel Dean Sofer (twitter github blog) Jamison Dance (twitter github blog) AJ O’Neal (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:00 – Dean Sofer Introduction Paxata 02:25 – Big Data 03:44 – AngularUI PHP-OS 09:25 – Angular and Ember.js UI-Router 10:40 […]",
                "publishedAt": 1391793004,
                "size": 48377251,
                "duration": 3024
              }, {
                "uid": 35595376,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ094BonzaiJS.mp3",
                "explicit": false,
                "episodeTitle": "094 JSJ BonsaiJS with Tobi Reiss",
                "episodeSummary": "Panel Tobi Reiss (twittergithubblog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:38 – Tobi Reiss Introduction uxebu 02:32 – BonsaiJS pixelplant 05:06 – Performance The Renderer SVG Bonsai vs Flash 12:32 – Bonsai vs Other […]",
                "publishedAt": 1391176844,
                "size": 42173902,
                "duration": 2636
              }, {
                "uid": 35473681,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ093NYT.mp3",
                "explicit": false,
                "episodeTitle": "093 JSJ The New York Times and JavaScript with Eitan Konigsburg, Alastair Coote and Reed Emmons",
                "episodeSummary": "Panel Eitan Konigsburg (twittergithub) Alastair Coote (twitter github blog) Reed Emmons (twitter) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:06 – Introductions New York Times 03:17 – The Mobile Site 05:18 – The Desktop Site vs The Mobile Site […]",
                "publishedAt": 1390572054,
                "size": 52252213,
                "duration": 3266
              }, {
                "uid": 35366877,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ092MEAN.mp3",
                "explicit": false,
                "episodeTitle": "092 JSJ The MEAN Stack with Ward Bell and Valeri Karpov",
                "episodeSummary": "Panel Valeri Karpov (twitterbloggithub) Ward Bell (twitter blog github) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:25 – The MEAN Stack Mongo.db Express.js AngularJS Node.js MySQL 05:21 – Concurrency 12:49 – Express.js Sinatra 14:48 – Working Within the MEAN […]",
                "publishedAt": 1389967211,
                "size": 62227187,
                "duration": 3889
              }, {
                "uid": 35275605,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ091JSONAPIs.mp3",
                "explicit": false,
                "episodeTitle": "091 JSJ JSON APIs",
                "episodeSummary": "Panel AJ O’Neal (twitter github blog) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) Aaron Frost (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:15 – XML vs JSON JSON API AJ O’Neal: No, really, XML is retarded. 05:41 – Single-page App vs Server-side App […]",
                "publishedAt": 1389362410,
                "size": 54970802,
                "duration": 3436
              }, {
                "uid": 35160068,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ090UsersGroups.mp3",
                "explicit": false,
                "episodeTitle": "090 JSJ Users Groups",
                "episodeSummary": "Panel AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:56 – AJ’s Experience Starting a Users Group VAGUE Utah JS Utah JS Forum + Mailing List 06:34 – Mailing Lists 07:23 – IRC 08:07 – Setting up Users Groups Consistency […]",
                "publishedAt": 1388757643,
                "size": 37502358,
                "duration": 2344
              }, {
                "uid": 35069208,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ089NodeSecurity.mp3",
                "explicit": false,
                "episodeTitle": "089 JSJ The Node Security Project with Adam Baldwin",
                "episodeSummary": "Panel Adam Baldwin (twitter github @nodesecurity) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:00 – Adam Baldwin Introduction Team Lead at ^lift Security from &amp;yet Founder and Organizer of The Node Security Project 02:12 […]",
                "publishedAt": 1388152819,
                "size": 50201649,
                "duration": 3138
              }, {
                "uid": 34903673,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ088LazyJS.mp3",
                "explicit": false,
                "episodeTitle": "088 JSJ Lazy.js with Daniel Tao",
                "episodeSummary": "Panel Daniel Tao (twitter github blog) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:50 – Freelancing Q&amp;A 01:21 – Daniel Tao Introduction Google Ads Review Team 02:26 – Lazy.js Underscore Lo-Dash JavaScript Jabber Episode #79: Lo-Dash with John-David Dalton Lazy Evaluation 03:28 – Lazily […]",
                "publishedAt": 1387552180,
                "size": 44758141,
                "duration": 2797
              }, {
                "uid": 34748679,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ087TC39.mp3",
                "explicit": false,
                "episodeTitle": "087 JSJ TC39 with Alex Russell",
                "episodeSummary": "Panel Alex Russell (twitter github blog) AJ O’Neal (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:52 – Alex Russell Introduction Blink TC39 – ECMAScript 03:35 – Google DevTools 04:44 – Alex’s Background The Dojo Project Chrome Frame 07:14 – TC39 – […]",
                "publishedAt": 1386943210,
                "size": 61180596,
                "duration": 3824
              }, {
                "uid": 34154298,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ086EmberDiscourse.mp3",
                "explicit": false,
                "episodeTitle": "086 JSJ Ember.js & Discourse with Robin Ward",
                "episodeSummary": "Panel Robin Ward (twitter github blog) Jamison Dance (twitter github blog) Merrick Christensen (twitter github) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:53 – Robin Ward Introduction @evil_trout Discourse 01:36 – Discourse Ruby Rogues: #106 – Discourse with Jeff Atwood Ruby Rogues: #117 – […]",
                "publishedAt": 1385733609,
                "size": 61092417,
                "duration": 3818
              }, {
                "uid": 33760438,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/85_Episode_085__Huxley_with_Pete_Hunt.mp3",
                "explicit": false,
                "episodeTitle": "085 JSJ Huxley with Pete Hunt",
                "episodeSummary": "Panel Pete Hunt (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:10 – Pete Hunt Introduction Facebook Instagram 02:11 – Huxley Selenium WebDriver 12:36 – The Huxley Community 15:33 – Selenium vs […]",
                "publishedAt": 1385128852,
                "size": 38674325,
                "duration": 2417
              }, {
                "uid": 33476130,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/84_Episode_084__Node_with_Mikeal_Rogers.mp3",
                "explicit": false,
                "episodeTitle": "084 JSJ Node with Mikeal Rogers",
                "episodeSummary": "Panel Mikeal Rogers (github blog) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) Discussion 00:59 – Mikeal Rogers Introduction CTO of Getable windmill request 06:41 – NodeConf ng-conf 16:06 – Node: Frontend and Backend Pluralsight: AngularJS Fundamentals I-Tier: Dismantling the Monoliths 22:30 – JVMs Node.JS Is Stupid And If You Use It So […]",
                "publishedAt": 1384524035,
                "size": 49120381,
                "duration": 3070
              }, {
                "uid": 33199872,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ083FRPRXJS.mp3",
                "explicit": false,
                "episodeTitle": "083 JSJ FRP and RxJS with Matthew Podwysocki",
                "episodeSummary": "Panel Matthew Podwysocki (twitter github @ReactiveX) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:01 – 061 JSJ Functional Reactive Programming with Juha Paananen and Joe Fiorini Coursera: Principles of Reactive Programming 02:49 – Matthew Podwysocki Microsoft 05:12 – Functional […]",
                "publishedAt": 1383931891,
                "size": 41201321,
                "duration": 2575
              }, {
                "uid": 32903056,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ082JSHint.mp3",
                "explicit": false,
                "episodeTitle": "082 JSJ JSHint with Anton Kovalyov",
                "episodeSummary": "Panel Anton Kovalyov (twitter github blog) AJ O’Neal (twitter github blog) Aaron Frost (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:57 – Anton Kovalyov Mozilla Disqus JSHint JSLint 03:40 – Why I forked JSLint to JSHint 07:15 – JSHint vs JSLint 14:19 – Sticking with the […]",
                "publishedAt": 1383310817,
                "size": 40484511,
                "duration": 2530
              }, {
                "uid": 32647192,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ081AsyncTesting.mp3",
                "explicit": false,
                "episodeTitle": "081 JSJ  Promises for Testing Async JavaScript with Pete Hodgson",
                "episodeSummary": "Panel Pete Hodgson (twitter github blog) AJ O’Neal (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:19 – Pete Hodgson: Testing Asynchronous JavaScript Promises Domenic Denicola 12:43 – Efficiency 21:14 – q 037 JSJ Promises with Domenic Denicola and Kris Kowal jQuery 22:41 […]",
                "publishedAt": 1382706004,
                "size": 48882176,
                "duration": 3055
              }, {
                "uid": 32404374,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ080ImpactJS.mp3",
                "explicit": false,
                "episodeTitle": "080 JSJ Impact.js with Dominic Szablewski",
                "episodeSummary": "Panel Dominic Szablewski (twitter github PhobosLab) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:20 – Dominic Szablewski Introduction 01:54 – Impact.js Biolab Disaster 03:00 – Selling/Charging vs Open-Source/Consulting Z-Type 06:09 – Game Development 08:42 […]",
                "publishedAt": 1382094032,
                "size": 56279614,
                "duration": 3517
              }, {
                "uid": 32155766,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ079LoDash.mp3",
                "explicit": false,
                "episodeTitle": "079 JSJ Lo-Dash with John-David Dalton",
                "episodeSummary": "Panel John-David Dalton (twitter github blog) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:32 – John-David Dalton Introduction Lo-Dash jsPerf benchmark.js Microsoft 02:19 – jsPerf 07:48 – Lo-Dash Underscore Lo-Dash [...]",
                "publishedAt": 1381489214,
                "size": 62098855,
                "duration": 3881
              }, {
                "uid": 32060741,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ078WorkingFromHome.mp3",
                "explicit": false,
                "episodeTitle": "078 JSJ Working From Home",
                "episodeSummary": "Panel Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:39 – Going Rogue Video 01:10 – Working From Home 02:17 – Office Setups/Furniture LX Desk Mount LCD Arm Aeron Chair by Herman Miller VendorGear Headrest for Herman Miller Aeron Chair A standing desk for $22 [...]",
                "publishedAt": 1380884423,
                "size": 55928512,
                "duration": 3496
              }, {
                "uid": 32060742,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ077Monocle.mp3",
                "explicit": false,
                "episodeTitle": "077 JSJ Monocle with Alex MacCaw",
                "episodeSummary": "Panel Alex MacCaw (twitter github blog) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:13 – Going Rogue Video 02:12 – Alex MacCaw Introduction 029 JSJ Bower.js with Alex MacCaw and Jacob Thornton JavaScript Web [...]",
                "publishedAt": 1380279629,
                "size": 48184153,
                "duration": 3012
              }, {
                "uid": 31495696,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ076Meteor.mp3",
                "explicit": false,
                "episodeTitle": "076 JSJ Meteor.js with Marcus Phillips and Fred Zirdung",
                "episodeSummary": "Panel Marcus Phillips (twitter github) Fred Zirdung (twitter github) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:30 – Marcus Phillips and Fred Zirdung Introduction Hack Reactor 03:31 – Experience with Meteor 05:45 – Intro to Meteor Client-side Environment Tethered [...]",
                "publishedAt": 1379677269,
                "size": 48459611,
                "duration": 3029
              }, {
                "uid": 31184980,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ075MaintainableJS.mp3",
                "explicit": false,
                "episodeTitle": "075 JSJ Maintainable JavaScript with Nicholas Zakas",
                "episodeSummary": "Panel Nicholas C. Zakas (twitter github blog) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:24 – Nicholas Zakas Introduction Box Maintainable JavaScript by Nicholas C. Zakas High Performance JavaScript (Build [...]",
                "publishedAt": 1379073630,
                "size": 55377271,
                "duration": 3461
              }, {
                "uid": 31007222,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ074Grunt.mp3",
                "explicit": false,
                "episodeTitle": "074 JSJ Grunt with Ben Alman",
                "episodeSummary": "Panel Ben Alman (twitter github blog) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Ryan Florence (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:34 – Ben Alman Introduction Bocoup 02:54 – “Cowboy” Cowboy Coder 06:53 – The Birth of Grunt Ender make rake jake [...]",
                "publishedAt": 1378465234,
                "size": 71237945,
                "duration": 4452
              }, {
                "uid": 27869126,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ073React.mp3",
                "explicit": false,
                "episodeTitle": "073 JSJ React with Pete Hunt and Jordan Walke",
                "episodeSummary": "Panel Pete Hunt (twitter github blog) Jordan Walke (twitter github) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:34 – Pete Hunt Introduction Instagram Facebook 02:45 – Jordan Walke Introduction 04:15 [...]",
                "publishedAt": 1377860445,
                "size": 53776878,
                "duration": 3361
              }, {
                "uid": 25004196,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ072Screencasting.mp3",
                "explicit": false,
                "episodeTitle": "072 JSJ Screencasts",
                "episodeSummary": "Panel Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:31 – Screencasting Experience Pluralsight: AngularJS Fundamentals – Joe Pluralsight: jQuery Advanced Topics – Joe Pluralsight: Testing Clientside JavaScript – Joe Teach Me To Code – Chuck 02:44 – Getting into [...]",
                "publishedAt": 1377275467,
                "size": 47535887,
                "duration": 2971
              }, {
                "uid": 19396953,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ071Microsoft.mp3",
                "explicit": false,
                "episodeTitle": "071 JSJ JavaScript Strategies at Microsoft with Scott Hanselman",
                "episodeSummary": "Panel Scott Hanselman (twitter github blog) Joe Eames (twitter github blog) Aaron Frost (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:14 – Scott Hanselman Introduction Community Program Manager for Web Tools at Microsoft Azure and Web Tools ASP.NET Runtime 03:17 – Microsoft and JavaScript Microsoft Build [...]",
                "publishedAt": 1376650839,
                "size": 54787521,
                "duration": 3424
              }, {
                "uid": 17102387,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ070JavascriptAllonge.mp3",
                "explicit": false,
                "episodeTitle": "070 JSJ Book Club: JavaScript Allongé with Reginald Braithwaite",
                "episodeSummary": "Panel Reginald Braithwaite (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:08 – Reg Braithwaite Introduction Github 03:46 – JavaScript Allongé by Reginald Braithwaite 06:43 – The Y [...]",
                "publishedAt": 1376066833,
                "size": 63843934,
                "duration": 3990
              }, {
                "uid": 14144822,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ069ApplicationCaching.mp3",
                "explicit": false,
                "episodeTitle": "069 JSJ The Application Cache with Jake Archibald",
                "episodeSummary": "Panel Jake Archibald (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:14 – Jake Archibald Introduction Works on Developer Relations on the Google Chrome Team 01:57 – The Application Cache Eric Bidelman: A Beginner’s Guide to Using the Application Cache – HTML5 [...]",
                "publishedAt": 1375448454,
                "size": 49360307,
                "duration": 3085
              }, {
                "uid": 9398347,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ068ES6.mp3",
                "explicit": false,
                "episodeTitle": "068 JSJ – ES6 with Aaron Frost",
                "episodeSummary": "Panel Aaron Frost (twitter github blog) Merrick Christensen (twitter github) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) Discussion 01:36 – Aaron Frost Introduction Web Developer at Domo 1.21 Gigawatts – Chromeapps with Angularjs and Node (Aaron Frost and Dave Geddes) JS.next: A Manager’s Guide by Aaron Frost 02:21 – ECMAScript and JavaScript [...]",
                "publishedAt": 1374822048,
                "size": 45619970,
                "duration": 2851
              }, {
                "uid": 8619095,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ067Testem.mp3",
                "explicit": false,
                "episodeTitle": "067 JSJ – Testem with Toby Ho",
                "episodeSummary": "Panel Toby Ho (twitter github blog) Joe Eames (twitter github blog) Aaron Frost (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:53 – Aaron Frost Introduction Domo 1.21 Gigawatts – Chromeapps with Angularjs and Node (Aaron Frost and Dave Geddes) 02:45 – Toby Ho Introduction testem Toby [...]",
                "publishedAt": 1374217234,
                "size": 46840409,
                "duration": 2928
              }, {
                "uid": 7255072,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ066TransitioningToJS.mp3",
                "explicit": false,
                "episodeTitle": "066 JSJ Transitioning to JavaScript",
                "episodeSummary": "Panel Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:10 – Making the transition from one primary language to JavaScript 01:30 – Merrick’s Experience ActionScript 03:32 – Joe’s Experience .NET Microsoft 07:46 – Moving from C# to JavaScript Misconceptions 09:25 – [...]",
                "publishedAt": 1373007607,
                "size": 38962305,
                "duration": 2435
              }, {
                "uid": 6721031,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ065BuildTools.mp3",
                "explicit": false,
                "episodeTitle": "065 JSJ Build Tools with Adam Hawkins",
                "episodeSummary": "Panel Adam Hawkins (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:16 – Adam Hawkins Introduction JavaScript Application Build Tools: Adam Hawkins 003 JSJ Build Tools 01:51 – What Are Build Tools? 02:46 – Build Process Ember.js [...]",
                "publishedAt": 1372434821,
                "size": 46856302,
                "duration": 2929
              }, {
                "uid": 5839738,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ064EmberTools.mp3",
                "explicit": false,
                "episodeTitle": "064 JSJ Ember Tools with Ryan Florence",
                "episodeSummary": "Panel Ryan Florence (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:28 – Ryan Florence Introduction Instructure Canvas Network 03:04 – Ember 101 05:03 – Ember.js Workflow 047 JSJ Specialized vs Monolithic with [...]",
                "publishedAt": 1371798011,
                "size": 49466667,
                "duration": 2996
              }, {
                "uid": 5049101,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ063Burnout.mp3",
                "explicit": false,
                "episodeTitle": "063 JSJ Burnout",
                "episodeSummary": "Panel Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:47 – Burnout Google: define burnout 04:57 – Pair Programming 06:19 – Burnout Guilt Thought-workers vs Laborers 10:15 – Positive Reinforcement 11:18 – Causes of Burnout Prolonged [...]",
                "publishedAt": 1371193207,
                "size": 50748313,
                "duration": 2923
              }, {
                "uid": 4089653,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ062Dojo.mp3",
                "explicit": false,
                "episodeTitle": "062 JSJ Dojo with Dylan Schiemann",
                "episodeSummary": "Panel Dylan Schiemann (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:57 – Dylan Schiemann Introduction The Dojo Toolkit CEO of SitePen 01:14 – Dojo TD Ameritrade The Wall Street Journal JPMorgan [...]",
                "publishedAt": 1370588424,
                "size": 62933913,
                "duration": 3685
              }, {
                "uid": 3550183,
                "mediaUrl": "http://traffic.libsyn.com/jsjabber/JSJ061FRP.mp3",
                "explicit": false,
                "episodeTitle": "061 JSJ Functional Reactive Programming with Juha Paananen and Joe Fiorini",
                "episodeSummary": "Panel Juha Paananen (twitter github blog) Joe Fiorini (twitter github blog) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:20 – Joe Fiorini Introduction Interaction Developer at Designing Interactive in Cleveland, [...]",
                "publishedAt": 1369983642,
                "size": 47535940,
                "duration": 2971
              }
            ]
          }, {
            "id": "sjlbsephuo2",
            "feedUrl": "http://flippingthebozobit.tv/",
            "subscriptionTitle": "Flipping the Bozo Bit",
            "summary": "A technical discussion of JavaScript related topics. Things like Node.js, Web Frameworks, JSON, CoffeeScript, Event and Object models and much more.",
            "albumArt": "ftbb.jpg",
            "episodes": [
              {
                "uid": "flippinBozo-1dsf",
                "episodeTitle": "Episode 13: All Aboard",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/013/2013-11-01-episode-13.mp3"
              }, {
                "uid": "flippinBozo-dsv2",
                "episodeTitle": "Episode 12: Agile Design",
                "episodeSummary": "What if we made design a part of the Agile Software Process?",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/012/2013-10-15-episode-12.mp3"
              }, {
                "uid": "flippinBozo-vsvs3",
                "episodeTitle": "Episode 11: Functional Reactive Programming",
                "episodeSummary": "What's the deal with FRP? Christoph gives us the skinny on Functional Reactive Programming.",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/011/2013-10-01-episode-11.mp3"
              }, {
                "uid": "flippinBozo-vdszfs",
                "episodeTitle": "Episode 10: Javascriptocalypse",
                "episodeSummary": "What if you wanted to write a fancy in-browser app but were less than enthusiastic about the Javascript ecosystem?",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/010/2013-08-01-episode-10.mp3"
              }, {
                "uid": "flippinBozo-vfvdfs",
                "episodeTitle": "Episode 9: Internalizing Open Source",
                "episodeSummary": "What if you ran your internal, closed-source, proprietary, mega-corporate projects like open source projects? Similar styles? Similar tools?",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/009/2013-07-15-episode-9.mp3"
              }, {
                "uid": "flippinBozo-fvsbvdsf",
                "episodeTitle": "Episode 8: Clean Room Development",
                "episodeSummary": "This one's all about the music. What if you had to rewrite your software after every release?",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/008/2013-07-01-episode-8.mp3"
              }, {
                "uid": "flippinBozo-fzvsdfb",
                "episodeTitle": "Episode 7: Steel Mills to Data Warehouses",
                "episodeSummary": "What if you can't duplicate your production stack for testing and so on? For instance, factory software? I'm starting to think this whole podcast is, ultimately, about design.",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/007/2013-05-19-episode-7.mp3"
              }, {
                "uid": "flippinBozo-fsbfds",
                "episodeTitle": "Episode 6: Lazy Package Objects",
                "episodeSummary": "Thought experiments are all well and good, but sometimes you gotta try 'em out to see what's what.",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/006/2013-05-04-episode-6.mp3"
              }, {
                "uid": "flippinBozo-024ge",
                "episodeTitle": "Episode 5: A Walled Off Garden of Perfection",
                "episodeSummary": "Can't change your variables once you assign a value? WTF? Surely, this is something up with which we cannot put! Or: a round-about introduction to some of the concerns addressed by the functional programming paradigm.",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/005/2013-04-14-episode-5.mp3"
              }, {
                "uid": "flippinBozo-gwra",
                "episodeTitle": "Episode 4: The March of IDEs",
                "episodeSummary": "In this episode, we start with our conclusion and try to move on from there.",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/004/2013-03-31-episode-4.mp3"
              }, {
                "uid": "flippinBozo-9rh31",
                "episodeTitle": "Episode 3: Technical Debt On Wheels",
                "episodeSummary": "What if you were required to write a prototype for every significant development of your software system?",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/003/2013-03-13-episode-3.mp3"
              }, {
                "uid": "flippinBozo-2f",
                "episodeTitle": "Episode 2: Unitless Tests",
                "episodeSummary": "Our second podcast. This one got away from us in length, but it all adds up. Somehow. Does a project's implementation strategy affect team dynamics? What if you couldn't include tests in your source tree? Digressions abound!",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/002/2013-02-17-episode-2.mp3"
              }, {
                "uid": "flippinBozo-32tvb",
                "episodeTitle": "Episode 1: Origin Stories",
                "episodeSummary": "Welcome to the first episode of <em>Flipping the Bozo Bit</em>, a casual, conversational, podcast questioning the truisms of software development and management with plenty of digressions mixed in to taste.",
                "publishedAt": 1369983642,
                "mediaUrl": "http://flippingthebozobit.tv/episode/001/2013-01-28-episode-1.mp3"
              }
            ]
          }, {
            "id": 7591,
            "feedUrl": "http://nitch.cc/podcast",
            "authors": "Nitch",
            "subscriptionTitle": "The Nitch Podcast",
            "summary": "A weekly podcast about building apps that run everywhere using open web standards like HTML, CSS, JavaScript, REST, and JSON. Hosted by Jonathan Stark and Kelli Shaver.",
            "albumArt": "nitch.png",
            "episodes": [
              {
                "uid": 36622962,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_99_Total_Dad_Plan.mp3",
                "explicit": false,
                "episodeTitle": "Episode 99: Total Dad Plan",
                "episodeSummary": "Jonathan and Kelli talk about preaching to the choir(.io), web apps for watches, and a second look at smart glasses.",
                "publishedAt": 1394780656,
                "size": 64172851,
                "duration": 4211
              }, {
                "uid": 36418684,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_98_Pee_Rink.mp3",
                "explicit": false,
                "episodeTitle": "Episode 98: Pee Rink",
                "episodeSummary": "Jonathan and Kelli talk about first impressions of Google Glass, DIY SaaS integration with Zapier, and zoning out to the sounds of Github.",
                "publishedAt": 1394181739,
                "size": 64172851,
                "duration": 4028
              }, {
                "uid": 36200351,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_97_Dogs_With_No_Noses.mp3",
                "explicit": false,
                "episodeTitle": "Episode 97: Dogs With No Noses",
                "episodeSummary": "Jonathan and Kelli talk about recent announcements from Facebook, Nokia, Mozilla, and Samsung - and how they affect app developers.",
                "publishedAt": 1393592873,
                "size": 64172851,
                "duration": 2349
              }, {
                "uid": 36041240,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_96_You_Cant_Tuna_Fish_To_Get_To_The_Other_Side.mp3",
                "explicit": false,
                "episodeTitle": "Episode 96: You Can’t Tuna Fish To Get To The Other Side",
                "episodeSummary": "Jonathan and Kelli talk about the shocking demand for smart headphones and what designers and developers can do to start building experiences for the coming zombie apocalypse of screenless devices.",
                "publishedAt": 1392986431,
                "size": 64172851,
                "duration": 4188
              }, {
                "uid": 35885552,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_95_Banana_Piano.mp3",
                "explicit": false,
                "episodeTitle": "Episode 95: Banana Piano",
                "episodeSummary": "Jonathan and Kelli talk about the relative merits of CSS grid systems and JavaScript libraries.",
                "publishedAt": 1392386400,
                "size": 64172851,
                "duration": 2776
              }, {
                "uid": 35751804,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_94_Function_Frog.mp3",
                "explicit": false,
                "episodeTitle": "Episode 94: Function Frog",
                "episodeSummary": "Jonathan and Kelli talk about a slew of geeky books we've read lately: security, astronauts, innovation, cyberwar, and more. Think of it as recommended reading for nerds.",
                "publishedAt": 1391781600,
                "size": 64172851,
                "duration": 3422
              }, {
                "uid": 35595476,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_93_Lightsaber_Customer_Service.mp3",
                "explicit": false,
                "episodeTitle": "Episode 93: Lightsaber Customer Service",
                "episodeSummary": "Jonathan and Kelli talk about Kelli's new Raspberry Pi: what to do with it, how to program it, and what she loves about it.",
                "publishedAt": 1391176800,
                "size": 64172851,
                "duration": 4014
              }, {
                "uid": 35469059,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_92_Cattering_Ram.mp3",
                "explicit": false,
                "episodeTitle": "Episode 92: Cattering Ram",
                "episodeSummary": "Jonathan and Kelli talk about a few of our favorite APIs: Stripe, Dropbox, Github, Twilio, and not Facebook.",
                "publishedAt": 1390553645,
                "size": 64172851,
                "duration": 3342
              }, {
                "uid": 35360591,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_91_Papil_and_Pencer.mp3",
                "explicit": false,
                "episodeTitle": "Episode 91: Papil and Pencer",
                "episodeSummary": "Jonathan and Kelli talk about the tools we use to get our jobs done on a daily basis. Command line utilities, browser plugins, text editors, project management, and more.",
                "publishedAt": 1389937277,
                "size": 64172851,
                "duration": 6322
              }, {
                "uid": 35271233,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_90_Weve_Got_Gas.mp3",
                "explicit": false,
                "episodeTitle": "Episode 90: We’ve Got Gas",
                "episodeSummary": "Jonathan and Kelli talk about “hacking” our Hue wireless lights.",
                "publishedAt": 1389337581,
                "size": 64172851,
                "duration": 3729
              }, {
                "uid": 35162928,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_89_Aspirational_Laundry.mp3",
                "explicit": false,
                "episodeTitle": "Episode 89: Aspirational Laundry",
                "episodeSummary": "Jonathan and Kelli talk about the pros, cons, and programming implications of the top ten gadgets we received in 2013.",
                "publishedAt": 1388757600,
                "size": 64172851,
                "duration": 6504
              }, {
                "uid": 35068258,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_88_Old_Waffles.mp3",
                "explicit": false,
                "episodeTitle": "Episode 88: Old Waffles",
                "episodeSummary": "J-Bot and K-Bot revisit highlights from the previous year and beyond.",
                "publishedAt": 1388146387,
                "size": 64172851,
                "duration": 3219
              }, {
                "uid": 34905028,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_87_Sleep_Hockeying.mp3",
                "explicit": false,
                "episodeTitle": "Episode 87: Sleep Hockeying",
                "episodeSummary": "Jonathan and Kelli talk about the Twitter redesign, improvements to mobile browsers, math bugs in JavaScript, and more.",
                "publishedAt": 1387548000,
                "size": 64172851,
                "duration": 3025
              }, {
                "uid": 34742271,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_86_Eleventy_One.mp3",
                "explicit": false,
                "episodeTitle": "Episode 86: Eleventy One",
                "episodeSummary": "Jonathan and Kelli talk about cross-platform consistency: should your app conform to platform conventions or maintain a consistent look and feel everywhere?",
                "publishedAt": 1386927493,
                "size": 64172851,
                "duration": 3786
              }, {
                "uid": 34482598,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_85_Earlids.mp3",
                "explicit": false,
                "episodeTitle": "Episode 85: Earlids",
                "episodeSummary": "Jonathan and Kelli talk about notification overload: what it is, how to deal with it, and where we might be headed.",
                "publishedAt": 1386307474,
                "size": 64172851,
                "duration": 3693
              }, {
                "uid": 34165314,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_84_Pizza_Car.mp3",
                "explicit": false,
                "episodeTitle": "Episode 84: Pizza Car",
                "episodeSummary": "Jonathan and Kelli discuss the highlights of “APIs: A Strategy Guide” by Daniel Jacobson.",
                "publishedAt": 1385733600,
                "size": 64172851,
                "duration": 3710
              }, {
                "uid": 33775945,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_83_Dark_Middle.mp3",
                "explicit": false,
                "episodeTitle": "Episode 83: Dark Middle",
                "episodeSummary": "Jonathan and Kelli talk about Feathers, a minimalist CSS reset and boilerplate gem created by our very own Kelli Shaver.",
                "publishedAt": 1385128800,
                "size": 64172851,
                "duration": 2780
              }, {
                "uid": 33480524,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_82_Pink_With_a_Hint_of_Orange.mp3",
                "explicit": false,
                "episodeTitle": "Episode 82: Pink With a Hint of Orange",
                "episodeSummary": "Jonathan and Kelli talk about Pattern Lab, a tool for building atomic design systems created by Brad Frost and Dave Olsen.",
                "publishedAt": 1384524000,
                "size": 64172851,
                "duration": 1776
              }, {
                "uid": 33211704,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_81_Responsive_Picnic_Tables.mp3",
                "explicit": false,
                "episodeTitle": "Episode 81: Responsive Picnic Tables",
                "episodeSummary": "Jonathan and Kelli rant about dealing with HTML tables in responsive web design.",
                "publishedAt": 1383919200,
                "size": 64172851,
                "duration": 3567
              }, {
                "uid": 32913183,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_80_Even_More_Betterer.mp3",
                "explicit": false,
                "episodeTitle": "Episode 80: Even More Betterer",
                "episodeSummary": "Jonathan and Kelli talk about Ruby and Rails: learning resources, application considerations, and Kelli’s big win!",
                "publishedAt": 1383314400,
                "size": 64172851,
                "duration": 1639
              }, {
                "uid": 32650343,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_79_Oreo_Island.mp3",
                "explicit": false,
                "episodeTitle": "Episode 79: Oreo Island",
                "episodeSummary": "Jonathan and Kelli discuss a bunch of projects that they recently launched.",
                "publishedAt": 1382709600,
                "size": 64172851,
                "duration": 2828
              }, {
                "uid": 32408374,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_78_Reedonkulous.mp3",
                "explicit": false,
                "episodeTitle": "Episode 78: Reedonkulous",
                "episodeSummary": "Jonathan and Kelli give a brief intro to Git, how you can use it to replace FTP in your workflow, and why you probably should.",
                "publishedAt": 1382104800,
                "size": 64172851,
                "duration": 1075
              }, {
                "uid": 31920875,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_77_Accidental_Interneting.mp3",
                "explicit": false,
                "episodeTitle": "Episode 77: Accidental Interneting",
                "episodeSummary": "Jonathan and Kelli chat about the benefits of accessibility, availability, and progressive enhancement in cross-platform web projects.",
                "publishedAt": 1380808800,
                "size": 64172851,
                "duration": 2640
              }, {
                "uid": 31746003,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_76_Tickle_Class.mp3",
                "explicit": false,
                "episodeTitle": "Episode 76: Tickle Class",
                "episodeSummary": "Jonathan and Kelli discuss perception vs reality in the context of application performance. In particular, the importance of instantaneous feedback, a simple way to remove the pesky 300ms delay in webapps on touch devices, and the real reason why jank is a bad thing.",
                "publishedAt": 1380290400,
                "size": 64172851,
                "duration": 2272
              }, {
                "uid": 31496700,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_75_Shes_Coming_Unglued.mp3",
                "explicit": false,
                "episodeTitle": "Episode 75: She’s Coming Unglued",
                "episodeSummary": "Jonathan and Kelli talk about Google’s two-factor authentication, smartwatch use cases, and a possible strategy behind Apple’s decision to release two new iPhones at the same time.",
                "publishedAt": 1379685600,
                "size": 64172851,
                "duration": 2326
              }, {
                "uid": 31210186,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_74_Psycho_Like_Me.mp3",
                "explicit": false,
                "episodeTitle": "Episode 74: Psycho Like Me",
                "episodeSummary": "Jonathan and Kelli talk about how the iPhone 5c announcement illustrates that future-friendly thinking is more important than ever.",
                "publishedAt": 1379080800,
                "size": 64172851,
                "duration": 1677
              }, {
                "uid": 30983261,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_73_Tiny_Tornado.mp3",
                "explicit": false,
                "episodeTitle": "Episode 73: Tiny Tornado",
                "episodeSummary": "Jonathan and Kelli talk about SmartWatches: The Wimm One, MetaWatch, Pebble, and more.",
                "publishedAt": 1378476000,
                "size": 64172851,
                "duration": 2188
              }, {
                "uid": 27869901,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_72_Code_Brown.mp3",
                "explicit": false,
                "episodeTitle": "Episode 72: Code Brown",
                "episodeSummary": "Jonathan and Kelli talk reach into the topic grab bag and pull out programmable lightbulbs, embracing constraints, prototyping in PHP, benchmarking CSS, and more.",
                "publishedAt": 1377871200,
                "size": 64172851,
                "duration": 3882
              }, {
                "uid": 25019028,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_71_For_the_Meeple_By_the_Meeple.mp3",
                "explicit": false,
                "episodeTitle": "Episode 71: For the Meeple, By the Meeple",
                "episodeSummary": "Jonathan and Kelli talk about what happened during Kelli's 48 hour weekend hackathon, including first impressions of RedHat's OpenShift cloud platform, pub/sub in Ruby with Faye, and oh, so much more.",
                "publishedAt": 1377266400,
                "size": 64172851,
                "duration": 3131
              }, {
                "uid": 19249230,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_70_It_Cant_Be_Worse_Than_Calgary.mp3",
                "explicit": false,
                "episodeTitle": "Episode 70: It Can't Be Worse Than Calgary",
                "episodeSummary": "Jonathan and Kelli talk about timezone bugs on Amazon S3, problems with ruby on new EC2's chipset architecture, and news about RailsForum, Pandacodium, Spoken, Inside the Brackets, and a lot more.",
                "publishedAt": 1376639674,
                "size": 64172851,
                "duration": 3512
              }, {
                "uid": 16784017,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_69_Thats_A_Plus.mp3",
                "explicit": false,
                "episodeTitle": "Episode 69: That's A Plus",
                "episodeSummary": "Jonathan and Kelli talk about real live project work on apps that run cross browser, cross platform, and beyond.",
                "publishedAt": 1376033708,
                "size": 64172851,
                "duration": 3078
              }, {
                "uid": 16784016,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_68_Fancy_Class.mp3",
                "explicit": false,
                "episodeTitle": "Episode 68: Fancy Class",
                "episodeSummary": "Jonathan and Kelli walk through a process for modern web development using responsive design, CSS3, and copious amounts of progressive enhancement.",
                "publishedAt": 1375452000,
                "size": 64172851,
                "duration": 2899
              }, {
                "uid": 9408154,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_67_Django_Curious.mp3",
                "explicit": false,
                "episodeTitle": "Episode 67: Django Curious",
                "episodeSummary": "Kelli helps Jonathan finally - FINALLY! - make the switch from PHP to Rails.",
                "publishedAt": 1374843886,
                "size": 64172851,
                "duration": 2503
              }, {
                "uid": 8776590,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_66_I_Blame_My_Shorts.mp3",
                "explicit": false,
                "episodeTitle": "Episode 66: I Blame My Shorts",
                "episodeSummary": "Jonathan and Kelli talk about function hoisting in Firefox, a fun new side project, and collapsing space with smartphone cameras.",
                "publishedAt": 1374242400,
                "size": 64172851,
                "duration": 2394
              }, {
                "uid": 8023287,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_65_Bumpin_Colons.mp3",
                "explicit": false,
                "episodeTitle": "Episode 65: Bumpin’ Colons",
                "episodeSummary": "Jonathan and Kelli continue with the fourth and final installment of their screencast on how to build a REST API with Ruby on Rails.",
                "publishedAt": 1373637600,
                "size": 64172851,
                "duration": 3700
              }, {
                "uid": 7215332,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_64_Cat_Number_One.mp3",
                "explicit": false,
                "episodeTitle": "Episode 64: Cat Number One",
                "episodeSummary": "Jonathan and Kelli get very superstitious about Rails 4, JSON endpoints, responsive web design, and more.",
                "publishedAt": 1373014796,
                "size": 64172851,
                "duration": 2158
              }, {
                "uid": 6612701,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_63_Disco_Mode.mp3",
                "explicit": false,
                "episodeTitle": "Episode 63: Disco Mode",
                "episodeSummary": "Jonathan and Kelli talk about responsive design, progressive enhancement, and development tools in the context of a big huge site redesign.",
                "publishedAt": 1372428000,
                "size": 64172851,
                "duration": 2565
              }, {
                "uid": 6457165,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_62_Love_Me_Some_Curlies.mp3",
                "explicit": false,
                "episodeTitle": "Episode 62: Love Me Some Curlies",
                "episodeSummary": "Jonathan and Kelli continue with part 3 of their screencast on how to build a REST API with Ruby on Rails. Please visit <a href=\"http://nitch.cc\">http://nitch.cc</a> and look for Episode 62 if you'd like to view the video.",
                "publishedAt": 1371823200,
                "size": 64172851,
                "duration": 3011
              }, {
                "uid": 5563788,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_61_Expecting_Ernestina.mp3",
                "explicit": false,
                "episodeTitle": "Episode 61: Expecting Ernestina",
                "episodeSummary": "Jonathan and Kelli continue their screencast on how to build a REST API with Ruby on Rails. Please visit <a href=\"http://nitch.cc\">http://nitch.cc</a> and look for Episode 61 if you'd like to view the video.",
                "publishedAt": 1371218400,
                "size": 64172851,
                "duration": 3949
              }, {
                "uid": 4347039,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_60_Numerosity.mp3",
                "explicit": false,
                "episodeTitle": "Episode 60: Numerosity",
                "episodeSummary": "Kelli builds a rest api with ruby on rails, Jonathan asks stupid questions while she does it, and we post video of the whole shebang for you to enjoy in your copious free time.",
                "publishedAt": 1370613600,
                "size": 64172851,
                "duration": 3949
              }, {
                "uid": 2774964,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_59_Moonburn.mp3",
                "explicit": false,
                "episodeTitle": "Episode 59: Moonburn",
                "episodeSummary": "Jonathan and Kelli talk about the WeMo Switch, blink(1) USB, hue light bulbs, and the APIs that tie them all together.",
                "publishedAt": 1370008800,
                "size": 64172851,
                "duration": 3026
              }, {
                "uid": 2686457,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_58_Fifty_Shades_of_Black.mp3",
                "explicit": false,
                "episodeTitle": "Episode 58: Fifty Shades of Black",
                "episodeSummary": "Jonathan and Kelli talk about the upcoming screencast episode, performance problems with KnockoutJS, and the massive implications of Google's recent announcements at the IO conference.",
                "publishedAt": 1369404000,
                "size": 64172851,
                "duration": 4163
              }, {
                "uid": 2595335,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_57_Flossing_With_Rails.mp3",
                "explicit": false,
                "episodeTitle": "Episode 57: Flossing With Rails",
                "episodeSummary": "Jonathan and Kelli talk about building - and more importantly, testing - REST APIs with Rails and RSpec.",
                "publishedAt": 1368799200,
                "size": 64172851,
                "duration": 1925
              }, {
                "uid": 2509212,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_56_Eighteen_Hours_Since_Last_Twisted_Ankle.mp3",
                "explicit": false,
                "episodeTitle": "Episode 56: Eighteen Hours Since Last Twisted Ankle",
                "episodeSummary": "Jonathan and Kelli talk about how to quote a project for a client who needs an app that can run everywhere.",
                "publishedAt": 1368173642,
                "size": 64172851,
                "duration": 1996
              }, {
                "uid": 2427362,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_55_Nerds_in_Grass_Skirts.mp3",
                "explicit": false,
                "episodeTitle": "Episode 55: Nerds in Grass Skirts",
                "episodeSummary": "Jonathan and Kelli talk about experimentation with the Lua programming language and the possible implications on cross-platform application development.",
                "publishedAt": 1367587575,
                "size": 64172851,
                "duration": 2195
              }, {
                "uid": 2372813,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_54_The_Royal_You.mp3",
                "explicit": false,
                "episodeTitle": "Episode 54: The Royal You",
                "episodeSummary": "Jonathan and Kelli talk about jQuery vs. Zepto... and other pointless debates.",
                "publishedAt": 1366984800,
                "size": 64172851,
                "duration": 2010
              }, {
                "uid": 2343931,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_53_Fluffdates.mp3",
                "explicit": false,
                "episodeTitle": "Episode 53: Fluffdates",
                "episodeSummary": "Jonathan and Kelli sit back and say \"I told you so\" for 30 minutes as they talk about Glassware, the Mirror API, and improved methods for the distribution of cat photos with Google Glass.",
                "publishedAt": 1366380000,
                "size": 64172851,
                "duration": 2010
              }, {
                "uid": 2317963,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_52_Punching_Kittens_with_Ethan_Marcotte.mp3",
                "explicit": false,
                "episodeTitle": "Episode 52: Punching Kittens with Ethan Marcotte",
                "episodeSummary": "Jonathan and Kelli welcome special guest Ethan Marcotte to discuss some of the non-technical challenges of Responsive Web Design: unresponsive ad units, browsing the web on game consoles, getting client sign-off without Photoshop comps, and much more.",
                "publishedAt": 1365775200,
                "size": 64172851,
                "duration": 2596
              }, {
                "uid": 2288997,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_51_BBQ_Chicken_Disease.mp3",
                "explicit": false,
                "episodeTitle": "Episode 51: BBQ Chicken Disease",
                "episodeSummary": "Jonathan and Kelli talk about Amazon Web Services - EC2, RDS, CloudWatch, and our new personal favorite, Simple Notification Service.",
                "publishedAt": 1365170400,
                "size": 64172851,
                "duration": 2326
              }, {
                "uid": 2265490,
                "mediaUrl": "https://s3.amazonaws.com/nitch/Episode_50_Up_Since_72.mp3",
                "explicit": false,
                "episodeTitle": "Episode 50: Up Since '72",
                "episodeSummary": "Jonathan and Kelli talk about drag and drop on touchscreen devices and opting out of responsive web design.",
                "publishedAt": 1364565600,
                "size": 64172851,
                "duration": 1690
              }
            ]
          }, {
            "id": 28607,
            "feedUrl": "http://emergingtech.chariotsolutions.com/category/devnews/feed/",
            "author": "Ken Rimple, Chariot Solutions",
            "subscriptionTitle": "Chariot Developer News",
            "description": "Chariot's home of Emerging Technology research",
            "albumArt": "devnews-fullres.jpg",
            "episodes": [
              {
                "uid": 36597554,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/E9qcgi3-YXE/Chariot-DeveloperNews-Episode-82-2014-03-10.mp3",
                "episodeTitle": "DevNews 82 – We discuss Dashing dashboards, our favorite Vagrant, ECMAScript 6 (look, ma, CLASSES) and of course we rant…",
                "episodeSummary": "<p>You miss a week, you get, well, more articles. See what the DevNews team has come up with this week - we talk about the unveiling of the BitCoin Founder (maybe?), Mt. Gox a bit, software patents (and Ken brings up his old trope - Unlocking the Sky IS a good book!), the new Vagrant and Vagrant remote client, how Cell Phone Unlocking WOULD have been great if the lobbyists could have stopped tweaking it, and more.</p><p>The post <a href=\"http://chariotsolutions.com/podcast/devnews-82-discuss-dashing-dashboards-favorite-vagrant-ecmascript-6-look-ma-classes-course-rant/\">DevNews 82 We discuss Dashing dashboards, our favorite Vagrant, ECMAScript 6 (look, ma, CLASSES) and of course we rant</a> appeared first on <a href=\"http://chariotsolutions.com\">Chariot Solutions</a>.</p>",
                "publishedAt": 1394703419,
                "size": 61790861,
                "duration": 2574
              }, {
                "uid": 36130762,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/UXamtux92II/Chariot-DeveloperNews-Episode-81-2014-02-24.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #81 – Distortion, crypto flaw in iOS and Mac, imperative to functional and more",
                "episodeSummary": "<p>We talk about the new Java 8 functional programming mode, forget to hit record, talk about the peering issues with Netflix vs everyone, and more... Now with louder, distorted audio!</p><p>The post <a href=\"http://chariotsolutions.com/podcast/devnews-81-distortion-crypto-flaw-ios-mac-imperative-functional/\">DevNews #81 Distortion, crypto flaw in iOS and Mac, imperative to functional and more</a> appeared first on <a href=\"http://chariotsolutions.com\">Chariot Solutions</a>.</p>",
                "publishedAt": 1393347444,
                "size": 45985613,
                "duration": 1916
              }, {
                "uid": 35948296,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/mBtdqVpY8po/Chariot-DevNews-80-2014-02-17.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #80 – We talk Javascript goodness, Java8 time, CMS, SMS, SOS!",
                "episodeSummary": "<p>We talk about Javascript's object-based nature and the Augment library, SMS with Twilio, CMS with Statamic, a great JS podcast episode, more.</p><p>The post <a href=\"http://chariotsolutions.com/podcast/devnews-80-talk-javascript-goodness-java8-time-cms-sms-sos/\">DevNews #80 We talk Javascript goodness, Java8 time, CMS, SMS, SOS!</a> appeared first on <a href=\"http://chariotsolutions.com\">Chariot Solutions</a>.</p>",
                "publishedAt": 1392677739,
                "size": 59836973,
                "duration": 2493
              }, {
                "uid": 35801043,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/L1OOThZBzOg/Chariot-Devnews-79-2014-02-11.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #79 – My So-called $8000 Spun Nylon 3D Printed Lamp",
                "episodeSummary": "<p>Joel and Ken talk about 3D printing advances, some Go tutorials, a great Promises tutorial, Chromecast's new streaming API, and more. Stay tuned toward the end for some hilarious product reviews when we discuss FlappyBird.</p><p>The post <a href=\"http://chariotsolutions.com/podcast/devnews-79-called-8000-spun-nylon-3d-printed-lamp/\">DevNews #79 My So-called $8000 Spun Nylon 3D Printed Lamp</a> appeared first on <a href=\"http://chariotsolutions.com\">Chariot Solutions</a>.</p>",
                "publishedAt": 1392069363,
                "size": 51917729,
                "duration": 2163
              }, {
                "uid": 35659262,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/DSPk9PtusPE/devnews-78_2014-02-03.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #78 – Don’s NFC programming book, we’re snowed in, and what about Julia?",
                "episodeSummary": "<p>We talk about Don's new book, Motorola Mobility's sale to Lenovo, the Julia programming language, Erlang's new features including hashes, Chrome WebApps in PhoneGap, and more.</p><p>The post <a href=\"http://chariotsolutions.com/podcast/devnews-78-dons-nfc-programming-book-snowed-julia/\">DevNews #78 Dons NFC programming book, were snowed in, and what about Julia?</a> appeared first on <a href=\"http://chariotsolutions.com\">Chariot Solutions</a>.</p>",
                "publishedAt": 1391479954,
                "size": 49119995,
                "duration": 2046
              }, {
                "uid": 35547617,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/FNuf2cM83Kw/Chariot-DevNews-Episode-77-2014-01-27.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #77 – I bet you can’t run that Kanban Board on a DEC Rainbow…",
                "episodeSummary": "<p>&gt;Wherein we start by discussing Michael Winslow, playing with reverb, and Eric mentions a DEC Rainbow. Topics include improvements to Node in 0.12, a Ruby/Rails children's book kickstarter, leaving Scrum for Kanban, and more...</p><p>The post <a href=\"http://chariotsolutions.com/podcast/devnews-77-bet-cant-run-kanban-board-dec-rainbow/\">DevNews #77 I bet you cant run that Kanban Board on a DEC Rainbow</a> appeared first on <a href=\"http://chariotsolutions.com\">Chariot Solutions</a>.</p>",
                "publishedAt": 1390880086,
                "size": 47493647,
                "duration": 1979
              }, {
                "uid": 35538623,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/8AN7tio79U0/Chariot-TechCast-82-2014-01-27-Andreas-Stefik.mp3",
                "explicit": false,
                "episodeTitle": "TechCast #82 – Dr. Andreas Stefik on Using Scientific Research To Analyze Programming Language Syntax Across Languages",
                "episodeSummary": "<p>Dr. Andreas Stefik discusses the findings in his paper, an Emperical Investigation into Programming Language Syntax. The results may surprise you… </p><p>The post <a href=\"http://chariotsolutions.com/podcast/techcast-82-dr-andreas-stefik-using-scientific-research-analyze-programming-language-syntax-across-languages/\">TechCast #82 – Dr. Andreas Stefik on Using Scientific Research To Analyze Programming Language Syntax Across Languages</a> appeared first on <a href=\"http://chariotsolutions.com\">Chariot Solutions</a>.</p>",
                "publishedAt": 1390846236,
                "size": 57494822,
                "duration": 2395
              }, {
                "uid": 35533917,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/XFF18oVDRjc/Business-Of-tech-04-2014-01-24.mp3",
                "explicit": false,
                "episodeTitle": "Business of Technology #4 – Gilt Groupe CTO Michael Bryzek on Gilt and Open Source",
                "episodeSummary": "<p>In this interview with Gilt Groupe CTO Michael Bryzek, we discuss how the company started, the open source technologies they've used, and how their open source commitment has evolved. We take some time to talk about the scale of their operation, and how they leverage micro services as a way to make it more manageable and scalable in both infrastructure and human terms.</p><p>The post <a href=\"http://chariotsolutions.com/podcast/business-technology-4-gilt-groupe-cto-michael-bryzek-gilt-open-source/\">Business of Technology #4 Gilt Groupe CTO Michael Bryzek on Gilt and Open Source</a> appeared first on <a href=\"http://chariotsolutions.com\">Chariot Solutions</a>.</p>",
                "publishedAt": 1390829432,
                "size": 43468220,
                "duration": 1811
              }, {
                "uid": 35407276,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/jParidhK5WA/Chariot-DeveloperNews-Episode-76-2014-01-20.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #76 – HAML-esque JS templates, a monitor for $400, what’s the world coming to?",
                "episodeSummary": "<p>We have a great set of resources for you today, ranging from HAML-like templates in Javascript, to a great Go tutorial website, to some heavy-duty Scala Akka Finite State Machine discusisons, iOS Workflows, a $15 Arduino with GPS, and much more. Hosts - Ken Rimple, Joel Confino, Eric Snyder and Sujan Kapadia.</p><p>The post <a href=\"http://chariotsolutions.com/podcast/devnews-76-haml-esque-js-templates-monitor-400-whats-world-coming/\">DevNews #76 HAML-esque JS templates, a monitor for $400, whats the world coming to?</a> appeared first on <a href=\"http://chariotsolutions.com\">Chariot Solutions</a>.</p>",
                "publishedAt": 1390252784,
                "size": 48277381,
                "duration": 2011
              }, {
                "uid": 35319205,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/DVVpp4rSBKk/Chariot-DevNews-75-2014-01-13.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #75 – Go Go Angular to BSON Land to pick up MongoDB",
                "episodeSummary": "<p>This week we talk about Joel's experiences with AngularJS, infinite scrolling, MOOCs, five things to watch for when coding in MongoDB, and more.</p><p>The post <a href=\"http://chariotsolutions.com/podcast/devnews-75-go-go-angular-bson-land-pick-mongodb/\">DevNews #75 Go Go Angular to BSON Land to pick up MongoDB</a> appeared first on <a href=\"http://chariotsolutions.com\">Chariot Solutions</a>.</p>",
                "publishedAt": 1389648864,
                "size": 51534565,
                "duration": 2576
              }, {
                "uid": 35217083,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/rPZXjJP9zRE/Chariot-DevNews-Episode-74-2014-01-06.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #74 – Our 2013 recap, 2014 guesses and much more",
                "episodeSummary": "Ken and Joel give their \"predictions\" and \"recap\" of 2014, which is purely their version, but somebody's got to do it. Also, we talk tools for testing in NodeJS, namely Mocha and Chai, some linux and regex visualization websites, a &lt; $300 ChromeBook announced by Toshiba at CES, writing and posting HTML content on GitHub using gh_pages, and more.",
                "publishedAt": 1389036378,
                "size": 32287903,
                "duration": 1614
              }, {
                "uid": 35114392,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/cYdabQsVmTI/Devnews-73-2013-12-30.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #73 – Grunt JS Tutorial, Ubuntu for Android, UI vs Command Line, and more…",
                "episodeSummary": "Ken and Joel wrap up the year with a bit of conversation about smart watches, whether you're a user of tools or conversationalist with your code, and a number of other little ditties.",
                "publishedAt": 1388435596,
                "size": 31987583,
                "duration": 1599
              }, {
                "uid": 35101683,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/OaDmjhZqojs/Chariot-Developer-News-Episode-72-2013-12-20.mp3",
                "explicit": false,
                "episodeTitle": "Developer News #72 – The Winter Break Edition with Historical Videos, new Google Sheets",
                "episodeSummary": "This week we give you some light viewing for the week - a Letterman interview circa 1983 or so with the famous Rear Admiral Grace Hopper, and a really interesting demonstration by recently passed Douglas Englebart (search him above to find other DevNews articles on him) dubbed the Mother of all Demos (1968). Super cool stuff. Also, we discuss a nice little SQL tutorial website for PostgreSQL, the \"Smartest Person in the Room complex\", our new Data I/O screencasts, and a few blog entries from Chariot's developers.",
                "publishedAt": 1387571567,
                "size": 22242974,
                "duration": 1112
              }, {
                "uid": 35101689,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/z8lM6XopADY/Chariot-Developer-News-Episode-71-2013-12-09.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #71 – Roblox, one hour of code, Google’s robot army and more",
                "episodeSummary": "This week, we talk about some kid related topics, including Roblox and \"An hour of code\", an initiative for getting students to learn how to program. We cover Big-O notation and come back slightly better off, but with some more in-depth suggestions for you. We also talk about an article on regular expressions, how TestingBog ditched AWS, Joyant is now supporting Node.js, the bad stigma of being called a techie, and bitcoins.",
                "publishedAt": 1386620459,
                "size": 33340940,
                "duration": 2084
              }, {
                "uid": 35101698,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/v-eK08kD1Wk/Chariot-DeveloperNews-Episode-70-12-2-2013.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #70 – Droids and flying robots taking over the world and Scala.JS",
                "episodeSummary": "Lots of tech news available today, none of it (well aside from DNA crunching) needs an advanced degree! We have news on Typesafe's Jamie Allen's keynote at JAXEnter 2013 in London, two robot stories, a tale about lost bitcoins, DNA Analysis in Javascript, and Githubs expanding contexts for diffs. Also, Joel brings us a review of his first impressions with Ember.js and micro-services are exploding - what does that mean for the enterprise CTO / CIO who bets on that strategy? Find out by listening... It's all here in the DevNews.",
                "publishedAt": 1386019342,
                "size": 39269271,
                "duration": 1963
              }, {
                "uid": 35101707,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/6XtQA7WDpl8/Chariot-Developer-News-Episode-69-2013-11-25.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #69 – Google Machine Learning Becomes Sentient – or does it just love shredders?",
                "episodeSummary": "In this episode, Joel warns us that the machines have started to learn on their own - and that maybe they can tell shredders apart from trashcans... Also, a great TechCrunch article on how you can now build dynamic grids of compute servers using Mesos and have them automatically bootstrapped and configured by Docker. We talk about CoreOS, which is a small linux distro for beginning machine configurations, the Genymotion android VM that everyone was talking about at AnDevCon2013, and more.",
                "publishedAt": 1385413040,
                "size": 61145255,
                "duration": 3057
              }, {
                "uid": 35101720,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/IuBHnQM4i3g/Chariot-Business-Of-Tech-3-2013-11-21.mp3",
                "explicit": false,
                "episodeTitle": "Business of Technology #3 – Anita Garamella Andrews on Data Analytics",
                "episodeSummary": "Tracey Welson-Rossman talks to Anita Garamella Andrews, VP of Client Analytics Services at R.J. Metrics, about analytics and actionable data.",
                "publishedAt": 1385401808,
                "size": 30707900,
                "duration": 1535
              }, {
                "uid": 35101732,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/hZ9bZ-g0S14/Chariot-DevNews-68-2013-11-18.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #68 – Clouds and Androids abound, reactive ones!",
                "episodeSummary": "With a week of the gang has a lot to talk about, from reactive programming in Javascript with Bacon.js, to the failure of a startup (so long, and best of luck to the EverPix team, we loved your service) to the brain drain in academia due to data science, to some nitty gritty Javascript, a new reactive project in Spring, we got it all. Don't forget to post us on the LifeHacker favorite podcasts page!",
                "publishedAt": 1384809603,
                "size": 61444618,
                "duration": 3072
              }, {
                "uid": 35101748,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/pRhmT2exVyU/Chariot-DeveloperNews-Episode-67-11-04-2013.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #67 – Monoliths begone, lock free APIs, Bunnies and RabbitMQ, and computer viruses by air",
                "episodeSummary": "Links \"Five tips for big software projects\":http://blog.chariotsolutions.com/2013/10/5-tips-for-big-software-projects.html “Dismanteling the monoliths”:https://engineering.groupon.com/2013/misc/i-tier-dismantling-the-monoliths/ - rails apps converting to Nodejs at Groupon I’m taking a stab at lock-free this week - First, my reading took me to Mechanical Sympathy (which we’ve discussed before) and now that there is a JSR for some new constructions - (StampedLock) this site has […]",
                "publishedAt": 1383663599,
                "size": 56476128,
                "duration": 2824
              }, {
                "uid": 35101757,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/UyIEgxM7wns/Chariot-DeveloperNews-Episode-66-2013-10-28.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #66 – RESTful tutorials, CAPCHAs and Machine Learning, a million to win a hackathon and more…",
                "episodeSummary": "We talk about Newton – a pure Javascript Physics engine AI Startup says it has defeated captchas Got a great mobile app idea? You can win $1M in the SalesForce hackathon Elixir – a “groovy” for Erlang? We talk about JBoss Forge",
                "publishedAt": 1383009448,
                "size": 44093566,
                "duration": 1837
              }, {
                "uid": 35101772,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/5WWr3HazTa0/Chariot-Developer-News-Episode-65-2013-10-23.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #65 – Apple’s patent for touching glass with fingers is upheld?",
                "episodeSummary": "Links A great presentation by Jon Sondow on the Netflix Asgard Project- a Grails application server that deploys to AWS. Highlights include: Obama for America used it to keep its sites rolling and alive Used to be Netflix Application Console It is only one of the open source projects on Netflix's GitHub page. Reasons not […]",
                "publishedAt": 1382585395,
                "size": 38450594,
                "duration": 1922
              }, {
                "uid": 35101783,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/SM4XLaQe9is/Chariot-DeveloperNews-Episode-64-2013-10-14.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #64 – We’re older and losing our hair…",
                "episodeSummary": "Well, Ken is, anyway... A number of interesting topics this week. Topic List Newly OSS’d project Precog: advanced analyics for NoSql Angularjs vs Knockout - a great multi-page post comparing a number of features. Beyond map/reduce - it's not just about that Google whitepaper. 10 reasons to use AngularJS Cloud provider Nirvanix shuts down An […]",
                "publishedAt": 1381958399,
                "size": 35159687,
                "duration": 1758
              }, {
                "uid": 35101794,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/F58yoJQ09eA/Chariot-DeveloperNews-Episode-63-2013-10-07.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #63 – Robots that gallop, IDEs written in HTML, a browser swarm, what’s next?",
                "episodeSummary": "The links Sponsored by Haydle - ask, answer and rate answers to your company's questions, Data I/O 2013 a conference featuring a variety of technologies and techniques for dealing with large-scale and sophisticated data, and Chariot Education Services, providing training in Java, Spring, Maven/Nexus, Groovy/Grails, Hibernate, Map/Reduce and more. Codio: A Web IDE (Javascript / HTML, CSS, etc.) […]",
                "publishedAt": 1381177509,
                "size": 32957282,
                "duration": 1648
              }, {
                "uid": 35101807,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/-Wc8ZPbEiSc/biztech-2-susan-mc-fenton-2013-10-07.mp3",
                "explicit": false,
                "episodeTitle": "Business of Technology #2 – Susan McPherson Corporate Social Responsibility",
                "episodeSummary": "Susan McPherson has always had a foot in the non-profit world. With a number of years in a board position on Business Council for Peace, and working with Fabian Cousteau to help people to understand the importance of the oceans, but at Fenton, she was able to start helping corporations use tools that NGOs normally […]",
                "publishedAt": 1381147228,
                "size": 29559557,
                "duration": 1478
              }, {
                "uid": 35101821,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/MPyYv6Ts2WU/Chariot-TechCast-Episode-81-2013-10-03.mp3",
                "explicit": false,
                "episodeTitle": "TechCast #81 – Recap of the StrangeLoop 2013 conference with Joe Berger, Dan Boykis and Anatoly Polinsky",
                "episodeSummary": "In this podcast, I am joined by Dan Boykis and Anatoly Polinsky, two of our Chariot consultants who attended The Strange Loop conference in September. I also have some reflections from Chariot consultant Joe Berger, provided via email. Strange Loop is a 2-day conference with wraparound tutorials, and also contained a language \"un-conference\" by Alex Payne.",
                "publishedAt": 1380886695,
                "size": 60994267,
                "duration": 3050
              }, {
                "uid": 35101834,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/z5q-FyH5jF8/Chariot-DeveloperNews-Episode-62-2013-10-01.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #62 – The JVM wins, the JVM wins, the JVM wins!",
                "episodeSummary": "This episode is light on iOS, heavy on Java and Javascript, and covers some large-scale processing and machine learning articles to boot.",
                "publishedAt": 1380647372,
                "size": 41021042,
                "duration": 2051
              }, {
                "uid": 35101846,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/hP58pFHsPbQ/Chariot-DeveloperNews-61-2013-09-25.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #61 – It’s an iOS and Javascript world in here…",
                "episodeSummary": "Lots of iOS and Javascript news this week. We talk about jQuery 1.11/2.1 beta, a hands-on with iOS 7, privacy settings to pay attention to in iOS 7, and more...",
                "publishedAt": 1380124574,
                "size": 42900291,
                "duration": 2145
              }, {
                "uid": 35101856,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/h_hAOyiGD00/Chariot-DeveloperNews-60-Dont-Give-Joel-A-Furby-2013-09-16.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #60 – Somebody buy Joel a Furby",
                "episodeSummary": "This week - it's Not about Furby, but about the new Apple iPhones. Your hosts, Ken Rimple, Sujan Kapadia and Joel Confino talk about whether they'd go out and buy one, whether they still display the same appeal, and what's under the surface that could be a potential game changer.",
                "publishedAt": 1379443313,
                "size": 40942675,
                "duration": 2047
              }, {
                "uid": 35101867,
                "mediaUrl": "http://feedproxy.google.com/~r/ChariotTechCast/~5/7CdTlewHOeI/Chariot-DevNews-Episode-59-09-09-2013.mp3",
                "explicit": false,
                "episodeTitle": "DevNews #59 – Bugs made of paper and graphine transistors – does the NSA know?",
                "episodeSummary": "YEAH! Integrating yeoman-style projects into a larger maven build - Addy Osmani comes up with the goods. Making Maven Grunt We buried the lead - NSA can get to everything Joel brings up the counter-point, an article by ARS. Vertx 2.0 Q&amp;A on InfoQ w/Tim Fox - As per last week's episode, Vert.X is an […]",
                "publishedAt": 1378744342,
                "size": 35159249,
                "duration": 1758
              }
            ]
          }, {
            "id": 29820,
            "feedUrl": "http://threedevsandamaybe.com/",
            "authors": "Michael Budd, Fraser Hart, Lewis Cains, Edd Mann",
            "subscriptionTitle": "Three Devs and a Maybe - Introduction to Web Development",
            "summary": "A very basic introduction to web development, everything you'll need to know if you're thinking of persuing a hobbie or career in web development.",
            "albumArt": "three_devs_coverart.jpg",
            "episodes": [
              {
                "uid": 36599993,
                "mediaUrl": "http://threedevsandamaybe.com/download/15-web-design-with-justin-delucia.mp3",
                "explicit": null,
                "episodeTitle": "Episode 15 - Web Design with Justin DeLucia",
                "description": "This week we are lucky to have special guest and good friend of the show Justin DeLucia on to discuss all things web design. Starting off with background discussion on how he got into the industry, we move on to how designers and developers work (and should work) together. Finally, we wrap up with our longest quiz yet, which undoubtedly went off in many random tangents.",
                "publishedAt": 1394667000,
                "size": 54392832,
                "duration": 6013
              }, {
                "uid": 36379403,
                "mediaUrl": "http://threedevsandamaybe.com/download/14-using-composer-and-the-command-line-cli.mp3",
                "explicit": null,
                "episodeTitle": "Episode 14 - Using Composer and the Command Line (CLI)",
                "description": "With only a two man crew this week we decided to have a little ramble about Composer and the Command Line. Initially discussing the benefits of Composer over alternatives (i.e. PEAR), we move onto some of the real-world issues that can arise from 'depending' on it. We then segue into discussing the Command Line and some of the key points new users should now about.",
                "publishedAt": 1394056800,
                "size": 44419072,
                "duration": 4852
              }, {
                "uid": 36158045,
                "mediaUrl": "http://threedevsandamaybe.com/download/13-using-the-php-documentation.mp3",
                "explicit": null,
                "episodeTitle": "Episode 13 - Using the PHP Documentation",
                "description": "This week we discuss the important topic of learning how to effectively use the PHP documentation. Although easily neglected for other resources (i.e. StackOverflow), the official PHP documentation is a great place to learn about new functions and how they can be used. Finally, we touch on some accompanying third-party documentation tools we use on a daily basis.",
                "publishedAt": 1393451877,
                "size": 35321856,
                "duration": 3930
              }, {
                "uid": 35982392,
                "mediaUrl": "http://threedevsandamaybe.com/download/12-what-is-mvc.mp3",
                "explicit": null,
                "episodeTitle": "Episode 12 - What is MVC?",
                "description": "This week we discuss the popular MVC (Model-View-Controller) design pattern and how it is used in web application development today. We start with a brief history lesson and introduction to design patterns, then move on to a quiz which highlights some of variants that have been created.",
                "publishedAt": 1392843600,
                "size": 36313088,
                "duration": 4049
              }, {
                "uid": 35872085,
                "mediaUrl": "http://threedevsandamaybe.com/download/11-css-straight-from-the-hart.mp3",
                "explicit": null,
                "episodeTitle": "Episode 11 - CSS, Straight from the Hart",
                "description": "In this weeks show we introduce CSS to the web-development party. Starting off with a brief history lesson, we transition into highlighting why it is useful and the different types of styling options available. Finally, we put to rest the confusion between the different versions.",
                "publishedAt": 1392242400,
                "size": 65712379,
                "duration": 4082
              }, {
                "uid": 35698867,
                "mediaUrl": "http://threedevsandamaybe.com/download/10-html-experiences-and-navigation-implementation-part-2.mp3",
                "explicit": null,
                "episodeTitle": "Episode 10 - HTML Experiences and Navigation Implementation - Part 2",
                "description": "This week we wrap up the discussion on HTML, highlighting useful tools that we have encountered and incorporate into our work-flow. We then move on to briefly talk about considerations that should be addressed when designing and implementing website navigation.",
                "publishedAt": 1391634949,
                "size": 40253440,
                "duration": 4505
              }, {
                "uid": 35576577,
                "mediaUrl": "http://threedevsandamaybe.com/download/9-introduction-to-object-oriented-programming.mp3",
                "explicit": null,
                "episodeTitle": "Episode 9 - Introduction to Object-oriented programming",
                "description": "Sadly we are one host down this week with Lewis hard are work, so we decided to postpone part two of the HTML discussion till next week. In the meantime however, we divert are attention to introducing the Object-oriented programming paradigm. We discuss its' advantages, along with concepts such as Objects, Classes, Data Encapsulation, Inheritance and Polymorphism.",
                "publishedAt": 1391038200,
                "size": 34725888,
                "duration": 3873
              }, {
                "uid": 35439052,
                "mediaUrl": "http://threedevsandamaybe.com/download/8-html-experiences-part-1.mp3",
                "explicit": null,
                "episodeTitle": "Episode 8 - HTML Experiences - Part 1",
                "description": "This week we decided to do an episode on good ol' HTML. There are many good resources online for learning the language, so instead we decided to discuss our personal experiences. Along with this we reflect on browser support issues and how to help alleviate these problems.",
                "publishedAt": 1390423984,
                "size": 33531904,
                "duration": 3738
              }, {
                "uid": 35410986,
                "mediaUrl": "http://threedevsandamaybe.com/download/7-discussion-on-freelance-work.mp3",
                "episodeTitle": "Episode 7 - Discussion on Freelance Work",
                "description": "Following our discussion last week, we received a very cool email from a listener highlighting freelance work. In this weeks podcast we have a chat about our freelance experiences and how we find projects to take on. Following this we touch on things to look out for and how to juggle your day job and outside work.",
                "publishedAt": 1389736800,
                "size": 35090432,
                "duration": 3878
              }, {
                "uid": 35410987,
                "mediaUrl": "http://threedevsandamaybe.com/download/6-advice-to-new-php-web-developers.mp3",
                "episodeTitle": "Episode 6 - Advice to new PHP web developers",
                "description": "With all the recent discussion in the PHP community we decided it would be a good time to give some grounded advice to new developers. When you do decide to bite the bullet and begin learning web-development/PHP you may quickly be overwhelmed with talk of frameworks, third-party code and dependencies. In this podcast we give our take on what is best to learn and when, and how we each personally went about doing it.",
                "publishedAt": 1389043800,
                "size": 32524288,
                "duration": 3792
              }, {
                "uid": 35410988,
                "mediaUrl": "http://threedevsandamaybe.com/download/5-exploring-text-source-editors-and-ides.mp3",
                "episodeTitle": "Episode 5 - Exploring Text/Source Editors and IDEs",
                "description": "In the podcast this week we discuss the important topic of text editors. You will be using one daily if you plan to get serious about your programing, so it pays to be aware of what is out there. We first highlight the difference between text and source editors, and then name a couple of examples we have used in the past. Finally, we briefly discuss IDE's and the merits of using such an application when programming.",
                "publishedAt": 1387405800,
                "size": 35260416,
                "duration": 4109
              }, {
                "uid": 35410989,
                "mediaUrl": "http://threedevsandamaybe.com/download/4-web-hosting-and-domains-part-2.mp3",
                "episodeTitle": "Episode 4 - Web Hosting and Domains - Part 2",
                "description": "Second part of our discussion on Web Hosting options and what to look out for. We then move on to talk about Domains, DNS and the different types of record types (A, CNAME etc.).",
                "publishedAt": 1386626400,
                "size": 37036032,
                "duration": 3954
              }, {
                "uid": 35410990,
                "mediaUrl": "http://threedevsandamaybe.com/download/3-web-hosting-part-1.mp3",
                "episodeTitle": "Episode 3 - Web Hosting - Part 1",
                "description": "1st part of our section on web hosting. In this episode we cover an essential part of web development, choosing a web hosting solution that is right for you.",
                "publishedAt": 1386018000,
                "size": 33284096,
                "duration": 3550
              }, {
                "uid": 35410991,
                "mediaUrl": "http://threedevsandamaybe.com/download/2-getting-started.mp3",
                "episodeTitle": "Episode 2 - Setting up a local environment, basic PHP functionality",
                "description": "This episode explores getting started, including, creating a local environment, and explores some very basic programming logic, in particular PHP logic. We touch on collections/arrays, data types, looping techniques.",
                "publishedAt": 1383598800,
                "size": 28952576,
                "duration": 3056
              }, {
                "uid": 35410992,
                "mediaUrl": "http://threedevsandamaybe.com/download/1-introduction-episode.mp3",
                "episodeTitle": "Introduction Episode - Who are the hosts, what is PHP, where to start",
                "description": "This episode introduces listeners to the people hosting the podcast. It also touches on some very basic topics such as, what is needed to get in to web development, what experience is required, what will it cost, what will I need to learn. This is for absolute beginners, no knowledge at all of web development is required.",
                "publishedAt": 1382191200,
                "size": 37881856,
                "duration": 4588
              }
            ]
          }, {
            "id": 191,
            "homeUrl": "http://webdevradio.com",
            "feedUrl": "http://feeds.feedburner.com/webdevradiopodcasthome",
            "authors": "Michael Kimsal",
            "subscriptionTitle": "WebDevRadio.com - web development podcast",
            "summary": "Topics, tools and tips for web application developers, including testing strategies, upcoming conferences, interviews with developers, seo techniques, optimization tip and more.",
            "albumArt": "webdev.jpg",
            "episodes": [
              {
                "uid": 36684164,
                "url": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/XvmdjHnpzjc/wdr_119.mp3",
                "explicit": false,
                "episodeTitle": "Episode 119: Toran Billups interview",
                "episodeSummary": "I had a chance to chat with Toran Billups about EmberJS, PyTenn and other stuff. Take a listen toranbillups.com emberjs.com",
                "publishedAt": 1394899124,
                "duration": 4308
              }, {
                "uid": 36260631,
                "mediaUrl": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/sdz8z2kGi7I/wdr_118.mp3",
                "explicit": false,
                "episodeTitle": "Episode 118: Safe navigation coming to C#, PHP object injection in WordPress",
                "episodeSummary": "C# may get the safe navigation operator soon! <a href=\"http://blogs.msdn.com/b/jerrynixon/archive/2014/02/26/at-last-c-is-getting-sometimes-called-the-safe-navigation-operator.aspx\">http://blogs.msdn.com/b/jerrynixon/archive/2014/02/26/at-last-c-is-getting-sometimes-called-the-safe-navigation-operator.aspx</a> Bing Code Search for Visual Studio <a href=\"http://blogs.msdn.com/b/visualstudio/archive/2014/02/17/introducing-bing-code-search-for-c.aspx\">http://blogs.msdn.com/b/visualstudio/archive/2014/02/17/introducing-bing-code-search-for-c.aspx</a> PHP Object Injection in WordPress <a href=\"http://vagosec.org/2013/09/wordpress-php-object-injection/\">http://vagosec.org/2013/09/wordpress-php-object-injection/</a> Dates are hard – Ben Ramsey <a href=\"http://benramsey.com/blog/2014/02/dates-are-hard/wdr_118\">http://benramsey.com/blog/2014/02/dates-are-hard/wdr_118</a>",
                "publishedAt": 1393443043,
                "duration": 1100
              }, {
                "uid": 35939572,
                "mediaUrl": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/xIIYykqS6RE/wdr_117.mp3",
                "explicit": false,
                "episodeTitle": "Episode 117: XDK, security headers and a bit more",
                "episodeSummary": "Intel’s XDK cross platform mobile development: http://xdk-software.intel.com Try out ElasticSearch in a ‘fiddle-like’ environment: <a href=\"https://www.found.no/play/\">https://www.found.no/play/</a> NightwatchJS browser test: http://nightwatchjs.org Security headers you should know about: http://ibuildings.nl/blog/2013/03/4-http-security-headers-you-should-always-be-using",
                "publishedAt": 1391090277,
                "duration": null
              }, {
                "uid": 34951736,
                "mediaUrl": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/ohGs-HJfjwc/wdr_116.mp3",
                "explicit": false,
                "episodeTitle": "Episode 116 – Foundation 5, DotNetFiddle and more",
                "episodeSummary": "Puppet vs Chef vs Ansible vs Salt post and discussion <a href=\"http://www.infoworld.com/d/data-center/review-puppet-vs-chef-vs-ansible-vs-salt-231308\">http://www.infoworld.com/d/data-center/review-puppet-vs-chef-vs-ansible-vs-salt-231308</a> <a href=\"http://www.alpacajs.org\">http://www.alpacajs.org</a> Zurb Foundation 5 released discussion Yii framework 2.0 alpha DotNetFiddle – Fiddle with C# from your browser",
                "publishedAt": 1387854037,
                "duration": 1337
              }, {
                "uid": 34710716,
                "mediaUrl": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/01_tInqLupM/wdr_115.mp3",
                "explicit": false,
                "episodeTitle": "Episode 115: The confessional, PHP BDD and PHP VCR",
                "episodeSummary": "PHP BDD Framework: https://github.com/danielstjules/pho Comparison chart of front-end CSS frameworks: http://usablica.github.io/front-end-frameworks/compare.html PHP VCR: <a href=\"http://php-vcr.github.io%C2%A0reddit\">http://php-vcr.github.io reddit</a> discussion Protect yourself with different terminal colors based on what server you’re connecting to!",
                "publishedAt": 1386853962,
                "duration": 1421
              }, {
                "uid": 33300010,
                "mediaUrl": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/NU-kfBlU6NY/wdr_114.mp3",
                "explicit": false,
                "episodeTitle": "Episode 114: Netbeans 7.4, Fontello, and Timing Attacks",
                "episodeSummary": "Netbeans 7.4 is out. HTML5 development for Android and iOS devices HTML5 development in Java EE and PHP applications Editing support for Knockout and AngularJS frameworks fontello – icon fonts generator effekt.css timing attacks via html5",
                "publishedAt": 1384152665,
                "duration": 1689
              }, {
                "uid": 33005887,
                "mediaUrl": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/_1jhmwLFZ7c/wdr_113.mp3",
                "explicit": false,
                "episodeTitle": "Episode 113 – PHP.net compromised, Flexbox in your future?",
                "episodeSummary": "The PHP.net website was compromised, but we don’t yet know what the exploit was. No actual code or binaries were affected; the site was just serving up javascript malware. Healtcare.gov is still a mess, but are there lessons we can … <a href=\"http://webdevradio.com/2013/11/episode-113-php-net-compromised-flexbox-in-your-future/\">Continue reading →</a>",
                "publishedAt": 1383555982,
                "duration": 1183
              }, {
                "uid": 32781953,
                "mediaUrl": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/J_6EQmVhK7w/wdr_112.mp3",
                "explicit": false,
                "episodeTitle": "Episode 112 – Facebook CSRF, KnockoutJS 3",
                "episodeSummary": "I think I’m missing something about apigility.org – help me figure it out. Facebook’s team fixes CSRF exploit in 2 hours. Is Rails’ CookieStore broken by default, or working just fine? KnockoutJS 3 was released – upgrade/change notes are here … <a href=\"http://webdevradio.com/2013/10/260/\">Continue reading →</a>",
                "publishedAt": 1383059094,
                "duration": 1491
              }, {
                "uid": 7067547,
                "mediaUrl": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/DEOp9Xa1dYg/wdr_111.mp3",
                "explicit": false,
                "episodeTitle": "Episode 111 – 8 years and counting",
                "episodeSummary": "So… this is the 8 year anniversary of webdevradio – what’s changed in the last 8 years? Lots! What’s the same? Lots! I go in to a bit more detail than that… Some recent news as well… Rails 4 released … <a href=\"http://webdevradio.com/2013/07/episode-111-8-years-and-counting/\">Continue reading →</a>",
                "publishedAt": 1372872065,
                "duration": null
              }, {
                "uid": 2684923,
                "mediaUrl": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/QaxsBKZiH-Q/wdr_110.mp3",
                "explicit": false,
                "episodeTitle": "Episode 110: Azure hits 1 billion, RubyFlux compiler, Laracasts and more",
                "episodeSummary": "OK, in no particular order: RubyFlux (article I originally found) TechEmpower round 5 Where is .NET headed? Web Components: Polymer Project and X-Tags LaraCasts",
                "publishedAt": 1369367662,
                "duration": null
              }, {
                "uid": 2330120,
                "mediaUrl": "http://feedproxy.google.com/~r/WebdevradioPodcastHome/~5/5hU62QR4vAw/wdr_109.mp3",
                "explicit": false,
                "episodeTitle": "Episode 109: Typescript and a bit more…",
                "episodeSummary": "Heading off to Russia for a bit – if there’s anything you think I should see when I’m there, let me know Saw a good presentation on TypeScript recently, which has piqued my interest – hopefully it piques yours as … <a href=\"http://webdevradio.com/2013/04/episode-109-typescript-and-a-bit-more/\">Continue reading →</a>",
                "publishedAt": 1369367662,
                "duration": null
              }
            ]
          }, {
            "id": 29653,
            "homeUrl": "http://five-js.envylabs.com/",
            "feedUrl": "http://five-js.envylabs.com/feed.rss",
            "authors": "Envy Labs",
            "subscriptionTitle": "5 Minutes of JavaScript",
            "summary": "5 Minutes of JavaScript is a weekly podcast about all things in the JavaScript community in just 5 minutes.",
            "albumArt": "5-minutes-of-javascript-itunes-logo.png",
            "episodes": [
              {
                "uid": 36609121,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/018-5-minutes-of-javascript.mp3?1394734444",
                "explicit": false,
                "episodeTitle": "Episode #18 - March 13th, 2014",
                "episodeSummary": "<p> In this episode we cover ECMAScript 6 features, a look into custom elements, untangling your JavaScript with Browserify and Multiline.js. <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/18-episode-18-march-13th-2014\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\">Sponsored by Code School</a> Learn by doing with our interactive courses and weekly CodeTV screencasts for just $29/month. <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\"> </a> <a href=\"https://github.com/lukehoban/es6features\">ECMAScript 6 Features</a> There are a lot of new features in ECMAScript 6. If you’re not actively developing in it, trying to wrap your head around all of the changes is a heavy job. Luckily, Luke Hoban wrote up a great document, in the form of a GitHub readme, detailing the major ECMAScript 6 features. <a href=\"https://github.com/lukehoban/es6features\"> </a> <a href=\"http://lincolnloop.com/blog/untangle-your-javascript-browserify/\">Untangle Your JavaScript with Browserify</a> Modular development on the client side isn’t limited to ES6. You can get some of the biggest advantages of it by breaking your code up into smaller modules and having them require each other. Take a look at how Browserify can help with this post. <a href=\"http://lincolnloop.com/blog/untangle-your-javascript-browserify/\"> </a> <a href=\"https://github.com/sindresorhus/multiline\">Multiline</a> Multiline strings in JavaScript aren't possible and won't be possible anytime soon. Multiline is a tiny library that offers a solution to this without needing a pre-compiler. <a href=\"https://github.com/sindresorhus/multiline\"> </a>",
                "publishedAt": 1394740217,
                "duration": 327
              }, {
                "uid": 36425715,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/017-5-minutes-of-javascript.mp3?1394121181",
                "explicit": false,
                "episodeTitle": "Episode #17 - March 6th, 2014",
                "episodeSummary": "<p> In this episode we cover GitHubs new Atom.io editor, some useful Knockout binding handlers you can't live without, Testing practices in JavaScript and Angular and Distributed Logging for Node using YAL. <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/17-episode-17-march-6th-2014\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\">Sponsored by Code School</a> Learn by doing with our interactive courses and weekly CodeTV screencasts for just $29/month. <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\"> </a> <a href=\"https://atom.io/\">Atom</a> GitHub released a new text editor called Atom, a desktop application based on web technologies. Atom is a hackable editor which you can extend using JavaScript, HTML and CSS. <a href=\"https://atom.io/\"> </a> <a href=\"http://tech.pro/blog/1863/10-knockout-binding-handlers-i-don-t-want-to-live-without\">Useful KO.js Binding Handlers</a> Leland Richardson wrote a blog post about \"10 Knockout.js Binding Handlers\" he doesn't want to live without, where he goes over some custom binding handlers he likes to use to help keep his code more readable. <a href=\"http://tech.pro/blog/1863/10-knockout-binding-handlers-i-don-t-want-to-live-without\"> </a> <a href=\"http://blog.envylabs.com/post/61403296076/testing-angularjs-apps-with-protractor\">Testing AngularJS Apps with Protractor</a> Why test JavaScript? That's a question we've all asked at some point. In this short talk we discuss why you might want to test in JavaScript, along with some suggestions on where to go to learn more. <a href=\"http://blog.envylabs.com/post/61403296076/testing-angularjs-apps-with-protractor\"> </a> <a href=\"https://segment.io/blog/2014-02-21-distributed-logging-infrastructure-with-yal/\">Distributed Logging with YAL</a> TJ Holowaychuk, creator of express, koa, and most of the other node libraries you may or may not have heard about, recently wrote a post on the Segment.io blog about a new logging tool they've released called YAL. Learn how to get setup with YAL, Yet Another Logger, and add it to your Node.js application. <a href=\"https://segment.io/blog/2014-02-21-distributed-logging-infrastructure-with-yal/\"> </a>",
                "publishedAt": 1394129811,
                "duration": 484
              }, {
                "uid": 36183188,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/016-5-minutes-of-javascript.mp3?1393528059",
                "explicit": false,
                "episodeTitle": "Episode #16 - February 27th, 2014",
                "episodeSummary": "<p> In this episode, we talk about Rewriting a Web App in ES6, the Component package manager, the Chrome Fast Tab Switcher chrome extension built in React.js, building an Ember.js app with a Rails API and the future of the Ghost Admin UI. <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/16-episode-16-february-27th-2014\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\">Sponsored by Code School</a> Learn by doing with our interactive courses and weekly CodeTV screencasts for just $29/month. <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\"> </a> <a href=\"http://blog.tastejs.com/rewriting-a-webapp-with-ecmascript-6/\">Rewriting the TodoMVC web app in ES6</a> Addy Osmani wrote a blog post over at the TasteJS blog on Rewriting a Web App with ECMA Script 6. The post goes over re­writing the well known TodoMVC application, implemented in Backbone, but using some of the upcoming features in ES6 like the Destructuring Assignment, Class Syntax, Spread Operator, Rest Parameter and others. <a href=\"http://blog.tastejs.com/rewriting-a-webapp-with-ecmascript-6/\"> </a> <a href=\"http://flippinawesome.org/2014/02/17/introduction-to-the-component-javascript-package-manager/\">The Component package manager</a> Toby Ho wrote up an Introduction to Component which goes into detail about how to use components, where to find them, making your own components and more. If you are looking for a better way of sharing client side libraries than attaching them to the window object, give this blog post a read. <a href=\"http://flippinawesome.org/2014/02/17/introduction-to-the-component-javascript-package-manager/\"> </a> <a href=\"https://github.com/BinaryMuse/chrome-fast-tab-switcher\">Chrome Fast Tab Switcher</a> Fast Tab Switcher is a Chrome extension by Brandon Tilley that allows us to quickly switch between browser tabs using just our keyboard. The extension itself is just a JavaScript app written using React.js. Brandon also wrote a blog post on how he built the extension, and goes over the different React features, like its new syntax called JSX, and using Browserify and Reactify to built the project. <a href=\"https://github.com/BinaryMuse/chrome-fast-tab-switcher\"> </a> <a href=\"http://robots.thoughtbot.com/emberjs-with-a-separate-rails-api\">Ember.js with a separate Rails API</a> Jason Draper from Thoughtbot wrote a blog post on his experience working on a project that uses Ember.js backed by a Rails API. In the post, Jason also goes into some of the gems within Rails they used, as well as how they managed to use fixtures and CoffeeScript effectively. <a href=\"http://robots.thoughtbot.com/emberjs-with-a-separate-rails-api\"> </a> <a href=\"http://dev.ghost.org/hello-ember/\">Ghost Admin UI in Ember.js</a> Hannah Wolfe recently announced that the Ghost Admin UI is going to be rebuilt in Ember.js. According to Hannah, as a fast moving open source project, the team doesn't want to spend time on things like discussing project structure, designing a framework, documentation, and creating guidelines so that new contributors can get up to speed. With Ember.js, the majority of decisions have already been made, which makes it easier to roll out features and onboard new developers. <a href=\"http://dev.ghost.org/hello-ember/\"> </a>",
                "publishedAt": 1393528242,
                "duration": 404
              }, {
                "uid": 35995302,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/015-5-minutes-of-javascript.mp3?1392923534",
                "explicit": false,
                "episodeTitle": "Episode #15 - February 20th, 2014",
                "episodeSummary": "<p> Broccoli, multithread.js, Fireplace, JavaScript Promises, Iterators. <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/15-episode-15-february-20th-2014\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\">Sponsored by Code School</a> Learn by doing with our interactive Courses and weekly CodeTV screencasts for just $29/month. <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\"> </a> <a href=\"http://www.solitr.com/blog/2014/02/broccoli-first-release/\">Broccoli</a> JavaScript build tool and server. <a href=\"http://www.solitr.com/blog/2014/02/broccoli-first-release/\"> </a> <a href=\"http://mattgreer.org/articles/promises%C2%ADin%C2%ADwicked%C2%ADdetail/\">JavaScript Promises... In Wicked Detail</a> Detailed blog post about promises from scratch. <a href=\"http://mattgreer.org/articles/promises%C2%ADin%C2%ADwicked%C2%ADdetail/\"> </a> <a href=\"http://macr.ae/article/iterators%C2%ADand%C2%ADgenerators.html\">Playing with iterators and generators</a> Learn more about iterators and generators in ECMAScript 6. <a href=\"http://macr.ae/article/iterators%C2%ADand%C2%ADgenerators.html\"> </a>",
                "publishedAt": 1392923962,
                "duration": 422
              }, {
                "uid": 35859958,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/014-5-minutes-of-javascript.mp3?1392300081",
                "explicit": false,
                "episodeTitle": "Episode #14 - February 13th, 2014",
                "episodeSummary": "<p> In this episode we cover gulp-plugin-boilerplate to help you get started with creating gulp plugins quickly, making Angular.js apps realtime with Pusher, page scrolling with ScrollReveal.js, building a simple Todo list using Koa and npm Inc receives funding. <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/14-episode-14-february-13th-2014\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\">Sponsored by Code School</a> Learn by doing with our interactive Courses and weekly CodeTV screencasts for just $29/month. <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\"> </a> <a href=\"https://github.com/sindresorhus/gulp-plugin-boilerplate/\">Gulp-plugin-boilerplate</a> Sindre Sorhus has created a gulp-­plugin-­boilerplate to help you get started with creating gulp plugins quickly. In addition to manually building the plugin from the boilerplate, you can also build the plugin with yeoman. <a href=\"https://github.com/sindresorhus/gulp-plugin-boilerplate/\"> </a> <a href=\"http://blog.pusher.com/making-angular-js-realtime-with-pusher/\">Using Angular.js with Pusher</a> Sylvain Giuliani wrote an article on the Pusher blog showing how to use Pusher with Angular.js apps. The article shows how to work with the \"angular-pusher\" library. Sylvain finishes with an example of a Node.js app that triggers events to Pusher, which are then listened to by the Angular.js app. <a href=\"http://blog.pusher.com/making-angular-js-realtime-with-pusher/\"> </a> <a href=\"https://github.com/julianlloyd/scrollReveal.js\">ScrollReveal.js</a> ScrollReveal.js is a library that tries to stick to the more tasteful side of things when it comes to altering scrolling in the browser. It only revelas elements on the page after they are scrolled to. <a href=\"https://github.com/julianlloyd/scrollReveal.js\"> </a> <a href=\"http://blog.peterdecroos.com/blog/2014/02/01/koa-zero-to-todo-list/\">Building a Todo list app in Koa.js</a> Peter de Croos wrote a cool blog post teaching how to create a simple web app using Koa.js. He teaches how to build a very simple Todo list using Koa and some modules like koa-­route, for routing, koa-­static, for serving up static files and co-­body for parsing the body of post requests. The app also uses the bluebird module, a full featured Promises/A+ implementation, which is used to \"promisify\" the 'fs' native node module so that its functions return promises that can be used as arguments to yield. <a href=\"http://blog.peterdecroos.com/blog/2014/02/01/koa-zero-to-todo-list/\"> </a> <a href=\"http://blog.npmjs.org/post/76320673650/funding\">npm Inc receives $2.6M funding</a> This week Isaac Schlueter of npm Inc announced that company has closed a round of seed funding with True Ventures. According to Isaac, they will use the money to hire a number of employees, improve availability of the website, host the registry themselves, bring the downloads count statistics back and build the proper monitoring systems for the infrastructure. Isaac said the money raised from the recent scalenpm campaign went to Nodejitsu for hosting the registry for the past few years. <a href=\"http://blog.npmjs.org/post/76320673650/funding\"> </a> <a href=\"http://fivejs.envylabs.com\">Thank You for Listening to Five Minutes of JavaScript</a> <p>The \"5 Minutes of JavaScript\" podcast is released every Thursday. To stay informed about and active with this podcast, we encourage you to do one of the following:</p> <p> Follow <a href=\"https://twitter.com/FiveJSPodcast\">5 Minutes of JavaScript</a> on Twitter<br> Or, subscribe with <a href=\"https://itunes.apple.com/us/podcast/5-minutes-of-javascript/id775261328?mt=2\">iTunes</a> or <a href=\"http://feeds.feedburner.com/FiveMinutesOfJavaScript\">RSS</a> </p> <a href=\"http://fivejs.envylabs.com\"> </a>",
                "publishedAt": 1392304613,
                "duration": 384
              }, {
                "uid": 35711914,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/013-5-minutes-of-javascript.mp3?1391702322",
                "explicit": false,
                "episodeTitle": "Episode #13 - February 6th, 2014",
                "episodeSummary": "<p> In this episode we talk about marking search engine crawlers happy with Predender.io, E2E tests with Nightwatch, YouMightNotNeedJQuery.com, building graphs with Sigma.js, dotJS conference videos and FluentConf. <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/13-episode-13-february-6th-2014\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\">Sponsored by Code School</a> Learn by doing with our interactive Courses and weekly CodeTV screencasts for just $29/month. <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\"> </a> <a href=\"https://prerender.io\">Prerender.io</a> Prerender.io helps rich JavaScript web applications improve their SEO by rendering HTML content back to search engine crawlers. It can be used as a third party service or you can clone the repository and run your own Predender.io server. <a href=\"https://prerender.io\"> </a> <a href=\"http://nightwatchjs.org\">Nightwatch.js</a> Nightwatch.js is a UI testing framework based on Node.js and the Selenium webdriver. It allows you to write End­-to-­End tests using only JavaScript and CSS selectors. <a href=\"http://nightwatchjs.org\"> </a> <a href=\"http://youmightnotneedjquery.com\">YouMightNotNeedjQuery.com</a> Zack Bloom and Adam Schwartz from HubSpot created the youmightnotneedjquery.com website, which shows common tasks solved using jQuery and compares each of them with a solution using pure JavaScript. <a href=\"http://youmightnotneedjquery.com\"> </a> <a href=\"http://sigmajs.org\">Sigma.js</a> Sigma.js is a JavaScript library dedicated to graph drawing. It makes easy to publish networks on Web pages, and allows developers to integrate network exploration in rich Web applications. <a href=\"http://sigmajs.org\"> </a> <a href=\"http://www.youtube.com/watch?v=4JdS5RHGroQ\">Videos for dotJS 2013</a> Some of the videos are up from the 2013 dotJS conference in Paris. Just to name a few, James Burke, the creator of require.js gave a talk on Module Frontiers. Andy Osmani, the creator of Yeoman gave a talk on Polymer. And Pamela Fox from Khan Academy gave a talk on Making JavaScript more Learnable. <a href=\"http://www.youtube.com/watch?v=4JdS5RHGroQ\"> </a> <a href=\"http://fluentconf.com/fluent2014\">FluentConf 2014</a> <p>FluentConf is a conference about JavaScript, HTML5, CSS3 and more. It's taking place in San Francisco, from March 11th through the 13th.</p> <p>The speaker line up includes Brendan Eich, Paul Irish, Ilya Grigorik and more.</p> <p>You can get 25% off regular ticket price by using the discount code CODESCHOOL25</p> <a href=\"http://fluentconf.com/fluent2014\"> </a> <a href=\"http://fivejs.envylabs.com\">Thank You for Listening to Five Minutes of JavaScript</a> The \"5 Minutes of JavaScript\" podcast is released every Thursday. To stay informed about and active with this podcast, we encourage you to do one of the following: <p> Follow <a href=\"https://twitter.com/FiveJSPodcast\">5 Minutes of JavaScript</a> on Twitter<br> Or, subscribe with <a href=\"https://itunes.apple.com/us/podcast/5-minutes-of-javascript/id775261328?mt=2\">iTunes</a> or <a href=\"http://feeds.feedburner.com/FiveMinutesOfJavaScript\">RSS</a> </p> <a href=\"http://fivejs.envylabs.com\"> </a>",
                "publishedAt": 1391702332,
                "duration": 438
              }, {
                "uid": 35584997,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/012-5-minutes-of-javascript.mp3?1391090670",
                "explicit": false,
                "episodeTitle": "Episode #12 - January 30th, 2014",
                "episodeSummary": "<p> This episode covers what's new in CoffeeScript 1.7, using Tether to help with positioning tooltips, getting started with WebRTC using RTC.io, the making of the Warming up with Ember.js course, Node 0.12 performance optimizations and FluentConf 2014. <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/12-episode-12-january-30th-2014\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\">Sponsored by Code School</a> Learn by doing with our interactive Courses and weekly CodeTV screencasts for just $29/month. <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\"> </a> <a href=\"https://gist.github.com/aseemk/8637896\">CoffeeScript 1.7</a> CoffeeScript 1.7 was recently released! Some of its new features include parens­free method chaining, proper multiline strings, expansion in array restructuring, and new mathematical operators for power, floor division and modulo. <a href=\"https://gist.github.com/aseemk/8637896\"> </a> <a href=\"https://github.com/HubSpot/tether\">Tether</a> Tether is a JavaScript library from HubSpot for efficiently making an absolutely positioned element stay next to another element on the page. <a href=\"https://github.com/HubSpot/tether\"> </a> <a href=\"http://rtc.io\">rtc.io</a> rtc.io is a collection of open source modules that can help with getting started building JavaScript realtime apps. <a href=\"http://rtc.io\"> </a> <a href=\"http://blog.codeschool.com/post/74064923793/the-making-of-warming-up-with-ember-js\">The Making of Warming up With Ember</a> This week the Code School team wrote up a blog post discussing the creation process for their recent Ember.js course. <a href=\"http://blog.codeschool.com/post/74064923793/the-making-of-warming-up-with-ember-js\"> </a> <a href=\"http://strongloop.com/strongblog/performance-node-js-v-0-12-whats-new/\">Node.js v0.12 Performance Optimization</a> Ben Noordhuis from StrongLoop wrote a blog post about the performance optimizations in the upcoming 0.12 version of Node.js. <a href=\"http://strongloop.com/strongblog/performance-node-js-v-0-12-whats-new/\"> </a> <a href=\"http://fluentconf.com/fluent2014\">FluentConf 2014</a> <p>FluentConf is a conference about JavaScript, HTML5, CSS3 and more. It's taking place in San Francisco, from March 11th through the 13th.</p> <p>The speaker line up includes Brendan Eich, Paul Irish, Ilya Grigorik and more.</p> <p>You can get 25% off regular ticket price by using the discount code CODESCHOOL25</p> <a href=\"http://fluentconf.com/fluent2014\"> </a> <a href=\"http://fivejs.envylabs.com\">Thank You for Listening to Five Minutes of JavaScript</a> The \"5 Minutes of JavaScript\" podcast is released every Thursday. <a href=\"http://fivejs.envylabs.com\"> </a>",
                "publishedAt": 1391090823,
                "duration": 374
              }, {
                "uid": 35484699,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/011-5-minutes-of-javascript.mp3?1390623354",
                "explicit": false,
                "episodeTitle": "Episode #11 - January 23rd, 2014",
                "episodeSummary": "<p> This episode covers component, polymer, learnable programming, BrowserSync and ES6 Promises. <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/11-episode-11-january-23rd-2014\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\">Sponsored by codeschool</a> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\"> </a> <a href=\"https://github.com/component/component\">Component Package Manage</a> Component package manager for building a better web. <a href=\"https://github.com/component/component\"> </a> <a href=\"http://www.polymer-project.org/faq.html#uicomponents\">Polymer</a> Polymer is a new type of library for the web, built on top of Web Components, and designed to leverage the evolving web platform on modern browsers. <a href=\"http://www.polymer-project.org/faq.html#uicomponents\"> </a> <a href=\"http://amasad.me/2014/01/10/implementing-bret-victors-learnable-programming-has-never-been-easier/\">Implementing Bret Victor's Learnable Programming Has Never Been Easier</a> Amjad Masad implements Bret Victors Learnable programming demonstration using debugjs and D3. <a href=\"http://amasad.me/2014/01/10/implementing-bret-victors-learnable-programming-has-never-been-easier/\"> </a> <a href=\"https://github.com/shakyShane/browser-sync\">BrowserSync</a> Keep multiple browsers &amp; devices in sync when building websites. <a href=\"https://github.com/shakyShane/browser-sync\"> </a> <a href=\"http://www.html5rocks.com/en/tutorials/es6/promises/\">A Promise is a Promise</a> Article detailing what's new with promises in ES6. <a href=\"http://www.html5rocks.com/en/tutorials/es6/promises/\"> </a> <a href=\"http://fivejs.envylabs.com\">Thank You for Listening to Five Minutes of JavaScript</a> The \"5 Minutes of JavaScript\" podcast is released every Thursday. <a href=\"http://fivejs.envylabs.com\"> </a>",
                "publishedAt": 1390513632,
                "duration": 417
              }, {
                "uid": 35377184,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/010-5-minutes-of-javascript.mp3?1389887338",
                "explicit": false,
                "episodeTitle": "Episode #10 - January 16th, 2014",
                "episodeSummary": "<p> This episode covers Koa.js, Picturefill, Gulp.js, performance talks at the Chrome Dev Summit, leadership change in Node.js and FluentConf. <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/10-episode-10-january-16th-2014\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\">Sponsored by Code School</a> Learn by doing with our interactive Courses and weekly CodeTV screencasts for just $29/month. <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\"> </a> <a href=\"http://koajs.com\">Koa</a> Koa.js is a new web framework designed by the team behind express that ditches callback based middleware in favor of JavaScript generators. <a href=\"http://koajs.com\"> </a> <a href=\"https://github.com/jansepar/picturefill\">Picturefill</a> Picturefill is a Responsive Images approach that you can use today that mimics the proposed picture element. <a href=\"https://github.com/jansepar/picturefill\"> </a> <a href=\"http://gulpjs.com\">Gulp</a> Gulp.js is a new streaming build system. It replaces imperative object definitions in favor of a streams inspired method chaining configuration. <a href=\"http://gulpjs.com\"> </a> <a href=\"http://updates.html5rocks.com/2014/01/Chrome-Dev-Summit-Performance-Summary\">Chrome Dev Summit: Performance Summary</a> Paul Lewis over at the HTML5Rocks website has recently published a post with links to some Chrome Dev Summit performance talks and a short summary for each talk. There's talks by Colt McAnlis, Ilya Grigorik, Tom Wiltzius &amp; Nat Duca, and Bryan McQuade. <a href=\"http://updates.html5rocks.com/2014/01/Chrome-Dev-Summit-Performance-Summary\"> </a> <a href=\"http://blog.nodejs.org/2014/01/15/the-next-phase-of-node-js/\">Isaac steps down as Node.js project leader</a> Isaac Schlueter posted on the Node.js blog that he is stepping down as the Node.js project leader to focus his time on npm. TJ Fontaine, who has been effectively leading the Node project for the past year, is the new official project leader. <a href=\"http://blog.nodejs.org/2014/01/15/the-next-phase-of-node-js/\"> </a> <a href=\"http://fluentconf.com/fluent2014\">FluentConf</a> FluentConf is going to be taking place in San Francisco, from March 11th through the 13th. The speaker line up includes Brendan Eich, Paul Irish, Ilya Grigorik and more. Early Price tickets are still available! <a href=\"http://fluentconf.com/fluent2014\"> </a> <a href=\"http://fivejs.envylabs.com\">Thank You for Listening to Five Minutes of JavaScript</a> The \"5 Minutes of JavaScript\" podcast is released every Thursday. <a href=\"http://fivejs.envylabs.com\"> </a>",
                "publishedAt": 1389887387,
                "duration": 406
              }, {
                "uid": 35377185,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/009-5-minutes-of-javascript.mp3?1389276996",
                "explicit": false,
                "episodeTitle": "Episode #9 - January 9th, 2014",
                "episodeSummary": "<p> Vert.x, Ember1.3.0, CodeCombat goes open source, In-Browser debuggers with JS generators, NPM Module Foundry <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/9-episode-9-january-9th-2014\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\">Sponsored by Code School</a> Learn by doing with our interactive Courses and weekly CodeTV screencasts for just $29/month. <a href=\"http://codeschool.com/?utm_source=five-js&amp;utm_medium=podcast&amp;utm_content=five-js&amp;utm_campaign=sponsor\"> </a> <a href=\"http://vertx.io\">Vert.x</a> Vert.x is a lightweight, high performance application platform for the Java Virtual Machine. It’s like Node.js for the JVM. <a href=\"http://vertx.io\"> </a> <a href=\"https://github.com/emberjs/ember.js/blob/v1.3.0/CHANGELOG.md\">Ember 1.3.0</a> This week, the Ember team released version 1.3.0, just 2 months after releasing 1.2. In addition to a number of bugfixes, there’s a helpful debugger handlebars helper which you can use in your templates. There’s also a new syntax for observing multiple keys in an array, like for example you have an array and you want to see if both property a and property b changed. <a href=\"https://github.com/emberjs/ember.js/blob/v1.3.0/CHANGELOG.md\"> </a> <a href=\"http://blog.codecombat.com/we-have-open-sourced-everything\">CodeCombat</a> CodeCombat, the multiplayer programming game for learning how to code, has recently open sourced their platform. There's a bunch of different areas of interest they need help on, like compilers, physics simulations, user experience, AI, performance tuning, audio processing, translation, security and a lot more. <a href=\"http://blog.codecombat.com/we-have-open-sourced-everything\"> </a> <a href=\"http://amasad.me/2014/01/06/building-an-in-browser-javascript-vm-and-debugger-using-generators/\">Building an In-Browser JavaScript VM and Debugger Using Generators</a> Amjad Masad put together an amazing in-browser debugger using JavaScript, Generators and CodeMirror. He goes over some of the main concepts of it in his blog post, including the code transformations, handling timers and how ES6 generators help. <a href=\"http://amasad.me/2014/01/06/building-an-in-browser-javascript-vm-and-debugger-using-generators/\"> </a> <a href=\"http://blog.nodejitsu.com/npm-binary-modules-and-module-foundry\">NPM Module Foundry</a> Module Foundry is a build server that accepts a package.json file or tarball and returns a fully built tarball. <a href=\"http://blog.nodejitsu.com/npm-binary-modules-and-module-foundry\"> </a> <a href=\"http://five-js.envylabs.com\">Thank You for Listening to Five Minutes of JavaScript</a> The \"5 Minutes of JavaScript\" podcast is released every Thursday. <a href=\"http://five-js.envylabs.com\"> </a>",
                "publishedAt": 1389277002,
                "duration": 353
              }, {
                "uid": 35377186,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/008-5-minutes-of-javascript.mp3?1387547996",
                "explicit": false,
                "episodeTitle": "Episode #8 - December 19th, 2013",
                "episodeSummary": "<p> Free JavaScript resources, meet the Sails.js MVC framework, Daily JS developer Survey, What's coming up in Ember.js for 2014. <br></p> <p><a href=\"http://five-js.envylabs.com/episodes/8-episode-8-december-19th-2013\">Listen to this episode on 5 Minutes of JavaScript</a></p> <a href=\"https://www.codeschool.com/courses/warming-up-with-emberjs/\">Sponsored by Code School</a> <a href=\"https://www.codeschool.com/courses/warming-up-with-emberjs/\"> </a> <a href=\"http://jsbooks.revolunet.com\">A list of free JavaScript resources</a> The <a href=\"http://jsbooks.revolunet.com\">http://jsbooks.revolunet.com</a> website compiles list of free ebooks, articles and other websites to learn everything JavaScript. <a href=\"http://jsbooks.revolunet.com\"> </a> <a href=\"http://sailsjs.org\">Sails.js</a> Sails.js is a JavaScript MVC framework that makes it easy to build custom, enterprise­ grade Node.js apps <a href=\"http://sailsjs.org\"> </a> <a href=\"https://github.com/phusion/passenger/wiki/Phusion-Passenger%3A-Meteor-tutorial#wiki-why\">Phusion Passenger adds support to Meteor</a> The Phusion Passenger application server recently added support for Meteor applications. <a href=\"https://github.com/phusion/passenger/wiki/Phusion-Passenger%3A-Meteor-tutorial#wiki-why\"> </a> <a href=\"http://dailyjs.com/2013/12/12/javascript-survey-results/\">Daily JS JavaScript Developer Survey</a> Last week, DailyJS released their yearly JavaScript developer survey. <a href=\"http://dailyjs.com/2013/12/12/javascript-survey-results/\"> </a> <a href=\"http://emberjs.com/blog/2013/12/17/whats-coming-in-ember-in-2014.html\">What’s coming in Ember in 2014</a> The Ember.js core team met this past weekend to talk about the roadmap for 2014 and published their plans on the official blog. <a href=\"http://emberjs.com/blog/2013/12/17/whats-coming-in-ember-in-2014.html\"> </a> <a href=\"http://five-js.envylabs.com\">Thank You for Listening to Five Minutes of JavaScript</a> Thank you for listening to 5 Minute of JavaScript. Stay tuned every thursday for the latest news in the JavaScript community. <a href=\"http://five-js.envylabs.com\"> </a>",
                "publishedAt": 1387548020,
                "duration": 356
              }, {
                "uid": 35377187,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/007-5-minutes-of-javascript.mp3?1386859992",
                "explicit": false,
                "episodeTitle": "Episode #7 - December 12th, 2013",
                "episodeSummary": "Numeral.js helps working with numbers, a closer look at PayPal's Node.js benchmarks, Browserify hits 3.0, ScaleNPM results and notes from the Ember.js Core Team Meeting.",
                "publishedAt": 1386860409,
                "duration": 359
              }, {
                "uid": 35377188,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/006-5-minutes-of-javascript.mp3?1386254834",
                "explicit": false,
                "episodeTitle": "Episode #6 - December 5th, 2013",
                "episodeSummary": "Angular-Pickadate, Monocle.io is open-sourced, Wave simulations in WebGL, Choosing a JavaScript MVC Framework and RedditJS",
                "publishedAt": 1386255171,
                "duration": 346
              }, {
                "uid": 35377189,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/005-5-minutes-of-javascript.mp3?1386192947",
                "explicit": false,
                "episodeTitle": "Episode #5 - November 28th, 2013",
                "episodeSummary": "FastClick.js, ScaleNPM, You Don't Know JS and Node.js Stream Playground.",
                "publishedAt": 1386254736,
                "duration": 359
              }, {
                "uid": 35377190,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/004-5-minutes-of-javascript.mp3?1386254379",
                "explicit": false,
                "episodeTitle": "Episode #4 - November 15th, 2013",
                "episodeSummary": "Isomorphic JavaScript, Node.js at IBM, Ember Components and Node v0.10.22",
                "publishedAt": 1386254423,
                "duration": 337
              }, {
                "uid": 35377191,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/003-5-minutes-of-javascript.mp3?1385751788",
                "explicit": false,
                "episodeTitle": "Episode #3 - November 8th, 2013",
                "episodeSummary": "Contrasting Backbone and Angular, using Pedalboard.js to code guitar effects, automate with Grunt.js, Declarative vs. Imperative and Node.js at PayPal.",
                "publishedAt": 1385751869,
                "duration": 408
              }, {
                "uid": 35377192,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/002-5-minutes-of-javascript.mp3?1384613862",
                "explicit": false,
                "episodeTitle": "Episode #2- November 1st, 2013",
                "episodeSummary": "The Event Loop explained, Ember.js and URLs, KO v3.0, Animating DOM transitions, Framer.js, Charlie.js",
                "publishedAt": 1384614891,
                "duration": 397
              }, {
                "uid": 35377193,
                "mediaUrl": "http://media.five-js.envylabs.com/sites/0001/episodes/001-5-minutes-of-javascript.mp3?1384310833",
                "explicit": false,
                "episodeTitle": "Episode #1- October 25th, 2013",
                "episodeSummary": "Stripe adds support for Node.js, templating with Nunjucks, Node.js DoS fix, Firebase and Ember.js and SnapSVG",
                "publishedAt": 1384209772,
                "duration": 341
              }
            ]
          }, {
            "id": 32270,
            "homeUrl": "http://wired.com",
            "feedUrl": "http://downloads.wired.com/podcasts/xml/gamelifeaudio.xml",
            "authors": "WIRED",
            "subscriptionTitle": "WIRED's Game|Life Audio Podcast",
            "summary": "Wired Game|Life Audio: Wired's top videogame experts Chris Kohler and Peter Rubin comment on the state of videogaming, with reviews, previews, and game events.",
            "albumArt": "300x300_gamelifeaudio.jpg",
            "episodes": [
              {
                "uid": 36649764,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_103.mp3",
                "explicit": null,
                "episodeTitle": "103: Game|Life –– Sales, SXSW, and Shooter Games",
                "episodeSummary": "",
                "publishedAt": 1394820000,
                "duration": 2931
              }, {
                "uid": 36433426,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_102.mp3",
                "explicit": null,
                "episodeTitle": "102: Game|Life –– Dude, Can You Handle South Park's Authori-tah?",
                "episodeSummary": "",
                "publishedAt": 1394215200,
                "duration": 4458
              }, {
                "uid": 36213586,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_101.mp3",
                "explicit": null,
                "episodeTitle": "101: Game|Life –– Good Games Come In Threes",
                "episodeSummary": "",
                "publishedAt": 1393610400,
                "duration": 3654
              }, {
                "uid": 36048692,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_100.mp3",
                "explicit": null,
                "episodeTitle": "100: Game|Life –– An Extra Special 100th Mega-sode",
                "episodeSummary": "",
                "publishedAt": 1393005600,
                "duration": 3973
              }, {
                "uid": 35921444,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_099.mp3",
                "explicit": null,
                "episodeTitle": "99: Game|Life –– NES Remix 2, Flappy Bird, and More",
                "episodeSummary": "",
                "publishedAt": 1392400800,
                "duration": 3462
              }, {
                "uid": 35921438,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_098.mp3",
                "explicit": null,
                "episodeTitle": "98: Game|Life –– Minisode: Changing Game Structures and Demo Angst",
                "episodeSummary": "",
                "publishedAt": 1391796000,
                "duration": 1411
              }, {
                "uid": 35921422,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_097.mp3",
                "explicit": null,
                "episodeTitle": "97: Game|Life –– What's Next for Nintendo?",
                "episodeSummary": "",
                "publishedAt": 1391191200,
                "duration": 4494
              }, {
                "uid": 35921408,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_096.mp3",
                "explicit": null,
                "episodeTitle": "96: Game|Life –– Nintendo or Ninten-don't?",
                "episodeSummary": "",
                "publishedAt": 1390586400,
                "duration": 4207
              }, {
                "uid": 35921392,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_095.mp3",
                "explicit": null,
                "episodeTitle": "95: Game|Life –– Broken Age's Dual Story System: Does It Work?",
                "episodeSummary": "",
                "publishedAt": 1389981600,
                "duration": 3543
              }, {
                "uid": 35921378,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_094.mp3",
                "explicit": null,
                "episodeTitle": "94: Game|Life –– The State of Smartphone Games",
                "episodeSummary": "",
                "publishedAt": 1389376800,
                "duration": 4333
              }, {
                "uid": 35921366,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_093.mp3",
                "explicit": null,
                "episodeTitle": "93: Game|Life –– So Long, 2013!",
                "episodeSummary": "",
                "publishedAt": 1386961200,
                "duration": 2843
              }, {
                "uid": 35921351,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_092.mp3",
                "explicit": null,
                "episodeTitle": "92: Game|Life –– Can Wii Go On With U?",
                "episodeSummary": "",
                "publishedAt": 1386356400,
                "duration": 2793
              }, {
                "uid": 35921337,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_091.mp3",
                "explicit": null,
                "episodeTitle": "91: Game|Life –– The Mostly Magical Xbox One, And More",
                "episodeSummary": "",
                "publishedAt": 1385146800,
                "duration": 3767
              }, {
                "uid": 35921323,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_090.mp3",
                "explicit": null,
                "episodeTitle": "90: Game|Life –– The PS4 Arrives",
                "episodeSummary": "",
                "publishedAt": 1384549200,
                "duration": 2989
              }, {
                "uid": 35921308,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_089.mp3",
                "explicit": null,
                "episodeTitle": "89: Game|Life –– Hands On with Xbox One, PS4, Steam Machines, and Mario 3D World",
                "episodeSummary": "",
                "publishedAt": 1383937200,
                "duration": 2819
              }, {
                "uid": 35921295,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_088.mp3",
                "explicit": null,
                "episodeTitle": "88: Game|Life –– Next-Gen Console Angst and The Stanley Parable",
                "episodeSummary": "",
                "publishedAt": 1383332400,
                "duration": 3016
              }, {
                "uid": 35921284,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_087.mp3",
                "explicit": null,
                "episodeTitle": "87: Game|Life –– Return of the Podcast",
                "episodeSummary": "",
                "publishedAt": 1382727600,
                "duration": 2922
              }, {
                "uid": 35921274,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_086.mp3",
                "explicit": null,
                "episodeTitle": "86: Game|Life –– Minisode: Why There's No Podcast This Week",
                "episodeSummary": "",
                "publishedAt": 1382131800,
                "duration": 373
              }, {
                "uid": 35921266,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_085.mp3",
                "explicit": null,
                "episodeTitle": "85: Game|Life –– Grand Theft Auto V: The Latest and Greatest",
                "episodeSummary": "",
                "publishedAt": 1380308400,
                "duration": 2587
              }, {
                "uid": 35921257,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_084.mp3",
                "explicit": null,
                "episodeTitle": "84: Game|Life –– Mini-Episode",
                "episodeSummary": "",
                "publishedAt": 1379703600,
                "duration": 371
              }, {
                "uid": 35921246,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_083.mp3",
                "explicit": null,
                "episodeTitle": "83: Game|Life –– Meh to Microconsoles",
                "episodeSummary": "",
                "publishedAt": 1379098800,
                "duration": 3397
              }, {
                "uid": 35921235,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_082.mp3",
                "explicit": null,
                "episodeTitle": "82: Game|Life –– What We Learned at PAX",
                "episodeSummary": "",
                "publishedAt": 1378494000,
                "duration": 2993
              }, {
                "uid": 35921226,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_081.mp3",
                "explicit": null,
                "episodeTitle": "81: Game|Life –– PAX Preview and Nintendo 2DS Impressions",
                "episodeSummary": "",
                "publishedAt": 1377889200,
                "duration": 2945
              }, {
                "uid": 35921216,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_080.mp3",
                "explicit": null,
                "episodeTitle": "80: Game|Life –– Xbox One Anticipation and Gone Home",
                "episodeSummary": "",
                "publishedAt": 1377284400,
                "duration": 3013
              }, {
                "uid": 35921208,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_079.mp3",
                "explicit": null,
                "episodeTitle": "79: Game|Life –– Rise of the Oculus",
                "episodeSummary": "",
                "publishedAt": 1376074800,
                "duration": 3331
              }, {
                "uid": 35921198,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_078.mp3",
                "explicit": null,
                "episodeTitle": "78: Game|Life –– The Good, the Bad, and the Busty",
                "episodeSummary": "",
                "publishedAt": 1375470000,
                "duration": 2820
              }, {
                "uid": 35921188,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_077.mp3",
                "explicit": null,
                "episodeTitle": "77: Game|Life –– EarthBound and Eternal Darkness",
                "episodeSummary": "",
                "publishedAt": 1374865200,
                "duration": 2321
              }, {
                "uid": 35921180,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_076.mp3",
                "explicit": null,
                "episodeTitle": "76: Game|Life –– The Microsoft Shuffle",
                "episodeSummary": "",
                "publishedAt": 1373655600,
                "duration": 3122
              }, {
                "uid": 35921170,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_075.mp3",
                "explicit": null,
                "episodeTitle": "75: Game|Life –– The Post-E3 Show!",
                "episodeSummary": "",
                "publishedAt": 1371841200,
                "duration": 3616
              }, {
                "uid": 35921161,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_074.mp3",
                "explicit": null,
                "episodeTitle": "74: Game|Life –– Mini Pre E3 Update",
                "episodeSummary": "",
                "publishedAt": 1370631600,
                "duration": 757
              }, {
                "uid": 35921151,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_073.mp3",
                "explicit": null,
                "episodeTitle": "73: Game|Life –– A Slow Week",
                "episodeSummary": "",
                "publishedAt": 1370026800,
                "duration": 2495
              }, {
                "uid": 35921140,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_072.mp3",
                "explicit": null,
                "episodeTitle": "72: Game|Life –– XBox One Aftermath",
                "episodeSummary": "",
                "publishedAt": 1369411200,
                "duration": 3025
              }, {
                "uid": 35921128,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_071.mp3",
                "explicit": null,
                "episodeTitle": "71: Game|Life SPECIAL –– XBox Reveal",
                "episodeSummary": "",
                "publishedAt": 1369117800,
                "duration": 3837
              }, {
                "uid": 35921118,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_070.mp3",
                "explicit": null,
                "episodeTitle": "70: Game|Life –– Nintendo: Stop Hitting Yourself! No seriously, we're worried",
                "episodeSummary": "",
                "publishedAt": 1368806400,
                "duration": 2645
              }, {
                "uid": 35921104,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_069.mp3",
                "explicit": null,
                "episodeTitle": "69: Game|Life –– Why It's Ok For Big Guys To Kickstart",
                "episodeSummary": "",
                "publishedAt": 1368201600,
                "duration": 1957
              }, {
                "uid": 35921089,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_068.mp3",
                "explicit": null,
                "episodeTitle": "68: Game|Life –– Back from Japan! And the New X-Box",
                "episodeSummary": "",
                "publishedAt": 1367596800,
                "duration": 3773
              }, {
                "uid": 35921074,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_067.mp3",
                "explicit": null,
                "episodeTitle": "67: Game|Life –– EA Games, Microsoft, Batman, Megaman: The FPS",
                "episodeSummary": "",
                "publishedAt": 1365782400,
                "duration": 1292
              }, {
                "uid": 35921058,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_066.mp3",
                "explicit": null,
                "episodeTitle": "66: Game|Life –– LucasArts, Roger Ebert, Bioshock: Infinite –– Ultimate Ending Spoilers Edition",
                "episodeSummary": "",
                "publishedAt": 1365166800,
                "duration": 3642
              }, {
                "uid": 35921043,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_065.mp3",
                "explicit": null,
                "episodeTitle": "65: Game|Life –– Bioshock: Infinite –– Spoiler Free Edition",
                "episodeSummary": "",
                "publishedAt": 1364562000,
                "duration": 1938
              }, {
                "uid": 35921030,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_064.mp3",
                "explicit": null,
                "episodeTitle": "64: Game|Life –– PAX Is Here! Also The Walking Dead, and EA",
                "episodeSummary": "",
                "publishedAt": 1363973400,
                "duration": 2715
              }, {
                "uid": 35921018,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_063.mp3",
                "explicit": null,
                "episodeTitle": "63: Game|Life –– Torment, Lord British, and Sim City",
                "episodeSummary": "",
                "publishedAt": 1362747600,
                "duration": 2293
              }, {
                "uid": 35921003,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_062.mp3",
                "explicit": null,
                "episodeTitle": "62: Game|Life –– It's the PS4!",
                "episodeSummary": "",
                "publishedAt": 1362142800,
                "duration": 3290
              }, {
                "uid": 35920989,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_061.mp3",
                "explicit": null,
                "episodeTitle": "61: Game|Life –– Nintendo's Sorry State",
                "episodeSummary": "",
                "publishedAt": 1360933200,
                "duration": 1438
              }, {
                "uid": 35920974,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_060.mp3",
                "explicit": null,
                "episodeTitle": "60: Game|Life –– Bad News Week: Nintendo's Sorry Financials and More",
                "episodeSummary": "",
                "publishedAt": 1359723600,
                "duration": 3442
              }, {
                "uid": 35920959,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_059.mp3",
                "explicit": null,
                "episodeTitle": "59: Game|Life –– the Fall of THQ, the rise of Nintendo's Virtual Console, and What's A Vaporware Anyway?",
                "episodeSummary": "",
                "publishedAt": 1359118800,
                "duration": 2967
              }, {
                "uid": 35920944,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_058.mp3",
                "explicit": null,
                "episodeTitle": "58: Game|Life –– Disney Infinity (and beyond), video games and gun violence",
                "episodeSummary": "",
                "publishedAt": 1358514000,
                "duration": 2967
              }, {
                "uid": 35920929,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_057.mp3",
                "explicit": null,
                "episodeTitle": "57: Game|Life –– CES and the 2013 Console War",
                "episodeSummary": "",
                "publishedAt": 1357909200,
                "duration": 2419
              }, {
                "uid": 35920915,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_056.mp3",
                "explicit": null,
                "episodeTitle": "56: Game|Life –– Game of the Year Countdown!",
                "episodeSummary": "",
                "publishedAt": 1355490000,
                "duration": 2596
              }, {
                "uid": 35920902,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_055.mp3",
                "explicit": null,
                "episodeTitle": "55: Game|Life –– The MoMA Videogame Exhibit, Nintendo Direct, and Professor Layton vs. Ace Attorney",
                "episodeSummary": "",
                "publishedAt": 1354885200,
                "duration": 2463
              }, {
                "uid": 35920886,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_054.mp3",
                "explicit": null,
                "episodeTitle": "54: Game|Life –– David Ventura, iNiS, Destiny, and Cross-Generation Gaming",
                "episodeSummary": "",
                "publishedAt": 1354280400,
                "duration": 2742
              }, {
                "uid": 35920871,
                "mediaUrl": "http://downloads.wired.com/podcasts/assets/gamelifeaudio/gamelifereboot_053.mp3",
                "explicit": null,
                "episodeTitle": "53: Game|Life –– Hitman: Absolution, Nintendoland, and Call of Duty: Black Ops Declassified",
                "episodeSummary": "",
                "publishedAt": 1354272400,
                "duration": 2601
              }
            ]
          }, {
            "id": 19332,
            "homeUrl": "http://rubyrogues.com",
            "feedUrl": "http://rubyrogues.com/feed/",
            "authors": "Charles Max Wood, James Edward Gray II, David Brady, Avdi Grimm, Josh Susser, Katrina Owen",
            "subscriptionTitle": "Ruby Rogues",
            "summary": "Rubyist.where(:rogue => true).limit(6).all.talk(:about => Topics.where(:awesome => true))",
            "albumArt": "RubyRogues_iTunes.jpg",
            "episodes": [
              {
                "uid": 36567753,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR147APIs.mp3",
                "explicit": false,
                "episodeTitle": "147 RR APIs That Don’t Suck with Michele Titolo",
                "episodeSummary": "Panel Michele Titolo (twitter blog) David Brady (twitter github blog ADDcasts) James Edward Gray (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:20 – Michele Titolo CocoaPods CTO of Women Who Code 01:48 – CocoaPods NSBrief – #107: Michele Titolo 02:50 – Working With APIs Michele Titolo: […]",
                "publishedAt": 1394629241,
                "duration": 4605
              }, {
                "uid": 36567752,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR147APIs.mp3",
                "explicit": false,
                "episodeTitle": "147 RR APIs That Don’t Suck with Michele Titolo",
                "episodeSummary": "Panel Michele Titolo (twitter blog) David Brady (twitter github blog ADDcasts) James Edward Gray (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:20 – Michele Titolo CocoaPods CTO of Women Who Code 01:48 – CocoaPods NSBrief – #107: Michele Titolo 02:50 – Working With APIs Michele Titolo: […]",
                "publishedAt": 1394028012,
                "duration": 4605
              }, {
                "uid": 36347282,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR146RUM.mp3",
                "explicit": false,
                "episodeTitle": "146 RR Book Club – Ruby Under a Microscope with Pat Shaughnessy",
                "episodeSummary": "Panel Pat Shaughnessy (twitter github blog) James Edward Gray (twitter github blog) Josh Susser (twitter github blog) Avdi Grimm (twitter github blog book) Aaron Patterson (twitter github blog) Discussion 01:53 – Pat Shaughnessy Introduction 02:19 – Ruby Under a Microscope by Pat Shaughnessy 05:03 – How to Learn Code Experiments 11:14 – How Ruby is […]",
                "publishedAt": 1392213611,
                "duration": 4022
              }, {
                "uid": 36150156,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR145DataAnalytics.mp3",
                "explicit": false,
                "episodeTitle": "145 RR Data Analytics with Heather Rivers",
                "episodeSummary": "Panel Heather Rivers (twitter github blog) James Edward Gray (twitter github blog) Josh Susser (twitter github blog) Avdi Grimm (twitter github blog book) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:00 – RIP Jim Weirich 03:30 – Heather Rivers Introduction MODE Analytics 05:40 – Data Analytics The Lean Startup: […]",
                "publishedAt": 1391608827,
                "duration": 3525
              }, {
                "uid": 35976510,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR144Passion.mp3",
                "explicit": false,
                "episodeTitle": "144 RR Passion",
                "episodeSummary": "Panel Avdi Grimm (twitter github blog book) James Edward Gray (twitter github blog) Josh Susser (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:39 – Passion Avdi Grimm: The Moderately Enthusiastic Programmer Avdi Grimm: The Passion Gospel David Brady: Loyalty and Layoffs Ruby Rogues Episode #125: Loyalty […]",
                "publishedAt": 1391004009,
                "duration": 3953
              }, {
                "uid": 35837751,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR143Passenger.mp3",
                "explicit": false,
                "episodeTitle": "143 RR Passenger Enterprise with Tinco Andringa and Hongli Lai",
                "episodeSummary": "Panel Hongli Lai (twitter github blog) Tinco Andringa (github) James Edward Gray (twitter github blog) Avdi Grimm (twitter github blog book) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:35 – Hongli Lai and Tinco Andringa Introductions Phusion 02:29 – Phusion Passenger 04:29 – Rack 05:04 – Node.js, MeteorJS, Python […]",
                "publishedAt": 1390399235,
                "duration": 2674
              }, {
                "uid": 35690707,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR142DepressionMentalIllness.mp3",
                "explicit": false,
                "episodeTitle": "142 RR Depression and Mental Illness with Greg Baugues",
                "episodeSummary": "Panel Greg Baugues (twitter github blog) James Edward Gray (twitter github blog) Josh Susser (twitter github blog) Avdi Grimm (twitter github blog book) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:32 – Greg Baugues Introduction Twilio 03:33 – Greg Baugues: Devs and Depression 07:20 – Stigma James Edward Gray […]",
                "publishedAt": 1389787257,
                "duration": 4891
              }, {
                "uid": 35567717,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR141TeachingKids.mp3",
                "explicit": false,
                "episodeTitle": "141 RR Teaching Kids with Ron Evans",
                "episodeSummary": "Get your Ruby Rogues T-Shirt or hoodie!! Ladies’ sizes available as well! Panel Ron Evans (twitter github blog) David Brady (twitter github blog ADDcasts) James Edward Gray (twitter github blog) Josh Susser (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:24 – Ron Evans Introduction The Hybrid […]",
                "publishedAt": 1388498422,
                "duration": 6049
              }, {
                "uid": 35432978,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR140Heroku.mp3",
                "explicit": false,
                "episodeTitle": "140 RR Heroku with Richard Schneeman",
                "episodeSummary": "Get your Ruby Rogues T-Shirt or hoodie!! Ladies’ sizes available as well! Panel Richard Schneeman (twitter github blog) Josh Susser (twitter github blog) David Brady (twitter github blog ADDcasts) Avdi Grimm (twitter github blog book) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:51 – The Job Replacement Guide by […]",
                "publishedAt": 1389787257,
                "duration": 4348
              }, {
                "uid": 35339679,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR139Riak.mp3",
                "explicit": false,
                "episodeTitle": "139 RR Riak with Sean Cribbs and Bryce Kerley",
                "episodeSummary": "Panel Sean Cribbs (twitter github blog) Bryce Kerley (twitter github blog) Avdi Grimm (twitter github blog book) James Edward Gray (twitter github blog) David Brady (twitter github blog ADDcasts) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:32 – Job Replacement Guide by David Brady 03:28 – Sean Cribbs Introduction […]",
                "publishedAt": 1388498422,
                "duration": 4330
              }, {
                "uid": 35131048,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR138RubyRepTakeover.mp3",
                "explicit": false,
                "episodeTitle": "138 RR The RubyRep Holiday Takeover",
                "episodeSummary": "Panel Mandy Moore (twitter RubyRep DevReps) Discussion Happy Holidays and Happy New Year from the Ruby Rogues (and Mandy)!! Book Club Ruby Under a Microscope by Pat Shaughnessy! We will be interviewing Pat on February 27, 2014. The episode will air on March 6th, 2014. No Starch was kind enough to provide this coupon […]",
                "duration": 2250
              }, {
                "uid": 34965811,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR137FPOOP.mp3",
                "explicit": false,
                "episodeTitle": "137 RR Book Club – Functional Programming for the Object-Oriented Programmer with Brian Marick",
                "episodeSummary": "Panel Brian Marick (twitter github blog) Avdi Grimm (twitter github blog book) James Edward Gray (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:27 – Brian Marick Introduction Functional Programming for the Object-Oriented Programmer by Brian Marick 01:58 – The Making of FPOOP LISP Clojure Leanpub 05:00 […]",
                "publishedAt": 1387980049,
                "duration": 3510
              }, {
                "uid": 34868806,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR136ConsultingProductWork.mp3",
                "explicit": false,
                "episodeTitle": "136 RR Consulting vs Product Work Part 2 with Steven Proctor",
                "episodeSummary": "Panel Steven Proctor (twitter github blog) James Edward Gray (twitter github blog) Katrina Owen (twitter github blog) Josh Susser (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:37 – Steven Proctor Introduction Simplify 03:36 – Background 121 RR Consulting vs Product Work with Adam Keys 08:37 – […]",
                "publishedAt": 1387375242,
                "duration": 3110
              }, {
                "uid": 34657371,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR135HTTP20.mp3",
                "explicit": false,
                "episodeTitle": "135 RR HTTP 2.0 with Ilya Grigorik",
                "episodeSummary": "Panel Ilya Grigorik (twitter github blog) Josh Susser (twitter github blog) Avdi Grimm (twitter github blog book) James Edward Gray (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:49 – Ilya Grigorik Introduction Web Performance Engineer at Google 03:08 – HTTP 2.0 HTTP 0.9 Gopher HTTP 1.0 […]",
                "publishedAt": 1386770402,
                "duration": 4162
              }, {
                "uid": 34417643,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR134Sharktime.mp3",
                "explicit": false,
                "episodeTitle": "134 RR Sharktime with Lucas Dohmen",
                "episodeSummary": "Panel Lucas Dohmen (twitter github) Katrina Owen (twitter github blog) David Brady (twitter github blog ADDcasts) Avdi Grimm (twitter github blog book) Discussion 01:51 – Ruby Rogues T-Shirts! 02:22 – Lucas Dohmen Introduction Ruby Golf Contest Winner Lucas’ Ruby Golf Submission: Sharktime Lucas’ Ruby Golf Submission: To-Do List triAGENS 11:03 – ArangoDB arangodb 12:35 – […]",
                "publishedAt": 1386165649,
                "duration": 4715
              }, {
                "uid": 34047801,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR133Threads.mp3",
                "explicit": false,
                "episodeTitle": "133 RR Threading with Emily Stolfo",
                "episodeSummary": "Panel Emily Stolfo (twitter github) Avdi Grimm (twitter github blog book) James Edward Gray (twitter github blog) David Brady (twitter github blog ADDcasts) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:00 – Emily Stolfo Introduction MongoDB Columbia University 06:46 – Emily Stolfo: Thread Safety First José Valim: Concurrency in […]",
                "publishedAt": 1385560812,
                "duration": 4726
              }, {
                "uid": 33656509,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR132Secrets.mp3",
                "explicit": false,
                "episodeTitle": "132 RR Nothing to Hide with Steve Klabnik",
                "episodeSummary": "Panel Steve Klabnik (blog twitter github) James Edward Gray (twitter github blog) David Brady (twitter github blog ADDcasts) Josh Susser (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:48 – Steve Klabnik Introduction 021 RR REST Done Right with Steve Klabnik 02:52 – GoGaRuCo 2013 – No […]",
                "publishedAt": 1384956037,
                "duration": 5017
              }, {
                "uid": 33395976,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/131_Episode_131_How_to_Learn.mp3",
                "explicit": false,
                "episodeTitle": "131 RR How to Learn",
                "episodeSummary": "In this Rogues Only episode, the panel talks about talent vs effort, tips for starting to learn something new, and how to read programming books. Panel James Edward Gray (twitter github blog) Katrina Owen (twitter github blog) David Brady (twitter github blog ADDcasts) Avdi Grimm (twitter github blog book) Charles Max Wood (twitter github Teach […]",
                "publishedAt": 1384351201,
                "duration": 5916
              }, {
                "uid": 33100996,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR130DataViz.mp3",
                "explicit": false,
                "episodeTitle": "130 RR Data Visualization with Aja Hammerly",
                "episodeSummary": "Panel Aja Hammerly (twitter github blog) David Brady (twitter github blog ADDcasts) James Edward Gray (twitter github blog) Josh Susser (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:08 – Aja Hammerly Introduction 03:28 – Aja Hammerly, Seeing the Big Picture: Quick and Easy Data Visualization with […]",
                "publishedAt": 1383746413,
                "duration": 3720
              }, {
                "uid": 32817278,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR129SharpeningTools.mp3",
                "explicit": false,
                "episodeTitle": "129 RR Sharpening Tools with Ben Orenstein",
                "episodeSummary": "Panel Ben Orenstein (twitter github blog) James Edward Gray (twitter github blog) Josh Susser (twitter github blog) Avdi Grimm (twitter github blog book) Katrina Owen (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:29 – Ben Orenstein Introduction Giant Robots Smashing into other Giant Robots thoughtbot thoughtbot […]",
                "publishedAt": 1383138059,
                "duration": 3776
              }, {
                "uid": 32578155,
                "mediaUrl": "http://traffic.libsyn.com/rubyrogues/RR128ConfidentRuby.mp3",
                "explicit": false,
                "episodeTitle": "128 RR Book Club: Confident Ruby with Avdi Grimm",
                "episodeSummary": "Panel Avdi Grimm (twitter github blog book) Josh Susser (twitter github blog) David Brady (twitter github blog ADDcasts) Katrina Owen (twitter github blog) James Edward Gray (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 03:28 – The Point of Confident Ruby Confident Ruby by Avdi Grimm 05:57 […]",
                "publishedAt": 1382533231,
                "duration": 4592
              }
            ]
          }, {
            "id": 7094,
            "homeUrl": "http://nerdist.com",
            "feedUrl": "http://nerdist.libsyn.com/rss",
            "authors": "Chris Hardwick",
            "subscriptionTitle": "The Nerdist",
            "summary": "I am Chris Hardwick. I am on TV a lot and have a blog at nerdist.com. This podcast is basically just me talking about stuff and things with my two nerdy friends Jonah Ray and Matt Mira, and usually someone more famous than all of us. Occasionally we swear because that is fun. I hope you like it, but if you don't I'm sure you will not hesitate to unfurl your rage in the 'reviews' section because that's how the Internet works.",
            "albumArt": "nerdistlogo.jpg",
            "episodes": [
              {
                "uid": 36572545,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_491_-_Curtis_Armstrong.mp3",
                "explicit": true,
                "episodeTitle": "Curtis Armstrong",
                "episodeSummary": "<p>Nerd hero Curtis Armstrong hangs out with Chris and Jonah to talk about playing Booger in <em>Revenge of the Nerds</em>, his many other roles in <em>Risky Business</em>, <em>Better Off Dead</em>, and <em>Moonlighting</em>, being at the first <em>Star Trek</em> convention ever, and working on <em>King of the Nerds</em>!</p>",
                "publishedAt": 139482906,
                "duration": 4129
              }, {
                "uid": 36494070,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_490_-_William_Katt.mp3",
                "explicit": true,
                "episodeTitle": "William Katt",
                "episodeSummary": "<p>William Katt sits down with Chris to talk about his days on <em>The Greatest American Hero</em>, his role in the original <em>Carrie</em>, growing up in the San Fernando Valley back when nothing was there and his new comic book based movie <em>Sparks</em>!</p>",
                "publishedAt": 1394644434,
                "duration": 3411
              }, {
                "uid": 36419378,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_489_-_Neil_deGrasse_Tyson_Returns_Again.mp3",
                "explicit": true,
                "episodeTitle": "Neil deGrasse Tyson Returns Again",
                "episodeSummary": "<p>Its a three peat with astrophysicist <a href=\"http://www.youtube.com/playlist?list=PLl4T6p7km9dYau3451qvJXN4G9UYM1mTh\">Neil deGrasse Tyson</a>! They start off their conversation about how the universe works, then talk about science of bottomless pits, the importance of asking questions, and the new <em>Cosmos</em>!</p>",
                "publishedAt": 1394436600,
                "duration": 4245
              }, {
                "uid": 36378506,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_488_-_Crispin_Glover.mp3",
                "explicit": true,
                "episodeTitle": "Crispin Glover",
                "episodeSummary": "<p>It's a bonus episode with the amazing Crispin Glover! He talks about the commercialization and propaganda of movies, the controversial lawsuit over <em>Back to the Future</em>, how different the 80's would have been for him if he had the internet to release projects and tell his side of stories and his new film <em>The Bag Man</em>!</p>",
                "publishedAt": 1394182800,
                "duration": 4982
              }, {
                "uid": 36336656,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_487_-_Andy_Daly.mp3",
                "explicit": true,
                "episodeTitle": "Andy Daly",
                "episodeSummary": "<p>The hilarious Andy Daly hangs out with Chris and Jonah to talk about the differences of doing character work at clubs and alt rooms, how parents trick their kids into behaving and his new TV show <em>Review</em> on Comedy Central, Thursdays at 10pm!</p>",
                "publishedAt": 1394096400,
                "duration": 4166
              }, {
                "uid": 36294245,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_486_-_Jaimie_Alexander.mp3",
                "explicit": true,
                "episodeTitle": "Jaimie Alexander",
                "episodeSummary": "<p>The lovely Jaimie Alexander sits down with Chris to talk about her role as Sif in Thor, she explains how to use a knife to Chris, getting satisfaction of seeing their high school bullies living crappy lives and bringing Sif onto <em>Agents of S.H.I.E.L.D</em> on March 11th!</p>",
                "publishedAt": 1394010000,
                "duration": 4980
              }, {
                "uid": 36212020,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_485_-_Michelle_Monaghan.mp3",
                "explicit": true,
                "episodeTitle": "Michelle Monaghan",
                "episodeSummary": "<p>The lovely Michelle Monaghan hangs out with Chris and Matt to talk about growing up in a town of 700 people, making a show about open relationships and her love of college sports!</p>",
                "publishedAt": 1393891361,
                "duration": 2949
              }, {
                "uid": 36159437,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_484_-_Donald_Faison.mp3",
                "explicit": true,
                "episodeTitle": "Donald Faison",
                "episodeSummary": "<p>The hilarious Donald Faison comes on the podcast! He talks to Chris and Jonah about starting a family, his time on <em>Scrubs</em>, and their favorite shows currently on TV!</p>",
                "publishedAt": 1393617657,
                "duration": 4579
              }, {
                "uid": 36109671,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_483_-_St_Vincent.mp3",
                "explicit": true,
                "episodeTitle": "St. Vincent",
                "episodeSummary": "<p>Musician St. Vincent sits down with Chris and Jonah to talk about what compels people to become artists, what inspires her to write songs, and how they deal with disgusting microphones while on tour!</p>",
                "publishedAt": 1393453052,
                "duration": 4634
              }, {
                "uid": 36006972,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_482_-_Kit_Harington.mp3",
                "explicit": true,
                "episodeTitle": "Kit Harington",
                "episodeSummary": "<p>Jon Snow himself, Kit Harington, hangs out with Chris to talk about his beloved Manchester United, filming Game of Thrones in freezing Iceland while his co-workers film in sunny Croatia and his new film <em>Pompeii</em>!</p>",
                "publishedAt": 1393270874,
                "duration": 3961
              }, {
                "uid": 35981295,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_481_-_Abbi_Jacobson_and_Ilana_Glazer.mp3",
                "explicit": true,
                "episodeTitle": "Abbi Jacobson and Ilana Glazer",
                "episodeSummary": "<p>Abbi Jacobson and Ilana Glazer join Chris and Matt and special guest co-host Craig Rowin to talk about how they started working together, coming up with their tv show <em>Broad City</em> and Craig dishes on what its like to live with Matt!</p>",
                "publishedAt": 1392954981,
                "duration": 4442
              }, {
                "uid": 35961360,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_480_-_Jennette_McCurdy.mp3",
                "explicit": true,
                "episodeTitle": "Jennette McCurdy",
                "episodeSummary": "<p>Jennette McCurdy comes on the show to talk about her time as an accidental country music artist, what she wants to do after <em>Sam &amp; Cat</em>, and what movie inspired her to get into acting! Also, Matt talks about <em>Frasier</em> and Chris isnt good at parties.</p>",
                "publishedAt": 1392835591,
                "duration": 4710
              }, {
                "uid": 35880769,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_479_-_Live_at_SF_Sketchfest_2014.mp3",
                "explicit": false,
                "episodeTitle": "Live at SF Sketchfest 2014",
                "episodeSummary": "<p>The Nerdist returns to SF with special guest Tom Lenk (Buffy, Angel, Much Ado About Nothing)! Tom and Jonah bond over their love of Beaches, Matt talks about <em>Fraiser</em> and Chris tries to keep the podcast on track!</p>",
                "publishedAt": 1392745627,
                "duration": 5587
              }, {
                "uid": 35832270,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_478_-_Morgan_Murphy.mp3",
                "explicit": true,
                "episodeTitle": "Morgan Murphy",
                "episodeSummary": "<p>Morgan Murphy stops by the show! She and Chris go in deep about coming up in the LA comedy scene together, performing comedy in front of your idols and her new special, <em>Irish Goodbye</em>, available on Netflix!</p>",
                "publishedAt": 1392367514,
                "duration": 5159
              }, {
                "uid": 35795804,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_477_-_Topher_Grace.mp3",
                "explicit": true,
                "episodeTitle": "Topher Grace",
                "episodeSummary": "<p>Topher Grace is on the podcast! He sits down with Chris and Jonah to talk about his re-cut of <em>Star Wars</em>, being better at life in person than in social media, and his new website CerealPrize.com!</p>",
                "publishedAt": 1392195600,
                "duration": 4419
              }, {
                "uid": 35726105,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_476_-_Robert_Kirkman_Returns.mp3",
                "explicit": false,
                "episodeTitle": "Robert Kirkman Returns",
                "episodeSummary": "<p>Robert Kirkman returns to the podcast! He talks about reading comics on the toilet, The Walking Dead Escape obstacle course and what he has planned for the future of The Walking Dead, both comic and TV show!</p>",
                "publishedAt": 1392053059,
                "duration": 4714
              }, {
                "uid": 35684663,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_475_-_Joel_Kinnaman.mp3",
                "explicit": true,
                "episodeTitle": "Joel Kinnaman",
                "episodeSummary": "<p>The new Robocop Joel Kinnaman hangs out with Chris to talk about being in the Robocop suit for 14 hours a day, moving from Sweden to a small town in Texas and how action movies have changed over the years!</p>",
                "publishedAt": 1391763600,
                "duration": 4402
              }, {
                "uid": 35643543,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_474_-_BJ_Novak.mp3",
                "explicit": true,
                "episodeTitle": "B.J. Novak",
                "episodeSummary": "<p>B.J. Novak hangs about with the guys to reminisce about their days of doing open mics together, his time at the Harvard Lampoon and what inspired him to write a book of short stories!</p>",
                "publishedAt": 1391594400,
                "duration": 5529
              }, {
                "uid": 35593404,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_473_-_Broken_Bells.mp3",
                "explicit": true,
                "episodeTitle": "Broken Bells",
                "episodeSummary": "<p>The amazing duo James Mercer (The Shin) and Brian Burton (Danger Mouse) that make up Broken Bells invite Chris and Jonah to their studio to talk! They discuss their process for coming up with songs, Brian talks about how he started producing albums for other artists and their upcoming album <em>After the Disco</em>, out February 4th!</p>",
                "publishedAt": 1391418000,
                "duration": 4845
              }, {
                "uid": 35565236,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_472_-__Paul_Williams_Returns.mp3",
                "explicit": true,
                "episodeTitle": "Paul Williams Returns",
                "episodeSummary": "<p>The amazing Paul Williams returns to the podcast! He and Chris sit down at ASCAP to talk about his upcoming book about addiction called <em>Gratitude and Trust</em>, being the president of ASCAP and he sings a song just for Chris!</p>",
                "publishedAt": 1391158800,
                "duration": 4258
              }, {
                "uid": 35531041,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_471_-_Hostful.mp3",
                "explicit": true,
                "episodeTitle": "Work It Out",
                "episodeSummary": "<p>The guys sit down for another somewhat serious hostful. Chris and Jonah talk out some problems they have been having and Matt mediates!</p>",
                "publishedAt": 1390985079,
                "duration": 4564
              }, {
                "uid": 35469834,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_470_-_Christina_Ricci.mp3",
                "explicit": true,
                "episodeTitle": "Christina Ricci",
                "episodeSummary": "<p>Christina Ricci sits down with Chris to talk about how different it was being a child actor when she was young, being an unintentional meme generator, and the different challenges woman have to go through in the media!</p>",
                "publishedAt": 1390813200,
                "duration": 4829
              }, {
                "uid": 35448390,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_469_-_Jon_Daly.mp3",
                "explicit": true,
                "episodeTitle": "Jon Daly",
                "episodeSummary": "<p>The hilarious Jon Daly hangs out with Chris and Jonah to talk about his many different stand up and sketch characters, Sappity Tappity the rollerskating Christmas tree, and his new show on Amazon <em>Betas</em>!</p>",
                "publishedAt": 1390557600,
                "duration": 4212
              }, {
                "uid": 35407371,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_468_-_Aaron_Eckhart.mp3",
                "explicit": true,
                "episodeTitle": "Aaron Eckhart",
                "episodeSummary": "<p>Aaron Eckhart sits down with Chris to talk about the best way to start conversations with women, practicing for his roles in front of his dog and his new movie <em>I, Frankenstein</em>; out Friday January 24th!</p>",
                "publishedAt": 1390468447,
                "duration": 3731
              }, {
                "uid": 35364624,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_467_-_V_Cards.mp3",
                "explicit": true,
                "episodeTitle": "V Cards",
                "episodeSummary": "<p>The hostful goodness is continuing! The guys sit down to chat and end up talking about all things love. Their first loves, first heartbreaks and more!</p>",
                "publishedAt": 1390255076,
                "duration": 4298
              }, {
                "uid": 35338410,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_466__-_Neal_Brennan.mp3",
                "explicit": true,
                "episodeTitle": "Neal Brennan",
                "episodeSummary": "<p>Neal Brennan comes on The Nerdist to talk about his days on <em>Singled Out</em> with Chris, falling into the comedy scene and he tells the story of how he and Dave Chappelle ended up writing <em>Half Baked</em>!</p>",
                "publishedAt": 1389952800,
                "duration": 5651
              }, {
                "uid": 35319063,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_465_-_Richard_Madden.mp3",
                "explicit": true,
                "episodeTitle": "Richard Madden",
                "episodeSummary": "<p>The charming Richard Madden sits down with Chris! They talk about his new role on Discovery Channel's <em>Klondike</em>, being naked onstage, growing up in Scotland, and, of course, his character of Robb Stark on <em>Game of Thrones</em>!</p>",
                "publishedAt": 1389780000,
                "duration": 4038
              }, {
                "uid": 35272449,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_464_-_Nick_Kroll_3.mp3",
                "explicit": true,
                "episodeTitle": "Nick Kroll returns again!",
                "episodeSummary": "<p>Nick Kroll really just can't get enough of the podcast and returns for a third time! He, Chris and Jonah talk about how he prepared for the James Franco roast, being your own worst critic and his new season of <em>Kroll Show</em>!</p>",
                "publishedAt": 1389648337,
                "duration": 3558
              }, {
                "uid": 35236630,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_463_-_Hostful.mp3",
                "explicit": true,
                "episodeTitle": "Dance of the Jedi",
                "episodeSummary": "<p>The guys get together for some more hostful goodness! They talk about what they did over the holidays, Matt went to an autograph convention and Jonah is the happiest one in the group!</p>",
                "publishedAt": 1389344400,
                "duration": 3582
              }, {
                "uid": 35207261,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_462_-_Jim_Norton_1.mp3",
                "explicit": true,
                "episodeTitle": "Jim Norton",
                "episodeSummary": "<p>Comedian Jim Norton hangs out on the show to talk about being an \"offensive\" comedian and dealing with death threats, internet trolls, his theories on why people even get offended and he and Chris' mutual love of chess!</p>",
                "publishedAt": 1389175200,
                "duration": 4214
              }, {
                "uid": 35175959,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_461_-_Brody_Stevens.mp3",
                "explicit": true,
                "episodeTitle": "Brody Stevens",
                "episodeSummary": "<p>The eccentric and hilarious Brody Stevens sits down with Chris and Jonah to talk about his life since his mental breakdown, how his career has changed, Zach Galifianakis, working on <em>The Best Damn Sports Show Period</em>, <em>Chelsea Lately</em>, and <em>2midnight</em>, Donnie Wahlberg, Justin Bieber, pranks, stress, and his show <em>Brody Stevens: Enjoy It</em> on Comedy Central!</p>",
                "publishedAt": 1389050011,
                "duration": 5606
              }, {
                "uid": 35106764,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_460_-_hostful.mp3",
                "explicit": true,
                "episodeTitle": "Honestly 2013",
                "episodeSummary": "<p>It's some hostful goodness to send off 2013! Chris, Matt, Jonah and Chloe talk about the best and worst of their year, what they learned and what they have planned for the new year!</p>",
                "publishedAt": 1388863817,
                "duration": 6997
              }, {
                "uid": 35068006,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_459_-_Jerry_Stahl.mp3",
                "explicit": true,
                "episodeTitle": "Jerry Stahl",
                "episodeSummary": "<p>The very interesting and insightful Jerry Stahl stops by the show to talk about being addicted to heroin, using life experiences for creative works and what really makes a person positive or negative!</p> <p><a href=\"http://www.amazon.com/Happy-Mutant-Baby-Pills-Novel/dp/0061990507/ref=sr_1_1?ie=UTF8&amp;qid=1387616302&amp;sr=8-1&amp;keywords=happy+baby+mutant+pills\"><em></em></a></p>",
                "publishedAt": 1388396775,
                "duration": null
              }, {
                "uid": 34963889,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_458_-_Kathryn_Hahn.mp3",
                "explicit": true,
                "episodeTitle": "Kathryn Hahn",
                "episodeSummary": "<p>Kathryn Hahn sits down with Chris and Jonah to make up street names, where to find the best gumbo at Disneyland and her new movie <em>The Secret Life of Walter Mitty, </em>out in theaters today!</p>",
                "publishedAt": 1388142000,
                "duration": 4581
              }, {
                "uid": 34941726,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_457_-_Moby.mp3",
                "explicit": true,
                "episodeTitle": "Moby",
                "episodeSummary": "<p>Moby sits down with Chris and Jonah to talk about becoming sober, inter-genre overlap in the music industry and they get into a deep conversation about human cognition!</p>",
                "publishedAt": 1387962000,
                "duration": 4773
              }, {
                "uid": 34904154,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_456_-_Jon_Lovitz.mp3",
                "explicit": false,
                "episodeTitle": "Jon Lovitz",
                "episodeSummary": "<p>Jon Lovitz is on the show to talk about his first time working at the Groundlings, how his career path led him to SNL and the loss of his friend Phil Hartmann and how to deal with losing people who are close to you.</p>",
                "publishedAt": 1387791000,
                "duration": 5492
              }, {
                "uid": 34866207,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_455_-_Will_Forte.mp3",
                "explicit": true,
                "episodeTitle": "Will Forte",
                "episodeSummary": "<p>Will Forte joins Chris to bond over being UCLA alumni, his decision to leave SNL, the one character he never got to do and his new movie <em>Nebraska</em>, out in theaters now!</p>",
                "publishedAt": 1387528920,
                "duration": 4805
              }, {
                "uid": 34855947,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_454_-_Laina_Morris.mp3",
                "explicit": true,
                "episodeTitle": "Laina Morris",
                "episodeSummary": "<p>The Overly Attached Girlfriend, Laina Morris, hangs out on the podcast to talk about being from Texas, how she became the Overly Attached Girlfriend, and her plans for the future!</p>",
                "publishedAt": 1387357200,
                "duration": 5304
              }, {
                "uid": 34842056,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_453-_Taran_Killam.mp3",
                "explicit": true,
                "episodeTitle": "Taran Killam",
                "episodeSummary": "<p>The awesome Taran Killam comes on the podcast to reminisce about buying comic books as kids, auditioning for SNL and his new comic book <em>The Illegitimates</em>!</p>",
                "publishedAt": 1387298699,
                "duration": 4365
              }, {
                "uid": 34798578,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_452_-_Brendon_Small.mp3",
                "explicit": true,
                "episodeTitle": "Brendon Small",
                "episodeSummary": "<p>The hilarious and musically talented Brendon Small hangs out with the guys at Swinghouse Studios to talk and play guitar! They talk about Brendon's new album <em>Galaktikon</em>, metal operas and guitars!</p>",
                "publishedAt": 1387229055,
                "duration": 4441
              }, {
                "uid": 34677979,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_451_-_Jordan_Vogt-Roberts.mp3",
                "explicit": true,
                "episodeTitle": "Jordan Vogt-Roberts",
                "episodeSummary": "<p>Director Jordan Vogt-Roberts (<em>The Kings of Summer</em>) talks to Chris and Jonah about the challenges of being an indie movie director, his stand-up show <em>Mash Up</em> on Comedy Central, <em>Jonah's Arcade</em>, video games, the <em>Super Mario Bros.</em> movie, and walking around Sundance in a fur coat!</p>",
                "duration": 5252
              }, {
                "uid": 34631269,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_450_-_Dick_Costolo.mp3",
                "explicit": true,
                "episodeTitle": "Dick Costolo",
                "episodeSummary": "<p>Chris storms Twitter HQ (or \"Bird Palace\" as he calls it) for a super fun one-on-one with Dick Costolo: computer scientist, former improv comedian and current CEO of Twitter!</p>",
                "publishedAt": 1386968931,
                "duration": 4289
              }, {
                "uid": 34600366,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_449_-_Lindi_Ortega.mp3",
                "explicit": true,
                "episodeTitle": "Lindi Ortega",
                "episodeSummary": "<p>Chris sits down with the lovely Linda Ortega to talk about her most recent tour, her dream to be a tornado chaser and she plays a song just for the podcast!</p>",
                "publishedAt": 1386797268,
                "duration": 2467
              }, {
                "uid": 34500437,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_448_-_Hostful.mp3",
                "explicit": true,
                "episodeTitle": "Impromptu Hostful",
                "episodeSummary": "<p>Chris tricks Matt and Jonah into doing a hostful! Jonah talks about visiting one of his favorite record labels, Bruce Gutter joined Jonah during his stand up in San Francisco, and Chris and Matt talk about the writers room on <em>@midnight</em>!</p>",
                "publishedAt": 1386713084,
                "duration": 2747
              }, {
                "uid": 34437551,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_447_-_Christopher_Lloyd_1.mp3",
                "explicit": true,
                "episodeTitle": "Christopher Lloyd",
                "episodeSummary": "<p>The legendary Christopher Lloyd is on the Nerdist Podcast! He talks about his early roles in <em>One Flew Over the Cuckoo's Nest</em> and <em>Taxi</em>, fan reaction, meeting Orson Welles, his love of the theater and different roles he's played, and, of course, <em>Back to the Future</em>! Plus stories about Huey Lewis, Andy Kaufman, and lots more....</p>",
                "publishedAt": 1386565200,
                "duration": 4364
              }, {
                "uid": 34304206,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_446_-_Chris_Jericho_returns.mp3",
                "explicit": true,
                "episodeTitle": "Chris Jericho Returns",
                "episodeSummary": "<p>Chris Jericho returns to the podcast to talk about all his favorite tv shows, how he changed his persona in the wrestling world and he came up with the idea for his web series, <em>But Im Chris Jericho</em>!</p>",
                "publishedAt": 1386360657,
                "duration": 3997
              }, {
                "uid": 34142244,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_445_-_Thomas_Dolby.mp3",
                "explicit": true,
                "episodeTitle": "Thomas Dolby",
                "episodeSummary": "<p>The talented Thomas Dolby sits down with the guys to talk about his recent interactive music and film tour, the early days of creating music with synthesizers and his influence on cell phone ringtones!</p>",
                "publishedAt": 1386186692,
                "duration": 4291
              }, {
                "uid": 34001925,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_444_-_Anamanaguchi.mp3",
                "explicit": true,
                "episodeTitle": "Anamanaguchi",
                "episodeSummary": "<p>The band behind the Nerdist theme song are finally on the podcast! The guys of Anamanguchi hang out to discuss their party days in the NYC fashion scene, sending a pizza into space and they all create a generic 90s song!</p>",
                "publishedAt": 1385964600,
                "duration": 4505
              }, {
                "uid": 33951765,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_443_-_Chris_Hadfield.mp3",
                "explicit": true,
                "episodeTitle": "Chris Hadfield",
                "episodeSummary": "<p>Commander Chris Hadfield discusses all things space with Chris and Matt! He talks about living on the International Space Station for 6 months, how he started using social media to promote space programs, and making music videos in space!</p>",
                "publishedAt": 1385714277,
                "duration": 4023
              }, {
                "uid": 33755286,
                "mediaUrl": "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_442_-_Sasha_Grey.mp3",
                "explicit": true,
                "episodeTitle": "Sasha Grey",
                "episodeSummary": "<p>Sasha Grey sits down with Chris to talk about transitioning into an acting career, how being active in social media helped her career and her new book, The Juliette Society!</p> <p><a href=\"http://www.amazon.com/The-Juliette-Society-Sasha-Grey/dp/145559945X/ref=sr_1_1?ie=UTF8&amp;qid=1385087828&amp;sr=8-1&amp;keywords=juliette+society\"><em></em></a></p>",
                "publishedAt": 1385452860,
                "duration": 3597
              }
            ]
          }, {
            "id": 6403,
            "homeUrl": "http://freshair.npr.org",
            "feedUrl": "http://www.npr.org/rss/podcast.php?id=13",
            "authors": "NPR",
            "subscriptionTitle": "NPR Programs: Fresh Air Podcast",
            "summary": "Fresh Air from WHYY, the Peabody Award-winning weekday magazine of contemporary arts and issues, is one of public radio's most popular programs. Hosted by Terry Gross, the show features intimate conversations with today's biggest luminaries.",
            "albumArt": "fresh_air.png",
            "episodes": [
              {
                "uid": 36587666,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/289641190/npr_289641190.mp3",
                "explicit": false,
                "episodeTitle": "Box Set Illustrates Clifford Jordan's Impeccable Taste In Musicians",
                "episodeSummary": "Starting in the late 1960s, the jazz saxophonist produced a series of recordings that came out on the musicians-owned Strata-East label. Those seven albums are now collected in a box set.",
                "duration": 378,
                "publishedAt": 1394933602
              }, {
                "uid": 36587667,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/289641187/npr_289641187.mp3",
                "explicit": false,
                "episodeTitle": "A Poetry Reading: 'To My Oldest Friend, Whose Silence Is Like A Death'",
                "episodeSummary": "<em>Fresh Air</em>'s classical music critic Lloyd Schwartz recently published a poem about friendship and loss on Poets.org.",
                "duration": 243,
                "publishedAt": 1394847210
              }, {
                "uid": 36587668,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/289641184/npr_289641184.mp3",
                "explicit": false,
                "episodeTitle": "Wes Anderson: 'We Made A Pastiche' Of Eastern Europe's Greatest Hits",
                "episodeSummary": "<em>The Grand Budapest Hotel</em> takes place in the fictional European country of Zubrowka on the eve of war. Anderson shot much of the film in Germany, drawing inspiration from the surrounding landscape.",
                "duration": 2020,
                "publishedAt": 1394847200
              }, {
                "uid": 36560134,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/289231070/npr_289231070.mp3",
                "explicit": false,
                "episodeTitle": "Angel Olsen: A Voice Of Confounding Power",
                "episodeSummary": "Olsen has often been called a folk singer, but Ken Tucker says her new album — her first with a backing band — takes her music into an unclassifiable realm.",
                "duration": 437,
                "publishedAt": 1394760802
              }, {
                "uid": 36560136,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/289231035/npr_289231035.mp3",
                "explicit": false,
                "episodeTitle": "For Working Moms, Key To Balance May Lie In Elusive Leisure Time",
                "episodeSummary": "If waiting for help when your car breaks down doesn't strike you as a leisurely activity, it may be time to reconsider. A new book looks at time management challenges of being a working parent.",
                "duration": 2272,
                "publishedAt": 1394674414
              }, {
                "uid": 36531483,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/288806016/npr_288806016.mp3",
                "explicit": false,
                "episodeTitle": "'Blood Will Out' Reveals Secrets Of A Murderous Master Manipulator",
                "episodeSummary": "Author Walter Kirn thought he was befriending an eccentric Rockefeller, but his pal turned out to be an impostor wanted for murder. Kirn's new book explores the depths of that deception.",
                "duration": 2604,
                "publishedAt": 1394674410
              }, {
                "uid": 36452183,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/287919186/npr_287919186.mp3",
                "explicit": false,
                "episodeTitle": "Fresh Air Weekend: WWII Filmmakers, Kevin Young And Solitary Confinement",
                "episodeSummary": "A look at how the military and Hollywood teamed up during World War II; poet Kevin Young says his new book has a blues sensibility; and how California convicts organized a statewide hunger strike.",
                "duration": 2870,
                "publishedAt": 1394674402
              }, {
                "uid": 36440413,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/287484339/npr_287484339.mp3",
                "explicit": false,
                "episodeTitle": "'Grand Budapest Hotel': Kitsch, Cameos And A Gloriously Stylized Europe",
                "episodeSummary": "Wes Anderson's new feature takes place at a resort hotel, between World Wars I and II. <em>Fresh Air</em>'s critic says the visuals are so witty they transcend camp, but the dialogue isn't quite at that level.",
                "duration": 500,
                "publishedAt": 1394588019
              }, {
                "uid": 36440414,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/287484336/npr_287484336.mp3",
                "explicit": false,
                "episodeTitle": "Fresh Air Remembers Surgeon And 'How We Die' Author Sherwin Nuland",
                "episodeSummary": "Nuland's book won a National Book Award and impacted the national debate about end-of-life care. He died on Monday at 83. Nuland spoke to Fresh Air in 1994.",
                "duration": 769,
                "publishedAt": 1394588009
              }, {
                "uid": 36440415,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/287484333/npr_287484333.mp3",
                "explicit": false,
                "episodeTitle": "'Americanah' Author Explains 'Learning' To Be Black In The U.S.",
                "episodeSummary": "When Chimamanda Ngozi Adichie moved from Nigeria to the U.S., she was suddenly confronted with what it meant to be a person of color in America. Her novel explores race in contemporary America.",
                "duration": 1622,
                "publishedAt": 1394501601
              }, {
                "uid": 36418932,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/287032180/npr_287032180.mp3",
                "explicit": false,
                "episodeTitle": "Pharrell Williams: Just Exhilaratingly Happy",
                "episodeSummary": "To hear<em> G I R L</em>, you'd think Pharrell's world consisted of grooving on catchy beats and flirting with women. It's a lightweight image that draws gravitas from his prolific work ethic.",
                "duration": 422,
                "publishedAt": 1394332402
              }, {
                "uid": 36418933,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/287032174/npr_287032174.mp3",
                "explicit": false,
                "episodeTitle": "How 4 Inmates Launched A Statewide Hunger Strike From Solitary",
                "episodeSummary": "The California convicts overcame the extreme isolation of their imprisonment to organize a 30,000-prisoner-strong movement. Their goal? To end long-term incarceration in solitary confinement.",
                "duration": 2356,
                "publishedAt": 1394246020
              }, {
                "uid": 36370142,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/286494041/npr_286494041.mp3",
                "explicit": false,
                "episodeTitle": "'Schmuck' Revisits The Golden Age Of Radio, And A Bygone Manhattan",
                "episodeSummary": "Ross Klavan's novel follows two radio sidekicks in midcentury New York: golden-voiced straight man Ted Fox, who has an eye for a good-looking dame, and funnyman Jerry Elkin, a veteran of World War II.",
                "duration": 381,
                "publishedAt": 1394246014
              }, {
                "uid": 36370143,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/286493117/npr_286493117.mp3",
                "explicit": false,
                "episodeTitle": "The Case For Tammany Hall Being On The Right Side Of History",
                "episodeSummary": "In a new book, Terry Golway takes a sympathetic view of Manhattan's infamous political machine. He says, \"Tammany Hall was there for the poor immigrant who was otherwise friendless in New York.\"",
                "duration": 2363,
                "publishedAt": 1394246006
              }, {
                "uid": 36329701,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/285966275/npr_285966275.mp3",
                "explicit": false,
                "episodeTitle": "By The Time Your Car Goes Driverless, You Won't Know The Difference",
                "episodeSummary": "The once-futuristic concept is closer than ever to becoming a reality. Parallel parking? Let the car find the perfect approach. Squeezing into a tight space? Hop out and use your smartphone.",
                "duration": 426,
                "publishedAt": 1394159610
              }, {
                "uid": 36329702,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/285966257/npr_285966257.mp3",
                "explicit": false,
                "episodeTitle": "Fresh Air Remembers Literary Biographer Justin Kaplan",
                "episodeSummary": "Kaplan died Sunday at 88. His biography of Mark Twain won a National Book Award and a Pulitzer Prize. He also edited two editions of <em>Bartlett's Familiar Quotations</em>. Kaplan spoke to Fresh Air in 1992.",
                "duration": 458,
                "publishedAt": 1394159601
              }, {
                "uid": 36329703,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/285966231/npr_285966231.mp3",
                "explicit": false,
                "episodeTitle": "Kevin Young On Blues, Poetry And 'Laughing To Keep From Crying'",
                "episodeSummary": "The poet describes his new book — about the death of his father and the birth of his son — as having a blues sensibility. \"There are moments of humor even in the sorrow,\" he says.",
                "duration": 1831,
                "publishedAt": 1394073092
              }, {
                "uid": 36295920,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/285475592/npr_285475592.mp3",
                "explicit": false,
                "episodeTitle": "Chuck Mead: Gleefully Sinister Country Serenades",
                "episodeSummary": "Mead hooks the listener, eager to show us the bleak side of what seemed like a bright scenario. That's the way he operates during much of <em>Free State Serenade</em>.",
                "duration": 448,
                "publishedAt": 1394073083
              }, {
                "uid": 36295921,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/285475580/npr_285475580.mp3",
                "explicit": false,
                "episodeTitle": "During World War II, Even Filmmakers Reported For Duty",
                "episodeSummary": "A new book looks at how the military and Hollywood directors teamed up during the war. The films they made helped show Americans what was at stake, and served as evidence during the Nuremberg Trials.",
                "duration": 2278,
                "publishedAt": 1393986815
              }, {
                "uid": 36241418,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/284574846/npr_284574846.mp3",
                "explicit": false,
                "episodeTitle": "Fresh Air Weekend: The Cosmos, Harold Ramis, And Protecting Your Data Online",
                "episodeSummary": "Astrophysicist Neil deGrasse Tyson explains why the cosmos shouldn't make you feel small. Critic John Powers remembers Harold Ramis. And if you think you're anonymous online, think again.",
                "duration": 2867,
                "publishedAt": 1393986810
              }, {
                "uid": 36227146,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/284145869/npr_284145869.mp3",
                "explicit": false,
                "episodeTitle": "Liam Neeson's Action Chops Take Flight In 'Non-Stop'",
                "episodeSummary": "Neeson became a bankable action hero in 2008 after the thriller <em>Taken</em>. Now almost 62, he's still getting out of tight corners with his fists. His new film unfolds on a transatlantic flight.",
                "duration": 481,
                "publishedAt": 1393986803
              }, {
                "uid": 36227008,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/284145866/npr_284145866.mp3",
                "explicit": false,
                "episodeTitle": "A New 'Testament' Told From Mary's Point Of View",
                "episodeSummary": "In <em>The Testament of Mary,</em> Colm Toibin imagines Mary's life 20 years after her son's crucifixion, what she might have done to ease her son's suffering. (Originally broadcast on Nov. 28, 2012.)",
                "duration": 2374,
                "publishedAt": 1393900410
              }, {
                "uid": 36190858,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/283681604/npr_283681604.mp3",
                "explicit": false,
                "episodeTitle": "Remembering Harold Ramis, Master Of The 'Smart Dumb-Movie'",
                "episodeSummary": "Best known for<em> Animal House,</em> <em>Ghostbusters </em>and <em>Groundhog Day, </em>Ramis died Monday at 69. Critic John Powers says Ramis was like a favorite uncle who spices up the family reunion by spiking the punch.",
                "duration": 432,
                "publishedAt": 1393900401
              }, {
                "uid": 36190859,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/283681563/npr_283681563.mp3",
                "explicit": false,
                "episodeTitle": "Neil DeGrasse Tyson Explains Why The Cosmos Shouldn't Make You Feel Small",
                "episodeSummary": "The astrophysicist says that participating in a \"great unfolding of a cosmic story\" should make us feel large, not small. This spring, Tyson hosts a TV series called <em>Cosmos: A Space-Time Odyssey.</em>",
                "duration": 2314,
                "publishedAt": 1393727604
              }, {
                "uid": 36167076,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/283167577/npr_283167577.mp3",
                "explicit": false,
                "episodeTitle": "These Stories Consider Solitude, With Echoes Of Emily Dickinson",
                "episodeSummary": "It's been 15 years since acclaimed writer Lorrie Moore has brought out a new short story collection. <em>Bark</em> has some clunkers and some keepers, but critic Maureen Corrigan says it was worth the wait.",
                "duration": 319,
                "publishedAt": 1393641213
              }, {
                "uid": 36167077,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/283167572/npr_283167572.mp3",
                "explicit": false,
                "episodeTitle": "In Benghazi, U.S. Intelligence Wasn't Focused On 'Homegrown Militants'",
                "episodeSummary": "<em>New York Times</em> correspondent David Kirkpatrick spent months on the ground in Benghazi, Libya, trying to get to the bottom of the deadly Sept. 11, 2012 attack on the U.S. Consulate.",
                "duration": 2329,
                "publishedAt": 1393641203
              }, {
                "uid": 36141981,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/282683776/npr_282683776.mp3",
                "explicit": false,
                "episodeTitle": "Still 'Out To Lunch' 50 Years Later",
                "episodeSummary": "Eric Dolphy's creativity was exploding early in 1964, and he was finding more players who could keep up. <em>Out to Lunch</em> is free and focused, dissonant and catchy, wide open and swinging all at once.",
                "duration": 508,
                "publishedAt": 1393554816
              }, {
                "uid": 36141982,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/282683752/npr_282683752.mp3",
                "explicit": false,
                "episodeTitle": "Harold Ramis On Working At 'Playboy' And Writing 'Animal House'",
                "episodeSummary": "The comedy actor, writer and director had co-written and planned to star in the long-awaited <em>Ghostbusters III — </em>but did not get the chance. He died Monday in Chicago at age 69.",
                "duration": 621,
                "publishedAt": 1393554802
              }, {
                "uid": 36141983,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/282683749/npr_282683749.mp3",
                "explicit": false,
                "episodeTitle": "During World War I, Germany Unleashed 'Terrorist Cell In America'",
                "episodeSummary": "In <em>Dark Invasion</em>, Howard Blum explores the campaign of sabotage that Germany inflicted on an unsuspecting U.S. As ships and factories blew up, \"no one really suspected a spy network,\" he says.",
                "duration": 1632,
                "publishedAt": 1393468561
              }, {
                "uid": 36118967,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/282215980/npr_282215980.mp3",
                "explicit": false,
                "episodeTitle": "Vertical Scratchers: Slashed Chords, Fractured Poetry",
                "episodeSummary": "<em>Daughter of Everything</em> is a superb pop album with one foot in the past and another in the future.",
                "duration": 451,
                "publishedAt": 1393468552
              }, {
                "uid": 36118968,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/282215959/npr_282215959.mp3",
                "explicit": false,
                "episodeTitle": "If You Think You're Anonymous Online, Think Again",
                "episodeSummary": "In <em>Dragnet Nation,</em> Julia Angwin describes an oppressive blanket of electronic data surveillance.<em> </em>\"There's a price you pay for living in the modern world,\" she says. \"You have to share your data.\"",
                "duration": 2294,
                "publishedAt": 1393382021
              }, {
                "uid": 36073075,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/281351664/npr_281351664.mp3",
                "explicit": false,
                "episodeTitle": "Fresh Air Weekend: David O. Russell, 'Last Of The Unjust,' And 'Sonic Wonders'",
                "episodeSummary": "At last, Russell is making the films \"he was meant to make.\" For a rabbi who worked with the Nazis, is judgment \"unjust\"? And we follow one man's quest to find the \"sonic wonders of the world.\"",
                "duration": 2874,
                "publishedAt": 1393382015
              }, {
                "uid": 36057550,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/280927608/npr_280927608.mp3",
                "explicit": false,
                "episodeTitle": "'Wind Rises' Is Exquisite, And Likely To Be Hayao Miyazaki's Last",
                "episodeSummary": "The new film from the acclaimed Japanese animator spans 30 years and centers on a young man who dreams of designing the perfect airplane in the early 1930s. <em>(Recommended)</em>",
                "duration": 421,
                "publishedAt": 1393382007
              }, {
                "uid": 36057551,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/280927605/npr_280927605.mp3",
                "explicit": false,
                "episodeTitle": "Matthew McConaughey, Getting Serious Again",
                "episodeSummary": "The leading man known for his good looks and charm has lately been taking on more serious roles in films such as <em>Bernie, Magic Mike</em> and <em>Mud.</em> We'll listen back to excerpts from an April 2013 interview.",
                "duration": 1246,
                "publishedAt": 1393295609
              }, {
                "uid": 36057552,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/280927602/npr_280927602.mp3",
                "explicit": false,
                "episodeTitle": "Director Alexander Payne On Mining Every Film For Comic Potential",
                "episodeSummary": "Payne says he first read <em>Nebraska</em> — about a man who is showing signs of dementia — as a comedy. We'll listen back to an interview with Payne originally broadcast on Dec. 2, 2013.",
                "duration": 1405,
                "publishedAt": 1393295600
              }, {
                "uid": 36002892,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/280434363/npr_280434363.mp3",
                "explicit": false,
                "episodeTitle": "At Last, David O. Russell Is Making The Films He Was Meant To Make",
                "episodeSummary": "David O. Russell, director of <em>American Hustle</em> and <em>Silver Linings Playbook,</em> first spoke with Terry Gross back in 1994. On Thursday, he tells her that after 20 years, he's finally met his aspirations.",
                "duration": 2686,
                "publishedAt": 1393122803
              }, {
                "uid": 35986417,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/279869403/npr_279869403.mp3",
                "explicit": false,
                "episodeTitle": "For A Rabbi Who Worked With The Nazis, Is Judgment 'Unjust'?",
                "episodeSummary": "Claude Lanzmann's documentary profiles a Viennese rabbi put to work in a Czech concentration camp. Although Benjamin Murmelstein was himself not a free man, he was despised by fellow Jewish prisoners.",
                "duration": 412,
                "publishedAt": 1393036526
              }, {
                "uid": 35986418,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/279869146/npr_279869146.mp3",
                "explicit": false,
                "episodeTitle": "One Man's Quest To Find The 'Sonic Wonders Of The World'",
                "episodeSummary": "Acoustic engineer Trevor Cox has traveled around the globe to hear whispering arches and singing sand dunes. Closer to home, he can also explain why your singing sounds better in the shower.",
                "duration": 2275,
                "publishedAt": 1393036520
              }, {
                "uid": 35970600,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/279326924/npr_279326924.mp3",
                "explicit": false,
                "episodeTitle": "With Humor And A Nod To History, Fallon Takes Over 'The Tonight Show'",
                "episodeSummary": "On Monday night, Jimmy Fallon paid homage to 60 years of <em>Tonight Show </em>history while claiming his own place in line. \"I just want to do the best I can and take care of the show for a while,\" he said. \"If you guys let me stick around long enough maybe I'll get the hang of it.\"",
                "duration": 484,
                "publishedAt": 1393036513
              }, {
                "uid": 35970601,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/279326921/npr_279326921.mp3",
                "explicit": false,
                "episodeTitle": "Teens Rehearse For Adulthood In Wolitzer's 'Interestings'",
                "episodeSummary": "Meg Wolitzer's novel is about lifelong friendship tinged with jealousy. It begins at a summer camp in 1974 and follows a group of friends through middle age. Wolitzer says her teen years were a rehearsal for her adult life and that today she is \"different\" but \"in the same shell.\"",
                "duration": 2237,
                "publishedAt": 1392950000
              }, {
                "uid": 35962796,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/279183907/npr_279183907.mp3",
                "explicit": false,
                "episodeTitle": "In 'Whole Gritty City,' Marching Bands Vie For Coveted Mardi Gras Spots",
                "episodeSummary": "\"New Orleans buries too many of its young,\" Wynton Marsalis says in the documentary's introduction.<em> The Whole Gritty City,</em> airing Saturday on CBS, follows young students who take refuge in New Orleans marching bands.",
                "duration": 527,
                "publishedAt": 1392863948
              }, {
                "uid": 35962797,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/279182562/npr_279182562.mp3",
                "explicit": false,
                "episodeTitle": "A Closer Look At How Corporations Influence Congress",
                "episodeSummary": "Eric Lipton, an investigative reporter for <em>The New York Times</em>, has been writing about how corporations work in opaque ways to shape debates. He also explains the revolving door between Congress and lobby groups, and how non-profit think tanks aren't always what they seem.",
                "duration": 2289,
                "publishedAt": 1392863939
              }, {
                "uid": 35950125,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/278771929/npr_278771929.mp3",
                "explicit": false,
                "episodeTitle": "Don't Know What To Do With Your Life? Neither Did Thoreau",
                "episodeSummary": "A new biography reveals that young Thoreau took quite a few detours on his path to <em>Walden</em>. A gossipy young man who loved eating popcorn, ice skating and listening to his music box, schoolmates and neighbors found him standoffish and regarded his fascination with plants and Indian relics as downright odd.",
                "duration": 362,
                "publishedAt": 1392777210
              }, {
                "uid": 35950126,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/278771888/npr_278771888.mp3",
                "explicit": false,
                "episodeTitle": "In 'Passage,' Caro Mines LBJ's Changing Political Roles",
                "episodeSummary": "The fourth volume in Robert Caro's monumental biography of Lyndon Johnson is <em>The Passage of Power;</em> it explores the period between 1958 and 1964 during which Johnson went from powerful Senate majority leader to powerless vice president to — suddenly — president of the United States. <em>Originally broadcast on May 13, 2013.</em>",
                "duration": 2236,
                "publishedAt": 1392777201
              }, {
                "uid": 35908898,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/277649474/npr_277649474.mp3",
                "explicit": false,
                "episodeTitle": "Fresh Air Weekend: 'Extreme Medicine,' Lake Street Dive, 'When We Get Home'",
                "episodeSummary": "Dr. Kevin Fong practices \"extreme medicine\" from deep sea to outer space. Lake Street Dive comes out with a new album called <em>Bad Self Portraits. </em>And a military couple describes their long recovery in <em>Plenty of Time When We Get Home.</em>",
                "duration": 2848,
                "publishedAt": 1392747586
              }, {
                "uid": 35893564,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/277118708/npr_277118708.mp3",
                "explicit": false,
                "episodeTitle": "At 77, Robert Redford Goes Back To His Roots",
                "episodeSummary": "Redford says filming <em>All Is Lost</em> was a \"pure cinematic experience — the way films used to be.\" He talks with <em>Fresh Air</em>'s Terry Gross about how it's been \"sort of weird\" being known for his good looks, and about how he nearly wasn't cast in <em>Butch Cassidy and the Sundance Kid</em>. (<em>Originally broadcast on Dec. 12, 2013.)</em>",
                "duration": 2661,
                "publishedAt": 1392747578
              }, {
                "uid": 35875547,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/276620087/npr_276620087.mp3",
                "explicit": false,
                "episodeTitle": "In 'Whole Gritty City,' Marching Bands Vie For Coveted Mardi Gras Spots",
                "episodeSummary": "\"New Orleans buries too many of its young,\" Wynton Marsalis says in the documentary's introduction.<em> The Whole Gritty City,</em> airing Saturday on CBS, follows young students who take refuge in New Orleans marching bands.",
                "duration": 527,
                "publishedAt": 1392690812
              }, {
                "uid": 35875548,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/276620084/npr_276620084.mp3",
                "explicit": false,
                "episodeTitle": "A Closer Look At How Corporations Influence Congress",
                "episodeSummary": "Eric Lipton, an investigative reporter for <em>The New York Times</em>, has been writing about how corporations work in opaque ways to shape debates. He also explains the revolving door between Congress and lobby groups, and how non-profit think tanks aren't always what they seem.",
                "duration": 2289,
                "publishedAt": 1392690803
              }, {
                "uid": 35829278,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/275589615/npr_275589615.mp3",
                "explicit": false,
                "episodeTitle": "In Session: Frank Wess' 'Magic 201' Offers One Last Lesson",
                "episodeSummary": "There's something tender and specific about the ways elders like Frank Wess shaped their notes.",
                "duration": 407,
                "publishedAt": 1392518002
              }, {
                "uid": 35829279,
                "mediaUrl": "http://podcastdownload.npr.org/anon.npr-podcasts/podcast/13/275589610/npr_275589610.mp3",
                "explicit": false,
                "episodeTitle": "Practicing 'Extreme Medicine,' From Deep Sea To Outer Space",
                "episodeSummary": "In his new book, Dr. Kevin Fong explores how humans survive extremes of heat, cold, outer space and deep sea. \"We're still exploring the human body and what medicine can do in the same way that the great explorers of the 20th century and every age before them explored the world,\" he says.",
                "duration": 2306,
                "publishedAt": 1392431605
              }
            ],
            "id": 2027,
            "homeUrl": "http://ruby5.envylabs.com/",
            "feedUrl": "http://feeds.feedburner.com/ruby5",
            "authors": "Envy Labs",
            "subscriptionTitle": "Ruby5",
            "episodeSummary": "Ruby5 is a twice-weekly podcast covering all of your Ruby and Ruby on Rails news in just 5 minutes.  In each episode we talk about new gems, plugins, and frameworks, as well as other items of interest and community events.  It\\'s great for everyday Ruby developers and Ruby hobbyists, alike.  Got 5 minutes?  Just give it a try...",
            "albumArt": "ruby5-itunes-logo.png",
            "episodes": [
              {
                "uid": 36539287,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/xFohTQGKgjw/447-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #447 – March 11th, 2014",
                "episodeSummary": "<p> Google's Summer of Code, Test-Driven Rails Part 2, putting the Can in CanCan, building your first Ruby gem, and a Ruby Heroes reminder. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/483-episode-447-march-11th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_445&amp;utm_campaign=sponsor_page\">Sponsored by Top Ruby Jobs</a> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_445&amp;utm_campaign=sponsor_page\"> </a> <a href=\"http://weblog.rubyonrails.org/2014/3/7/google-summer-of-code-2014/\">Google Summer of Code: Rails</a> Rails has been accepted into the Google Summer of Code 2014. The rules state that you have to be at least 18 years old to participate before April 21st, 2014, that you have to be a full or part-time student, and that you have to be passionate about improving Rails. If you’re accepted, you’ll actually be paid $5500 over the course of 3 months to complete your proposed project to improve Rails. <a href=\"http://weblog.rubyonrails.org/2014/3/7/google-summer-of-code-2014/\"> </a> <a href=\"http://karolgalanciak.com/blog/2014/03/03/test-driven-rails-part-2/\">Test-Driven Rails Part 2</a> We recently announced part 1 of a blog series by Karol Galanciak called Test-Driven Rails. Part 2 is a continuation of that, describing a popular use case for writing tests: implementing a user registration system. The focus is on writing acceptance tests using Capybara, or in other words making sure the feature works from the user’s perspective. This post is a great illustration of making decisions in your application with test-driven and behavior-driven development. <a href=\"http://karolgalanciak.com/blog/2014/03/03/test-driven-rails-part-2/\"> </a> <a href=\"https://mojolingo.com/blog/2014/putting-the-can-in-cancan/\">Putting the Can in CanCan</a> When you need an authorization solution for a Rails app, you might think of CanCan by Ryan Bates. Since Ryan has been taking a break recently, Bryan Rite from MojoLingo forked the gem into a new one called CanCanCan. The gem doesn’t change the CanCan namespace at all so it’s a drop-in replacement except for the Gemfile change. Version 1.7.0 was released recently with strong_parameters support, multiple abilities with associations, and a bunch of overdue bug fixes. <a href=\"https://mojolingo.com/blog/2014/putting-the-can-in-cancan/\"> </a> <a href=\"http://quickleft.com/blog/step-by-step-guide-to-building-your-first-ruby-gem\">Building Your First Ruby Gem</a> Building your first Ruby gem may seem like a daunting task, but it's actually not so bad. Matt Huggins has written a step-by-step guide to building your first Ruby gem. There’s even a video tutorial and source code for his examples. If you’re interested in learning how to write a gem, this is the blog post for you. <a href=\"http://quickleft.com/blog/step-by-step-guide-to-building-your-first-ruby-gem\"> </a> <a href=\"http://rubyheroes.com\">Another Ruby Heroes Reminder</a> Ruby Heroes are being awarded at Rails Conf, which is taking place April 22nd through the 25th. So, now is the time to nominate your unsung heroes who are busy producing educational content, developing plugins and gems, contributing to open-source projects, or putting on events to help developers learn and grow. <a href=\"http://rubyheroes.com\"> </a> <a href=\"http://ruby5.envylabs.com\">Thank You for Listening to Ruby5</a> <p>Ruby5 is released Tuesday and Friday mornings. To stay informed about and active with this podcast, we encourage you to do one of the following:</p> Follow <a href=\"http://twitter.com/envylabs\">Envy Labs</a> on Twitter Or, subscribe with <a href=\"http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=327234205\">iTunes</a> or <a href=\"http://feeds.feedburner.com/Ruby5\">RSS</a> <a href=\"http://ruby5.envylabs.com\"> </a>",
                "duration": 296,
                "publishedAt": 1394811169
              }, {
                "uid": 36426782,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/AbgHm7hTI34/446-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #446 - March 7th, 2014",
                "episodeSummary": "<p> Running your own CI with Drone and Docker, building web-based RubyMotion apps with Under OS, funding for the Hello Ruby book, rubygems.org operating costs, Rails 4 assets on Heroku, and turning your text on its head with flippit all in this episode of the Ruby5. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/482-episode-446-march-7th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\">This episode is sponsored by New Relic</a> New Relic is _the_ all-in-one web performance analytics product. It lets you manage and monitor web application performance, from the browser down to the line of code. With Real User Monitoring, New Relic users can see browser response times by geographical location of the user, or by browser type. <a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\"> </a> <a href=\"http://jipiboily.com/2014/from-zero-to-fully-working-ci-server-in-less-than-10-minutes-with-drone-docker\">Drone &amp; Docker</a> Hate Jenkins but want to run your own CI server? This blog post from Jean-Philippe Boily will walk you through setting one up with Drone and Docker! <a href=\"http://jipiboily.com/2014/from-zero-to-fully-working-ci-server-in-less-than-10-minutes-with-drone-docker\"> </a> <a href=\"http://under-os.com/\">Under OS</a> Building html based applications for iOS has never been easier thanks to this new platform built on top of RubyMotion. <a href=\"http://under-os.com/\"> </a> <a href=\"https://www.kickstarter.com/projects/lindaliukas/hello-ruby\">Hello Ruby Book Funded</a> The Hello Ruby book project was successfully funded on February 22. <a href=\"https://www.kickstarter.com/projects/lindaliukas/hello-ruby\"> </a> <a href=\"https://news.ycombinator.com/item?id=7344503\">RubyGems.org Costs</a> Ever wonder how much it costs to run rubygems.org? <a href=\"https://news.ycombinator.com/item?id=7344503\"> </a> <a href=\"https://devcenter.heroku.com/articles/rails-4-asset-pipeline\">Rails 4 Assets on Heroku</a> This article contains information needed to run the asset pipeline in Rails version 4 and above on Heroku. <a href=\"https://devcenter.heroku.com/articles/rails-4-asset-pipeline\"> </a> <a href=\"http://www.flippit.us/\">Flippit</a> Tired of all your text being rightside-up? The flippit service and gem from Rocketeer Jonathan Jackson makes it easier than ever to turn your world upside down! <a href=\"http://www.flippit.us/\"> </a>",
                "duration": 315,
                "publishedAt": 1394550869
              }, {
                "uid": 36315881,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/7wIYGrJcI28/445-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #445 – March 4th, 2014",
                "episodeSummary": "<p> It's pattern-mania this week with: interactors, adapters and components-based architectures. Omniref allows us to take a step back to look at dependencies between popular Ruby libraries and we learn about RubyMotion gotchas for Rails developers. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/481-episode-445-march-4th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_445&amp;utm_campaign=sponsor_page\">Sponsored by Top Ruby Jobs</a> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_445&amp;utm_campaign=sponsor_page\"> </a> <a href=\"http://eng.joingrouper.com/blog/2014/03/03/rails-the-missing-parts-interactors\">Interactors</a> Yesterday, the team over at Grouper released the first part of a blog series they call Rails, the Missing Parts. In part one, they talk about using Interactors in your Rails application to detangle your ActiveRecord objects and business rules from your controllers. They have the benefit of encapsulating your business rules and model interactions in one, more easily testable place. And, they have the side benefit of allowing you compose new service objects with others to make more intricate interactions. I think it’s interesting to mention that David Heinemeier Hansson jumped into the Hacker News discussion to point out that this is a good practice, only when it needs to be done. It’s overkill to do it always, but if you’ve got a sign up form or something that manages multiple models, then maybe it makes sense. <a href=\"http://eng.joingrouper.com/blog/2014/03/03/rails-the-missing-parts-interactors\"> </a> <a href=\"http://www.youtube.com/watch?v=-54SDanDC00\">Component-based Architecture in Ruby and Rails</a> Speaking of Interactors or Service classes, there is a talk from Stephan Hagemann at MountainWest RubyConf 2013 that is a great overview on component-based architectures in Ruby and Rails. He shows with simple examples how you can extract self-contained business logic into modules, gems, engines, etc. He doesn’t actually use these as external gems. His central point seems to be that it’s easier to think about modules — even if you don’t fully extract them — when they have their own namespace. I tend to agree with him: clear naming tends to make it easier to see the edges of a class’s responsibility. As he demonstrates, the fact that a Rails app originally defines no namespaces sort of encourages a hodge podge mentality where responsibilities are mixed and it’s not clear what’s in charge of what exactly. Stephan shows how to create the gem structure without the need to run gem build or actually publish the gem itself. Instead it all stays within the Rails app despite. So he gets the benefits of a distinct interface and he can add the gem to the Gemfile using a local path. Ditto for mountable Rails engines. <a href=\"http://www.youtube.com/watch?v=-54SDanDC00\"> </a> <a href=\"http://blog.thefrontiergroup.com.au/2014/02/reflecting-on-rubymotion-experiences-p1/\">Reflecting on RubyMotion Experiences</a> Last week, Jordan Maguire put together an article on his experiences using RubyMotion where he reflected on The Frontier Group’s 3000 or so collective hours of using it. It’s one part in what may become a series on how to work with RubyMotion from the perspective of a Ruby on Rails developer. In this article, he touches on quite a lot, but I appreciated the “don’t think of controllers in Rails when you’re working with controllers in Cocoa Touch,” “state and persistence are drastically different in a client application,” and most amusingly, the observation that “Obj-C looks like the syntax was derived at random from a bag of broken glass, barbed wire, and salt.”. Even though you’re working in Ruby at the end of the day you’re building Objective-C applications. As such, you should know Objective-C at least enough to be able to convert Objective-C code to RubyMotion. <a href=\"http://blog.thefrontiergroup.com.au/2014/02/reflecting-on-rubymotion-experiences-p1/\"> </a> <a href=\"http://monkeyandcrow.com/blog/reading_rails_the_adapter_pattern/\">Reading Rails: The Adapter Pattern</a> Last week Adam Sanderson wrote up a blog post about how adapters are used for the MultiJSON gem, ActiveRecord and even the DateTime and Time classes. Quite a few people will find inspiration looking at ActiveRecord’s AbstractAdapter. It contains the basic database functionality while the MysqlAdapter for instance inherits from it and includes more stuff specific to MySQL databases, and the chain goes on all the way down to PostgreSQL. These patterns are very handy when building an adapter for external APIs for instance. Not to mention give you the ability to make a testing adapter that makes no network calls. Sounds like a fun read. The last example in the post is the way Rails (through ActiveSupport) basically patches DateTime to play nice with the Time class by adding a consistent #to_i method to it. As with any foray into Rails source code, you’re likely to pick up some nifty trick or discover some impressive hacks along the way. <a href=\"http://monkeyandcrow.com/blog/reading_rails_the_adapter_pattern/\"> </a> <a href=\"http://www.omniref.com/blog/blog/2014/02/18/whats-relevant-in-the-ruby-universe/\">What's Relevant in the Ruby Universe?</a> Last month, Omniref released a major update to their Ruby source code indexing system, adding cross library reference inference and inline documentation from included modules, among other things. Omniref is a bit like a Ruby documentation and source code search engine that spans across Rubygems. It was created by Tim Robertson and Montana Low and you can think of it a bit like the Google of Ruby code, but more focused and intelligent on the search results. Because the context is strictly Ruby and Rubygems, they can cross link, show related libraries, dependent libraries, syntax highlighting, documentation, and more. It’s pretty amazing that they can inline function documentation between Rubygems (for example how ActiveModel provides to_key for ActiveRecord objects), showing the original function and documentation. <a href=\"http://www.omniref.com/blog/blog/2014/02/18/whats-relevant-in-the-ruby-universe/\"> </a> <a href=\"http://ruby5.envylabs.com\">Thank You for Listening to Ruby5</a> <p>Ruby5 is released Tuesday and Friday mornings. To stay informed about and active with this podcast, we encourage you to do one of the following:</p> Follow <a href=\"http://twitter.com/envylabs\">Envy Labs</a> on Twitter Or, subscribe with <a href=\"http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=327234205\">iTunes</a> or <a href=\"http://feeds.feedburner.com/Ruby5\">RSS</a> <a href=\"http://ruby5.envylabs.com\"> </a>",
                "duration": 415,
                "publishedAt": 1394202344
              }, {
                "uid": 36212907,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/lCwkV780TSY/444-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #444 – February 28th, 2014",
                "episodeSummary": "<p> ActiveRecord Heatmaps, Atom Editor, Ruby Gotchas and Ruby Tempfiles. Guest hosts Karle Durante and Ken Collins <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/480-episode-444-february-28th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://newrelic.com/\">Sponsored by New Relic</a> New Relic recently posted about Optimizing Your Global Digital Marketing with New Relic <a href=\"http://newrelic.com/\"> </a> <a href=\"https://github.com/blotto/thermometer\">Thermometer</a> The Thermometer gem helps you build heat maps of your activerecord associations <a href=\"https://github.com/blotto/thermometer\"> </a> <a href=\"http://atom.io\">Atom Editor</a> Github has released the atom editor. A hackable text editor for the 21st Century <a href=\"http://atom.io\"> </a> <a href=\"https://github.com/RailsApps/rails-omniauth\">Rails 4.1 starter app with OmniAuth</a> Daniel Kehoe has released an example application showing how to set up authentication using OmniAuth with Rails 4.1 <a href=\"https://github.com/RailsApps/rails-omniauth\"> </a> <a href=\"http://blog.elpassion.com/ruby-gotchas\">Ruby Gotchas that will come back to haunt you</a> Karol Sarnacki wrote a blog listing popular Ruby gotchas and curiosities that developers should be aware of. <a href=\"http://blog.elpassion.com/ruby-gotchas\"> </a> <a href=\"http://viget.com/extend/make-remote-files-local-with-ruby-tempfile\">Make Remote Files Local with Ruby Tempfile</a> We live in the age of remote resources. It's pretty rare to store uploaded files on the same machine as your server process. File storage these days is almost completely remote Using file storage services like S3 is awesome, but not having your files accessible locally can complicate the performance of file-oriented operations. <a href=\"http://viget.com/extend/make-remote-files-local-with-ruby-tempfile\"> </a>",
                "duration": 390,
                "publishedAt": 1393949713
              }, {
                "uid": 36131797,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/mjvPzVRIzqY/443-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #443 – February 25th, 2014",
                "episodeSummary": "<p> In this episode we cover new Rubies and rSpec, Ruby’s Demise, AdequateRecord, and a Ruby Heroes reminder. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/479-episode-443-february-25th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_443&amp;utm_campaign=sponsor_page\">Sponsored by TopRubyJobs</a> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_443&amp;utm_campaign=sponsor_page\"> </a> <a href=\"http://myronmars.to/n/dev-blog/2014/02/rspec-2-99-and-3-0-beta-2-have-been-released\">RSpec 2.99 and 3.0 beta 2</a> Late last week Myron Marston and the RSpec team released versions 3.0.0beta2 and 2.99.0.beta2. <a href=\"http://myronmars.to/n/dev-blog/2014/02/rspec-2-99-and-3-0-beta-2-have-been-released\"> </a> <a href=\"https://www.ruby-lang.org/en/news/2014/02/24/ruby-2-1-1-is-released/\">Ruby is Legal (2.1.1)</a> Our Ruby is all grown up. Yesterday was ruby's 21st birthday. To celebrate they released version 2.1.1 along with patch releases for 2.0.0 and 1.9.3 <a href=\"https://www.ruby-lang.org/en/news/2014/02/24/ruby-2-1-1-is-released/\"> </a> <a href=\"http://devblog.avdi.org/2014/02/23/rumors-of-rubys-demise/\">Rumors of Ruby’s Demise</a> Avdi Grimm wrote a blog post about the 'Rumors of Ruby's Demise' where he talks about the hype around other languages, specially ones with built-in support for concurrency like Erlang or Scala, and how some people in the community see that as sort of a threat to Ruby. <a href=\"http://devblog.avdi.org/2014/02/23/rumors-of-rubys-demise/\"> </a> <a href=\"http://tenderlovemaking.com/2014/02/19/adequaterecord-pro-like-activerecord.html\">AdequateRecord</a> Last week Aaron Paterson released a fork of ActiveRecord that can handle twice as many requests per second. <a href=\"http://tenderlovemaking.com/2014/02/19/adequaterecord-pro-like-activerecord.html\"> </a> <a href=\"http://rubyheroes.com/\">Ruby Heroes</a> Please take a moment to nominate someone that's significantly contributed to our community this past year for a Ruby Hero Award. The awards with be given at RailsConf in Chicago. <a href=\"http://rubyheroes.com/\"> </a> <a href=\"http://ruby5.envylabs.com\">Thank You for Listening to Ruby5</a> <p>Ruby5 is released Tuesday and Friday mornings. To stay informed about and active with this podcast, we encourage you to do one of the following:</p> Follow <a href=\"http://twitter.com/envylabs\">Envy Labs</a> on Twitter Or, subscribe with <a href=\"http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=327234205\">iTunes</a> or <a href=\"http://feeds.feedburner.com/Ruby5\">RSS</a> <a href=\"http://ruby5.envylabs.com\"> </a>",
                "duration": 387,
                "publishedAt": 1393617997
              }, {
                "uid": 36001535,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/WucTkQbwJD8/442-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #442 – February 21st, 2014",
                "episodeSummary": "<p> We will miss you Jim Weirich. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/478-episode-442-february-21st-2014\">Listen to this episode on Ruby5</a></p>",
                "duration": 217,
                "publishedAt": 1393350738
              }, {
                "uid": 35962626,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/HMbtI2iwfsw/441-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #441 - February 18th, 2014",
                "episodeSummary": "<p> In this episode we cover mruby 1.0, Hound CI, ActiveIntegration, Rails Flash Partials, Inch, Inheritable Aliases, and a big Rails for Zombies update. Put down your brains and your entrails. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/477-episode-441-february-18th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_437&amp;utm_campaign=sponsor_page\">Sponsored by TopRubyJobs</a> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_437&amp;utm_campaign=sponsor_page\"> </a> <a href=\"http://www.mruby.org/\">mruby 1.0 Released!</a> Earlier this month mruby 1.0 was released. This is a lightweight implementation of the Ruby language which can be linked and embedded within an application. You can also compile Ruby programs into compiled byte code. <a href=\"http://www.mruby.org/\"> </a> <a href=\"http://houndci.com\">Hound CI</a> Scott Albertson from Thoughtbot just released Hound CI, which is a service that reviews GitHub pull requests for style guide violations. It provides guidelines for things like git workflow, code formatting, naming, organization, and language-specific conventions for languages like Sass, Ruby, Coffeescript, Objective-C, and Python. AND it even includes some Rails development conventions for HTML, routing, background jobs, and testing. <a href=\"http://houndci.com\"> </a> <a href=\"http://devblog.orgsync.com/confidently-manage-business-logic-activeinteraction/\">Confidently Manage Business Logic with ActiveInteraction</a> OrgSync recently released version 1.0 of their gem ActiveInteraction, which helps manage application specific business logic. It's a unique way to help you keep business logic out of your models and controllers. <a href=\"http://devblog.orgsync.com/confidently-manage-business-logic-activeinteraction/\"> </a> <a href=\"http://www.youtube.com/watch?v=rSlDEvtk6lA\">Rails Flash Partials</a> Zack Siri from Codemy wrote to us about another screencast he’s created, this time it’s about Rails Flash Partials. Setting up flash messages in Rails is really simple, but it can become more complex as your application grows. Rails partials are great for keeping your code DRY, and flash messages are no exception. <a href=\"http://www.youtube.com/watch?v=rSlDEvtk6lA\"> </a> <a href=\"http://trivelop.de/inch/\">Inch</a> So there’s lots of libraries to help you rate your code, based on complexity, code coverage and so on and so on.. But this week I found a library that will grade how well your code is documented called Inch, by René Föhring. Check it out next time you need to beef up your documentation on a project. <a href=\"http://trivelop.de/inch/\"> </a> <a href=\"http://theinternate.com/2014/02/14/inheritable-aliases-in-ruby.html\">Inheritable Aliases in Ruby</a> Ruby’s method aliases are pretty handy, but if you method_alias in a class and then extend from that class, it won’t work. One way to solve this is by using the Forwardable module and its def_delegator method that are included in the Ruby standard library. However, a better solution is outlined in Nate Smith’s blog post, in which he describes writing a custom inheritable_alias method. <a href=\"http://theinternate.com/2014/02/14/inheritable-aliases-in-ruby.html\"> </a> <a href=\"http://railsforzombies.org\">Rails for Zombies Updated!</a> Over on Code School we just updated the original Rails for Zombies to be compatible with Rails 4 and Ruby 2. We made a massive improvement to the videos as well, so if you know anyone that needs to get started with Ruby on Rails, you know where to send em. <a href=\"http://railsforzombies.org\"> </a> <a href=\"http://ruby5.envylabs.com\">Thank You for Listening to Ruby5</a> <p>Ruby5 is released Tuesday and Friday mornings. To stay informed about and active with this podcast, we encourage you to do one of the following:</p> Follow <a href=\"http://twitter.com/envylabs\">Envy Labs</a> on Twitter Or, subscribe with <a href=\"http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=327234205\">iTunes</a> or <a href=\"http://feeds.feedburner.com/Ruby5\">RSS</a> <a href=\"http://ruby5.envylabs.com\"> </a>",
                "duration": 388,
                "publishedAt": 1392943127
              }, {
                "uid": 35886188,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/ygSfglkhI8w/440-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #440 – February 14th, 2014",
                "episodeSummary": "<p> PostgreSQL! Such wow! Much gitsh! Ask Ruby, maybe not? R u an activity feed? Hakiri amaze on the Doge 5! <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/476-episode-440-february-14th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\">Sponsored by New Relic</a> New Relic is _the_ all-in-one web performance analytics product. It lets you manage and monitor web application performance, from the browser down to the line of code. With Real User Monitoring, New Relic users can see browser response times by geographical location of the user, or by browser type. <a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\"> </a> <a href=\"http://www.amberbit.com/blog/2014/2/4/postgresql-awesomeness-for-rails-developers/\">PostgreSQL Awesomeness</a> Dig a little deeper into that database you’re most likely running. Hubert Lepicki has a nice overview of what makes PostgreSQL so nice for Rails development. <a href=\"http://www.amberbit.com/blog/2014/2/4/postgresql-awesomeness-for-rails-developers/\"> </a> <a href=\"https://github.com/thoughtbot/gitsh\">gitsh</a> Thoughtbot brings you an interactive shell for git. Why did they do this? Why not! It’s a simple tool, but effective. Save some typing and get some nice features for interacting with git. <a href=\"https://github.com/thoughtbot/gitsh\"> </a> <a href=\"http://patshaughnessy.net/2014/2/10/use-an-ask-dont-tell-policy-with-ruby\">Ask Ruby or maybe not?</a> Pat Shaughnessy has a great post up on being more functional with your Ruby code. Be sure to follow the link to Dave Thomas’ clarifying post as well. <a href=\"http://patshaughnessy.net/2014/2/10/use-an-ask-dont-tell-policy-with-ruby\"> </a> <a href=\"http://blog.givegab.com/post/75043413459/using-enumerations-to-make-a-faster-activity-feed-in\">Enumerate your activity feed</a> The GiveGab team gives a high-level description of how they implemented their activity feed. Follow the pointers for more details on this sticky problem. <a href=\"http://blog.givegab.com/post/75043413459/using-enumerations-to-make-a-faster-activity-feed-in\"> </a> <a href=\"https://hakiri.io/facets\">Hakiri Facets</a> Hakiri launched a free service this week that scans your Gemfile.lock and reports known CVE vulnerabilities. <a href=\"https://hakiri.io/facets\"> </a>",
                "duration": 311,
                "publishedAt": 1392749006
              }, {
                "uid": 35812788,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/LycwZksiJSU/439-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #439 - February 11th, 2014",
                "episodeSummary": "<p> In this episode we cover Structuring Sinatrap Apps, REST clients with ActiveRestClient, supporting 12-Factor App with ENV_BANG using Foreman to manage services and a new DSL for creating objects with MooseX. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/475-episode-439-february-11th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_437&amp;utm_campaign=sponsor_page\">Sponsored by TopRubyJobs</a> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_437&amp;utm_campaign=sponsor_page\"> </a> <a href=\"http://blog.sourcing.io/structuring-sinatra\">Structuring Sinatra Apps with Trevi</a> Last week, Alex MacCaw posted an article on the Sourcing.io blog which focused on a very opinionated way to develop and structure Sinatra applications. He’s even released a companion gem called Trevi that bundles all of this knowledge up and helps you follow along. <a href=\"http://blog.sourcing.io/structuring-sinatra\"> </a> <a href=\"https://github.com/whichdigital/active-rest-client\">ActiveRestClient</a> ActiveRestClient is a gem is for accessing REST services in an ActiveRecord style. It aims to be a more flexible alternative to ActiveResource. It allows things like setting different endpoints for different REST actions and has additional features like built-in caching. <a href=\"https://github.com/whichdigital/active-rest-client\"> </a> <a href=\"https://github.com/jcamenisch/ENV_BANG/\">ENV!</a> ENV! is a variant for supporting 12-Factor Apps similar to dotenv, but which provides a bit more friendly onboarding experience to a new application. Where dotenv just loads whatever is in your .env file into ENV, ENV! will fail loudly if required variables are undefined or missing and gives you the opportunity to provide helpful messages in that case. <a href=\"https://github.com/jcamenisch/ENV_BANG/\"> </a> <a href=\"http://mauricio.github.io/2014/02/09/foreman-and-environment-variables.html\">Using Foreman to Manage services</a> Maurício Linhares published an article last week detailing how to use Foreman to isolate and manage application development on OS X machines. He points out that while installing Postgres, for example, is a good thing, you don’t necessarily need it running all the time. The same is true for other application dependencies, like Redis. <a href=\"http://mauricio.github.io/2014/02/09/foreman-and-environment-variables.html\"> </a> <a href=\"https://github.com/peczenyj/MooseX\">MooseX</a> MooseX is a DSL that helps to make Object Oriented programming in Ruby easier, more consistent, and less tedious. The gem is maintained by Tiago Peczenyj and it's based on Perl's Moose and Moo, two very popular modules in the Perl community. With MooseX you can think more about what you want to do and less about the mechanics of OOP. <a href=\"https://github.com/peczenyj/MooseX\"> </a> <a href=\"http://rubyheroes.com\">RubyHeroes</a> The nominations are open for Ruby Heroes 2014. Head on over to rubyheroes.com, armed with the GitHub usernames of people who have made this past last year a pleasure for you to be in the Ruby community. <a href=\"http://rubyheroes.com\"> </a> <a href=\"http://ruby5.envylabs.com\">Thank You for Listening to Ruby5</a> <p>Ruby5 is released Tuesday and Friday mornings. To stay informed about and active with this podcast, we encourage you to do one of the following:</p> Follow <a href=\"http://twitter.com/envylabs\">Envy Labs</a> on Twitter Or, subscribe with <a href=\"http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=327234205\">iTunes</a> or <a href=\"http://feeds.feedburner.com/Ruby5\">RSS</a> <a href=\"http://ruby5.envylabs.com\"> </a>",
                "duration": 444,
                "publishedAt": 1392392485
              }, {
                "uid": 35731029,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/rMpRtpUsbIg/438-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #438 - February 7th, 2014",
                "episodeSummary": "<p> We learn about Recursion a list of deprecated stuff in Ruby and the value of Rails worst practices <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/474-episode-438-february-7th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://erniemiller.org/2014/02/05/7-lines-every-gems-rakefile-should-have\">7 Lines Every Gem's Rakefile Should Have</a> Ernie Miller published a post showing you how to create a rake console task to load irb and require your gem so you can have a console to play around with it <a href=\"http://erniemiller.org/2014/02/05/7-lines-every-gems-rakefile-should-have\"> </a> <a href=\"http://blog.envylabs.com/post/75521798481/token-based-authentication-in-rails\">Token Based Authentication in Rails</a> using authenticate_or_request_with_http_token for token based API authentication <a href=\"http://blog.envylabs.com/post/75521798481/token-based-authentication-in-rails\"> </a> <a href=\"http://batsov.com/articles/2014/02/05/a-list-of-deprecated-stuff-in-ruby/\">A List of Deprecated Stuff in Ruby</a> Bozhidar Batsov went through the the code built a list of decrecated stuff in Ruby <a href=\"http://batsov.com/articles/2014/02/05/a-list-of-deprecated-stuff-in-ruby/\"> </a> <a href=\"http://dmcca.be/2014/02/02/the-value-of-rails-worst-practices.html\">The value of Rails worst practices</a> When interviewing potential Rails developers, Devin found that the quickest way to gauge the experience of a potential hire is to show them some shockingly bad Rails code and ask them what they see <a href=\"http://dmcca.be/2014/02/02/the-value-of-rails-worst-practices.html\"> </a> <a href=\"http://blog.newrelic.com/2014/02/05/infographic-browser-wars-find-dominates-year/\">Sponsored by NewRelic</a> Using their Real User Monitoring feature, they've once again culled the average browser speeds experienced by end users of nearly 3 million application instances and the data doesn’t lie. <a href=\"http://blog.newrelic.com/2014/02/05/infographic-browser-wars-find-dominates-year/\"> </a> <a href=\"http://www.youtube.com/watch?v=S4HqTYdIm9A&amp;feature=youtu.be\">Recursion</a> Dave Bock was recently on the Ruby Hangout and gave a great presentation on recursion for ruby developers. <a href=\"http://www.youtube.com/watch?v=S4HqTYdIm9A&amp;feature=youtu.be\"> </a>",
                "duration": 288,
                "publishedAt": 1392117655
              }, {
                "uid": 35671062,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/O9a87l0oPno/437-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #437 - February 4th, 2014",
                "episodeSummary": "<p> Token Based Authentication, Recommundle, git_pretty_accept, PStore, Practicing Ruby, and RailsBricks 2 all in this episode of the Ruby5! <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/473-episode-437-february-4th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_437&amp;utm_campaign=sponsor_page\">Sponsored by Top Ruby Jobs</a> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_437&amp;utm_campaign=sponsor_page\"> </a> <a href=\"http://blog.envylabs.com/post/75521798481/token-based-authentication-in-rails\">Token Based Authentication in Rails</a> This week our very own Carlos Souza wrote up a blog post about how to use Token Based Authentication in your Rails app. <a href=\"http://blog.envylabs.com/post/75521798481/token-based-authentication-in-rails\"> </a> <a href=\"http://recommundle.com/\">Recommundle</a> Chris Tonkinson released recommundle, a recommendation engine for Gemfiles. You upload your project's gemfile and it recommends gems that it thinks you might be interested in checking out. <a href=\"http://recommundle.com/\"> </a> <a href=\"http://tech.lovewithfood.com/blog/2014/01/19/git%C2%ADpretty%C2%ADaccept%C2%ADaccept%C2%ADpull%C2%ADrequests%C2%ADthe%C2%ADpretty%C2%ADway\">git_pretty_accept</a> George Mendoza released the git_pretty_accept gem this week which automates his teams preferred method of accepting github pull requests in their project to keep their history readable. <a href=\"http://tech.lovewithfood.com/blog/2014/01/19/git%C2%ADpretty%C2%ADaccept%C2%ADaccept%C2%ADpull%C2%ADrequests%C2%ADthe%C2%ADpretty%C2%ADway\"> </a> <a href=\"http://robm.me.uk/ruby/2014/01/25/pstore.html\">Persisting data in Ruby with PStore</a> Rob Miller wrote up a blog post about how to persist data in ruby in situations where using a database might seem like overkill. <a href=\"http://robm.me.uk/ruby/2014/01/25/pstore.html\"> </a> <a href=\"https://practicingruby.com/\">Practicing Ruby journal moves to open-access</a> This week Gregory Brown of Prawn fame announced that he's giving open access to 68 articles from the Practicing Ruby journal. <a href=\"https://practicingruby.com/\"> </a> <a href=\"http://www.railsbricks.net/\">RailsBricks 2</a> Nico Schuele dropped us an email to let us know about RailsBricks 2. This new version is 100% in Ruby, doesn’t have anymore bash commands, and includes a test framework. <a href=\"http://www.railsbricks.net/\"> </a>",
                "duration": 314,
                "publishedAt": 1391776368
              }, {
                "uid": 35595906,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/3H4GfR1SxRs/436-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #436 - January 31st, 2014",
                "episodeSummary": "<p> Weekly Elixir news, control your AR Drone with Argus, use STI with an hstore, learning about Rails validators, sparklines in Ruby, and readme searching with HandCooler all in this episode of the Ruby5! <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/472-episode-436-january-31st-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\">This episode is sponsored by New Relic</a> New Relic is _the_ all-in-one web performance analytics product. It lets you manage and monitor web application performance, from the browser down to the line of code. With Real User Monitoring, New Relic users can see browser response times by geographical location of the user, or by browser type. <a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\"> </a> <a href=\"http://elixir-fountain.com\">Elixir Fountain</a> Keeping up with what's going on in the Elixir community has never been easier. The Elixir Fountain weekly mailing list has you covered. <a href=\"http://elixir-fountain.com\"> </a> <a href=\"https://github.com/jimweirich/argus\">Argus</a> Have a Parrot AR Drone and a command line? The Argus gem let's you control your quadracopter in Ruby! <a href=\"https://github.com/jimweirich/argus\"> </a> <a href=\"http://www.devmynd.com/blog/2013-3-single-table-inheritance-hstore-lovely-combination\">STI + Hstore</a> Have a better STI experience in Rails by leveraging the Postgres Hstore with hstore_accessor. <a href=\"http://www.devmynd.com/blog/2013-3-single-table-inheritance-hstore-lovely-combination\"> </a> <a href=\"http://monkeyandcrow.com/blog/reading_rails_errors_and_validators/\">Rails Errors and Validators</a> Learn the in's and out's of how Rails validators work with this detailed blog post. <a href=\"http://monkeyandcrow.com/blog/reading_rails_errors_and_validators/\"> </a> <a href=\"https://github.com/rrrene/sparkr\">Sparkr</a> All the goodness of Spark now in your Ruby CLI! <a href=\"https://github.com/rrrene/sparkr\"> </a> <a href=\"http://sanemat.github.io/hand_cooler/#/\">HandCooler</a> Finding that gem readme has never been easier! <a href=\"http://sanemat.github.io/hand_cooler/#/\"> </a>",
                "duration": 299,
                "publishedAt": 1391534327
              }, {
                "uid": 35594215,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/QtPf0Qgx4NA/435-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #435 - January 28, 2014",
                "episodeSummary": "<p> We destroy Rake with Thor, sit back for a Mina to go over Lite Config, hit some Rubygem Development Tips, and share a Weekly dose of Vim on this episode of Ruby5. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/471-episode-435-january-28-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_435&amp;utm_campaign=sponsor_page\">Sponsored by Top Ruby Jobs</a> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. <a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_435&amp;utm_campaign=sponsor_page\"> </a> <a href=\"https://github.com/gtd/lite_config\">Configure Rails with YAML with Lite Config</a> Last week, Gabe da Silveira released lite_config, a small, environment-aware, YAML configuration manager for Rails applications. It provides conveniences like lazy loading your config/ YAML files, indifferent access to keys, automatic scoping to your currently-running Rails environment, and the ability to locally override these settings. <a href=\"https://github.com/gtd/lite_config\"> </a> <a href=\"http://codecrate.com/2014/01/replace-rake-with-thor.html\">Replace Rake with Thor</a> Thor is incredibly useful and gives you an easy way to create Ruby-based command line applications. Did you know that Thor has extensions available? And your Thor calls can be testable? Check out Ryan Sonnek's recent post for details. <a href=\"http://codecrate.com/2014/01/replace-rake-with-thor.html\"> </a> <a href=\"http://dev.mikamai.com/post/74159739828/6-tips-for-full-stack-open-source-rubygems-development\">6 Tips for Full Stack Open Source RubyGems Development</a> Last week, Giovanni Intini posted an article on the Mikamai blog covering 6 tips for open source Rubygem development. The cover considerations you should make when creating your gems as well as service available to help you track and maintain them. <a href=\"http://dev.mikamai.com/post/74159739828/6-tips-for-full-stack-open-source-rubygems-development\"> </a> <a href=\"http://www.youtube.com/watch?v=W2Lt1Hjz2vw\">Mina Deployment for Rails</a> Sakchai Siripanyawuth wrote to us this week about a two part video on Rails deployment with Mina, part of a series called DevOps for Developers. Mina is a deployment manager, like Capistrano or Vlad, and works over SSH. Check out the videos for more info. <a href=\"http://www.youtube.com/watch?v=W2Lt1Hjz2vw\"> </a> <a href=\"http://www.vimweekly.com/\">Vim Weekly</a> Vim Weekly is a new mailing list (old school, right? Like Vim!) that sends out just five new Vim tips per week. If you're already somewhat familiar with Vim and are looking to hone your skills, these bite size tips may be just what you need. <a href=\"http://www.vimweekly.com/\"> </a>",
                "duration": 320,
                "publishedAt": 1391177876
              }, {
                "uid": 35594216,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/N3lJgcsAe6Y/434-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #434 - January 24th, 2014",
                "episodeSummary": "<p> Command line fuzzy finding, workers in go, consolidating your docsites, interviewing front-end developers, tracking upcoming ruby conferences, and a long-awaited update to PhantomJS all in this episode of the Ruby5! <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/470-episode-434-january-24th-2014\">Listen to this episode on Ruby5</a></p> <a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\">This episode is sponsored by New Relic</a> New Relic is _the_ all-in-one web performance analytics product. It lets you manage and monitor web application performance, from the browser down to the line of code. With Real User Monitoring, New Relic users can see browser response times by geographical location of the user, or by browser type. <a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\"> </a> <a href=\"https://github.com/garybernhardt/selecta\">Selecta</a> Selecta is an open source fuzzy text finder for the command line. It is easy to work with an integrate into your existing workflows! <a href=\"https://github.com/garybernhardt/selecta\"> </a> <a href=\"http://www.goworker.org/\">Goworker</a> Have slow Ruby workers? Goworker is compatible with resque and might process your background tasks much faster than your existing Ruby workers. <a href=\"http://www.goworker.org/\"> </a> <a href=\"http://devdocs.io/\">DevDocs</a> DevDocs combines multiple API documentations in a fast, organized, and searchable interface. <a href=\"http://devdocs.io/\"> </a> <a href=\"https://github.com/darcyclarke/Front-end-Developer-Interview-Questions\">Front-end Job Interview Questions</a> A list of helpful front-end related questions you can use to interview potential candidates. <a href=\"https://github.com/darcyclarke/Front-end-Developer-Interview-Questions\"> </a> <a href=\"http://rubyconferences.org\">rubyconferences.org</a> Wondering what conferences are coming up in the Ruby community? The recently launched rubyconferences.org site has all the details! <a href=\"http://rubyconferences.org\"> </a> <a href=\"https://groups.google.com/forum/#!topic/phantomjs/0GkXtTO6l4Q\">PhantomJS Update</a> PhantomJS got an update that removes those pesky CoreText performance warnings in your log. Brew update today and all that ugliness will go away! <a href=\"https://groups.google.com/forum/#!topic/phantomjs/0GkXtTO6l4Q\"> </a>",
                "duration": 301,
                "publishedAt": 1390978344
              }, {
                "uid": 35366662,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/l1K-7bBnMIo/433-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #433 - January 17, 2014",
                "episodeSummary": "<p> ActiveSupport Notifications, RailsBricks, DotEnv, Builder, Decorator, Chain of Responsibility, and null object patterns <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/469-episode-433-january-17-2014\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://newrelic.com/\">NewRelic</a></em> <br> NewRelic recently posted about what Nonlinear Dynamics Teach Us About App Stability </p> <p> <em><a href=\"http://technology.customink.com/blog/2013/12/19/instrumenting-your-code-with-activesupport-notifications\">Instrumenting Your Code With ActiveSupport Notifications</a></em> <br> We've been having hack lunches at CustomInk | Tech to level up our rails knowledge. Find out what we learned about ActiveSupport Notifications </p> <p> <em><a href=\"http://www.railsbricks.net\">RailsBricks</a></em> <br> RailsBricks will setup Bootstrap 3, Font Awesome, Devise, Kaminari and build out the basic models and views for those gems </p> <p> <em><a href=\"http://myronmars.to/n/dev-blog/2014/01/new-in-rspec-3-composable-matchers\">Composable Matchers in RSpec 3.0</a></em> <br> One of RSpec 3’s big new features is composable matchers. This feature will help make your tests more powerful with less brittle expectations </p> <p> <em><a href=\"https://github.com/bkeepers/dotenv\">DotEnv</a></em> <br> One of the tenets of a Twelve-Factor App is to store configuration in env vars. They are easy to change between deploys without changing any code; and unlike config files, there is little chance of them being checked into the code repo accidentally. </p> <p> <em><a href=\"http://robots.thoughtbot.com/code-show-and-tell-polymorphic-finder\">Code Show and Tell: PolymorphicFinder</a></em> <br> You just need a quick refactor to use the Builder, Decorator, Chain of Responsibility, and null object pattern </p> <p> <em><a href=\"http://www.youtube.com/watch?v=vRUUlgXAUUI\">We're NASA and We Know It (Mars Curiosity) Song</a></em> <br> Thank you for listening to Ruby5. Be sure to tune in every Tuesday and Friday for the latest news in the Ruby and Rails community. </p>",
                "duration": 368,
                "publishedAt": 1390607292
              }, {
                "uid": 35329039,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/0GvGAQ4ohW0/432-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #432 - January 14, 2014",
                "episodeSummary": "<p> We Brag about our Backend, shed some Light on Test Driven Rails, avoid the DBeater, pout over Ruby 1.9's end of life on this HAIKU edition of Ruby5. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/468-episode-432-january-14-2014\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_432&amp;utm_campaign=sponsor_page\">This episode is sponsored by Top Ruby Jobs</a></em> <br> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. </p> <p> <em><a href=\"https://github.com/existentialmutt/lt-ruby\">Light Table Ruby</a></em> <br> Rafe Rosen just released a new plugin for the recently-open-sourced Light Table IDE last week that adds full page, selection, or single line Ruby code execution. You can use this to quickly execute or demonstrate some code without leaving your Ruby files. </p> <p> <em><a href=\"http://karolgalanciak.com/blog/2014/01/04/test-driven-rails-part-1/\">Test Driven Rails Part 1</a></em> <br> Last week, Karol Galanciak posted the first article in a series on Test Driven Rails. The series is intending to cover how, when, and what to test when developing a Rails application. This first part is mostly theoretical, and Part 2 will take the topics discussed and apply them to application development. </p> <p> <em><a href=\"http://codebrag.com/\">Code Reviews with Codebrag</a></em> <br> Code reviews are sometimes hard to do, and do consistently. Codebrag is a downloadable Ruby application that you can install and run on your own servers to watch your repositories and give you a simple interface for reviewing your code. Version 1 is free, and will be forever, so check it out. </p> <p> <em><a href=\"http://www.indiegogo.com/projects/dbeater/\">XML-based DB Migrations with DBeater</a></em> <br> DBeater is a yet-to-be-backed, crowdfunded project on Indiegogo which will become a Ruby gem that will allow you to migrate and version your database. It's backend agnostic, but uses XML instead of Ruby for it's definition files. We can't all be perfect, eh? </p> <p> <em><a href=\"http://instructure.github.io/blog/2014/01/07/faster-ruby-i18n-backend-written-in-c/\">Faster I18n Backend for Ruby Written in C</a></em> <br> i18nema is a new I18n translation library which uses C underpinnings to ease some of the garbage collection / Ruby object generation pain in current I18n libraries. It should be faster and more memory efficient, albeit not something you likely want to talk too much about at work. </p> <p> <em><a href=\"https://www.ruby-lang.org/en/news/2014/01/10/ruby-1-9-3-will-end-on-2015/\">Ruby 1.9.3 End of Life</a></em> <br> The Ruby core team announced late last week that support for Ruby 1.9 will be ending. Active development will cease in about a month, followed by a year of security fix support, and all support will end in February of 2015. Time to migrate to Ruby 2.1! </p>",
                "duration": 375,
                "publishedAt": 1389965751
              }, {
                "uid": 35276929,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/O6UnBFX_Cog/431-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #431 – January 10th, 2013",
                "episodeSummary": "<p> Another Ruby5! Analyze your githubs with AccessList and hammerspace enumerable into submission using Sneakers. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/467-episode-431-january-10th-2013\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\">This episode is sponsored by New Relic</a></em> <br> New Relic is _the_ all-in-one web performance analytics product. It lets you manage and monitor web application performance, from the browser down to the line of code. With Real User Monitoring, New Relic users can see browser response times by geographical location of the user, or by browser type. </p> <p> <em><a href=\"https://github.com/blog/1672-introducing-github-traffic-analytics\">Github Traffic Analytics</a></em> <br> Traffic analytics for your Github repos! It's about time. Now you can see number of views, unique visitors, and other useful data. </p> <p> <em><a href=\"http://about.ckundo.com/access_lint/\">AccessLint</a></em> <br> How accessible is your site? Cameron Cundiff's AccessLint gem makes it easy to find out. </p> <p> <em><a href=\"http://nerds.airbnb.com/hammerspace-persistent-concurrent-off-heap-storage\">Hammerspace</a></em> <br> App response times climbing? Clearly you need persistent, concurrently-available, off-heap storage of strings! Well, Airbnb did at least. And if it worked for them it can work for you too. </p> <p> <em><a href=\"http://jondot.github.io/sneakers/\">Sneakers</a></em> <br> Performance background processing for Ruby using RabbitMQ. Like a boss! </p> <p> <em><a href=\"http://blog.arkency.com/2014/01/ruby-to-enum-for-enumerator\">Stop including Enumerable, return Enumerator instead</a></em> <br> Robert Pankowecki has written a blog post asking us all to please stop including Enumerable and use an Enumerator instead. Please. Stop. </p>",
                "duration": 365,
                "publishedAt": 1389715856
              }, {
                "uid": 35217404,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/wUWZ1IV3-7o/430-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #430 - January 7th, 2014",
                "episodeSummary": "<p> Test Driving a JSON API in Rails, Jubilee for Vert.x, Exception#cause, Hulse, Caching an API <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/466-episode-430-january-7th-2014\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_427&amp;utm_campaign=sponsor_page\">This episode is sponsored by Top Ruby Jobs</a></em> <br> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. </p> <p> <em><a href=\"http://www.commandercoriander.net/blog/2014/01/04/test-driving-a-json-api-in-rails\">Test Driving a JSON API in Rails</a></em> <br> Eno Compton wrote a blog post on \"Test Driving a JSON API in Rails\" where he touches on some pretty relevant details that tend to be overlooked by most developers. </p> <p> <em><a href=\"http://isaiah.github.io/jubilee/\">Jubilee for Vert.x</a></em> <br> Jubilee is a rack server that uses the best features of Vert.x 2.0 such as Event bus, Shared data and Clustering. </p> <p> <em><a href=\"http://blog.bugsnag.com/2014/01/03/ruby-2-1-exception-causes/\">Ruby 2.1 Exception#cause</a></em> <br> The folks at Bugsnag wrote a blog post describing Ruby 2.1's Exception#cause feature which allows access to the root cause of an exception in cases where multiple exceptions are raised. </p> <p> <em><a href=\"https://github.com/dwillis/hulse\">Hulse</a></em> <br> Hulse, by Derek Willis, is a Ruby wrapper for House and Senate roll call votes. It parses Congressional vote data from the official House of Representatives and Senate websites. </p> <p> <em><a href=\"http://www.rubytapas.com/episodes/66-Caching-an-API?filter=free\">Free Ruby Tapas on Caching an API</a></em> <br> Avdi Grimm has just freed up another episode from the Ruby Tapas archives on Caching an API. He talks about building a caching layer over an HTTP API. </p>",
                "duration": 345,
                "publishedAt": 1389370292
              }, {
                "uid": 35160104,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/BxgstX-GLo4/429-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #429 - January 3rd, 2014",
                "episodeSummary": "<p> Writing a Ruby compiler, the Omega universe simulator, RubyGems 2.2.0, debugging with HTTP clients, detecting similarities in images, and the Lotus web framework all in this episode of the Ruby5! <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/465-episode-429-january-3rd-2014\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\">This episode is sponsored by New Relic</a></em> <br> New Relic is _the_ all-in-one web performance analytics product. It lets you manage and monitor web application performance, from the browser down to the line of code. With Real User Monitoring, New Relic users can see browser response times by geographical location of the user, or by browser type. </p> <p> <em><a href=\"http://www.hokstad.com/compiler/\">Writing a Compiler in Ruby from the Bottom Up</a></em> <br> Ever wondered just what goes into writing a compiler? This long running series of blog posts from Vidar Hokstad will take you on a whirlwind tour! </p> <p> <em><a href=\"https://github.com/movitto/omega\">The Omega Simulation Framework</a></em> <br> The Omega universe simulation framework lets you create your very own game universe in the cloud! </p> <p> <em><a href=\"http://blog.rubygems.org/2013/12/26/2.2.0-released.html\">RubyGems 2.2.0 Released</a></em> <br> Happy Festivus, we got a new RubyGems! </p> <p> <em><a href=\"http://devblog.avdi.org/2013/12/29/debugging-an-http-client-library/\">Debugging an HTTP Client Library</a></em> <br> Avdi gets to the bottom of an HTTP client. </p> <p> <em><a href=\"http://www.amberbit.com/blog/2013/12/20/similar-images-detection-in-ruby-with-phash/\">Detect Similar Images</a></em> <br> Check out part 1 of a series on detecting similar images. </p> <p> <em><a href=\"http://lucaguidi.com/2014/01/01/announcing-lotus.html\">Lotus</a></em> <br> Lotus is a new full-stack web application framework for Ruby. </p>",
                "duration": 327,
                "publishedAt": 1389100489
              }, {
                "uid": 34905332,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/bIuu9amxszc/428-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #428 – December 20th, 2013",
                "episodeSummary": "<p> Today only! Some Rails 4.1 tidbits, dependency injection drama, a Rails engine for the Dashing framework, and some free tapas from Avdi. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/464-episode-428-december-20th-2013\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\">This episode is sponsored by New Relic</a></em> <br> New Relic is _the_ all-in-one web performance analytics product. It lets you manage and monitor web application performance, from the browser down to the line of code. With Real User Monitoring, New Relic users can see browser response times by geographical location of the user, or by browser type. </p> <p> <em><a href=\"http://weblog.rubyonrails.org/2013/12/18/Rails-4-1-beta1/\">Rails 4.1 beta</a></em> <br> Rails 4.1 beta is out! A nice summary here: <a href=\"http:\"></a>http://coherence.io/blog/2013/12/17/whats-new-in-rails-4-1.html </p> <p> <em><a href=\"http://edgeguides.rubyonrails.org/4_1_release_notes.html#config-secrets-yml\">secrets.yml</a></em> <br> Rails 4.1 has a secret! It’s a new config file called secrets.yml intended to hold your sensitive bits out of the gits. </p> <p> <em><a href=\"http://solnic.eu/2013/12/17/the-world-needs-another-post-about-dependency-injection-in-ruby.html\">Another post about Dependency Injection</a></em> <br> Piotr Solnica adds his own thoughts on DI, and uses a short example of how he practices DI in his own code. </p> <p> <em><a href=\"http://www.rubytapas.com/episodes/64-Yield-or-Enumerate\">Yield or Enumerate</a></em> <br> Avdi Grimm is giving it away! He’s posted another of his brief Ruby Tapas episodes on his site for free. Yield or Enumerate will show you how many of Ruby’s iteration methods return an Enumerator object if not given a block and what you can do with it. </p> <p> <em><a href=\"https://github.com/gottfrois/dashing-rails\">dashing-rails</a></em> <br> Dash away, dash away, dash away all! Take a peek at dashing-rails, a Rails Engine for Shopify’s Dashing framework. So handsome. </p>",
                "duration": 373,
                "publishedAt": 1388758664
              }, {
                "uid": 34856279,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/mDvglH6rSuU/427-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #427 - December 17th, 2013",
                "episodeSummary": "<p> rails-assets.org, Rails Database Info, Callbacks Extraction, Shutterbug, A Deeper Look at Ruby’s Enumerable, Prawn 0.13.0 <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/463-episode-427-december-17th-2013\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_427&amp;utm_campaign=sponsor_page\">This episode is sponsored by Top Ruby Jobs</a></em> <br> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. </p> <p> <em><a href=\"http://rails-assets.org\">rails-assets.org</a></em> <br> The team at monterail created a gem host that automatically converts packaged bower components into ruby gems. </p> <p> <em><a href=\"https://github.com/vlado/rails_db_info\">Rails Database Info</a></em> <br> Vlado Cingel sent us a gem over the weekend called Rails database info. This gem adds an html endpoint to your Rails application which will give you a quick display of your database schema and contents for reference. </p> <p> <em><a href=\"http://sharkzp.github.io/blog/2013/12/16/callbacks-extraction/\">Callbacks Extraction</a></em> <br> Alex Topalov wrote about how to refactor your app away from callbacks to small easy to understand ruby objects. He does this by moving the callbacks out of their domain classes and into a unitary class. </p> <p> <em><a href=\"https://github.com/concord-consortium/shutterbug\">Shutterbug</a></em> <br> Shutterbug is a rack service that sends a JavaScript library to the browser, then makes it simple to send HTML fragments back to the server, which can generate images using PhantomJS. </p> <p> <em><a href=\"http://rubylove.io/ruby/core/2013/12/14/a-deeper-look-at-rubys-enumerable-1/\">A Deeper Look at Ruby’s Enumerable</a></em> <br> This week the ruby love blog gave some love to some helpful enumerable methods that we might tend to forget about. Methods like any?, all?, none? and each_cons. </p> <p> <em><a href=\"http://elmcitycraftworks.org/post/70158932822/prawn-0-13-0-has-been-released-and-1-0-is-finally-on\">Prawn 0.13.0</a></em> <br> This week the prawn gem got it’s first official release in 2 years. It’s now at version 0.13.0. There’s lots of new features, bug fixes, and breaking changes so be sure to read the change log before attempting to upgrade. </p>",
                "duration": 336,
                "publishedAt": 1387561882
              }, {
                "uid": 34754044,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/v5e5RqNWeQE/426-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #426 - December 13th, 2013",
                "episodeSummary": "<p> thoughtbot open source issues now on Stack Overflow, verifying doubles in RSpec 3, interactive mockups with Stagehand, bundler is stayin' alive (for the time being), and updates to the roar gem all in this episode of the Ruby5! <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/462-episode-426-december-13th-2013\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\">This episode is sponsored by New Relic</a></em> <br> New Relic is _the_ all-in-one web performance analytics product. It lets you manage and monitor web application performance, from the browser down to the line of code. With Real User Monitoring, New Relic users can see browser response times by geographical location of the user, or by browser type. </p> <p> <em><a href=\"http://robots.thoughtbot.com/moving-open-source-project-mailing-lists-to-stack-overflow/\">thoughtbot on Stack Overflow</a></em> <br> thoughtbot is moving away from mailing lists and towards Stack Overflow posts instead. Check out their blog post explaining why. </p> <p> <em><a href=\"http://rhnh.net/2013/12/10/new-in-rspec-3-verifying-doubles\">New in RSpec 3: Verifying Doubles</a></em> <br> Add a little dose of reality to your RSpec doubles. </p> <p> <em><a href=\"http://camerond.github.io/stagehand/\">Stagehand</a></em> <br> Easily make interactive mockups with the Stagehand gem. </p> <p> <em><a href=\"http://andre.arko.net/2013/12/07/the-rumors-of-bundlers-death-have-been-greatly-exaggerated/\">Bundler Not Dead Yet</a></em> <br> The rumors of Bundler's death have been greatly exaggerated. </p> <p> <em><a href=\"https://github.com/apotonick/roar\">roar</a></em> <br> The roar just has received some love lately, including a brand-new and very well-written README. </p>",
                "duration": 315,
                "publishedAt": 1387299447
              }, {
                "uid": 34626129,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/NjTpaDhL6BI/425-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #425 - December 10th, 2013",
                "episodeSummary": "<p> ActionParameter, Purgatory, Promise.rb, Sharing Rails sessions, JRuby 1.7.9 <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/461-episode-425-december-10th-2013\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_423&amp;utm_campaign=sponsor_page\">This episode is sponsored by Top Ruby Jobs</a></em> <br> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. </p> <p> <em><a href=\"https://github.com/edelpero/action_parameter\">ActionParameter v0.0.2</a></em> <br> Ezequiel Delpero released a new version of ActionParameter. The gem helps you move all your parameter's logic from controllers into it's own class. This way you'll keep your controllers dry and they'll be easier to test. </p> <p> <em><a href=\"http://www.financeit.ca/developit/blog/2013/12/06/introducing-purgatory/\">Purgatory</a></em> <br> Purgatory is a Rails gem that allows you to save changes to an ActiveRecord model so that they can be applied at a later time. </p> <p> <em><a href=\"https://github.com/lgierth/promise.rb\">Promise.rb</a></em> <br> Promise.rb is a Ruby implementation of the Promises/A+ spec. </p> <p> <em><a href=\"http://matt.aimonetti.net/posts/2013/11/30/sharing-rails-sessions-with-non-ruby-apps/\">Sharing Rails Sessions With Non-Ruby Apps</a></em> <br> Matt Aimonetti wrote a blog post describing the problem he ran into with sharing Rails sessions with another application written in Go, and how he managed to get around it. </p> <p> <em><a href=\"http://jruby.org/2013/12/06/jruby-1-7-9.html\">JRuby 1.7.9</a></em> <br> JRuby 1.7.9 was released. This release includes a total of 36 issues fixed since the last release, including some Windows specific bugs and some encoding issues. There's lots of improvements to the Enumerable module as well. </p>",
                "duration": 364,
                "publishedAt": 1386956282
              }, {
                "uid": 34495931,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/kFPblWtSf2k/424-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #424 - December 6th, 2013",
                "episodeSummary": "<p> What does Spring have to do with Rails 4.1, Rails security news, a few cool tips like pundit, pry rescue and RASK, good advice for upgrading to capistrano 3, and the plan to sunset bundler all in this RubyLoco-powered Ruby5. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/460-episode-424-december-6th-2013\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://www.newrelic.com/index.html?utm_source=RBY5&amp;utm_medium=banner&amp;utm_content=&amp;utm_campaign=RPM&amp;utm_term=0&amp;mpc=BA-RBY5-RPM-EN-0-0-0\">This episode is sponsored by New Relic</a></em> <br> Now you can experience powerful end-to-end mobile app monitoring from New Relic. Monitor your native mobile apps from the device to the network through the backend all the way to your end user's device with our new User Interaction Traces. Get method-level visibility for the code that makes up every interaction in your mobile app. </p> <p> <em><a href=\"https://github.com/rails/rails/commit/6f72a6b53afda51a73af69194ed0060ea5048fa9\">Spring</a></em> <br> Spring... the rails application preloader. It speeds up development by keeping your application running in the background so you don't need to boot it every time you run a test, rake task or migration. You can use it right now, and its being baked into Rails 4.1. </p> <p> <em><a href=\"http://weblog.rubyonrails.org/2013/12/3/Rails3216and402havebeenreleased/\">Rails Security Update</a></em> <br> The rails team has released 3.2.16 and 4.0.2 with important security fixes. There are 6 security fixes in these releases including multiple cross site scripting vulnerabilities and a potential denial of service attack. </p> <p> <em><a href=\"http://www.confreaks.com/videos/2864-rubyconf2013-repl-driven-development-with-pry\">Pry Rescue</a></em> <br> This is a link to Conrad Irwin's talk on PRY from this year's RubyConf. He discussed pry-rescue which stops your test suite and drops into a pry session if one of your tests fails. You can play the lines of code, edit and fix the test, then resume your suite. its sweet! </p> <p> <em><a href=\"https://github.com/elabs/pundit\">pundit</a></em> <br> If you're using CanCan and are lamenting the size of your ability file, check out pundit. It organizes permissions a little differently, creating one policy file per model. </p> <p> <em><a href=\"https://github.com/bokmann/RASK\">RASK</a></em> <br> RASK, the Rake Application Starter Kit, is one-stop-shoping for a project shell for your rake tasks in which you'll feel right at home. There's a directory structure for your code, tests, logs, configuration, and such, there's a bootstrap which automatically loads your configuration, there's support for environment-specific stuff run by an environment-variable of your choosing, etc. If you find yourself writing back office automation tasks, try giving this a spin. </p> <p> <em><a href=\"https://github.com/jruby/jruby/issues/1146#issuecomment-29714318\">Death of Bundler</a></em> <br> Eric Hodel was commenting on a JRuby issue and revealed that Bundler is scheduled to die in under two years time, because all of its core features are going to be baked into RubyGems. Ultimately, this is a good thing, but it'll be sad to see an old friend fade away. </p> <p> <em><a href=\"https://semaphoreapp.com/blog/2013/11/26/capistrano-3-upgrade-guide.html\">Cap 3 Guide</a></em> <br> Darko Fabijan wrote a blog post about the work he did to upgrade semaphore. He parsed through the scattered documentation and talks about some of the things you'll have to change when moving from Cap3 to Cap 3. </p>",
                "duration": 408,
                "publishedAt": 1386681808
              }, {
                "uid": 34389397,
                "mediaUrl": "http://feedproxy.google.com/~r/Ruby5/~5/HB6MC2dI8p8/423-ruby5.mp3",
                "explicit": false,
                "episodeTitle": "Episode #423 – December 3rd, 2013",
                "episodeSummary": "<p> This week we watch, lint, memoize, error handle, say hello to and write more idiomatic Ruby. <br></p> <p><a href=\"http://ruby5.envylabs.com/episodes/459-episode-423-december-3rd-2013\">Listen to this episode on Ruby5</a></p> <p> <em><a href=\"http://toprubyjobs.com/?utm_source=ruby5&amp;utm_medium=podcast&amp;utm_content=ruby5_423&amp;utm_campaign=sponsor_page\">This episode is sponsored by Top Ruby Jobs</a></em> <br> If you're looking for a top Ruby job or for top Ruby talent, then you should check out Top Ruby Jobs. Top Ruby Jobs is a website dedicated to the best jobs available in the Ruby community. </p> <p> <em><a href=\"http://www.confreaks.com/events/rubyconf2013\">RubyConf 2013 Talks</a></em> <br> If you missed out on RubyConf 2013 in Miami a few weeks ago, you’ll be happy to know Confreaks just released the first batch of recorded talks from the conference. I would definitely make time for Object management on Ruby 2.1 by Koichi Sasada who I mentioned on the show recently for his work on the Ruby 2.1 generational garbage compiler. In a less Ruby-centric way, you have to watch Nell Shamrell’s Harnessing the True Power of Regular Expressions in Ruby. Keep an eye on Confreaks since there are many more talks to come. </p> <p> <em><a href=\"https://github.com/YorickPeterse/ruby-lint\">ruby-lint</a></em> <br> Ruby Lint is a linter and static code analysis tool for Ruby. Just like JSHint and other linting tools, it focuses on logic­related errors, rather than semantic errors that are displayed in standard Ruby output. So, if you are trying to use a variable that you haven’t defined, it’ll tell you, instead of outputting a no method error. Ruby Lint tackles undefined methods/variables, unused variables/method arguments and more. </p> <p> <em><a href=\"http://gavinmiller.io/2013/advanced-memoization-in-ruby/\">Advanced Memoization</a></em> <br> This week, Gavin Miller published a new blog post on memoization covering more advanced memoization patterns. In this post, Gavin shows how to memoize more complex methods like those which have conditionals inside of them or even methods that receive arguments. It’s a quick and useful read, and memoization might allow you to tackle some low-hanging performance fruits in your Ruby applications. </p> <p> <em><a href=\"https://github.com/samg/timetrap\">Timetrap</a></em> <br> Sam Goldstein just created a neat little gem called Timetrap, a simple tool to help you track time right on the command line. Once you install the gem on your machine, Timetrap will keep track of a list of timesheets. Each timesheet has many entries, and you can check in-and-out of a timesheet as you need to. After you’ve created some entries in your timesheet, you can display the entries, showing information like the date, time in and out, duration, and notes, all right there in your console. Timetrap has built-in support for 6 output formats, including text, csv, ical, json, and ids. There’s even an interface for writing custom formats. </p> <p> <em><a href=\"https://github.com/schneems/sprockets_better_errors\">Better Sprockets Errors</a></em> <br> Richard Schneeman recently created a gem called Better Sprockets Errors. Its very simple purpose is to raise exceptions in development when you attempt to include assets that have not been white-listed for precompilation. Check out the project's README for links to pull requests on the Sprockets repo. </p> <p> <em><a href=\"http://rubylove.io/howto/2013/11/23/idomatic-ruby-1/\">Idiomatic Ruby</a></em> <br> I recently read a new post on the Ruby Love blog about idiomatic Ruby. This post walks through a great refactoring exercise, showing how you can write more Ruby-esque code -- for example, iterating through an enumerable using `.map` instead of `.each`, returning a result with `send`, and cleaning up conditionals using a ternary operator. </p> <p> <em><a href=\"http://konichiwaruby.tumblr.com/post/68689348383/say-hi-to-ruby-she-is-one-of-the-best-little\">Hello Ruby</a></em> <br> Linda Liukas — one of the Rails Girls co-founders — is putting together an illustrated children's book about Ruby. She’s writing the story of a little girl (Ruby) and a robot (the computer) to represent and explains some basic Ruby and programming concepts. It doesn't look like the book is anywhere near ready yet but Linda is publishing excerpts on her blog, and you can sign up to be notified about this lovely little project. </p>",
                "duration": 388,
                "publishedAt": 1386341651
              }
            ]
          }, {
            "id": 11463,
            "home": "http://atp.fm/",
            "authors": "Marco Arment, Casey Liss, John Siracusa",
            "updatedAt": 1394743076,
            "subscriptionTitle": "Accidental Tech Podcast",
            "feedUrl": "http://atp.fm/episodes?format=rss",
            "summary": "Three nerds discussing tech, Apple, programming, and loosely related matters.",
            "albumArt": "ATP.jpg",
            "episodes": [
              {
                "uid": 36411543,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp55.mp3",
                "explicit": false,
                "episodeTitle": "55: Dave, Who Stinks!",
                "episodeSummary": "Follow-up on Final Draft and treating warnings as exceptions in production. Software methodologies. For real this time. <a href=\"http://help.fogcreek.com/7676/evidence-based-scheduling-ebs\">Evidence-based scheduling</a>. Marco plugs <a href=\"https://github.com/marcoarment/FCModel\">FCModel</a>, Casey plugs <a href=\"http://www.imore.com/debug-30-casey-liss-c-and-net\">his Debug appearance</a>, and John plugs <a href=\"https://soundcloud.com/jonathanmann/atp-ending-theme-more-bleeps\">bleeps and boops</a>. After-show: <a href=\"http://www.engadget.com/2014/03/04/apple-carplay-ferrari-ff-hands-on/\">CarPlay</a>, and <a href=\"http://www.chord.co.uk/blog/new-chord-ethernet-cables/\">£1,600 audiophile Ethernet cables</a> (via <a href=\"https://alpha.app.net/dalton\">Dalton</a>). <p>Sponsored by:</p> <a href=\"http://store.bravewave.net\">In Flux</a>: A new music album that explores the interplay between video games, music, and nostalgia. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code CRITICAL for 10% off. <a href=\"http://atp.ting.com/\">Ting</a>: Mobile that makes sense. No contracts, and pay only for what you use.",
                "publishedAt": 1394142853,
                "size": 62701401,
                "duration": 7822
              }, {
                "uid": 36207896,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp54.mp3",
                "explicit": false,
                "episodeTitle": "54: goto fail;",
                "episodeSummary": "<a href=\"http://www.youtube.com/watch?v=_P9HqHVPeik\">Wolfram Language</a>. <a href=\"https://gotofail.com/\">The \"goto fail\" SSL bug</a> and the chances that it was nefariously introduced by an NSA effort, possibly as part of their <a href=\"http://www.nytimes.com/interactive/2013/09/05/us/documents-reveal-nsa-campaign-against-encryption.html?_r=0\">$250 million annual budget for such operations</a>. <a href=\"http://arstechnica.com/tech-policy/2013/11/apple-takes-strong-privacy-stance-in-new-report-publishes-rare-warrant-canary/\">Apple's warrant canary</a>. Casey's and <a href=\"http://hastebin.com/gabigaqite.php\">Marco's</a> hard-to-find bugs and language misfeatures. (Perl protects John from writing bugs.) Whether language-interpreter warnings should be treated as errors in production. <a href=\"http://johnaugust.com/2014/the-one-with-the-guys-from-final-draft\">The Scriptnotes episode with the Final Draft CEO</a>, <a href=\"http://johnaugust.com/2014/period-space\">the follow-up in the next episode</a>, and <a href=\"http://www.kenttessman.com/2014/02/notes-on-scriptnotes/\">Kent Tessman's response</a>. After-show: Google <a href=\"http://www.marco.org/2014/02/26/google-lobbying-for-unsafe-driving\">lobbying against</a> Glass bans while driving, and Objective-C exception conventions. Next week will be the Software Methodologies show. For real this time! <p>Sponsored by:</p> <a href=\"https://picturelife.com/atp\">Picturelife</a>: The one app your photos need. Back up, search, edit, and share on Mac and iOS. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code CASEY for 10% off. <a href=\"http://www.helpspot.com/atp\">HelpSpot</a>: Simple, powerful, customizable help-desk software with no monthly fees. Use code ATP14 for $100 off.",
                "publishedAt": 1393610346,
                "size": 53915763,
                "duration": 6724
              }, {
                "uid": 36047544,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp53.mp3",
                "explicit": false,
                "episodeTitle": "53: There's Gonna Be Some Flapping",
                "episodeSummary": "Follow-up on why Flappy Bird was successful. <a href=\"http://kieranhealy.org/blog/archives/2014/02/15/social-aspects-of-success-and-failure-in-cultural-markets/\">Kieran Healy's excellent article with science</a>. <a href=\"http://www.43folders.com/2009/03/25/blogs-turbocharged\">John Gruber and Merlin Mann at SXSW '09</a>. Goofball Jones' anonymous criticism of John's \"shtick\", and John's defense including many links: <a href=\"http://arstechnica.com/staff/2009/05/hypercritical/\">An explanation of John's \"schtick\"</a> Some podcasts where John talks about things he likes: <a href=\"http://5by5.tv/movies/1\">Goodfellas</a> <a href=\"http://5by5.tv/incomparable/46\">I Like My Coffee Like My Evil Sith Lords</a> <a href=\"http://5by5.tv/incomparable/47\">Death Star University</a> <a href=\"http://5by5.tv/incomparable/67\">Darth Vader's Office is Really Weird</a> <a href=\"http://5by5.tv/incomparable/68\">Jedi Weekend</a> <a href=\"http://5by5.tv/incomparable/84\">Wind is the Enemy</a> <a href=\"http://5by5.tv/incomparable/88\">Skywalker's Eleven</a> <a href=\"http://5by5.tv/incomparable/89\">Also Known as Endor</a> <a href=\"http://5by5.tv/incomparable/108\">Journey: Then We Touched, Then We Sang</a> <a href=\"http://5by5.tv/incomparable/131\">Professor Siracusa's Anime 101</a> <a href=\"http://5by5.tv/incomparable/144\">Hangin' With the Totes</a> <a href=\"http://arstechnica.com/gaming/2010/11/masterpiece-ico/\">Masterpiece: Ico</a> <a href=\"http://5by5.tv/incomparable/100\">Why we do podcasts about what we think of things, good and bad</a> <a href=\"http://atp.fm/episodes/41-penny-wise-pound-foolish\">An ATP episode about how we deal with criticism</a> <a href=\"http://5by5.tv/movies/1\">5by5 at the Movies: Goodfellas</a> The massive WhatsApp acquistion by Facebook, the huge value of mobile messaging, and the web giants' chilling effect on competition. The \"Copland 2010\" argument that Objective-C needs to be replaced: <a href=\"http://arstechnica.com/staff/2005/09/1372/\">John's original \"Copland 2010\" article from 2005</a> <a href=\"http://arstechnica.com/apple/2010/06/copland-2010-revisited/\">Copland 2010 Revisited</a> (in 2010) <a href=\"http://ashfurrow.com/blog/we-need-to-replace-objective-c\">We Need to Replace Objective-C</a> (Ash Furrow) <a href=\"http://informalprotocol.com/2014/02/replacing-cocoa/\">Replacing Objective-C and Cocoa</a> (Steve Streza) <a href=\"http://kickingbear.com/blog/archives/412\">Objective: Copland 2010</a> (Guy English) Separating language shortcomings from API shortcomings. Casey got us to talk about LINQ briefly. Long-term evolution of programming languages. <p>Sponsored by:</p> <a href=\"http://atp.ting.com/\">Ting</a>: Mobile that makes sense. No contracts, and pay only for what you use. <a href=\"http://www.lynda.com/promo/trial/Default.aspx?lpk35=5839&amp;utm_medium=podcast&amp;utm_source=atp&amp;utm_campaign=sponsor-notes\">lynda.com</a>: Learn at your own pace from expert-taught video tutorials. Free 7-day trial. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code CASEY for 10% off.",
                "publishedAt": 1393004112,
                "size": 60371352,
                "duration": 7531
              }, {
                "uid": 35888953,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp52.mp3",
                "explicit": false,
                "episodeTitle": "52: Necessary But Not Sufficient",
                "episodeSummary": "Facebook Paper's gesture usability, in-app tutorial videos, and the design challenge of gestural interface. <a href=\"http://www.rootmetrics.com/\">RootMetrics</a> testing real-world wireless speeds. Despite constant effort to improve usability, what if computers just aren't for everyone? (There's a similar long-standing debate with programming. See <a href=\"http://en.wikipedia.org/wiki/4GL\">4GL</a>.) The Flappy Bird saga: Whether it's <a href=\"http://www.marco.org/2014/02/12/why-indie-developers-go-insane\">a good game</a> and <a href=\"http://www.forbes.com/sites/lananhnguyen/2014/02/11/exclusive-flappy-bird-creator-dong-nguyen-says-app-gone-forever-because-it-was-an-addictive-product/\">why the developer pulled it</a>. (See also: <a href=\"http://superhexagon.com/\">Super Hexagon</a>.) <a href=\"http://www.baekdal.com/opinion/how-inapp-purchases-has-destroyed-the-industry/\">Is free-with-in-app-purchase ruining the game industry?</a>. Comcast buying Time Warner and the implications on U.S. broadband competition. The stupid new top-level domains (TLDs). iBeacons and Bluetooth LE in stores and .museums. After-show: <a href=\"http://5by5.tv/bionic/77\">Bionic on new TLDs</a> (at 26:50) and whether the TLDs are just a scam by ICANN, <a href=\"http://www.patreon.com/jonathanmann\">Patreon</a>, and yet more on the Mac Pro. <p>Sponsored by:</p> <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code WHOTHEHELLISCASEY for 10% off. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code CASEY for 10% off. <a href=\"http://filetransporter.com/atp\">Transporter</a>: A private cloud storage drive that you own and control. Use code ATP for 10% off any Transporter, or ATPSHARE to get the Transporter Sync for just $75.",
                "publishedAt": 1392405193,
                "size": 51918533,
                "duration": 6474
              }, {
                "uid": 35733172,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp51.mp3",
                "explicit": false,
                "episodeTitle": "51: Maybe We're Just Dinosaurs",
                "episodeSummary": "<a href=\"http://davesblog.com/blog/2014/02/05/verizon-using-recent-net-neutrality-victory-to-wage-war-against-netflix/\">The FiOS net-neutrality non-story</a> and last summer's <a href=\"http://arstechnica.com/information-technology/2013/07/why-youtube-buffers-the-secret-deals-that-make-and-break-online-video/\">YouTube-throttling story</a>. More FU on iPads going pro, giant-tablet-desk ergonomics, trying to understand John's theory again, and a train analogy from Casey. New Microsoft CEO Satya Nadella, Bill Gates' new wildcard role, and Microsoft's likely future direction. (<a href=\"http://www.marco.org/2014/02/05/microsofts-new-ceo\">Marco's post</a>, <a href=\"http://daringfireball.net/2014/02/microsoft_past_and_future\">John Gruber's post</a>, <a href=\"http://inessential.com/2014/02/04/azure_takes_over\">Brent Simmons' post</a>) <a href=\"https://www.facebook.com/paper\">Paper</a>, <a href=\"http://news.fiftythree.com/post/75486632209/every-story-has-a-name-fiftythrees-story-began\">Paper</a>, <a href=\"http://daringfireball.net/linked/2014/02/04/paper-paper-paper\">Paper</a>, <a href=\"https://twitter.com/FiftyThree/status/430845528805756928\">Fifty Three</a>, and <a href=\"http://figure53.com/notes/2014-02-04-david-and-goliath/\">Figure 53</a>. Responsibly naming things by first <a href=\"http://tess2.uspto.gov/bin/gate.exe?f=login&amp;p_lang=english&amp;p_d=trmk\">searching for trademark conflicts</a> and potentially applying for your own trademark. Apple's role in App Store name conflicts. Facebook Paper's opportunity cost to the world. After-show: More on Microsoft and some Retina MacBook Air speculation. <p>Sponsored by:</p> <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code CASEY for 10% off. <a href=\"http://atp.ting.com/\">Ting</a>: Mobile that makes sense. No contracts, and pay only for what you use. <a href=\"http://www.lynda.com/promo/trial/Default.aspx?lpk35=5839&amp;utm_medium=podcast&amp;utm_source=atp&amp;utm_campaign=sponsor-notes\">lynda.com</a>: Learn at your own pace from expert-taught video tutorials. Free 7-day trial.",
                "publishedAt": 1391786102,
                "size": 56126976,
                "duration": 7000
              }, {
                "uid": 35597292,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp50.mp3",
                "explicit": false,
                "episodeTitle": "50: Disk Light Observer Effect",
                "episodeSummary": "Follow-up on <a href=\"http://atp.fm/episodes/49-roamio-and-siracusiet\">why an iPad \"Pro\" needs to be larger</a> and why iOS is \"better for people\". Can iOS add more power-user functionality without harming its simplicity or usability? Whether Macs should ship with ARM CPUs, how such a transition would be challenging today, and whether Casey should just buy another power adapter. <a href=\"http://hypercritical.co/2014/01/24/macintosh\">The 30th anniversary of the Macintosh</a> and the experience of using <a href=\"http://d3nevzfk7ii3be.cloudfront.net/igi/CyS1JjC1hMyyVMXv\">its power switch</a> (photo from <a href=\"http://www.ifixit.com/Teardown/Macintosh+128K+Teardown/21422#s57290\">iFixit's awesome teardown</a>). Disk-ejecting usability. Using <a href=\"http://bjango.com/mac/istatmenus/\">iStat Menus</a> to monitor your performance and assist future hardware decisions. (Or not.) <a href=\"http://techcrunch.com/2014/01/29/lenovo-to-buy-motorola-mobility-from-google/\">Lenovo buying Motorola's pillaged carcass from Google</a>, and whether they ruined <a href=\"http://kottke.org/09/10/the-original-ibm-thinkpad\">the IBM ThinkPad</a>. After-show: What will we reflect on in 20 years as being the obvious sore spot with computers today? <p>Sponsored by:</p> <a href=\"http://www.helpspot.com/atp\">HelpSpot</a>: Simple, powerful, customizable help-desk software with no monthly fees. Use code ATP14 for $100 off. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code MARCO for 10% off. <a href=\"http://cardsagainsthumanity.com/\">Cards Against Humanity</a>: A free party game for horrible people.",
                "publishedAt": 1391185788,
                "size": 54914489,
                "duration": 6849
              }, {
                "uid": 35476920,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp49.mp3",
                "explicit": false,
                "episodeTitle": "49: Roamio and Siracusiet",
                "episodeSummary": "Follow-up: Genius Bar employee reports of how most people deal with iCloud backups, <a href=\"http://5by5.tv/prompt/30\">photo backups</a>, and storage limits, <a href=\"http://www.macroplant.com/iexplorer/\">iExplorer</a> for exporting iMessages. iOS' storage model is a <a href=\"http://www.joelonsoftware.com/articles/LeakyAbstractions.html\">leaky abstraction</a>. Google may have wanted Nest for <a href=\"http://www.globes.co.il/serveen/globes/docview.asp?did=1000886261\">its smart-home project</a> as well as the more obvious reasons. <a href=\"http://www.wired.com/gadgetlab/2014/01/tivo-lays-hardware-design-team-gets-ready-exit-hardware/\">TiVo may be exiting the hardware business</a>, or <a href=\"http://techland.time.com/2014/01/22/tivo-exiting-the-hardware-business-not-so-fast-says-tivo/\">maybe not</a>. <a href=\"http://www.bloomberg.com/news/2014-01-17/nintendo-forecasts-net-loss-on-stagnating-sales-of-wii-u-games.html\">Nintendo continues to hurt</a>. Why was the first Wii really successful, and what really held back its long-term usage? <a href=\"http://www.appleoutsider.com/2014/01/16/neutral/\">Matt Drance</a>, <a href=\"http://www.avc.com/a_vc/2014/01/vc-pitches-in-a-year-or-two.html\">Fred Wilson</a>, and <a href=\"http://www.theverge.com/2014/1/15/5311948/net-neutrality-and-the-death-of-the-internet\">Nilay Patel</a> on the net neutrality news. After-show: <a href=\"http://5by5.tv/prompt/30\">The Prompt looks back on the iPhone keynote</a>, <a href=\"http://5by5.tv/prompt/31\">The Prompt on an iPad Pro</a>, <a href=\"http://www.muleradio.net/thetalkshow/67/\">The Talk Show on crossing iOS and OS X</a>, <a href=\"http://boingboing.net/tag/notplaying\">Not Playing podcast</a>. <p>Sponsored by:</p> <a href=\"http://www.getharvest.com/\">Harvest</a>: Simple, beautiful online time-tracking software. Use code ATP for 50% off your first month. <a href=\"http://www.lynda.com/promo/trial/Default.aspx?lpk35=5839&amp;utm_medium=podcast&amp;utm_source=atp&amp;utm_campaign=sponsor-notes\">lynda.com</a>: Learn at your own pace from expert-taught video tutorials. Free 7-day trial. <a href=\"http://www.fractureme.com/\">Fracture</a>: Photos printed in vivid color directly on glass. Use code ATP14 for 20% off. (<a href=\"http://cl.ly/image/1p400i300h2F\">Marco's app-icon Fractures</a>)",
                "publishedAt": 1390588209,
                "size": 60656596,
                "duration": 7567
              }, {
                "uid": 35367638,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp48.mp3",
                "explicit": false,
                "episodeTitle": "48: Marco Bought Four",
                "episodeSummary": "Follow-up: whether iMessage problems are widespread, reasons behind flattening the Mac Mini, and HDR TVs. The storage costs of Casey's emoji. <a href=\"http://techcrunch.com/2014/01/13/google-just-bought-connected-device-company-nest-for-3-2b-in-cash/\">Google buying Nest for $3.2 billion</a>. <a href=\"http://stratechery.com/2014/googles-new-business-model/\">Ben Thompson on Google's business model</a>. Nest has <a href=\"http://techcrunch.com/2013/05/11/from-the-garage-to-200-employees-in-3-years-how-nest-thermostats-were-born/\">over 200 employees</a>, including many ex-Apple employees. <a href=\"http://www.nytimes.com/2012/02/19/magazine/shopping-habits.html?pagewanted=all\">The Target-pregnant story</a>. <a href=\"http://www.marco.org/2014/01/14/nest-privacy\">Marco's critical reading of Nest's statements</a>. Maintaining a skeptical but pragmatic relationship with Google. Stephen Hackett's <a href=\"https://twitter.com/ismh/status/422912877666660352\">pants</a> and <a href=\"https://twitter.com/ismh/status/422913061209382912\">regrets</a>. Modern expectations of privacy. Potential for privacy laws like <a href=\"http://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act\">HIPAA</a> applied to consumer technology. <a href=\"http://www.theverge.com/2014/1/14/5307530/why-is-everyone-disappointed-by-google-buying-nest\">Google's public opinion is turning</a>, but <a href=\"http://www.usatoday.com/story/tech/2014/01/16/google-acquires-nest-privacy/4518317/\">stories like this will never be in USA Today</a>. Thought experiments with Apple buying Twitter, Dropbox, or Intel. After-show: Marco's house is filled with LEDs, John's house is filled with CFLs, and Casey's house is filled with apathy. <p>Sponsored by:</p> <a href=\"http://filetransporter.com/atp\">Transporter</a>: A private cloud storage drive that you own and control. Use code ATP for 10% off any Transporter. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code MARCO for 10% off. <a href=\"http://atp.ting.com/\">Ting</a>: Mobile that makes sense. No contracts, and pay only for what you use.",
                "publishedAt": 1389972348,
                "size": 42859310,
                "duration": 5342
              }, {
                "uid": 35279094,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp47.mp3",
                "explicit": false,
                "episodeTitle": "47: Better Pixels",
                "episodeSummary": "Follow-up: <a href=\"http://en.wikipedia.org/wiki/IBM_System_i\">IBM AS/400 (aka System i)</a> and <a href=\"http://en.wikipedia.org/wiki/Single-level_store\">single-level store</a>. <a href=\"http://www.marco.org/2014/01/08/retina-imac-mac-pro-prediction\">Marco's Retina theory</a>. <a href=\"http://www.polygon.com/2014/1/7/5284336/sony-playstation-ces-2014-ps4\">PS4</a> and <a href=\"http://www.polygon.com/2014/1/6/5280112/xbox-one-2013-sales-3-million-units\">Xbone sales</a>. Trying to care about CES. Who \"needs\" the Mac Pro? Justifying toys and improving quality of life with smart purchases. <a href=\"http://www.theverge.com/2014/1/6/5280452/panasonic-claims-new-4k-tvs-offer-plasma-like-picture-quality\">Panasonic’s new LCD TVs</a> compared to <a href=\"http://en.wikipedia.org/wiki/Pioneer_Kuro\">great TVs of the past</a>. <a href=\"http://www.theverge.com/2013/11/25/5141600/any-given-sunday-the-chaos-and-spectacle-of-nfl-on-fox\">4K on Fox Sports</a>, <a href=\"http://nofilmschool.com/2013/07/4k-uhd-color-space-gamut-frame-rate/\">4K's color space</a>, and the chances of 4K catching on quickly. A <a href=\"http://en.wikipedia.org/wiki/Steam_Machine\">Steam Box</a> (<a href=\"http://store.steampowered.com/livingroom/SteamController/\">its controller</a>) as a replacement for a gaming PC. Three old men reminiscing about their teenage gaming years: <a href=\"http://en.wikipedia.org/wiki/Null-modem_cable\">Null-modem cables</a>, <a href=\"http://www.data-connect.com/images/USR_Modem.jpg\">modems</a>, and <a href=\"http://en.wikipedia.org/wiki/Kali_(software\">special networking softare</a>). <a href=\"http://en.wikipedia.org/wiki/Hayes_command_set#Modem_initialization\">Modem initialization strings</a> and <a href=\"http://en.wikipedia.org/wiki/Serial_Line_Internet_Protocol\">SLIP</a>. What killed LAN parties? Perhaps it was <a href=\"http://en.wikipedia.org/wiki/GoldenEye_007_%281997_video_game%29\">great 4-player</a> <a href=\"http://en.wikipedia.org/wiki/Mario_Kart_64\">N64 games</a>. <a href=\"http://threemovesahead.libsyn.com/\">Three Moves Ahead Podcast</a>. <a href=\"http://en.wikipedia.org/wiki/3dfx_Interactive\">Voodoo 3D cards</a>, their <a href=\"http://cdnsupport.gateway.com/s/cables/A02105/A0210500.jpg\">silly cables</a>, and <a href=\"http://en.wikipedia.org/wiki/Sound_Blaster\">Sound Blasters</a>. <p>Sponsored by:</p> <a href=\"http://www.fractureme.com/\">Fracture</a>: Photos printed in vivid color directly on glass. Use code ATP for 20% off. <a href=\"http://atp.ting.com/\">Ting</a>: Mobile that makes sense. No contracts, and pay only for what you use. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code MARCO for 10% off.",
                "publishedAt": 1389383321,
                "size": 51609474,
                "duration": 6436
              }, {
                "uid": 35162606,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp46.mp3",
                "explicit": false,
                "episodeTitle": "46: A Compromised Machine",
                "episodeSummary": "Mac Pro follow-up: <a href=\"http://blog.macsales.com/22108-new-mac-pro-2013-teardown\">socketed CPUs and potential upgrades</a>, and the benefits of only using stock Apple parts. <a href=\"http://hypercritical.co/2014/01/02/apples-2013-scorecard\">Scoring Apple's performance on John's 2013 to-do list</a>. Concerns about Apple's recent Mac apps, including iWork '13 and Messages/iMessage. <a href=\"http://www.anandtech.com/show/7603/mac-pro-review-late-2013\">AnandTech's Mac Pro review</a>. The Mac Pro's 4K/Retina monitor situation. The iMac vs. the Mac Pro, and the hardware needs of developers. Why do John and Marco care so much about Retina? What the next big computer-hardware shift may be. After-show: our future as old men, saturating USB 3, and the often-neglected Mac Mini. <p>Sponsored by:</p> <a href=\"http://omnigroup.com/omnigraffle/?utm_campaign=mid-roll&amp;utm_term=jan\">OmniGraffle</a>: Sketchy mockups or pixel-perfect designs for UX, UI, and diagrams <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code TECHBYCHANCE for 10% off. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code MARCO for 10% off.",
                "publishedAt": 1388776665,
                "size": 59015900,
                "duration": 7362
              }, {
                "uid": 35059482,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp45.mp3",
                "explicit": false,
                "episodeTitle": "45: Give Up On The Retina Dream",
                "episodeSummary": "Explaining our podcast artwork. <a href=\"https://twitter.com/r0unak/status/413713412368003072\">Facebook Likes in the App Store</a> and <a href=\"http://en.wikipedia.org/wiki/Banner_blindness\">ad-banner blindness</a>. <a href=\"http://forums.macrumors.com/showthread.php?t=1668673\">Dual-input displays</a> and how they enable the 5120x2880 display that John and Marco want. <a href=\"http://www.marco.org/2013/11/26/new-mac-pro-cpus\">Turbo Boost and the Mac Pro's CPU options</a>. Using a laptop on a stand with an external keyboard, mouse, and monitor. The benefits of desktops and ECC. Mac Pro configurations for best value and future-proofing. Building separate gaming PCs, switching to iMacs, or trying to wedge PC gaming into Mac Pros. <a href=\"http://www.marco.org/2013/12/22/mac-pro-pricing-over-time\">Mac Pro price stratification over time</a>. Outlook 2011 for Mac complaints and John's multiple-selection-invalidation bug. Casey said some stuff at the end. <a href=\"http://www.youtube.com/watch?v=X6Ed-6kiY3s\">Special holiday theme song by Jonathan Mann</a>. <p>Sponsored by:</p> <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code ATP for 10% off. <a href=\"http://www.warbyparker.com/atp\">Warby Parker</a>: Boutique-quality, vintage-inspired eyewear at a revolutionary price.",
                "publishedAt": 1388075341,
                "size": 47446620,
                "duration": 5920
              }, {
                "uid": 34881166,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp44.mp3",
                "explicit": false,
                "episodeTitle": "44: A Plague With Very Minor Effects",
                "episodeSummary": "<a href=\"http://www.everyinteraction.com/reversible-usb-type-c-lightning/\">What if the new USB connector is too similar to Lightning</a>? (<a href=\"http://daringfireball.net/2013/12/lightning_apple\">John Gruber on Lightning</a>) <a href=\"https://twitter.com/vegarnilsen/status/412617927658311680\">Potential for 5120-wide Retina displays</a> to overcome Thunderbolt bandwidth limits by using <a href=\"http://d35lb3dl296zwu.cloudfront.net/uploads/photo/image/14299/DSC_0346.jpg\">\"dual-input displays\"</a>? John's \"quick\" tips for TV calibration. (<a href=\"https://itunes.apple.com/us/app/thx-tune-up/id592624594?mt=8\">THX TV-calibration app</a>) \"Rate This App\" dialogs: <a href=\"http://www.muleradio.net/thetalkshow/64/\">The Talk Show's excellent discussion</a>. <a href=\"http://www.marco.org/2013/12/14/rate-this-app\">Marco's post</a>. <a href=\"http://david-smith.org/blog/2013/12/16/degradation-or-aspiration/\">Underscore David Smith on App Store quality standards</a>. <a href=\"http://www.chuqui.com/2013/12/apple-cant-ban-rate-this-app-dialogs/\">How Apple could process \"report as inappropriate\" at scale</a>. The effects of web popularity on Casey and Marco's respective unpopular apps (<a href=\"https://itunes.apple.com/us/app/fast-text/id376634510\">Fast Text</a> and <a href=\"https://itunes.apple.com/us/app/bugshot/id669858907\">Bugshot</a>). <a href=\"http://en.wikipedia.org/wiki/5_Whys\">5 Whys</a> exploring why developers use \"Rate This App\" dialogs. What could Apple do to improve this? App Store discoverability vs. search, and how search could be improved. How much developers should be responsible for their own app marketing, and the uncomfortable reality that many apps just aren't compelling enough to sell well. <p>Sponsored by:</p> <a href=\"http://www.backblaze.com/atp\">Backblaze</a>: Online backup for $5/month. Native. Unlmited. Unthrottled. Uncomplicated. <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code ATP for 10% off. <a href=\"http://www.audiblepodcast.com/atp\">Audible</a>: Over 150,000 downloadable audiobooks. Get a free audiobook with a 30-day trial.",
                "publishedAt": 1387394296,
                "size": 53491015,
                "duration": 6676
              }, {
                "uid": 34768893,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp43.mp3",
                "explicit": false,
                "episodeTitle": "43: Brilliance Enhancer",
                "episodeSummary": "<a href=\"http://terriblepodcastscreenplays.tumblr.com/post/69631072895/accidental-fountain-screenplay-the-case-of-liss\">Accidental Fountain Screenplay: The Case of Liss</a> by Joe Steel. (And <a href=\"http://5by5.tv/bionic\">Bionic</a>.) Desktop 4K/Retina resolutions hitting bandwidth limitations of Thunderbolt 2 and DisplayPort 1.2, and <a href=\"http://arstechnica.com/apple/2013/12/apple-briefly-sells-then-removes-sharp-4k-display-ahead-of-mac-pro-launch/\">the Sharp/Apple non-news</a>. John's Squarespace-reseller idea <a href=\"http://specialists.squarespace.com/\">already exists</a>. Why aren't iOS App Store purchases available for purchasing and management in the App Store app on the Mac? John's new TV: Technological progression from CRT to plasma and LCD, and the many hacky tricks used by modern TVs to overcome limitations and look better in stores. See also: <a href=\"http://5by5.tv/hypercritical/16\">Hypercritical 16: The Soap Opera Effect</a>. <a href=\"http://www.amazon.com/dp/B00BC4SJEC/?tag=siracusa-20\">The new John Siracusa TV</a>. John's TV-calibration regimen. Why we're not talking about the iOS notification sync in OS X that never shipped. <a href=\"http://5by5.tv/b2w/149\">Merlin's response</a> to our <a href=\"http://atp.fm/episodes/41-penny-wise-pound-foolish\">criticism discussion</a>, and how Casey reacts to little worms. After-show Neutral: <a href=\"http://www.autoblog.com/2013/12/11/2015-bmw-m3-sedan-m4-coupe-video/\">the new M3/M4</a> and John's <a href=\"http://en.wikipedia.org/wiki/Dead_pedal\">dead pedal</a>. <p>Sponsored by:</p> <a href=\"http://www.pixelmator.com/\">Pixelmator</a>: Full-featured image editing app for the Mac. <a href=\"http://filetransporter.com/atp\">Transporter</a>: A private cloud storage drive that you own and control. Use code ATP for 10% off any Transporter. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code ATP12 for 10% off.",
                "publishedAt": 1386971541,
                "size": 54607710,
                "duration": 6815
              }, {
                "uid": 34499333,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp42.mp3",
                "explicit": false,
                "episodeTitle": "42: The Ultimate Vanity Search",
                "episodeSummary": "FU on PrimeSense. Apple's <a href=\"http://daringfireball.net/linked/2013/12/02/topsy-labs\">acquisition of Topsy</a> and speculation on <a href=\"https://alpha.app.net/dalton/post/16407959\">why</a>. Apple's possible difficulty in getting and keeping enough engineering talent, and how they might make bigger strides in web services. Which group wears the pants in a company? Marco's embarrassing FiOS support calls. How Apple's release and marketing schedule affects their web services. Methodologies and vocabularies. <a href=\"http://www.theverge.com/2013/12/4/5173686/usb-type-c-connector-specification-announced\">USB spec group will add a reversible connector</a>, the history of terrible USB connectors (see also: <a href=\"http://5by5.tv/hypercritical/5\">Hypercritical #5</a> from around 45 minutes, <a href=\"http://5by5.tv/hypercritical/6\">Hypercritical #6</a> from around 9 minutes, and the entire rest of the series, too), <a href=\"http://daringfireball.net/2013/12/lightning_apple\">Lightning epitomizing Apple</a>. <a href=\"http://www.anandtech.com/show/7563/dell-24-uhd-up2414q-gets-a-price-28-uhd-4k-3840x2160-announced\">Dell renews hope for desktop Retina</a> with the new Mac Pro, single big monitors vs. dual smaller ones, and higher-than-native resolution scaling on the Retina MacBook Pro (see also: <a href=\"http://www.eye-friendly.com/\">Eye-Friendly</a>). Waiting for a new technology to fully mature before switching, or adopting it earlier with tradeoffs and hacks. Texas. <p>Sponsored by:</p> <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code ATP12 for 10% off. <a href=\"http://igloosoftware.com/atp\">Igloo</a>: An intranet you'll actually like. Free for up to 10 people, and affordable for your entire company. (And check out this landing page, especially if you enjoyed John's Enterprise Software Assumptions in episode 39.) <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code ATP for 10% off.",
                "publishedAt": 1386354106,
                "size": 49907069,
                "duration": 6228
              }, {
                "uid": 34164948,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp41.mp3",
                "explicit": false,
                "episodeTitle": "41: Penny Wise, Pound Foolish",
                "episodeSummary": "<a href=\"http://finerthings.in/featured/the-difference-between-photo-stream-and-shared-photo-streams-and-how-to-store-your-photos-and-videos-in-icloud/\">David Chartier's clarification on Photo Stream limits</a>. <a href=\"https://www.spacemonkey.com/\">Space Monkey</a>, <a href=\"http://www.filetransporter.com/\">Transporter</a>, <a href=\"https://www.box.com/\">Box</a>, and <a href=\"http://en.wikipedia.org/wiki/AOL#2000s:_transition_and_rebranding\">Xdrive</a>. Results of John's Disk Utility repair survey. (<a href=\"http://www.imore.com/debug-24-jalkut-nielsen-siracusa-and-future-os-x\">John on Debug</a>) <a href=\"http://news.xbox.com/2013/11/xbox-one-biggest-launch-in-xbox-history\">Xbox One launch sales</a>. <a href=\"http://www.engadget.com/2013/11/24/apple-confirms-primesense-buyout/\">Apple buys PrimeSense</a>. Apple's potential expansion into the TV business. <a href=\"http://www.linkedin.com/jobs2/view/9887522\">Penny Arcade's job posting</a>, <a href=\"http://www.marco.org/2013/11/26/penny-arcade-awful-job\">Marco's reaction</a>, and <a href=\"http://forums.penny-arcade.com/discussion/185114/about-the-penny-arcade-job-posting\">the outgoing employee's description</a>. Extended after-show: how we deal with criticism, trolls, and our own flaws when facing our audience. <p>Sponsored by:</p> <a href=\"http://www.warbyparker.com/\">Warby Parker</a>: Boutique-quality, vintage-inspired eyewear at a revolutionary price. Use coupon code ATP for free 3-day shipping. <a href=\"http://atp.ting.com/\">Ting</a>: Mobile that makes sense. No contracts, and pay only for what you use. iPhone now available.",
                "publishedAt": 1385753012,
                "size": 65152169,
                "duration": 8133
              }, {
                "uid": 33775729,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp40.mp3",
                "explicit": false,
                "episodeTitle": "40: The Compliance Shark",
                "episodeSummary": "Follow-up on <a href=\"https://twitter.com/AnyConnect/status/402527513555267585\">Cisco VPNs on Mavericks</a> and [photo backups] to <a href=\"http://www.windowsphone.com/en-US/how-to/wp8/photos/automatically-save-the-photos-and-videos-you-take-to-skydrive\">SkyDrive</a> on <a href=\"https://twitter.com/arebee/status/402637133434724352\">Windows Mobile Phone Series Metro Not-Metro Phone Windows</a>. Why enterprise software is so hard, and the barriers to entry for small companies targeting the enterprise market. <a href=\"http://www.economist.com/blogs/graphicdetail/2013/11/daily-chart-11\">Game-console sales by generation</a>, <a href=\"http://hypercritical.co/2013/09/02/nintendo-in-crisis\">Nintendo In Crisis</a>, and <a href=\"http://www.anandtech.com/show/7528/the-xbox-one-mini-review-hardware-analysis\">AnandTech's Xbox One and PS4 mini-review</a>. Casey's new Retina iPad Mini, Marco's accidentally popular <a href=\"http://www.marco.org/rmbp-irtest.html\">image-retention test</a>, free data with a T-Mobile SIM, and choosing between the iPad Air and Retina Mini. <a href=\"http://www.anandtech.com/show/7519/apple-ipad-mini-with-retina-display-reviewed/2\">A7 thermal throttling in iPhone 5S, iPad Air, and Retina iPad Mini</a>, and <a href=\"http://www.anandtech.com/show/7460/apple-ipad-air-review/2\">deeper analysis of the A7</a>. John's disk-corruption adventure and why you should \"repair\" your HFS disks. <a href=\"http://www.youtube.com/watch?v=A7sHUMhsAIQ\">Ending Theme Song 2.0 by Jonathan Mann</a>. (We still like the old one, so we'll keep it but rotate this in sometimes.) After-show: <a href=\"http://speirs.org/blog/2013/11/19/portable-podcasting.html\">Fraser Spiers producing his podcast on an iPad</a>, <a href=\"http://5by5.tv/b2w/146\">Back to Work 146 with Dan possibly going iPad-only</a>, <a href=\"http://www.youtube.com/watch?v=SVozdF5msic\">SimCity 2000 on SNES</a>, <a href=\"http://www.macworld.com/article/2028888/review-logitechs-ultrathin-mini-keyboard-cover-makes-the-wrong-tradeoffs.html\">Lex's Logitech Ultrathin Mini keyboard review</a>, <a href=\"http://refurb-tracker.com/\">Apple refurb discounts</a>, and the <a href=\"http://www.youtube.com/watch?v=zWRTCfKznvU\">Casio B.O.S.S.</a>, which can even exchange data with a PC! <p>Sponsored by:</p> <a href=\"http://atp.ting.com/\">Ting</a>: Mobile that makes sense. No contracts, and pay only for what you use. <a href=\"http://www.gemvara.com/?utm_source=ATP&amp;utm_medium=podcast&amp;utm_campaign=ATP_11_22\">Gemvara</a>: The revolutionary leader of custom-made, fine jewelry shopping online.",
                "publishedAt": 1385146084,
                "size": 51683155,
                "duration": 6450
              }, {
                "uid": 33463746,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp39.mp3",
                "explicit": false,
                "episodeTitle": "39: Desperation Mode",
                "episodeSummary": "John's new Museum of Mediocre Reading Devices. The confusing <a href=\"http://support.apple.com/kb/HT4858\">Photo Stream limits</a>, and <a href=\"http://support.apple.com/kb/HT4486\">all</a> of <a href=\"https://twitter.com/philwkim/status/398923614960881665\">these</a> <a href=\"https://twitter.com/okoroezenwa/status/398928995120840704\">links</a> in the <a href=\"https://twitter.com/jdhwi/status/398930616982700032\">show</a> <a href=\"https://twitter.com/theJingster/status/398934674799484928\">notes</a>. <a href=\"http://www.bloomberg.com/news/2013-11-08/microsoft-ceo-candidate-elop-said-to-mull-windows-shift.html\">Stephen Elop's If-I-Were-CEO Plan</a>. A story about enterprise software. The four big assumptions about using enterprise software, why it's usually so terrible, and why big companies buy it. <p>Sponsored by:</p> <a href=\"http://filetransporter.com/atp\">Transporter</a>: A private cloud storage drive that you own and control. Use code ATP for 10% off any Transporter. <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code ATP for 10% off. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code ATP11 for 10% off.",
                "publishedAt": 1384523051,
                "size": 39651117,
                "duration": 4946
              }, {
                "uid": 33198727,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp38.mp3",
                "explicit": false,
                "episodeTitle": "38: Auto-Update My Parents",
                "episodeSummary": "Thanks to <a href=\"http://hatandsuitcase.com/\">Jim Pierce</a> for extending John's dog. (Also mentioned: <a href=\"http://adva-soft.com/products/anticrop/\">AntiCrop</a>, <a href=\"http://createglide.com\">Glide</a>) <a href=\"http://blog.everpix.com/post/66102960115/we-gave-it-our-all\">Everpix's failure and impending shutdown</a>: <a href=\"http://www.theverge.com/2013/11/5/5039216/everpix-life-and-death-inside-the-worlds-best-photo-startup\">The Verge's profile of the failure</a> <a href=\"https://support.everpix.com/entries/22586374\">Shutdown FAQ</a> <a href=\"https://twitter.com/sameersundresh/status/397831224716042240\">Staff tweet about compression and average usage</a> <a href=\"https://twitter.com/wwayneee/status/398169891275943936\">Staff tweet about \"3x userbase\" needed</a> Somewhat similar services: <a href=\"https://www.loom.com/\">Loom</a>, <a href=\"https://picturelife.com/\">Picturelife</a>, <a href=\"http://www.adoberevel.com/\">Adobe Revel</a> Everpix's critical strategic error, and how tech business and funding strategies should resemble <a href=\"http://en.wikipedia.org/wiki/Puerto_Rico_(board_game\">Puerto Rico game</a> strategies). Revisiting the challenges of online photo storage and why Apple isn't offering something like Everpix with iCloud. Answers to the last listener questions about <a href=\"http://arstechnica.com/apple/2013/10/os-x-10-9/\">John's Mavericks review</a>. <p>Sponsored by:</p> <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code ATP for 10% off. <a href=\"http://www.f-sim.com/\">F-Sim Space Shuttle</a>: A highly-realistic simulator of the space shuttle’s approach and landing in unprecedented detail and accuracy.",
                "publishedAt": 1383927064,
                "size": 35746939,
                "duration": 4458
              }, {
                "uid": 32903428,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp37.mp3",
                "explicit": false,
                "episodeTitle": "37: A 3,000-Word Digression",
                "episodeSummary": "Some light Mac Pro waffling and the <a href=\"http://www.sothebys.com/en/auctions/ecatalogue/2013/null-n09014/lot.27.html\">red one</a>. iOS 7.0.3's new crossfade animations in \"Reduce Motion\" mode. Little tidbits and windows into the life of John Siracusa buried in his <a href=\"http://arstechnica.com/apple/2013/10/os-x-10-9/\">OS X Mavericks review</a>. Noodling John with random questions. <a href=\"http://shinyplasticbag.com/dragondrop/\">Dragon Drop</a> and <a href=\"http://cocoapods.org\">Cocoapods</a> don't suck. The big potential section of the Mavericks review that John omitted. Choosing high-level and low-level details to include in the review. Tags and the filesystem. Publishing the review ebooks, and relative sales between iBooks and Kindle. Marco's postmortem on his past Kindle efforts. (<a href=\"http://instagram.com/p/Kjawtqw5Jv\">Museum of Mediocre Reading Devices</a>, <a href=\"http://en.wikipedia.org/wiki/CueCat\">CueCat</a>) Mavericks' theme and the Mac's constant battle between power users and ease of use. Will John keep doing OS X reviews? <p>Sponsored by:</p> <a href=\"http://remobjects.com/oxygene\">Oxygene by RemObjects</a>: Build native apps for all major platforms in one great language. Use code ATP13 for 20% off. <a href=\"http://igloosoftware.com/atp\">Igloo</a>: An intranet you'll actually like. Free for up to 10 people, and affordable for your entire company.",
                "publishedAt": 1383312533,
                "size": 52691007,
                "duration": 6576
              }, {
                "uid": 32628808,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp36.mp3",
                "explicit": false,
                "episodeTitle": "36: A Weird One",
                "episodeSummary": "<a href=\"http://arstechnica.com/apple/2013/10/os-x-10-9/\">The John Siracusa Mavericks review is up</a>! Apple's event, the presenters' pacing and enthusiasm, Casey's bag of hearts, and yet another showing of <a href=\"http://www.youtube.com/watch?v=VpZmIiIXuZ0\">the dots video</a>. The Retina MacBook Pro update. The Mac Pro base price, <a href=\"http://en.wikipedia.org/wiki/List_of_Intel_Xeon_microprocessors#.22Ivy_Bridge-EP.22_.2822_nm.29_Efficient_Performance\">CPU options</a>, and speculation on SSD pricing. The iPad Air, Retina iPad Mini, iPad 2 (LOL), and iPod Classic. Apple's <a href=\"http://www.youtube.com/watch?v=SK7guNbQwFw\">prod</a> of free software. John's high-level summary of Mavericks and recommendation on upgrading. Listener homework: <a href=\"http://arstechnica.com/apple/2013/10/os-x-10-9/\">Read the review</a> before next week's episode. <p>Sponsored by:</p> <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code ATP10 for 10% off. <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code ATP for 10% off.",
                "publishedAt": 1382649349,
                "size": 41785613,
                "duration": 5212
              }, {
                "uid": 32412477,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp35.mp3",
                "explicit": false,
                "episodeTitle": "35: Sea-Level Executives",
                "episodeSummary": "Ebook-publishing woes and trying to coordinate a specific release date. Apple hiring the CEO of Burberry to head their retail division, and the <a href=\"http://voices.yahoo.com/louis-vuitton-history-behind-purse-53285.html?cat=46\">Louis Vuitton logo</a>. The challenges of retail leadership. Touch ID impressions after a weekend of heavy use, and whether you should keep your phone secure for <em>other</em> people's benefit. How Touch ID could be used in Macs, and whether ARM MacBooks would be worth the transition costs. Speculation on next week's product announcements. Where <a href=\"http://www.macrumors.com/2013/10/13/apple-predicted-to-release-ultra-slim-12-inch-macbook-with-retina-display-in-mid-2014/\">a potential 12\" Retina MacBook Pro</a> could fit in the lineup. <p>Sponsored by:</p> <a href=\"http://filetransporter.com/atp\">Transporter</a>: Your own private cloud-storage drive. Get $50 off with discount code ATP50 through November 11. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code ATP10 for 10% off.",
                "publishedAt": 1382119035,
                "size": 39616325,
                "duration": 4936
              }, {
                "uid": 32139429,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp34.mp3",
                "explicit": false,
                "episodeTitle": "34: Made The Dot Smaller",
                "episodeSummary": "Siri expectations and unreliability in popular culture. Can Apple ever dramatically improve their web services, and how much pressure do they feel to do so? The sorry state of online payment processing before <a href=\"https://stripe.com/\">Stripe</a>, and improving the current sorry state of money transfers (especially in the U.S.) with services such as <a href=\"https://www.dwolla.com/\">Dwolla</a> and <a href=\"https://square.com/cash\">Square Cash</a>. The Mavericks GM. Drawbacks of a Readability-like model for paying podcast producers in Overcast, and <a href=\"http://vemedio.com/blog/posts/instacast-hd-rejected-over-flattr-integration\">Instacast's 2012 rejection for Flattr integration</a>. Different priorities for podcast playback and management. <p>Sponsored by:</p> <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code ATP10 for 10% off. <a href=\"http://www.audiblepodcast.com/atp\">Audible</a>: Over 150,000 downloadable audiobooks. Get a free audiobook with a 30-day trial.",
                "publishedAt": 1381432677,
                "size": 32243074,
                "duration": 4020
              }, {
                "uid": 31927274,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp33.mp3",
                "explicit": false,
                "episodeTitle": "33: A 30-Minute Skip Button",
                "episodeSummary": "When we expected the Mavericks GM (recorded two hours before <a href=\"http://www.macrumors.com/2013/10/03/os-x-mavericks-released-for-all-mac-developers-as-golden-master-seed/\">this</a>). <a href=\"http://browser.primatelabs.com/geekbench3/compare/86294?baseline=96082\">Apparent new E5-1680 Mac Pro in Geekbench</a> and what CPU tradeoffs to expect in the new Mac Pro. Speculating on the new Mac Pro's fan noise, rotating cable management, and intended desk location. FU on John's podcast-scrubber idea. (Spoiler: he knows about the vertical speed-scaling that's been in Apple's scrubber for years, and it's not what he wants.) Experimenting with new UI controls and behaviors: some end up being cool and useful in practice, but <a href=\"http://www.youtube.com/watch?v=Cfnomy9iIYE\">many don't</a>. Marco's brief adventure in designing a custom binary sync protocol. The potential conflict of interest of avoiding automatic ad-skipping features in Overcast since Marco gets income from ads on this podcast, and the ethics of publishing all podcasts' subscriber stats on the site. iPhone 5S cases. <a href=\"http://www.wired.com/gadgetlab/2013/09/laptop-battery/?cid=12494134\">Laptop battery health</a> and <a href=\"http://www.macworld.com/article/2040832/a-new-mac-pro-what-wed-like-to-see.html\">potential automatic battery conditioning</a>. <p>Sponsored by:</p> <a href=\"http://www.igloosoftware.com/atp\">Igloo</a>: An intranet you'll actually like. Free for up to 10 people, and affordable for your entire company. <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use coupon code ATP10 for 10% off.",
                "publishedAt": 1380903185,
                "size": 34989862,
                "duration": 4363
              }, {
                "uid": 31746844,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp32.mp3",
                "explicit": false,
                "episodeTitle": "32: It Doesn't Bother Me",
                "episodeSummary": "Casey's exclusive new iPhone 5S. Low stock levels of the gold 5S and Apple's potential motivations. How good the iPhone 5 (and therefore the 5C) still is today. John's <a href=\"http://www.youtube.com/watch?v=JTpXVv-DaBQ\">review of iOS 7</a>. Locking your kitchen. Marco's upcoming podcast app, <a href=\"http://www.marco.org/2013/09/23/overcast-coming-soon\">Overcast</a>, as announced at <a href=\"http://2013.xoxofest.com/\">XOXO 2013</a>, and why he preannounced it. The parallels between Portland and the <a href=\"http://en.wikipedia.org/wiki/Hofbr%C3%A4uhaus\">Hofbräuhaus</a>. John's logarithmic-scrubber idea. (and <a href=\"http://www.marco.org/2010/03/28/more-ideas-than-time-logarithmic-calendar-view\">Marco's logarithmic calendar</a>) <a href=\"http://www.leancrew.com/all-this/2013/09/layers-2/\">Dr. Drang on parallax</a>. Post-show Neutral: <a href=\"http://f80.bimmerpost.com/forums/showthread.php?t=892746\">the F80 M3/M4 specs</a>. <p>Sponsored by:</p> <a href=\"http://www.squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use coupon code ATP9 for 20% off in September! <a href=\"https://ding.io/atp\">Ding</a>: Dead-simple time tracking for freelancers and small teams. Use promo code ATP for a 90-day free trial.",
                "publishedAt": 1380292875,
                "size": 49648068,
                "duration": 6195
              }, {
                "uid": 31420568,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp31.mp3",
                "explicit": false,
                "episodeTitle": "31: Swimming In 16 GB Gold",
                "episodeSummary": "Casey goes to an Apple Store. FU on <a href=\"http://www.snappycam.com/\">SnappyCam</a>, Synology and ZFS, and <a href=\"http://www.imore.com/debug-20-ryan-nielsen-apple-and-os-x\">the likelihood of a new Mac filesystem</a>. The 16/32/64 GB iPhone capacities may be overstaying their welcome. Each host's planned iPhone upgrades. How to get an iPhone on launch day. Long Island <a href=\"http://www.clublexus.com/forums/sc-400-300/554523-gold-emblems-2.html\">Lexus</a> <a href=\"http://www.thecarstarz.com/vehicledetails.aspx?VID=143961612\">trim</a>. Who's fabbing the A7? <a href=\"http://seekingalpha.com/article/1694892-intel-and-apple-an-interesting-tidbit\">Intel</a>? <a href=\"http://www.anandtech.com/show/7335/the-iphone-5s-review\">Probably not</a>. iOS 7 adoption stats so far from <a href=\"https://mixpanel.com/trends/#report/ios_7\">Mixpanel</a> and <a href=\"http://david-smith.org/iosversionstats/\">_DavidSmith</a>. <p>Sponsored by:</p> <a href=\"http://mailroute.net/atp\">MailRoute</a>: Hosted spam and virus protection for email. Use promo code ATP for 10% off for the life of your account. <a href=\"http://www.squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use coupon code ATP9 for 20% off in September!",
                "publishedAt": 1379614140,
                "size": 39254731,
                "duration": 4896
              }, {
                "uid": 31193426,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp30.mp3",
                "explicit": false,
                "episodeTitle": "30: Full Frontal Thumb",
                "episodeSummary": "<a href=\"http://www.apple.com/iphone-5c/\">iPhone 5c</a> and <a href=\"http://www.apple.com/iphone-5s/\">iPhone 5s</a>. The possible Sherlocking of <a href=\"http://www.snappycam.com/\">SnappyCam</a> and the 5s' two-tone flash in practice. <a href=\"http://www.anandtech.com/show/7308/apple-iphone-5s-hands-on-video\">AnandTech's Touch ID hands-on video</a>. Economics of iPhone cases. 64-bit in practice. Speculation on what the M7 does and its potential. White iOS devices. Apple secrecy. After-show: \"<a href=\"http://images.apple.com/iphone-5c/design/images/cases_gallery_white_white.png\">non</a>\" vs. \"<a href=\"http://images.apple.com/iphone-5c/design/images/band_cases_device_back.png\">hon</a>\" and the <a href=\"http://www.androidbeat.com/2013/09/say-hello-hideous-new-usb-3-0-cable-new-smartphone-tablet-will-come/\">Micro-USB 3.0 connector</a>. <p>Sponsored by:</p> <a href=\"http://www.squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use coupon code ATP9 for 20% off in September! <a href=\"http://mailroute.net/atp\">MailRoute</a>: Hosted spam and virus protection for email. Use promo code ATP for 10% off for the life of your account.",
                "publishedAt": 1379096091,
                "size": 40120695,
                "duration": 5004
              }, {
                "uid": 30983232,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp29.mp3",
                "explicit": false,
                "episodeTitle": "29: Computerized Garden Gnome",
                "episodeSummary": "John's Mavericks review progress. iPhone event predictions. Design and security tradeoffs of a theoretical iPhone fingerprint lock. <a href=\"http://www.macrumors.com/2013/08/29/new-videos-depict-champagne-and-graphite-iphone-5s-casings/\">iPhone 5S colors</a>. Will the 5C be the mainstream, best-selling model? Cell towers near rich people. <a href=\"http://gigaom.com/2013/09/03/apple-tv-likely-on-its-way-for-a-september-10-launch/\">The Apple TV shipment rumor</a>. Tim Cook's \"new product categories\" statement earlier this year: What might that be that could plausibly come this fall \"and into 2014\"? Our <a href=\"http://www.synology.com/us/index.php\">Synology</a> experiences and disk-layout strategies so far. <a href=\"http://www.omnigroup.com/blog/entry/update-no-upgrade-pricing-for-mac-app-store-purchases\">The OmniKeyMaster Mac App Store saga</a>. Microsoft and Nokia: <a href=\"http://stratechery.com/2013/the-deal-that-makes-no-sense/\">Stratechery 1</a>, <a href=\"http://stratechery.com/2013/another-nokia-explanation-the-same-conclusion/\">Stratechery 2</a>, <a href=\"http://www.asymco.com/2013/09/03/whos-buying-whom/\">Asymco: Who's buying whom?</a> <p>Sponsored by:</p> <a href=\"http://www.squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use coupon code ATP9 for 20% off in September! <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code ATP for 10% off.",
                "publishedAt": 1378500343,
                "size": 46955836,
                "duration": 5859
              }, {
                "uid": 27870378,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp28.mp3",
                "explicit": false,
                "episodeTitle": "28: The Pit Of Irrelevance",
                "episodeSummary": "Follow-up: <a href=\"http://soitscometothis.net/post/time-capsule-back-up-vs.-siracusa\">Time Capsule vs. Siracusa</a>. Casey was right! The state of Microsoft: How much was Ballmer's fault? <a href=\"http://stratechery.com/2013/if-steve-ballmer-ran-apple/\">Ben Thompson on Steve Ballmer</a>. Microsoft's enterprise business. Should Microsoft pull an IBM and/or spin off its consumer business? What could Microsoft do to regain momentum and marketshare in phones and tablets? John on the <a href=\"http://kotaku.com/introducing-the-nintendo-2ds-no-thats-not-a-typo-1214807721\">Nintendo 2DS announcement</a>. (<a href=\"http://medialib.officialnintendomagazine.co.uk/screens/dir_603/image_60348_thumb_wide610.jpg\">Side-by-side with 3DS, 3DS XL</a>, the <a href=\"http://www.joystiq.com/2012/03/19/kid-icarus-uprisings-3ds-stand-holds-up-to-scrutiny/\">Kid Icarus: Uprising stand</a>). After-show: <a href=\"http://www.codinghorror.com/blog/2013/08/the-code-keyboard.html\">Jeff Atwood's CODE Keyboard</a>, <a href=\"http://www.trulyergonomic.com\">Truly-Ergonomic</a>, and Marco's initial thoughts on the <a href=\"http://www.marco.org/2013/08/13/ms-sculpt-ergo\">Microsoft Sculpt Ergonomic Desktop</a> keyboard vs. the <a href=\"http://www.kinesis-ergo.com/freestyle2_mac.htm\">Kinesis Freestyle 2 for Mac</a> and the <a href=\"http://articles.marco.org/171\">Microsoft Natural Ergonomic Keyboard 4000</a>. <p>Sponsored by:</p> <a href=\"http://notograph.net/atp\">Notograph</a>: Store, organize, and share photos of things you want to remember but don't want cluttering up your Camera Roll. <a href=\"http://www.wordboxapp.com/\">Wordbox</a>: A beautiful, simple, yet powerful text and Markdown editor for iOS.",
                "publishedAt": 1377875580,
                "size": 47041915,
                "duration": 5869
              }, {
                "uid": 22993976,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp27.mp3",
                "explicit": false,
                "episodeTitle": "27: Overflow Gallery In The Bathroom",
                "episodeSummary": "Querying Florida. Photo storage follow-up: whether people even want long-term photo storage anymore, using web services as backups, and Ogg-encoded tinfoil hattery. The Time Capsule's tough sell. <a href=\"http://theoatmeal.com/comics/who_vs_whom\">Casey's helpful fans</a>. <a href=\"http://techcrunch.com/2013/08/21/nearly-a-year-later-twitter-triggers-return-to-ifttt-with-official-support/\">IFTTT and Twitter</a>. The gold/\"champagne\" iPhone, not getting a larger iPhone this year, and the future of the Lightning connector. <a href=\"http://www.theverge.com/2013/8/20/4638390/tivo-roamio-pro-review\">The new TiVo</a>. After-show: John's ebook-testing setup, the awful <a href=\"http://www.amazon.com/gp/feature.html?ie=UTF8&amp;docId=1000765261\">Kindle Previewer</a>, and technical ebook woes. (See also: <a href=\"http://vimeo.com/55205932\">Serenity Caldwell at Cingleton 2012</a>.) Plus, a very special after-after-show Neutral loosely about <a href=\"http://www.autoblog.com/2013/08/21/bmw-m4-to-debut-in-detroit-lose-manual-transmission/\">the M4</a>. <p>Sponsored by:</p> <a href=\"http://squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code ATP8 for 10% off. <a href=\"http://www.audiblepodcast.com/atp\">Audible</a>: Over 150,000 downloadable audiobooks. Get a free audiobook with a 30-day trial.",
                "publishedAt": 1377223443,
                "size": 44907614,
                "duration": 5603
              }, {
                "uid": 21522323,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp26.mp3",
                "explicit": false,
                "episodeTitle": "26: Three Phones Ago",
                "episodeSummary": "<a href=\"http://blog.instapaper.com/post/57817543037\">Instapaper's web redesign beta</a>. <a href=\"http://www.joelonsoftware.com/articles/fog0000000069.html\">Rewriting a codebase from scratch</a>. Understandable code and <a href=\"http://prog21.dadgum.com/177.html\">writing for maintainability</a>. The balance between easy-to-write but unimpressive apps and implementing cutting-edge features that require messy hacks. The horrible mess of <a href=\"http://chambersdaily.com/bradleychambers/2013/8/3/regular-people-have-no-idea-how-to-manage-photos-their-iphone\">smartphone photo management and backup</a>. How much should Apple protect people from hardware failures or carelessness? (See also: <a href=\"http://arstechnica.com/staff/2005/11/1737/\">John's old two-hard-drives article</a>.) Technical and economic challenges of Apple automatically backing up <em>all</em> of your photos and videos. Non-nerd backups. After-show: <a href=\"http://www.studoesdesign.co.uk/work/osxivericks/\">OS X Ivericks</a>, <a href=\"http://daringfireball.net/2013/06/wwdc_2013_expectations\">Gruber on interface familiarity</a>, <a href=\"http://edgecasesshow.com/059-if-youre-a-file-system-geek.html\">Edge Cases on filesystems</a>. <p>Sponsored by:</p> <a href=\"http://www.warbyparker.com/\">Warby Parker</a>: Boutique-quality, vintage-inspired eyewear at a revolutionary price. (Spot featuring guest host <a href=\"https://twitter.com/tiffanyarment\">@tiffanyarment</a>!) Use coupon code ATP for free 3-day shipping. <a href=\"http://igloosoftware.com/atp\">Igloo</a>: An intranet you'll actually like. Free for up to 10 people, and affordable for your entire company.",
                "publishedAt": 1376593404,
                "duration": 6203
              }, {
                "uid": 17036383,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp25.mp3",
                "explicit": false,
                "episodeTitle": "25: Thrustmaster Joystick",
                "episodeSummary": "Marco's new-new-new app for aligning double-ender podcast tracks. Economic considerations and options for releasing an app that's extremely helpful to a very small number of people. Why Marco has been procrastinating from the big app by making small apps. Good app names as motivation. Desktop Twitter distraction and measuring desktop productivity with <a href=\"https://www.rescuetime.com/\">RescueTime</a>. Casey's sales of <a href=\"https://itunes.apple.com/us/app/fast-text/id376634510?mt=8\">Fast Text</a> since last week's promotion, Marco's <a href=\"http://www.marco.org/2013/07/31/the-app-store-problem-is-not-price\">sales of Bugshot</a>, and the potential economic upside of promotion for niche apps. The fashion longevity of iOS 7's default UI. <a href=\"http://www.theguardian.com/technology/2013/aug/07/google-chrome-password-security-flaw\">Chrome's controversial plaintext-password feature</a> and Chrome security leader <a href=\"https://news.ycombinator.com/item?id=6166731\">Justin Schuh's defense of the design</a>. Lakes. An epic, half-hour Siracusa rant on the state of finding and installing Minecraft mods. <a href=\"http://en.wikipedia.org/wiki/Kali_%28software%29\">Kali</a>. <a href=\"http://caseyrumors.com/\">caseyrumors</a>: Is this the future of Fast Text? <p>Sponsored by:</p> <a href=\"http://23andme.com/atp\">23andMe</a>: Order your 23andMe DNA kit today for just $99. <a href=\"http://www.squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code ATP8 for 10% off.",
                "publishedAt": 1376066096,
                "duration": 5674
              }, {
                "uid": 14015814,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp24.mp3",
                "explicit": false,
                "episodeTitle": "24: Double Meta",
                "episodeSummary": "Non-developers might want to skip the first 35 minutes: a technical discussion of <a href=\"https://github.com/ccgus/fmdb\">FMDB</a>, SQLite, and implementing your own generic \"model\" class. Plus: Casey finally gets to talk about .NET. (Note from Marco: The day after recording, I rewrote my model class to rely on KVC instead of runtime tricks and reflection. Please email Casey.) The types of programmers who can and should write their own low-level classes. <a href=\"https://itunes.apple.com/us/app/fast-text/id376634510?mt=8\">Casey's app, Fast Text</a>, and why he wrote it in 2010. John's unfulfilled app idea and <a href=\"http://en.wikipedia.org/wiki/The_Wizard_%28Seinfeld%29\">name</a>. Getting yourself moving on an iOS app. <a href=\"http://www.joelonsoftware.com/items/2013/07/22.html\">Victory Lap for Ask Patents</a>. A 29-minute after-show extravaganza about lazy input sanitization and parameterization, extremely difficult games, eggs, and beaches. <p>Sponsored by:</p> <a href=\"http://hover.com/atp/\">Hover</a>: High-quality, no-hassle domain registration. Use promo code ATP for 10% off. <a href=\"http://23andme.com/atp\">23andMe</a>: Order your 23andMe DNA kit today for just $99.",
                "publishedAt": 1375381861,
                "duration": 6013
              }, {
                "uid": 9402608,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp23.mp3",
                "explicit": false,
                "episodeTitle": "23: The X Or The X",
                "episodeSummary": "FU: iSCSI and network Time Machine. <a href=\"http://www.ifixit.com/Teardown/AirPort+Extreme+A1521+Teardown/15044/1\">iFixit teardown of the new AirPort Extreme</a>. Apple's extended Developer Center downtime. (Note: we recorded this before we knew <em>why</em> it was down.) <a href=\"http://david-smith.org/blog/2013/07/16/apples-answer-on-upgrade-pricing/\">_DavidSmith on Logic X's pricing</a> and what this might indicate for future App Store upgrades. Whether upgrade pricing is best for consumers, and the upgrade-pricing train. iOS developers acting like the RIAA in 2002. The complexity of modern software business models. The Wal-Martization of app pricing and how <a href=\"http://www.youtube.com/watch?v=EtN3-hRV3n4\">Marble Madness</a> formed the modern Marco. Are Apple's policies really at fault for falling app prices? <p>Sponsored by:</p> <a href=\"http://agiletortoise.com/drafts/\">Drafts</a>: Where text starts on your iPhone or iPad. <a href=\"http://www.squarespace.com/atp\">Squarespace</a>: Everything you need to create an exceptional website. Use promo code ATP7 for 10% off.",
                "publishedAt": 1374769276,
                "duration": 4652
              }, {
                "uid": 8623339,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp22.mp3",
                "explicit": false,
                "episodeTitle": "22: Full Brichter",
                "episodeSummary": "Marco's new-new app, <a href=\"http://www.marco.org/bugshot\">Bugshot</a>, and some of its design decisions. Cutting features from 1.0 and trying to keep Bugshot from taking too much time. Bugshot gets the John Siracusa treatment. Exploring NAS options and initial impressions of the <a href=\"http://www.synology.com/products/spec.php?product_name=DS1813%2B&amp;lang=us\">Synology DS1813+</a>. Economics of <a href=\"http://www.freenas.org\">FreeNAS</a> or Mac Mini alternatives. iSCSI on Macs: the free <a href=\"http://www.studionetworksolutions.com/globalsan-iscsi-initiator/\">globalSAN initiator</a> and the $195 <a href=\"http://www.attotech.com/products/product.php?scat=17&amp;sku=INIT-MAC0-001\">ATTO initiator</a>, which comes recommended by <a href=\"http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html\">storage expert Dave Nanian</a>. NAS backup options, since <a href=\"http://www.backblaze.com/atp.html\">Backblaze</a> doesn't do network drives: <a href=\"http://www.crashplan.com\">CrashPlan</a> (with widespread upload-speed issues), or <a href=\"http://www.haystacksoftware.com/arq/\">Arq</a> (with potentially expensive Amazon Glacier or S3 costs). <a href=\"http://blog.plasticsfuture.org/2006/03/05/the-state-of-backup-and-cloning-tools-under-mac-os-x/\">Backing up Mac filesystem metadata</a>, <a href=\"https://github.com/n8gray/Backup-Bouncer\">Backup Bouncer</a>, and <a href=\"http://skowron.biz/artikel/backup-services/\">current scores of online backup apps</a>. Data hoarding and falling into John's backup vortex. The <a href=\"https://itunes.apple.com/us/podcast/apple-keynotes-hd/id470664050\">Apple Keynotes podcast feed</a>. <p>Sponsored by:</p> <a href=\"http://mindblitzapp.com/atp\">Mind Blitz</a>: An action-puzzle twist on the classic memory matching game. <a href=\"http://filetransporter.com/atp\">Transporter</a>: Private cloud storage. Use coupon code atp for 10% off.",
                "publishedAt": 1374163623,
                "duration": 5572
              }, {
                "uid": 7943705,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp21.mp3",
                "explicit": false,
                "episodeTitle": "21: The Transitive Property of Nerdiness",
                "episodeSummary": "iWatch follow-up. Alex Eckermann on <a href=\"https://alexeckermann.squarespace.com/blog/2013/7/10/an-accidental-article-talking-about-bluetooth-and-the-iwatch\">Bluetooth Low Energy and iWatch</a>. Eric Welander's <a href=\"http://welander.tv/blog/2013/7/9/the-s-in-iwatch-is-for-siri\">thoughts on Siri for iWatch</a>. iWatch as a <a href=\"https://alpha.app.net/jaste/post/7417570\">means of identity</a>. How regular people use iOS devices, as witnessed by John. Multitasking-switcher implications in iOS 7. iCloud's priority within Apple. <a href=\"https://www.dropbox.com/developers/datastore\">Dropbox Datastore API</a>, including its <a href=\"https://www.dropbox.com/developers/datastore/docs/js\">JavaScript API</a>. Does the Datastore API obviate the need for a web service? Nerd-targeted products. <p>Sponsored by:</p> <a href=\"http://filetransporter.com/atp\">Transporter</a>: Private cloud storage. Use coupon code atp for 10% off. <a href=\"http://audiblepodcast.com/atp\">Audible</a>: The leading provider of downloadable audiobooks.",
                "publishedAt": 1373630965,
                "duration": 5636
              }, {
                "uid": 7255135,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp20.mp3",
                "explicit": false,
                "episodeTitle": "20: A Box and a Strap",
                "episodeSummary": "<a href=\"http://www.reuters.com/article/2013/07/02/us-apple-hire-idUSBRE9611BP20130702\">Apple's Yves Saint Laurent hire</a> and the difficulty in predicting an \"iWatch\". <a href=\"http://hypercritical.co/2013/04/07/technological-conservatism\">Technological Conservatism</a>. <a href=\"http://www.panic.com/blog/2013/03/the-lightning-digital-av-adapter-surprise/\">Panic's Lightning-to-HDMI-cable discovery</a>. <a href=\"http://codeintolight.tumblr.com/post/54345993747/clarity-i-decided-to-see-how-the-ios7-interface\">Chris Harris on iOS 7 icons</a>. \"Free-to-play\" games. Coding for practice, and learning new APIs or languages. Overly specialized apps. <a href=\"http://www.glympse.com/\">Glympse</a> (Casey's road-trip-tracking app). <a href=\"http://www.feedwrangler.net/\">Feed Wrangler</a> by _DavidSmith as a Google Reader replacement that's compatible with <a href=\"http://reederapp.com\">Reeder for iPhone</a>. <a href=\"http://www.macworld.com/article/2043053/bye-bye-google-reader-alternative-rss-solutions-for-mac-and-ios-users.html\">Lex Friedman's RSS-sync roundup</a>. <a href=\"http://readkitapp.com/\">ReadKit for Mac</a> as a potential <a href=\"http://netnewswireapp.com/\">NetNewsWire</a> replacement. <a href=\"http://www.leancrew.com/all-this/2012/10/last-post-on-subscriber-counting/\">Dr. Drang's branch of Marco's RSS-subscriber-count script</a>. Why is OS X version adoption slower than iOS, and could Mavericks be free? <p>Sponsored by:</p> <a href=\"http://itunes.apple.com/us/app/optia/id347996243?mt=8\">Optia</a>: A beautiful, intuitive iOS puzzle game about reflecting light. <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code ATP for 10% off.",
                "publishedAt": 1373045231,
                "duration": 4559
              }, {
                "uid": 6608798,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp19.mp3",
                "explicit": false,
                "episodeTitle": "19: Designed by App in Cal",
                "episodeSummary": "John's review progress and show-duration predictors. The <a href=\"http://www.youtube.com/watch?v=VpZmIiIXuZ0\">WWDC 2013 intro video</a>. (<a href=\"http://www.youtube.com/watch?v=8OXI5qtges0\">Siri's WWDC 2012 intro</a>) Apple's \"<a href=\"http://www.apple.com/ios/videos/\">Making a Difference, One App at a Time</a>\" video. \"Designed by Apple in California\". <a href=\"http://www.youtube.com/watch?v=SH1jKZwcS9Y\">\"Jobs\" (Ashton Kutcher) trailer</a>. Why developers should (or shouldn't) <em>require</em> iOS 7 this fall. <a href=\"http://en.wikipedia.org/wiki/The_Transporter_%28franchise%29\">\"The Transporter\" series</a>. <a href=\"http://appleinsider.com/articles/13/06/17/inside-ios-7-calendar-app-comes-with-sterilized-ui-few-feature-changes\">iOS 7 Calendar app UI</a>. Cool-looking vs. well-designed. Our iTunes reviews. \"Better\" and \"worse\" programming languages. <p>Sponsored by:</p> <a href=\"http://audiblepodcast.com/atp\">Audible</a>: Download a free audiobook and start your 30-day trial. <a href=\"http://filetransporter.com/atp\">Transporter</a>: Private cloud storage. Use coupon code atp for 10% off.",
                "publishedAt": 1372349010,
                "duration": 5306
              }, {
                "uid": 5705700,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp18.mp3",
                "explicit": false,
                "episodeTitle": "18: Aluminum-Colored Aluminum",
                "episodeSummary": "Casey's fans at WWDC. Mac Pro followup. (<a href=\"http://hypercritical.co/2013/03/08/the-case-for-a-true-mac-pro-successor\">John's halo-car post</a>) The Xbox 180. Revisiting the potential for a larger-screen iPhone after having seen iOS 7. Predicting iOS 7 adoption. <a href=\"http://mrgan.tumblr.com/post/53308781143/wrong\">Neven Mrgan on iOS 7's icon grid</a>. <a href=\"http://www.macrumors.com/2013/06/19/apples-new-mac-pro-begins-showing-up-in-benchmarks/\">New Mac Pro appears in Geekbench</a> <a href=\"http://www.marco.org/2008/05/31/parallelize-shell-utility-to-execute-command-batches\">parallelize.c</a>/<a href=\"http://matpalm.com/blog/2009/11/06/xargs-parallel-execution/\">xargs parallel processing</a> <p>Sponsored by:</p> <a href=\"http://squarespace.com/atp\">Squarespace</a>: The all-in-one platform that makes it easy to create your own website. Use coupon code ATP6 for 10% off. <a href=\"http://aneventapart.com/atpfm\">An Event Apart</a>: The design conference for people who make websites.",
                "publishedAt": 1371766493,
                "duration": 4471
              }, {
                "uid": 4471912,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp17.mp3",
                "explicit": false,
                "episodeTitle": "17: Can't Innovate Anymore",
                "episodeSummary": "<p>Special early WWDC episode this week:</p> Reactions to the keynote. New Mac Pro Initial iOS 7 design impressions. <p>Sponsored by:</p> <a href=\"http://www.backblaze.com/atp\">Backblaze</a>: Easy, unlimited online backup for just $5 per month. <a href=\"http://www.windowsazure.com/ios\">Windows Azure Mobile Services</a>: Build a cloud-connected iOS app faster and easier.",
                "publishedAt": 1370934331,
                "duration": 4347
              }, {
                "uid": 4222711,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp16.mp3",
                "explicit": false,
                "episodeTitle": "16: John, We Don't Play Games",
                "episodeSummary": "<a href=\"https://soundcloud.com/la-king/accidentially-podcasted\">Opening theme by Larry King</a> (<a href=\"http://twitter.com/laking\">@laking</a>). The case for a modernized AppKit in OS X 10.9 a la <a href=\"http://chameleonproject.org/\">Chameleon</a>/<a href=\"https://github.com/twitter/twui\">TwUI</a>. The lack of official Apple Objective-C wrappers around old C APIs such as Keychain and Address Book. <a href=\"http://springboardshow.com/episodes/10\">Springboard #10</a> <a href=\"http://en.wikipedia.org/wiki/Small_matter_of_programming\">SMOP</a> <a href=\"http://david-smith.org\">Underscore</a> Should Apple add <a href=\"http://en.wikipedia.org/wiki/Type_inference\">type inference</a> to Objective-C? Haswell Retina MacBook Pro predictions and the possibility of having only the integrated GPU in the 15\". <a href=\"http://gfx.io\">gfxCardStatus</a> <a href=\"http://www.everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-2-duo-2.53-aluminum-15-mid-2009-sd-unibody-specs.html\">The only 15\" with integrated-only GPU</a> <a href=\"http://www.everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-i5-2.4-aluminum-15-mid-2010-unibody-specs.html\">The first unibody 15\" with high-res, matte LCD</a> <a href=\"http://www.anandtech.com/show/6993/intel-iris-pro-5200-graphics-review-core-i74950hq-tested\">Haswell integrated GPU explained</a> Mac Pro speculation. <a href=\"http://www.imore.com/ad-hoc-03-xbox-one-and-state-living-room\">John on Ad Hoc</a> <a href=\"http://en.wikipedia.org/wiki/Larrabee_%28microarchitecture%29\">Larrabee</a> <a href=\"http://www.anandtech.com/show/2420/2\">Intel's custom CPU for the first MacBook Air</a> <a href=\"http://www.anandtech.com/show/6001/apple-confirms-email-to-mac-pro-users-about-something-really-great-in-2013\">Thunderbolt problems on Xeon boards</a> <a href=\"http://www.marco.org/2013/06/05/future-mac-pro-rumor\">Marco's Mac Pro post this week</a> <a href=\"http://www.marco.org/2011/11/02/scaling-down-the-mac-pro\">Scaling down the Mac Pro/\"xMac\" challenges</a> <a href=\"http://www.anandtech.com/show/7026/intel-announces-thunderbolt-2-at-computex-20gbps-bidirectional-bandwidth-per-channel\">Thunderbolt 2</a> <a href=\"http://www.theverge.com/2013/6/4/4394294/asus-4k-monitor-price-release-date-and-retina-compatibility\">Asus' 4K monitor</a> <a href=\"http://www.marco.org/2009/10/25/the-more-i-think-and-learn-about-the-curious\">The first 27\" iMac's panel economics</a> Major iOS 7 API wishes: better inter-app communication mechanisms, \"default app\" associations, and periodic background updates. Quick WWDC tips. <a href=\"http://tumblr.caseyliss.com/post/52182719665\">Casey's WWDC predictions</a> <a href=\"http://tumblr.caseyliss.com/post/23099192614/wwdc-2012-tips\">Casey's WWDC tips from last year</a> <p>Sponsored by:</p> <a href=\"http://tonx.org/atp\">Tonx</a>: Freshly roasted coffee delivered straight to your door. New customers can get a free AeroPress by signing up for a Standard subscription by June 17. <a href=\"http://squarespace.com/atp\">Squarespace</a>: The all-in-one platform that makes it easy to create your own website. Use coupon code ATP6 for 10% off.",
                "publishedAt": 1370612648,
                "duration": 6223
              }, {
                "uid": 2780216,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp15.mp3",
                "explicit": false,
                "episodeTitle": "15: Cat, Modifier Cat",
                "episodeSummary": "Why Marco <a href=\"http://www.marco.org/2013/05/29/sold-the-magazine\">sold The Magazine</a>. Teasing apps before they're out, building hype, and <a href=\"http://carpeaqua.com/2013/05/29/pit-pass/\">Pit Pass</a>. <a href=\"http://allthingsd.com/20130529/apples-tim-cook-the-full-d11-interview-video/\">Tim Cook at AllThingsD</a>. Cook's presence and speaking style. What Cook implicitly said about future Apple products. WWDC predictions for OS X. <p>Sponsored by:</p> <a href=\"http://www.remobjects.com/oxygene/\">Oxygene for Cocoa</a>: Use coupon code ATP13 for 20% off. <a href=\"http://acqualia.com/soulver/\">Soulver</a>: The essential calculator-spreadsheet-notepad hybrid.",
                "publishedAt": 1370007377,
                "duration": 5276
              }, {
                "uid": 2709176,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp14.mp3",
                "explicit": false,
                "episodeTitle": "14: Pouring Champagne Onto Rap Stars",
                "episodeSummary": "Marco visits Siracusa's house and <a href=\"http://neutral.fm/episodes/2-turbo-buttons\">the car-assaulting tree</a>. <a href=\"http://scripting.com/davenet/2000/10/19/transcendentalMoney.html\">Transcendental Money</a>. <a href=\"https://square.com/cash\">Square Cash</a>. <a href=\"http://5by5.tv/b2w/120\">B2W 120 on financial \"safety nets\"</a>. Tumblr, Yahoo, and not screwing it up. Cloud hosting and moving up the stack. The modern game console's role. the Xbox One's <a href=\"http://www.anandtech.com/show/6972/xbox-one-hardware-compared-to-playstation-4\">hardware design</a>, and the messy world of TV-connected boxes. <p>Sponsored by:</p> <a href=\"http://www.squarespace.com/atp\">Squarespace</a>: Use coupon code ATP5 for 10% off. <a href=\"http://www.windowsazure.com/ios\">Windows Azure Mobile Services</a>: Get started today for free.",
                "publishedAt": 1369435804,
                "duration": 5549
              }, {
                "uid": 2603463,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp13.mp3",
                "explicit": false,
                "episodeTitle": "13: Animated Kale",
                "episodeSummary": "Our theme song by <a href=\"http://jonathanmann.net/\">Jonathan Mann</a> -- follow his <a href=\"http://www.youtube.com/songadaymann\">Song A Day on YouTube</a>, and check out <a href=\"http://jonathanmann.net/\">his site</a> if you or your company would like a catchy, fun song. Thanks for the ATP theme song, Jonathan! Casey and Marco get deluged with to-do app recommendations. The difficulty in getting people to change to a new app, but conversely, the potential success for slightly differentiated apps in an otherwise crowded market. Google I/O keynote reactions. Localizing apps to different languages. The sad state of iTunes Connect. Staged rollouts, purchase analytics, beta testing, and the different developer attitudes of Apple and Google. Why Google is consistently able to kick Apple's butt in services (and engineering?). <a href=\"https://twitter.com/lautenbach/status/334714660047691777\">Google Play Music All Access</a>, Hangouts, and the new Google Maps. <a href=\"http://www.steamclock.com/blog/2013/05/apple-objective-c-javascript-bridge/\">Apple's Objective-C to Javascript bridge</a>. The App Store UI. <p>Sponsored by:</p> <a href=\"http://aneventapart.com/atpfm\">An Event Apart</a>: The design conference for people who make websites. <a href=\"http://cocoaconf.com/\">CocoaConf</a>: A conference for iPhone, iPad, and Mac developers. Use coupon code ATP for 20% off any ticket.",
                "publishedAt": 1368799094,
                "duration": 5275
              }, {
                "uid": 2517936,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp12.mp3",
                "explicit": false,
                "episodeTitle": "12: Accidental Server Hardware",
                "episodeSummary": "FU on Apple's <a href=\"http://pablin.org/2013/05/06/apples-tick-tock-strategy/\">tick-tock pattern</a>. Marco's PHP framework and sponsor-tracking web app, and why both exist. Usability and security implications of passwordless login systems. The Mac Mini's seemingly accidental success. Podcasters who <a href=\"http://theeastwing.net/episodes/53\">hate the word \"podcast\"</a>, its quality connotation, efforts to <a href=\"http://nextmarket.co/blogs/conversations/7801787-leo-laporte-talks-podcasting\">invent alternative names</a>, and barriers to entry. Brent Simmons' <a href=\"http://inessential.com/2013/05/07/30_minutes_to_sync\">30 Minutes To Sync</a> proposal. Building web services on Apple's infrastructure. <p>Sponsored by:</p> <a href=\"http://macminivault.com/try\">Mac Mini Vault</a>: Colocate or rent your own Mac Mini. Use promo code ATP50 for 50% off your first three months. <a href=\"http://hover.com/atp\">Hover</a>: High-quality, no-hassle domain registration. Use promo code ATP for 10% off.",
                "publishedAt": 1368205879,
                "size": 45145852,
                "duration": 5627
              }, {
                "uid": 2429374,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp11.mp3",
                "explicit": false,
                "episodeTitle": "11: A Particularly Exuberant Adolescence",
                "episodeSummary": "The WWDC <a href=\"http://hypercritical.co/2013/04/26/the-lottery\">ticket lottery</a> and <a href=\"http://www.marco.org/2013/04/26/replacing-wwdc\">potential solutions</a>, or a <a href=\"http://www.therussiansusedapencil.com/post/49279203585/wwdc-ticket-distribution\">merit system</a>. Why Marco <a href=\"http://www.marco.org/2013/04/25/instapaper-next-generation\">sold Instapaper</a>. (<a href=\"http://5by5.tv/quit/21\">See also</a>.) Prospects for replacing Instapaper's income. Speculating on today's app market. <a href=\"https://the-magazine.org/\">The Magazine</a>'s app and Newsstand quality. Motivation, development, and homework. iOS 7's rumored visual overhaul and other speculation. The transition away from Steve Jobs' influence. What's left for iOS 7 to add? <p>Sponsored by <a href=\"http://www.squarespace.com/atp\">Squarespace</a>: Use discount code ATP5 at checkout for 10% off.</p>",
                "publishedAt": 1367587266,
                "size": 38190972,
                "duration": 4757
              }, {
                "uid": 2374571,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp10.mp3",
                "explicit": false,
                "episodeTitle": "10: Gradual Ramp Up To Nothing",
                "episodeSummary": "Laptops in school. Getting a tech job with and without a college degree. Running mail servers in today's spam environment. Steve Jobs' unauthorized talking points. The WWDC announcement and trying to get tickets. Going to WWDC vs. a ticketless trip vs. watching the videos at home. Apple's Q2 earnings and hints dropped during the call. The tech industry's holding pattern with bored consumers. Marco's mom buys her first smartphone, ignoring Marco's advice. Which one did she get? <p>Sponsored by <a href=\"http://mailroute.net/\">MailRoute</a> and <a href=\"http://www.hover.com/atp\">Hover</a>.</p>",
                "publishedAt": 1366985202,
                "size": 40436034,
                "duration": 5037
              }, {
                "uid": 2345618,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp9.mp3",
                "explicit": false,
                "episodeTitle": "9: Fish Bicycle Scenario",
                "episodeSummary": "Why are PC sales down? Why and when people have bought new PCs in the past. Forgoing or neglecting PCs today. PCs in businesses. Apple and IT departments. Last decade's Tablet PCs. The outlook for Windows 8 tablets in businesses. What will change if Microsoft Office is released for iOS? What AirPrint and black CD-Rs have in common. Still using (and abusing) <a href=\"http://www.youtube.com/user/songadaymann\">Jonathan Mann's awesome ending song</a>. Follow him and check out his other songs on YouTube. <p>Sponsored by <a href=\"http://squarespace.com/atp\">Squarespace</a>: Use code ATP4 at checkout for 10% off.</p>",
                "publishedAt": 1366392739,
                "size": 31345433,
                "duration": 3902
              }, {
                "uid": 2319049,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp8.mp3",
                "explicit": false,
                "episodeTitle": "8: Hold Me!",
                "episodeSummary": "Giving Dave Morin the benefit of the doubt on <a href=\"http://www.vanityfair.com/culture/my-phone/2013/03/dave-morin-path-facebook-apple\">that Vanity Fair trainwreck</a>. Who <a href=\"http://techcrunch.com/2013/04/04/facebook-home-launch/\">Facebook Home</a> is for and why Facebook made it. Whether Facebook, Amazon, Samsung, etc. could or should make their own OS or maintain completely diverged Android forks. Google <a href=\"http://blog.chromium.org/2013/04/blink-rendering-engine-for-chromium.html\">forking WebKit</a>, Chrome vs. Safari, and the fork's likely implications for Apple and web developers. <a href=\"http://www.imore.com/debug-11-don-melton-and-safari\">Debug #11: Don Melton and Safari</a> <a href=\"http://bitergia.com/public/reports/webkit/2013_01/\">WebKit contributors by company</a> Panic's new <a href=\"http://panic.com/statusboard/\">Status Board app</a> (and <a href=\"https://twitter.com/rustyshelf/status/321773898070908928\">IAP reaction</a>). We included <a href=\"http://www.youtube.com/user/songadaymann\">Jonathan Mann's</a> ending theme song again. Thanks, Jonathan! <p>Sponsored by <a href=\"http://www.igloosoftware.com/campaigns/atp\">Igloo Software</a>.</p>",
                "publishedAt": 1365795401,
                "size": 40941516,
                "duration": 5101
              }, {
                "uid": 2298305,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp7.mp3",
                "explicit": false,
                "episodeTitle": "7: The Forecast For iCloud",
                "episodeSummary": "Summly's acquisition by Yahoo, and what could have justified its price. (<a href=\"http://www.marco.org/2013/03/26/summly\">Marco</a>, <a href=\"http://blogs.wsj.com/tech-europe/2013/03/26/what-does-30-million-buy-you/\">WSJ</a>) The quality of speech recognition. Challenges of big tech companies such as Apple hiring and retaining great talent. Why iCloud sync <a href=\"http://www.theverge.com/2013/3/26/4148628/why-doesnt-icloud-just-work\">works so badly for developers</a> and whether it's fixable. <a href=\"http://inessential.com/2013/03/27/why_developers_shouldnt_use_icloud_sy\">Why developers shouldn't use iCloud</a> even if it worked. <a href=\"http://www.youtube.com/watch?v=iCXItGrjqrw\">Jonathan Mann's ATP Ending Theme Song</a> and the <a href=\"https://soundcloud.com/jonathanmann/atp-ending-theme-more-bleeps\">More Bleeps version</a>. <p>Sponsored by <a href=\"http://squarespace.com/atp\">Squarespace</a>: Use code ATP3 at checkout for 10% off.</p>",
                "publishedAt": 1364568119,
                "size": 45779461,
                "duration": 5690
              }, {
                "uid": 2298306,
                "mediaUrl": "http://traffic.libsyn.com/atpfm/atp6.mp3",
                "explicit": false,
                "episodeTitle": "6: Live Like Other People",
                "episodeSummary": "How Marco buys a TV (unlike <a href=\"http://5by5.tv/hypercritical/1\">how John does</a>). Regular people noticing and caring about high-DPI screens. The amazing Mac lineup that few care about. Which Mac would we tell people to buy? Marco revisits the <a href=\"http://www.marco.org/2012/10/26/an-alternate-universe\">Microsoft Store</a>. The Surface Pro's uniqueness. Why GarageBand's adoption of <a href=\"http://audiob.us\">Audiobus</a> is so interesting. How exposed filesystems <em>and</em> iCloud's document model both fail users. <p>Sponsored by <a href=\"http://squarespace.com/atp\">Squarespace</a>: Use code ATP3 at checkout for 10% off.</p>",
                "publishedAt": 1363974079,
                "size": 48883878,
                "duration": 6110
              }
            ]
          }
        ]);
        feeds.forEach(function(feed) {
          return feed.save();
        });
        return feeds.models;
      };
      API = {
        getFeedEntity: function(feedId) {
          var defer, feed;
          feed = new Entities.Feed({
            id: feedId
          });
          defer = $.Deferred();
          setTimeout((function() {
            return feed.fetch({
              success: function(data) {
                return defer.resolve(data);
              },
              error: function() {
                return defer.resolve(undefined);
              }
            });
          }), 500);
          return defer.promise();
        },
        getEpisodeEntity: function(episodeIdentifier) {
          var defer, episodeString, feed;
          episodeString = episodeIdentifier.split("-", 2);
          feed = new Entities.Feed({
            id: episodeString[0]
          });
          defer = $.Deferred();
          setTimeout((function() {
            return feed.fetch({
              success: function(data) {
                var episode;
                feed = defer.resolve(data);
                for (episode in episodes) {
                  if (episode.id === episodeString[1]) {
                    return episode;
                  }
                  return null;
                }
              },
              error: function() {
                return defer.resolve(undefined);
              }
            });
          }), 500);
          return defer.promise();
        },
        getFeedEntities: function() {
          var defer, promise;
          feeds = new Entities.Feeds();
          defer = $.Deferred();
          feeds.fetch({
            success: function(data) {
              return defer.resolve(data);
            }
          });
          promise = defer.promise();
          $.when(promise).done(function(feeds) {
            var models;
            if (feeds.length === 0) {
              models = initializeFeeds();
              return feeds.reset(models);
            }
          });
          return promise;
        },
        getPlaylistDisplayData: function() {}
      };
      Swabcast.reqres.setHandler("episode:entity", function(episodeId) {
        return API.getEpisodeEntity(episodeId);
      });
      Swabcast.reqres.setHandler("entities:library", function() {
        return API.getFeedEntities();
      });
      Swabcast.reqres.setHandler("feed:entity", function(id) {
        return API.getFeedEntity(id);
      });
      return Swabcast.reqres.setHandler("titles:episode:entity", function(playlistIdentifiers) {
        return API.getPlaylistDisplayData(playlistIdentifiers);
      });
    });
  });

}).call(this);
