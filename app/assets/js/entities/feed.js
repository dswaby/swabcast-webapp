(function() {
  define(["app", "apps/config/storage/localstorage"], function(Swabcast) {
    Swabcast.module("Entities", function(Entities, Swabcast, Backbone, Marionette, $, _) {
      var API, feeds, initializeFeeds;
      Entities.Track = Backbone.Model.extend({
        urlRoot: "track",
        defaults: {
          albumArt: "podcast-default.png",
          episodeTitle: "",
          episodeParent: "",
          mediaUrl: "",
          enqueue: false
        }
      });
      Entities.configureStorage(Entities.Track);
      Entities.Tracks = Backbone.Collection.extend({
        url: "track",
        model: Entities.Track,
        comparator: "episodeTitle"
      });
      Entities.configureStorage(Entities.Tracks);
      Entities.Feed = Backbone.Model.extend({
        urlRoot: "feeds",
        defaults: {
          feedUid: "",
          subscriptionTitle: "",
          albumArt: "default.jpg",
          summary: "na",
          feedUrl: "http://somefeed.com/feed.xml",
          authors: ""
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
            feedUid: 8396,
            feedUrl: "http://shoptalkshow.com/feed/podcast/",
            subscriptionTitle: "ShopTalk",
            summary: "ShopTalk is a podcast about front end web design, development and UX. Each week Chris Coyier and Dave Rupert are joined by a special guest to talk shop and answer listener submitted questions.",
            albumArt: "shoptalk.jpeg",
            numberOfEpisodes: 92,
            tracks: [
              {
                uid: 33639033,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/464/0/131434-092-with-dudley-storey.mp3",
                episodeTitle: "092: With Dudley Storey",
                episodeSummary: "This week we were joined by Dudley Storey. Dudley is a teacher, craftsman, designer &amp; writer, and the author of Pro CSS3 Animation. News’n’Links’n’Drama: 7:00 Webkit hates src-N End Of Year Responsive Images Report 13:14 CSSOff 2013 17:20 Learn jQuery from Scratch (CSS-Tricks Class) Q &amp; A: 21:15 Is it worth taking the time to... <a href=\"http://shoptalkshow.com/episodes/092-with-dudley-storey/\" title=\"Read 092: With Dudley Storey\">Read more »</a>",
                duration: 3950
              }, {
                uid: 33356609,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/468/0/129716-091-js-jabber-crossover.mp3",
                episodeTitle: "091: With Jamison Dance AND Merrick Christensen",
                episodeSummary: "This week we were joined by Merrick and Jamison from the Javascript Jabber podcast. They are both super awesome at javascript and very handsome. We talked about (roughly in order): News’n’Links’n’Drama: 10:42 Responsive Web Design: Relying Too Much On Screen Size by LukeW Rebuttal by Ethan Marcotte: RESPONSIVE DESIGN, SCREENS, AND SHEARING LAYERS PPK: Of... <a href=\"http://shoptalkshow.com/episodes/091-js-jabber/\" title=\"Read 091: With Jamison Dance AND Merrick Christensen\">Read more »</a>",
                duration: 3731
              }, {
                uid: 33057072,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/462/0/127943-090-with-pamela-fox.mp3",
                episodeTitle: "090: With Pamela Fox",
                episodeSummary: "This week we were joined by Pamela Fox, a web developer and educator currently working at Khan Academy. We talked about (roughly in order): News’n’Links’n’Drama: 9:30 Big Snow Tiny Conf 10:30 Automating Workflow Slide Deck Q &amp; A: 14:54 I’m sold on GIT and have used it locally on my machine. How can I go... <a href=\"http://shoptalkshow.com/episodes/090-pamela-fox/\" title=\"Read 090: With Pamela Fox\">Read more »</a>",
                duration: 3875
              }, {
                uid: 32836743,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/457/0/126438-089-with-karen-mcgrane.mp3",
                episodeTitle: "089: With Karen McGrane",
                episodeSummary: "This week we were joined by Karen McGrane. Karen is a mobile content strategist and has a fantastic book called Content Strategy for Mobile. We talked about (roughly in order): News’n’Links’n’Drama: 24:08 Front End Architechture Showdown CSS Cargo Cult 25:19 Does our Industry have a Drinking Problem? 29:34 Scroll Hijacking Q &amp; A: 34:56 Why... <a href=\"http://shoptalkshow.com/episodes/089-karen-mcgrane/\" title=\"Read 089: With Karen McGrane\">Read more »</a>",
                duration: 3992
              }, {
                uid: 32553489,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/453/0/124664-088-with-scott-jehl.mp3",
                episodeTitle: "088: With Scott Jehl",
                episodeSummary: "This week we were joined by Scott Jehl, a progressive enhancer at Filament Group. We talked about (roughly in order): News’n’Links’n’Drama: 15:48 Godaddy aquired Media Temple Q &amp; A: 24:30 I want to use a ‘mobile first’ approach, but the client wants to see the desktop version first. How would you solve this little problem?... <a href=\"http://shoptalkshow.com/episodes/088-scott-jehl/\" title=\"Read 088: With Scott Jehl\">Read more »</a>",
                duration: 4323
              }, {
                uid: 32348061,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/444/0/123327-087-with-nicholas-gallagher.mp3",
                episodeTitle: "087: With Nicolas Gallagher",
                episodeSummary: "This week we were joined by Nicolas Gallagher, CSS expert. We talked about (roughly in order): News’n’Links’n’Drama: 8:29 EFF gets involved in DRM Q &amp; A: 13:40 I’m a front end developer working in Rails these days. I want an automated way to produce styles guides. How do you produce guides for your clients? Have... <a href=\"http://shoptalkshow.com/episodes/087-nicolas-gallagher/\" title=\"Read 087: With Nicolas Gallagher\">Read more »</a>",
                duration: 3756
              }, {
                uid: 32111032,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/439/0/120469-086-with-jenn-schiffer.mp3",
                episodeTitle: "086: With Jenn Schiffer",
                episodeSummary: "This week we were joined by Jenn Schiffer. Jenn works at sports-ball and knows Michael Jordan. She also makes websites! We talked about (roughly in order): Q &amp; A: 9:51 How can we go about getting back in touch with our inner creative coder? And how can we start introducing this back into our ‘bread... <a href=\"http://shoptalkshow.com/episodes/086-with-jenn-schiffer/\" title=\"Read 086: With Jenn Schiffer\">Read more »</a>",
                duration: 3595
              }, {
                uid: 31892954,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/434/0/119092-085-with-kimberly-blessing.mp3",
                episodeTitle: "085: With Kimberly Blessing",
                episodeSummary: "This week we were joined by Kimberly Blessing. We talked about (roughly in order): News’n’Links’n’Drama: 6:17 CERN – The birth of the web The first web browser FORK THE LINE-MODE BROWSER Q &amp; A: 16:02 What are your opinions on the nonstandard mozmm units? See also : Blog post. 24:20 I was wondering if either... <a href=\"http://shoptalkshow.com/episodes/085-with-kimberly-blessing/\" title=\"Read 085: With Kimberly Blessing\">Read more »</a>",
                duration: 3343
              }, {
                uid: 26416307,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/431/0/111080-084-rapidfire-20.mp3",
                episodeTitle: "084: RAPIDFIRE #20",
                episodeSummary: "It’s time for another RAPIDFIRE! No news, no drama, just lots of question and answer action. Q &amp; A: 0:51 How do you prefer ordering your queries within your stylesheet? Is mobile-first really the best strategy here? 8:27 Would either of you have any insights as to how to test, target, and develop for the... <a href=\"http://shoptalkshow.com/episodes/084-rapidfire-20/\" title=\"Read 084: RAPIDFIRE #20\">Read more »</a>",
                duration: 3505
              }, {
                uid: 25647103,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/429/0/111077-083-with-flo-motlik.mp3",
                episodeTitle: "083: With Florian Motlik",
                episodeSummary: "This week we were joined by Florian Motlik. Flo is an awesome programmer an a co-founder of Codeship.io, a part of Codestars Boston. This episode is a deep dive into continuous deployment and automation. We talked about (roughly in order): Q &amp; A: 13:08 I would like to use Git for version control, and set... <a href=\"http://shoptalkshow.com/episodes/083-with-florian-motlik/\" title=\"Read 083: With Florian Motlik\">Read more »</a>",
                duration: 3873
              }, {
                uid: 25086885,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/360/0/109751-082-with-jason-santa-maria.mp3",
                episodeTitle: "082: With Jason Santa Maria",
                episodeSummary: "This week we were joined by Jason Santa Maria, a designer currently in Brooklyn, New York. You might know Jason from his work on Typekit or more recently the writing collaboration tool Editorially. Or perhaps from past work like the WordPress logo and from working at renowned web studio Happy Cog. We talked about (roughly... <a href=\"http://shoptalkshow.com/episodes/082-with-jason-santa-maria/\" title=\"Read 082: With Jason Santa Maria\">Read more »</a>",
                duration: 3712
              }, {
                uid: 25330262,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/357/0/109752-081-with-geri-coady.mp3",
                episodeTitle: "081: With Geri Coady",
                episodeSummary: "This week we were joined by Geri Coady, an illustrator, designer, and author from Newfoundland, Canada. We talked about (roughly in order): News’n’Links’n’Drama 17:51 WooThemes Price Change, also here 22:00 Chrome’s password saving drama Q &amp; A 29:02 Are there any particular hues and shades of colors that are particularly inaccessible or render unfaithfully? Also,... <a href=\"http://shoptalkshow.com/episodes/081-with-geri-coady/\" title=\"Read 081: With Geri Coady\">Read more »</a>",
                duration: 3609
              }, {
                uid: 25330263,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/352/0/109753-080-rapidfire-19.mp3",
                episodeTitle: "080: RAPIDFIRE #19",
                episodeSummary: "It’s time for another RAPIDFIRE! We talk about (roughly in order): Q &amp; A 2:30 Which books would you recommend learning about CSS and /or UX design? 6:32 There is a lot of hype around the Hammer and Mixture static site generators right now. Can teams work on these together, or are they just made... <a href=\"http://shoptalkshow.com/episodes/080-rapidfire-18/\" title=\"Read 080: RAPIDFIRE #19\">Read more »</a>",
                duration: 3574
              }, {
                uid: 25330264,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/355/0/109754-079-with-travis-miller.mp3",
                episodeTitle: "079: With Travis Miller",
                episodeSummary: "This week we were joined by Travis Miller, a full stack developer at SPARK. Chris and Dave met Travis at Front End Conf where he gave a talk about hip hop and the web. We talk about (roughly in order): News’n’Links’n’Drama: 9:24 Why You Shouldn’t Tell That Random Girl On The Street That She’s Hot... <a href=\"http://shoptalkshow.com/episodes/079-with-travis-miller/\" title=\"Read 079: With Travis Miller\">Read more »</a>",
                duration: 3771
              }, {
                uid: 25330265,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/353/0/109755-078-with-rick-blalock.mp3",
                episodeTitle: "078: With Rick Blalock",
                episodeSummary: "This week we were joined by mobile architect Rick Blalock. Rick currently works at Appcelerator, a framework for building out native applications in Javascript. Rick also knows quite a bit about Joomla. We talked about (roughly in order): News’n’Links’n’Drama: 12:30 Why mobile apps are slow 21:17 Tweetbot Neue 22:42 Clear up EE drama: Brandon Kelley... <a href=\"http://shoptalkshow.com/episodes/078-with-rick-blalock/\" title=\"Read 078: With Rick Blalock\">Read more »</a>",
                duration: 3977
              }, {
                uid: 25330266,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/351/0/109756-077-rapidfire-18.mp3",
                episodeTitle: "077: RAPIDFIRE #18",
                episodeSummary: "This week it’s another RAPIDFIRE! We talked about (roughly in order): Q &amp; A 2:23 I recently ran the W3C Markup Validation tool on one of my WordPress site. I was amazed to see how many errors came up… Do you have any suggestions for validating my markup? 9:19 Should I learn Haml or Emmet... <a href=\"http://shoptalkshow.com/episodes/077-rapidfire-18/\" title=\"Read 077: RAPIDFIRE #18\">Read more »</a>",
                duration: 4354
              }, {
                uid: 25330267,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/347/0/109757-076-with-tim-sabat-and-alex-vazquez.mp3",
                episodeTitle: "076: With Tim Sabat and Alex Vazquez",
                episodeSummary: "This week we were joined by Tim Sabat and Alex Vazquez. Like Chris, Tim and Alex worked at Wufoo, then SurveyMonkey after the acquisition. Now all three of them are the founders of CodePen. We talk about (roughly in order): News’n’Links’n’Drama 13:02 Expression Engine Drama – “Competition Ethics &amp; Add-ons” 17:40 Firefox 23: Disable Javascript... <a href=\"http://shoptalkshow.com/episodes/076-with-tim-sabat-and-alex-vazquez/\" title=\"Read 076: With Tim Sabat and Alex Vazquez\">Read more »</a>",
                duration: 3981
              }, {
                uid: 25330268,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/348/0/109758-075-with-tim-kadlec.mp3",
                episodeTitle: "075: With Tim Kadlec",
                episodeSummary: "This week we were joined by Tim Kadlec. Tim is a front end developer, blogger, book author, and started the web conference Breaking Development at his previous job. We talk about (roughly in order): News’n’Links’n’Drama 3:40 “Just Build Websites!” Soundbyte 5:30 Breaking Development Conf 9:30 Tim’s Drama: Science and responsive images 19:15 “The Sidebar In... <a href=\"http://shoptalkshow.com/episodes/075-with-tim-kadlec/\" title=\"Read 075: With Tim Kadlec\">Read more »</a>",
                duration: 3904
              }, {
                uid: 25330269,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/345/0/109759-live-from-front-end-conf.mp3",
                episodeTitle: "Live from Front-End Conf",
                episodeSummary: "This episode of Shop Talk was filmed before a live studio audience. Thanks to Dan &amp; Cherrie Denney for inviting us down to Front-End Design Conference in St. Petersburg, Florida. Chris played the banjo a bit and Dave wore a Floridian shirt. It is a spectacular conference and a lot of fun was had. We... <a href=\"http://shoptalkshow.com/episodes/live-from-front-end-conf/\" title=\"Read Live from Front-End Conf\">Read more »</a>",
                duration: 1745
              }, {
                uid: 25330270,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/342/0/109760-074-with-noah-stokes.mp3",
                episodeTitle: "074: With Noah Stokes",
                episodeSummary: "This week we were joined by Noah Stokes, founder and partner of Bold (a web design studio) as well as a designer and front end coder with the best of them. Noah is also a professional newscaster, blogger‘, and speaker. We talked about (roughly in order): News’n’Links’n’Drama: 9:57 PRISM 13:05 “Ughck. Images.” 17:47 More about... <a href=\"http://shoptalkshow.com/episodes/074-with-noah-stokes/\" title=\"Read 074: With Noah Stokes\">Read more »</a>",
                duration: 3810
              }, {
                uid: 25330271,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/340/0/109761-073-with-val-head.mp3",
                episodeTitle: "073: With Val Head",
                episodeSummary: "This week we were joined by Val Head. Val is a designer and consultant. She co-founded Web Design Day and Refresh Pittsburgh, is the Managing Editor of CreativeJS.com, and just released the CSS Animations Pocket Guide on Five Simple Steps. We have some sponsor spots open! Get your thing in front of lots of smart,... <a href=\"http://shoptalkshow.com/episodes/073-with-val-head/\" title=\"Read 073: With Val Head\">Read more »</a>",
                duration: 3623
              }, {
                uid: 25330272,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/338/0/109762-072-with-raquel-velez.mp3",
                episodeTitle: "072: With Raquel Velez",
                episodeSummary: "This week we were joined by Raquel Velez, an all around web and robot hacker focusing on Node.js at the moment at Storify. We talked about (roughly in order): News’n’Links’n’Drama: 5:30 Why is Node good for robots? Q &amp; A: 14:50 I was wondering if you could talk about what the ideal scenario is to... <a href=\"http://shoptalkshow.com/episodes/072-with-raquel-velez/\" title=\"Read 072: With Raquel Velez\">Read more »</a>",
                duration: 3752
              }, {
                uid: 25330273,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/333/0/109763-071-rapidfire-17.mp3",
                episodeTitle: "071: RAPIDFIRE #17",
                episodeSummary: "This week we have a special RAPIDFIRE episode for you! We’re gonna answer as many of your questions as possible, as best as we can (in three minutes or less)! We talked about (roughly in order): Q &amp; A 2:50 I’m trying to think about mobile first. Is serving HTML content through JavaScript bad? Can... <a href=\"http://shoptalkshow.com/episodes/071-rapidfire-17/\" title=\"Read 071: RAPIDFIRE #17\">Read more »</a>",
                duration: 3507
              }, {
                uid: 25330274,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/329/0/109764-070-with-hampton-catlin.mp3",
                episodeTitle: "070: With Hampton Catlin",
                episodeSummary: "This week we were joined by Hampton Catlin. Hampton is the inventor of Sass and Haml, the original creator of Wikipedia Mobile, and several successful iPhone applications including Dictionary! Hampton is currently building crazy new technologies to mobilize the web at Moovweb. We talked about (roughly in order): News’n’Links’n’Drama 19:20 Welcome, Recent Graduates by Mike... <a href=\"http://shoptalkshow.com/episodes/070-with-hampton-catlin/\" title=\"Read 070: With Hampton Catlin\">Read more »</a>",
                duration: 3712
              }, {
                uid: 25330275,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/327/0/109765-069-with-mike-taylor.mp3",
                episodeTitle: "069: With Mike Taylor",
                episodeSummary: "This week we were joined by Mike Taylor, a whitespace strategist from Opera. We talked about (roughly in order): News’n’Links’n’Drama: 6:37 The W3C added EME Spec (aka DRM for video) Q &amp; A 19:24 Percentages seem to render different in Opera, what’s the deal? Should I use media queries instead? 23:42 Wouldn’t it be nice... <a href=\"http://shoptalkshow.com/episodes/069-with-mike-taylor/\" title=\"Read 069: With Mike Taylor\">Read more »</a>",
                duration: 3543
              }, {
                uid: 25330276,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/323/0/109766-068-with-ben-schwarz.mp3",
                episodeTitle: "068: With Ben Schwarz",
                episodeSummary: "This week we were joined by Ben Schwarz, a full stack web hacker, tool maker, and tip sharer from Melbourne, Australia. We talked about (roughly in order): News’n’Links’n’Drama: 4:00 Ben’s latest project Gallery CSS 11:30 Global Accessibility Awareness Day 14:50 National Fart JavaScript Awareness Day Q &amp; A: 16:30 When does Ben use Grunt JS... <a href=\"http://shoptalkshow.com/episodes/068-with-ben-schwarz/\" title=\"Read 068: With Ben Schwarz\">Read more »</a>",
                duration: 4149
              }, {
                uid: 25330277,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/317/0/109767-067-with-pam-selle.mp3",
                episodeTitle: "067: With Pam Selle",
                episodeSummary: "This week we were joined by Pam Selle, a full stack developer in many languages and all around hacker from Philly. Pam works at AxisPhilly, teaches for GirlDevelopIt, and blogs at The Webivore. We talk about (roughly in order): News’n’Links’n’Drama 1:50 Introducing Pam Selle 2:45 Pam’s day job: Axis Philly 4:00 Girl Develop It 8:37... <a href=\"http://shoptalkshow.com/episodes/067-with-pam-selle/\" title=\"Read 067: With Pam Selle\">Read more »</a>",
                duration: 3898
              }, {
                uid: 25330278,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/300/0/109768-066-rapidfire-16.mp3",
                episodeTitle: "066: RAPIDFIRE #16",
                episodeSummary: "Another classic RAPIDFIRE! No guests, no drama, no news, just all redhot question on answer action. What do you use to concatenate JavaScript files before production on Windows? Aren’t thinks like history.pushState just new JavaScript things, not HTML5? Can Sublime Text help with re-usable components? How do you diagram these fancy one-page style apps? How... <a href=\"http://shoptalkshow.com/episodes/066-rapidfire-16/\" title=\"Read 066: RAPIDFIRE #16\">Read more »</a>",
                duration: 4649
              }, {
                uid: 25330279,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/313/0/109769-065-with-ben-frain.mp3",
                episodeTitle: "065: With Ben Frain",
                episodeSummary: "This week we were joined by Ben Frain, a web developer, technology columnist, and book author from Cheshire, UK. Ben has written for major publications like MacUser, .net, and The Guardian and is also a very famous television actor. We talked about (roughly in order): News’n'Links’n'Drama Seven Rules nonsense. Aral Balkan’s Slide &amp; Stage The... <a href=\"http://shoptalkshow.com/episodes/056-with-ben-frain/\" title=\"Read 065: With Ben Frain\">Read more »</a>",
                duration: 3898
              }, {
                uid: 25330280,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/290/0/109770-064-rapidfire-15.mp3",
                episodeTitle: "064: RAPIDFIRE #15",
                episodeSummary: "Another RAPIDFIRE episode where Dave and Chris answer as many questions as possible. No guests, no news, no drama, just all question on answer action. This time they set a timer so no answer may exceed 3 minutes! 2:43 Should you learn jQuery or JavaScript first? 5:30 How come two scripts seem to work fine... <a href=\"http://shoptalkshow.com/episodes/064-rapidfire-15/\" title=\"Read 064: RAPIDFIRE #15\">Read more »</a>",
                duration: 3367
              }, {
                uid: 25330281,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/307/0/109771-063-with-rachel-nabors.mp3",
                episodeTitle: "063: With Rachel Nabors",
                episodeSummary: "This week we were joined by Rachel Nabors, a cartoonist, illustrator, designer, and front end developer out of Raleigh, North Carolina. Rachel is highly interested in animations and sound in CSS and JavaScript. We talk about (roughly in order): News’n'Links’n'Drama 11:34 – hgroup removed from HTML 5.1 16:25 – Copy vs. Design (Robert Williams, Tim... <a href=\"http://shoptalkshow.com/episodes/with-rachel-nabors/\" title=\"Read 063: With Rachel Nabors\">Read more »</a>",
                duration: 4284
              }, {
                uid: 25330282,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/298/0/109772-062-with-brandon-mathis.mp3",
                episodeTitle: "062: With Brandon Mathis",
                episodeSummary: "This week we were joined by Brandon Mathis, a web worker out of Birmingham, Alabama working for MongoHQ. Brandon is on the Compass team and is the creator of the static site generator Octopress. We talk about (roughly in order): News’n'Links (9:41) – Getting Started with Octopress Q &amp; A (26:32) – Regenerating sprites with... <a href=\"http://shoptalkshow.com/episodes/062-with-brandon-mathis/\" title=\"Read 062: With Brandon Mathis\">Read more »</a>",
                duration: 3805
              }, {
                uid: 25330283,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/292/0/109773-061-with-alex-sexton.mp3",
                episodeTitle: "061: With Alex Sexton",
                episodeSummary: "This week we were joined by Alex Sexton, a JavaScript developer for BazaarVoice, ex-yayQuery star, Modernizr team member, YepNope inventor, TXJS organizer, and essentially the world’s best loved ginger. We talked about (roughly in order): New’n'Links’n'Drama Donglegate: Venture Beat, Hacker News, Amanda Blum, Estelle Weyl Are UX and Design different? Dan Eden, Mark Otto Done... <a href=\"http://shoptalkshow.com/episodes/061-with-alex-sexton/\" title=\"Read 061: With Alex Sexton\">Read more »</a>",
                duration: 3923
              }, {
                uid: 25330284,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/288/0/109774-060-with-samantha-warren.mp3",
                episodeTitle: "060: With Samantha Warren",
                episodeSummary: "This week we were joined by Samantha Warren, a designer and recent San Fransico-ite. She moved from Washington D.C. to work for Twitter. Samantha is known for her love of all things typography and design and speaks at conferences around the world about these things. Most recently, about Style Tiles, a concept for showing design... <a href=\"http://shoptalkshow.com/episodes/060-with-samantha-warren/\" title=\"Read 060: With Samantha Warren\">Read more »</a>",
                duration: 3987
              }, {
                uid: 25330285,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/281/0/109775-059-with-lara-swanson.mp3",
                episodeTitle: "059: With Lara Swanson",
                episodeSummary: "This week we were joined by Lara Swanson, formerly UX manager at Dyn and now a manager of mobile web at Etsy. Lara has long been a champion of web performance, UX, and being a good front end developer. We talk about (roughly in order): News’n'Links’n'Drama LayerVault vs. DesignModo “Pinkifying the recruiting process” FRED Client-Hints... <a href=\"http://shoptalkshow.com/episodes/059-with-lara-swanson/\" title=\"Read 059: With Lara Swanson\">Read more »</a>",
                duration: 3983
              }, {
                uid: 25330286,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/278/0/109776-058-with-derek-featherstone.mp3",
                episodeTitle: "058: With Derek Featherstone",
                episodeSummary: "This week we were joined by Derek Featherstone, an accessibility specialist and leader of Simply Accessible, a consulting firm in Ottawa, Canada. The full show transcript is available here. We talk about (roughly in order): News’n'Links’n'Drama ARIA tree roles, not so simple Nav in lists discussion again Q &amp; A Does display: table; have an... <a href=\"http://shoptalkshow.com/episodes/058-with-derek-featherstone/\" title=\"Read 058: With Derek Featherstone\">Read more »</a>",
                duration: 4035
              }, {
                uid: 25330287,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/274/0/109777-057-with-jeff-starr.mp3",
                episodeTitle: "057: With Jeff Starr",
                episodeSummary: "This week we were joined by Jeff Starr, who has been blogging about the web for longer than either of us. Jeff is a WordPress master, co-author of Digging Into WordPress (with Chris) and author of HTAccess Made Easy. We talk about (roughly in order): News’n'Links’n'Drama DevTees Opera goes WebKit Speaking Up: Sarah Parmenter &amp;... <a href=\"http://shoptalkshow.com/episodes/057-with-jeff-starr/\" title=\"Read 057: With Jeff Starr\">Read more »</a>",
                duration: 3972
              }, {
                uid: 25330288,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/269/0/109778-056-rapidfire-14.mp3",
                episodeTitle: "056: RAPIDFIRE #14",
                episodeSummary: "No guests, no drama, no, whatever, other stuff. Just all question on answer action with Chris and Dave. We talk about (roughly in order): Like a unicorn horn through the heart. How to handle a late in the game career change. More thoughts on when/where to use Class/ID. How do you learn more about the... <a href=\"http://shoptalkshow.com/episodes/056-rapidfire-14/\" title=\"Read 056: RAPIDFIRE #14\">Read more »</a>",
                duration: 3505
              }, {
                uid: 25330289,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/264/0/109779-055-rapidfire-13.mp3",
                episodeTitle: "055: RAPIDFIRE #13",
                episodeSummary: "This week is just Dave and Chris answering as many listener questions as possible. That’s right, it’s RAPIDFIRE time! rat-a-tat-tat. We talk about (roughly in order): What do we think of Kirby CMS? Do we use Compass too? Are there Compass specific plugins? Can you change a Sass variable depending on the media query? Is... <a href=\"http://shoptalkshow.com/episodes/55-rapidfire-13/\" title=\"Read 055: RAPIDFIRE #13\">Read more »</a>",
                duration: 2929
              }, {
                uid: 25330290,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/267/0/109780-054-with-stephanie-rewis.mp3",
                episodeTitle: "054: With Stephanie Rewis",
                episodeSummary: "Stephanie Rewis is a front end engineer who was a speaker, trainer, and builder all simultaneously for many many years and is now the VP of front end at a not yet launched CRM startup. We talk about (roughly in order): News’n'Links’n'Drama Navigation in Lists? Q &amp; A Do you use CSS3 selectors? (not just... <a href=\"http://shoptalkshow.com/episodes/054-with-stephanie-rewis/\" title=\"Read 054: With Stephanie Rewis\">Read more »</a>",
                duration: 3991
              }, {
                uid: 25330291,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/261/0/109781-053-with-divya-manian-garann-means.mp3",
                episodeTitle: "053: With Divya Manian & Garann Means",
                episodeSummary: "This week we were joined by Divya Manian, an “Open Web Pamphleteer” at Adobe and Garann Means, a web developer at Etsy and fellow Austinite with Dave. Together they from Frip Frap, a video podcast about front end stuff. That’s right, #CROSSOVER! We talk about (roughly in order): News’n'Links’n'Drama WordPress vs Envato drama. Two second... <a href=\"http://shoptalkshow.com/episodes/053-with-divya-manian-garann-means/\" title=\"Read 053: With Divya Manian &amp; Garann Means\">Read more »</a>",
                duration: 3372
              }, {
                uid: 25330292,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/256/0/109782-052-with-niki-brown-and-liz-andrade.mp3",
                episodeTitle: "052: With Niki Brown and Liz Andrade",
                episodeSummary: "This week we were joined by Niki Brown and Liz Andrade, both independent web designers and developers who together form the Pagebreak Podcast. That’s right, another #CROSSOVER! We talk about (roughly in order): News’n'Links In true crossover style, we discuss the article Becoming Better Communicators. Q &amp; A When you build a site with WordPress,... <a href=\"http://shoptalkshow.com/episodes/052-with-niki-brown-and-liz-andrade/\" title=\"Read 052: With Niki Brown and Liz Andrade\">Read more »</a>",
                duration: 3879
              }, {
                uid: 25330293,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/252/0/109783-051-with-drew-wilson.mp3",
                episodeTitle: "051: With Drew Wilson",
                episodeSummary: "This week we were joined by Drew Wilson, a designer and developer (a true cross-bread powerhouse) out of Oceanside, California. Drew created the first widely popular icon font, Pictos. He is a conference organizer, producing ValioCon. He’s the creator of web apps like Space Box and Dialoggs. The list goes on and on. We talk... <a href=\"http://shoptalkshow.com/episodes/with-drew-wilson/\" title=\"Read 051: With Drew Wilson\">Read more »</a>",
                duration: 3897
              }, {
                uid: 25330294,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/250/0/109784-050-with-daryl-koopersmith.mp3",
                episodeTitle: "050: With Daryl Koopersmith",
                episodeSummary: "This week we were joined by Daryl Koopersmith, a San Francisco based web developer. Daryl was a lead developer on WordPress, and co-headed up the recent 3.5 release, specifically working on the new (awesome) media manager. We talk about (roughly in order): News’n'Links’n'Drama Daryl has left Automattic and is looking for something fresh Pseudo elements... <a href=\"http://shoptalkshow.com/episodes/050-with-daryl-koopersmith/\" title=\"Read 050: With Daryl Koopersmith\">Read more »</a>",
                duration: 4029
              }, {
                uid: 25330295,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/246/0/109785-049-with-david-walsh.mp3",
                episodeTitle: "049: With David Walsh",
                episodeSummary: "David Walsh is a MooTools lover, recent Mozilla-er, and (for a final “M”), fellow original Madisonian with Chris. David has been writing at his blog The David Walsh Blog for over five years. We talk about (roughly in order): News’n'Links That whole domain theft thing ShopTalk Shirts CodePen PRO is out now Q &amp; A... <a href=\"http://shoptalkshow.com/episodes/049-with-david-walsh/\" title=\"Read 049: With David Walsh\">Read more »</a>",
                duration: 3925
              }, {
                uid: 25330296,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/242/0/109786-048-with-jen-simmons.mp3",
                episodeTitle: "048: With Jen Simmons",
                episodeSummary: "This week we were joined by Jen Simmons the host of The Web Ahead (CROSSOVER!) and a long time freelancer, consulter, builder, and friend of the web. We talk about (roughly in order): News’n'Links’n'Drama Jen also doing The Web Behind with Eric Meyer Instagram Term of Service debacle Animation performance (1, 2) Q&amp;A If you’re... <a href=\"http://shoptalkshow.com/episodes/048with-jen-simmons/\" title=\"Read 048: With Jen Simmons\">Read more »</a>",
                duration: 4011
              }, {
                uid: 25330297,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/239/0/109787-047-with-tim-smith.mp3",
                episodeTitle: "047: with Tim Smith",
                episodeSummary: "This week we were joined by Tim Smith, a designer doing both freelance work and in-house design work as well as soon-to-be magazine publisher. This is a crossover episode, as both Dave and Chris have been on Tim’s excellent podcast The East Wing. We talk about (roughly in order): News’n'Links’n'Drama Brian Franco’s book An Illustrated... <a href=\"http://shoptalkshow.com/episodes/047-with-tim-smith/\" title=\"Read 047: with Tim Smith\">Read more »</a>",
                duration: 3986
              }, {
                uid: 25330298,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/231/0/109788-046-rapidfire-12.mp3",
                episodeTitle: "046: RAPIDFIRE #12",
                episodeSummary: "This is a classic RAPIDFIRE episode. No guests, no drama, no news, just straight question on answer action. We talk about (roughly in order): What is the best way to host videos behind a pay wall? Chris uses WordPress with Restrict Content Pro (with PayPal) and Vimeo Pro to host the video. Can there be... <a href=\"http://shoptalkshow.com/episodes/046-rapidfire-12/\" title=\"Read 046: RAPIDFIRE #12\">Read more »</a>",
                duration: 3626
              }, {
                uid: 25330299,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/229/0/109789-045-with-harry-roberts.mp3",
                episodeTitle: "045: With Harry Roberts",
                episodeSummary: "This week we were joined by Harry Roberts of CSS Wizardy. Harry does a lot of writing about CSS architecture and writing good CSS. He has a fancy title at BSkyB and has worked on apps such as Faavorite. We talk about (roughly in order): #HOTDRAMA To use or not to use ID’s, the saga.... <a href=\"http://shoptalkshow.com/episodes/045-with-harry-roberts/\" title=\"Read 045: With Harry Roberts\">Read more »</a>",
                duration: 3766
              }, {
                uid: 25330300,
                mediaUrl: "http://shoptalkshow.com/podpress_trac/feed/222/0/109790-044-with-jeffrey-zeldman.mp3",
                episodeTitle: "044: With Jeffrey Zeldman",
                episodeSummary: "This week we were joined by Jeffrey Zeldman, a man who scarcely needs an introduction around these parts. In the early days of the web Jeffery was influential in pushing web standards forward and getting us to the happy place we are in now. He’s also the man behind the web magazine A List Apart,... <a href=\"http://shoptalkshow.com/episodes/044-with-jeffrey-zeldman/\" title=\"Read 044: With Jeffrey Zeldman\">Read more »</a>",
                duration: 2773
              }
            ]
          }, {
            feedUid: 199,
            feedUrl: "http://feeds.feedburner.com/javascriptjabber",
            subscriptionTitle: "Javascript Jabber",
            summary: "A technical discussion of JavaScript related topics. Things like Node.js, Web Frameworks, JSON, CoffeeScript, Event and Object models and much more.",
            albumArt: "jsj.png",
            numberOfEpisodes: 40,
            tracks: [
              {
                uid: 33476130,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/84_Episode_084__Node_with_Mikeal_Rogers.mp3",
                episodeTitle: "084 JSJ Node with Mikeal Rogers",
                episodeSummary: "Panel Mikeal Rogers (github blog) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) Discussion 00:59 – Mikeal Rogers Introduction CTO of Getable windmill request 06:41 – NodeConf ng-conf 16:06 – Node: Frontend and Backend Pluralsight: AngularJS Fundamentals I-Tier: Dismantling the Monoliths 22:30 – JVMs Node.JS Is Stupid And If You Use It So […]"
              }, {
                uid: 33199872,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ083FRPRXJS.mp3",
                episodeTitle: "083 JSJ FRP and RxJS with Matthew Podwysocki",
                episodeSummary: "Panel Matthew Podwysocki (twitter github @ReactiveX) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:01 – 061 JSJ Functional Reactive Programming with Juha Paananen and Joe Fiorini Coursera: Principles of Reactive Programming 02:49 – Matthew Podwysocki Microsoft 05:12 – Functional […]"
              }, {
                uid: 32903056,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ082JSHint.mp3",
                episodeTitle: "082 JSJ JSHint with Anton Kovalyov",
                episodeSummary: "Panel Anton Kovalyov (twitter github blog) AJ O’Neal (twitter github blog) Aaron Frost (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:57 – Anton Kovalyov Mozilla Disqus JSHint JSLint 03:40 – Why I forked JSLint to JSHint 07:15 – JSHint vs JSLint 14:19 – Sticking with the […]"
              }, {
                uid: 32647192,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ081AsyncTesting.mp3",
                episodeTitle: "081 JSJ  Promises for Testing Async JavaScript with Pete Hodgson",
                episodeSummary: "Panel Pete Hodgson (twitter github blog) AJ O’Neal (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:19 – Pete Hodgson: Testing Asynchronous JavaScript Promises Domenic Denicola 12:43 – Efficiency 21:14 – q 037 JSJ Promises with Domenic Denicola and Kris Kowal jQuery 22:41 […]"
              }, {
                uid: 32404374,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ080ImpactJS.mp3",
                episodeTitle: "080 JSJ Impact.js with Dominic Szablewski",
                episodeSummary: "Panel Dominic Szablewski (twitter github PhobosLab) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:20 – Dominic Szablewski Introduction 01:54 – Impact.js Biolab Disaster 03:00 – Selling/Charging vs Open-Source/Consulting Z-Type 06:09 – Game Development 08:42 […]"
              }, {
                uid: 32155766,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ079LoDash.mp3",
                episodeTitle: "079 JSJ Lo-Dash with John-David Dalton",
                episodeSummary: "Panel John-David Dalton (twitter github blog) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:32 – John-David Dalton Introduction Lo-Dash jsPerf benchmark.js Microsoft 02:19 – jsPerf 07:48 – Lo-Dash Underscore Lo-Dash [...]"
              }, {
                uid: 32060741,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ078WorkingFromHome.mp3",
                episodeTitle: "078 JSJ Working From Home",
                episodeSummary: "Panel Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:39 – Going Rogue Video 01:10 – Working From Home 02:17 – Office Setups/Furniture LX Desk Mount LCD Arm Aeron Chair by Herman Miller VendorGear Headrest for Herman Miller Aeron Chair A standing desk for $22 [...]"
              }, {
                uid: 32060742,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ077Monocle.mp3",
                episodeTitle: "077 JSJ Monocle with Alex MacCaw",
                episodeSummary: "Panel Alex MacCaw (twitter github blog) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:13 – Going Rogue Video 02:12 – Alex MacCaw Introduction 029 JSJ Bower.js with Alex MacCaw and Jacob Thornton JavaScript Web [...]"
              }, {
                uid: 31495696,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ076Meteor.mp3",
                episodeTitle: "076 JSJ Meteor.js with Marcus Phillips and Fred Zirdung",
                episodeSummary: "Panel Marcus Phillips (twitter github) Fred Zirdung (twitter github) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:30 – Marcus Phillips and Fred Zirdung Introduction Hack Reactor 03:31 – Experience with Meteor 05:45 – Intro to Meteor Client-side Environment Tethered [...]"
              }, {
                uid: 31184980,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ075MaintainableJS.mp3",
                episodeTitle: "075 JSJ Maintainable JavaScript with Nicholas Zakas",
                episodeSummary: "Panel Nicholas C. Zakas (twitter github blog) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:24 – Nicholas Zakas Introduction Box Maintainable JavaScript by Nicholas C. Zakas High Performance JavaScript (Build [...]"
              }, {
                uid: 31007222,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ074Grunt.mp3",
                episodeTitle: "074 JSJ Grunt with Ben Alman",
                episodeSummary: "Panel Ben Alman (twitter github blog) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Ryan Florence (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:34 – Ben Alman Introduction Bocoup 02:54 – “Cowboy” Cowboy Coder 06:53 – The Birth of Grunt Ender make rake jake [...]"
              }, {
                uid: 27869126,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ073React.mp3",
                episodeTitle: "073 JSJ React with Pete Hunt and Jordan Walke",
                episodeSummary: "Panel Pete Hunt (twitter github blog) Jordan Walke (twitter github) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:34 – Pete Hunt Introduction Instagram Facebook 02:45 – Jordan Walke Introduction 04:15 [...]"
              }, {
                uid: 25004196,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ072Screencasting.mp3",
                episodeTitle: "072 JSJ Screencasts",
                episodeSummary: "Panel Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:31 – Screencasting Experience Pluralsight: AngularJS Fundamentals – Joe Pluralsight: jQuery Advanced Topics – Joe Pluralsight: Testing Clientside JavaScript – Joe Teach Me To Code – Chuck 02:44 – Getting into [...]"
              }, {
                uid: 19396953,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ071Microsoft.mp3",
                episodeTitle: "071 JSJ JavaScript Strategies at Microsoft with Scott Hanselman",
                episodeSummary: "Panel Scott Hanselman (twitter github blog) Joe Eames (twitter github blog) Aaron Frost (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:14 – Scott Hanselman Introduction Community Program Manager for Web Tools at Microsoft Azure and Web Tools ASP.NET Runtime 03:17 – Microsoft and JavaScript Microsoft Build [...]"
              }, {
                uid: 17102387,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ070JavascriptAllonge.mp3",
                episodeTitle: "070 JSJ Book Club: JavaScript Allongé with Reginald Braithwaite",
                episodeSummary: "Panel Reginald Braithwaite (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:08 – Reg Braithwaite Introduction Github 03:46 – JavaScript Allongé by Reginald Braithwaite 06:43 – The Y [...]"
              }, {
                uid: 14144822,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ069ApplicationCaching.mp3",
                episodeTitle: "069 JSJ The Application Cache with Jake Archibald",
                episodeSummary: "Panel Jake Archibald (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:14 – Jake Archibald Introduction Works on Developer Relations on the Google Chrome Team 01:57 – The Application Cache Eric Bidelman: A Beginner’s Guide to Using the Application Cache – HTML5 [...]"
              }, {
                uid: 9398347,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ068ES6.mp3",
                episodeTitle: "068 JSJ – ES6 with Aaron Frost",
                episodeSummary: "Panel Aaron Frost (twitter github blog) Merrick Christensen (twitter github) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) Discussion 01:36 – Aaron Frost Introduction Web Developer at Domo 1.21 Gigawatts – Chromeapps with Angularjs and Node (Aaron Frost and Dave Geddes) JS.next: A Manager’s Guide by Aaron Frost 02:21 – ECMAScript and JavaScript [...]"
              }, {
                uid: 8619095,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ067Testem.mp3",
                episodeTitle: "067 JSJ – Testem with Toby Ho",
                episodeSummary: "Panel Toby Ho (twitter github blog) Joe Eames (twitter github blog) Aaron Frost (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:53 – Aaron Frost Introduction Domo 1.21 Gigawatts – Chromeapps with Angularjs and Node (Aaron Frost and Dave Geddes) 02:45 – Toby Ho Introduction testem Toby [...]"
              }, {
                uid: 7255072,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ066TransitioningToJS.mp3",
                episodeTitle: "066 JSJ Transitioning to JavaScript",
                episodeSummary: "Panel Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:10 – Making the transition from one primary language to JavaScript 01:30 – Merrick’s Experience ActionScript 03:32 – Joe’s Experience .NET Microsoft 07:46 – Moving from C# to JavaScript Misconceptions 09:25 – [...]"
              }, {
                uid: 6721031,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ065BuildTools.mp3",
                episodeTitle: "065 JSJ Build Tools with Adam Hawkins",
                episodeSummary: "Panel Adam Hawkins (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:16 – Adam Hawkins Introduction JavaScript Application Build Tools: Adam Hawkins 003 JSJ Build Tools 01:51 – What Are Build Tools? 02:46 – Build Process Ember.js [...]"
              }, {
                uid: 5839738,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ064EmberTools.mp3",
                episodeTitle: "064 JSJ Ember Tools with Ryan Florence",
                episodeSummary: "Panel Ryan Florence (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:28 – Ryan Florence Introduction Instructure Canvas Network 03:04 – Ember 101 05:03 – Ember.js Workflow 047 JSJ Specialized vs Monolithic with [...]"
              }, {
                uid: 5049101,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ063Burnout.mp3",
                episodeTitle: "063 JSJ Burnout",
                episodeSummary: "Panel Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:47 – Burnout Google: define burnout 04:57 – Pair Programming 06:19 – Burnout Guilt Thought-workers vs Laborers 10:15 – Positive Reinforcement 11:18 – Causes of Burnout Prolonged [...]"
              }, {
                uid: 4089653,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ062Dojo.mp3",
                episodeTitle: "062 JSJ Dojo with Dylan Schiemann",
                episodeSummary: "Panel Dylan Schiemann (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:57 – Dylan Schiemann Introduction The Dojo Toolkit CEO of SitePen 01:14 – Dojo TD Ameritrade The Wall Street Journal JPMorgan [...]"
              }, {
                uid: 3550183,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ061FRP.mp3",
                episodeTitle: "061 JSJ Functional Reactive Programming with Juha Paananen and Joe Fiorini",
                episodeSummary: "Panel Juha Paananen (twitter github blog) Joe Fiorini (twitter github blog) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:20 – Joe Fiorini Introduction Interaction Developer at Designing Interactive in Cleveland, [...]"
              }, {
                uid: 2709123,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ060DevelopmentEnviroments.mp3",
                episodeTitle: "060 JSJ Development Environments",
                episodeSummary: "Panel AJ O’Neal (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:09 – Mac, Windows or Linux? tmux Emacs Homebrew DigitalOcean 05:41 – Tools Jenkins CI TeamCity 07:49 – Editors and IDEs Vim MacVim MacVim Alloy Fork The [...]"
              }, {
                uid: 2594254,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ059JQueryMobile.mp3",
                episodeTitle: "059 JSJ jQuery Mobile with Todd Parker",
                episodeSummary: "Panel Todd Parker (twitter github) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:53 – Todd Parker Introduction Filament Group 01:21 – DevChat.tv Indiegogo Campaign 01:55 – jQuery Mobile jQuery UI 04:13 – Responsive web design [...]"
              }, {
                uid: 2511638,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ058AccessibleWebsites.mp3",
                episodeTitle: "058 JSJ Building Accessible Websites with Brian Hogan",
                episodeSummary: "Use this link and code JAVAJAB to get 20% off your registration for FluentConf 2013! Panel Brian Hogan (twitter github blog) AJ O’Neal (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:55 – Brian Hogan Introduction HTML5 and [...]"
              }, {
                uid: 2419211,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ057FunctionalProgramming.mp3",
                episodeTitle: "057 JSJ Functional Programming with Zach Kessin",
                episodeSummary: "Panel Zachary Kessin (twitter github Mostly Erlang Podcast) Jamison Dance (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 00:55 – Zach Kessin Introduction Programming HTML5 Applications Building Web Applications with Erlang Product Structure Mostly Erlang Podcast 03:01 – Functional Programming Haskell LISP Scheme [...]"
              }, {
                uid: 2342619,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ056MarionetteJS.mp3",
                episodeTitle: "056 JSJ Marionette.js with Derick Bailey",
                episodeSummary: "Use this link and code JAVAJAB to get 20% off your registration for FluentConf 2013! Panel Derick Bailey (twitter github blog) AJ O’Neal (twitter github blog) Merrick Christensen (twitter github) Joe Eames (twitter github blog) Tim Caswell (twitter github howtonode.org) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:03 – [...]"
              }, {
                uid: 2316273,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ055WebDeveloperSkills.mp3",
                episodeTitle: "055 JSJ Web Developer Skills",
                episodeSummary: "Use this link and code JAVAJAB to get 20% off your registration for FluentConf 2013! Panel AJ O’Neal (twitter github blog) Merrick Christensen (twitter github) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) Discussion 00:57 – What does it mean to be a “web developer” “T-shaped skills” 11:01 – Minumum level entry skills [...]"
              }, {
                uid: 2290396,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ054ParsingASTsGrammars.mp3",
                episodeTitle: "054 JSJ JavaScript Parsing, ASTs, and Language Grammar w/ David Herman and Ariya Hidayat",
                episodeSummary: "Use this link and code JAVAJAB to get 20% off your registration for FluentConf 2013! Panel David Herman (twitter blog Effective JavaScript) Ariya Hidayat (twitter github blog) Tim Caswell (twitter github howtonode.org) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code [...]"
              }, {
                uid: 2266994,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ053SoftwareTeamDynamics.mp3",
                episodeTitle: "053 JSJ Software Team Dynamics",
                episodeSummary: "Use this link and code JAVAJAB to get 20% off your registration for FluentConf 2013! Panel Joe Eames (twitter github blog) Jamison Dance (twitter github blog) AJ O’Neal (twitter github blog) Merrick Christensen (twitter github) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 02:48 – External Conflicts Dealing with people [...]"
              }, {
                uid: 2240816,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ052NodeAndNPM.mp3",
                episodeTitle: "052 JSJ Node & NPM with Isaac Schlueter",
                episodeSummary: "Use this link and code JAVAJAB to get 20% off your registration for FluentConf 2013! Panel Isaac Schlueter (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:33 – [...]"
              }, {
                uid: 2214917,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ051FindingAJob.mp3",
                episodeTitle: "051 JSJ Finding a Job",
                episodeSummary: "Panel AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:02 – Panelist employment backgrounds 04:34 – Programming job market Networking 06:31 – How to get a job doing what you like BetterServers Skunkworks project 09:36 – Qualifications 11:40 – How [...]"
              }, {
                uid: 2191841,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ050QUnit.mp3",
                episodeTitle: "050 JSJ QUnit with Jörn Zaefferer",
                episodeSummary: "Panel Jörn Zaefferer (twitter github blog) Jamison Dance (twitter github blog) Joe Eames (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:15 – Jörn Zaefferer Introduction jQuery QUnit 02:32 – QUnit jQuery Mobile Introduction to Unit Testing | QUnit 06:59 – Built-in support for HTML fixtures for [...]"
              }, {
                uid: 2168324,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ049MooTools.mp3",
                episodeTitle: "049 JSJ MooTools with Valerio Proietti and Arian Stolwijk",
                episodeSummary: "Panel Valerio Proietti (twitter github) Arian Stolwijk (twitter github blog) Joe Eames (twitter github blog) Merrick Christensen (twitter github) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:08 – Arian Stolwijk Introduction MooTools Developer Symbaloo 01:39 – Valerio Proietti Introduction MooTools Creator Spotify 02:21 – [...]"
              }, {
                uid: 2141603,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ048WhyJavascriptIsHard.mp3",
                episodeTitle: "048 JSJ Why JavaScript Is Hard",
                episodeSummary: "Panel Joe Eames (twitter github blog) Tim Caswell (twitter github howtonode.org) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) AJ O’Neal (twitter github blog) Discussion 00:56 – Why JavaScript is hard to learn 02:30 – This 05:30 – Bind 09:11 – Browsers 11:01 – Class-based inheritance Prototypal inheritance 16:37 – New function 18:51 – Closures 20:51 – JavaScript is asynchronous [...]"
              }, {
                uid: 2108625,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ047SpecializedVSMonolithic.mp3",
                episodeTitle: "047 JSJ Specialized vs Monolithic with James Halliday and Tom Dale",
                episodeSummary: "Panel Tom Dale (twitter github blog Tilde Inc.) James Halliday (twitter github substack.net) AJ O’Neal (twitter github blog) Jamison Dance (twitter github blog) Merrick Christensen (twitter github) Joe Eames (twitter github blog) Tim Caswell (twitter github howtonode.org) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:52 – James Halliday Introduction browserify 02:37 – Tom Dale Introduction iCloud Ember.js Big Data &amp; Hadoop 04:47 – [...]"
              }, {
                uid: 2079848,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ046StayingCurrent.mp3",
                episodeTitle: "046 JSJ Staying Current",
                episodeSummary: "Panel Joe Eames (twitter github blog) Merrick Christensen (twitter github) AJ O’Neal (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 03:19 – The Future of JavaScript and ES6 es-discuss — Discussion of ECMAScript @esdiscuss six ES6 in node.js @brendaneich (Brendan Eich) @rwaldron (Rick Waldron) 10:18 – Getting News about JavaScript @derickbailey (Derick Bailey) @tjholowaychuk (TJ [...]"
              }, {
                uid: 2049665,
                mediaUrl: "http://traffic.libsyn.com/jsjabber/JSJ045jQuery.mp3",
                episodeTitle: "045 JSJ jQuery",
                episodeSummary: "Panel AJ O’Neal (twitter github blog) Merrick Christensen (twitter github) Joe Eames (twitter github blog) Jamison Dance (twitter github blog) Charles Max Wood (twitter github Teach Me To Code Rails Ramp Up) Discussion 01:11 – jQuery vs Prototype vs MooTools 10:50 – JavaScript Going Mainstream Fast Browsers Firefox Web Developer Tools V8 Web Stack 13:21 – Usable JavaScript 17:05 – jQuery Pros Cross-Platform CSS Selection [...]"
              }
            ]
          }, {
            feedUid: "sjlbsephuo2",
            feedUrl: "http://flippingthebozobit.tv/",
            subscriptionTitle: "Flipping the Bozo Bit",
            summary: "A technical discussion of JavaScript related topics. Things like Node.js, Web Frameworks, JSON, CoffeeScript, Event and Object models and much more.",
            albumArt: "ftbb.jpg",
            tracks: [
              {
                uid: "flippinBozo-1dsf",
                episodeTitle: "Episode 13: All Aboard",
                mediaUrl: "http://flippingthebozobit.tv/episode/013/2013-11-01-episode-13.mp3"
              }, {
                uid: "flippinBozo-dsv2",
                episodeTitle: "Episode 12: Agile Design",
                episodeSummary: "What if we made design a part of the Agile Software Process?",
                mediaUrl: "http://flippingthebozobit.tv/episode/012/2013-10-15-episode-12.mp3"
              }, {
                uid: "flippinBozo-vsvs3",
                episodeTitle: "Episode 11: Functional Reactive Programming",
                episodeSummary: "What's the deal with FRP? Christoph gives us the skinny on Functional Reactive Programming.",
                mediaUrl: "http://flippingthebozobit.tv/episode/011/2013-10-01-episode-11.mp3"
              }, {
                uid: "flippinBozo-vdszfs",
                episodeTitle: "Episode 10: Javascriptocalypse",
                episodeSummary: "What if you wanted to write a fancy in-browser app but were less than enthusiastic about the Javascript ecosystem?",
                mediaUrl: "http://flippingthebozobit.tv/episode/010/2013-08-01-episode-10.mp3"
              }, {
                uid: "flippinBozo-vfvdfs",
                episodeTitle: "Episode 9: Internalizing Open Source",
                episodeSummary: "What if you ran your internal, closed-source, proprietary, mega-corporate projects like open source projects? Similar styles? Similar tools?",
                mediaUrl: "http://flippingthebozobit.tv/episode/009/2013-07-15-episode-9.mp3"
              }, {
                uid: "flippinBozo-fvsbvdsf",
                episodeTitle: "Episode 8: Clean Room Development",
                episodeSummary: "This one's all about the music. What if you had to rewrite your software after every release?",
                mediaUrl: "http://flippingthebozobit.tv/episode/008/2013-07-01-episode-8.mp3"
              }, {
                uid: "flippinBozo-fzvsdfb",
                episodeTitle: "Episode 7: Steel Mills to Data Warehouses",
                episodeSummary: "What if you can't duplicate your production stack for testing and so on? For instance, factory software? I'm starting to think this whole podcast is, ultimately, about design.",
                mediaUrl: "http://flippingthebozobit.tv/episode/007/2013-05-19-episode-7.mp3"
              }, {
                uid: "flippinBozo-fsbfds",
                episodeTitle: "Episode 6: Lazy Package Objects",
                episodeSummary: "Thought experiments are all well and good, but sometimes you gotta try 'em out to see what's what.",
                mediaUrl: "http://flippingthebozobit.tv/episode/006/2013-05-04-episode-6.mp3"
              }, {
                uid: "flippinBozo-024ge",
                episodeTitle: "Episode 5: A Walled Off Garden of Perfection",
                episodeSummary: "Can't change your variables once you assign a value? WTF? Surely, this is something up with which we cannot put! Or: a round-about introduction to some of the concerns addressed by the functional programming paradigm.",
                mediaUrl: "http://flippingthebozobit.tv/episode/005/2013-04-14-episode-5.mp3"
              }, {
                uid: "flippinBozo-gwra",
                episodeTitle: "Episode 4: The March of IDEs",
                episodeSummary: "In this episode, we start with our conclusion and try to move on from there.",
                mediaUrl: "http://flippingthebozobit.tv/episode/004/2013-03-31-episode-4.mp3"
              }, {
                uid: "flippinBozo-9rh31",
                episodeTitle: "Episode 3: Technical Debt On Wheels",
                episodeSummary: "What if you were required to write a prototype for every significant development of your software system?",
                mediaUrl: "http://flippingthebozobit.tv/episode/003/2013-03-13-episode-3.mp3"
              }, {
                uid: "flippinBozo-2f",
                episodeTitle: "Episode 2: Unitless Tests",
                episodeSummary: "Our second podcast. This one got away from us in length, but it all adds up. Somehow. Does a project's implementation strategy affect team dynamics? What if you couldn't include tests in your source tree? Digressions abound!",
                mediaUrl: "http://flippingthebozobit.tv/episode/002/2013-02-17-episode-2.mp3"
              }, {
                uid: "flippinBozo-32tvb",
                episodeTitle: "Episode 1: Origin Stories",
                episodeSummary: "Welcome to the first episode of <em>Flipping the Bozo Bit</em>, a casual, conversational, podcast questioning the truisms of software development and management with plenty of digressions mixed in to taste.",
                mediaUrl: "http://flippingthebozobit.tv/episode/001/2013-01-28-episode-1.mp3"
              }
            ]
          }, {
            feedUid: 7591,
            feedUrl: "http://nitch.cc/podcast",
            subscriptionTitle: "The Nitch Podcast",
            summary: "A weekly podcast about making apps that run everywhere using open web standards like HTML, CSS, JavaScript, REST, and JSON. Hosted by Jonathan Stark and Kelli Shaver.",
            albumArt: "nitch.png",
            numberOfEpisodes: 82,
            tracks: [
              {
                uid: 33480524,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_82_Pink_With_a_Hint_of_Orange.mp3",
                episodeTitle: "Episode 82: Pink With a Hint of Orange",
                episodeSummary: "Jonathan and Kelli talk about Pattern Lab, a tool for building atomic design systems created by Brad Frost and Dave Olsen.",
                duration: 1776
              }, {
                uid: 33211704,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_81_Responsive_Picnic_Tables.mp3",
                episodeTitle: "Episode 81: Responsive Picnic Tables",
                episodeSummary: "Jonathan and Kelli rant about dealing with HTML tables in responsive web design.",
                duration: 3567
              }, {
                uid: 32913183,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_80_Even_More_Betterer.mp3",
                episodeTitle: "Episode 80: Even More Betterer",
                episodeSummary: "Jonathan and Kelli talk about Ruby and Rails: learning resources, application considerations, and Kelli’s big win!",
                duration: 1639
              }, {
                uid: 32650343,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_79_Oreo_Island.mp3",
                episodeTitle: "Episode 79: Oreo Island",
                episodeSummary: "Jonathan and Kelli discuss a bunch of projects that they recently launched.",
                duration: 2828
              }, {
                uid: 32408374,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_78_Reedonkulous.mp3",
                episodeTitle: "Episode 78: Reedonkulous",
                episodeSummary: "Jonathan and Kelli give a brief intro to Git, how you can use it to replace FTP in your workflow, and why you probably should.",
                duration: 1075
              }, {
                uid: 31920875,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_77_Accidental_Interneting.mp3",
                episodeTitle: "Episode 77: Accidental Interneting",
                episodeSummary: "Jonathan and Kelli chat about the benefits of accessibility, availability, and progressive enhancement in cross-platform web projects.",
                duration: 2640
              }, {
                uid: 31746003,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_76_Tickle_Class.mp3",
                episodeTitle: "Episode 76: Tickle Class",
                episodeSummary: "Jonathan and Kelli discuss perception vs reality in the context of application performance. In particular, the importance of instantaneous feedback, a simple way to remove the pesky 300ms delay in webapps on touch devices, and the real reason why jank is a bad thing.",
                duration: 2272
              }, {
                uid: 31496700,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_75_Shes_Coming_Unglued.mp3",
                episodeTitle: "Episode 75: She’s Coming Unglued",
                episodeSummary: "Jonathan and Kelli talk about Google’s two-factor authentication, smartwatch use cases, and a possible strategy behind Apple’s decision to release two new iPhones at the same time.",
                duration: 2326
              }, {
                uid: 31210186,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_74_Psycho_Like_Me.mp3",
                episodeTitle: "Episode 74: Psycho Like Me",
                episodeSummary: "Jonathan and Kelli talk about how the iPhone 5c announcement illustrates that future-friendly thinking is more important than ever.",
                duration: 1677
              }, {
                uid: 30983261,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_73_Tiny_Tornado.mp3",
                episodeTitle: "Episode 73: Tiny Tornado",
                episodeSummary: "Jonathan and Kelli talk about SmartWatches: The Wimm One, MetaWatch, Pebble, and more.",
                duration: 2188
              }, {
                uid: 27869901,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_72_Code_Brown.mp3",
                episodeTitle: "Episode 72: Code Brown",
                episodeSummary: "Jonathan and Kelli talk reach into the topic grab bag and pull out programmable lightbulbs, embracing constraints, prototyping in PHP, benchmarking CSS, and more.",
                duration: 3882
              }, {
                uid: 25019028,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_71_For_the_Meeple_By_the_Meeple.mp3",
                episodeTitle: "Episode 71: For the Meeple, By the Meeple",
                episodeSummary: "Jonathan and Kelli talk about what happened during Kelli's 48 hour weekend hackathon, including first impressions of RedHat's OpenShift cloud platform, pub/sub in Ruby with Faye, and oh, so much more.",
                duration: 3131
              }, {
                uid: 19249230,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_70_It_Cant_Be_Worse_Than_Calgary.mp3",
                episodeTitle: "Episode 70: It Can't Be Worse Than Calgary",
                episodeSummary: "Jonathan and Kelli talk about timezone bugs on Amazon S3, problems with ruby on new EC2's chipset architecture, and news about RailsForum, Pandacodium, Spoken, Inside the Brackets, and a lot more.",
                duration: 3512
              }, {
                uid: 16784017,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_69_Thats_A_Plus.mp3",
                episodeTitle: "Episode 69: That's A Plus",
                episodeSummary: "Jonathan and Kelli talk about real live project work on apps that run cross browser, cross platform, and beyond.",
                duration: 3078
              }, {
                uid: 16784016,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_68_Fancy_Class.mp3",
                episodeTitle: "Episode 68: Fancy Class",
                episodeSummary: "Jonathan and Kelli walk through a process for modern web development using responsive design, CSS3, and copious amounts of progressive enhancement.",
                duration: 2899
              }, {
                uid: 9408154,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_67_Django_Curious.mp3",
                episodeTitle: "Episode 67: Django Curious",
                episodeSummary: "Kelli helps Jonathan finally - FINALLY! - make the switch from PHP to Rails.",
                duration: 2503
              }, {
                uid: 8776590,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_66_I_Blame_My_Shorts.mp3",
                episodeTitle: "Episode 66: I Blame My Shorts",
                episodeSummary: "Jonathan and Kelli talk about function hoisting in Firefox, a fun new side project, and collapsing space with smartphone cameras.",
                duration: 2394
              }, {
                uid: 8023287,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_65_Bumpin_Colons.mp3",
                episodeTitle: "Episode 65: Bumpin’ Colons",
                episodeSummary: "Jonathan and Kelli continue with the fourth and final installment of their screencast on how to build a REST API with Ruby on Rails.",
                duration: 3700
              }, {
                uid: 7215332,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_64_Cat_Number_One.mp3",
                episodeTitle: "Episode 64: Cat Number One",
                episodeSummary: "Jonathan and Kelli get very superstitious about Rails 4, JSON endpoints, responsive web design, and more.",
                duration: 2158
              }, {
                uid: 6612701,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_63_Disco_Mode.mp3",
                episodeTitle: "Episode 63: Disco Mode",
                episodeSummary: "Jonathan and Kelli talk about responsive design, progressive enhancement, and development tools in the context of a big huge site redesign.",
                duration: 2565
              }, {
                uid: 6457165,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_62_Love_Me_Some_Curlies.mp3",
                episodeTitle: "Episode 62: Love Me Some Curlies",
                duration: 3011
              }, {
                uid: 5563788,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_61_Expecting_Ernestina.mp3",
                episodeTitle: "Episode 61: Expecting Ernestina",
                duration: 3949
              }, {
                uid: 4347039,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_60_Numerosity.mp3",
                episodeTitle: "Episode 60: Numerosity",
                episodeSummary: "Kelli builds a rest api with ruby on rails, Jonathan asks stupid questions while she does it, and we post video of the whole shebang for you to enjoy in your copious free time.",
                duration: 3949
              }, {
                uid: 2774964,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_59_Moonburn.mp3",
                episodeTitle: "Episode 59: Moonburn",
                episodeSummary: "Jonathan and Kelli talk about the WeMo Switch, blink(1) USB, hue light bulbs, and the APIs that tie them all together.",
                duration: 3026
              }, {
                uid: 2686457,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_58_Fifty_Shades_of_Black.mp3",
                episodeTitle: "Episode 58: Fifty Shades of Black",
                episodeSummary: "Jonathan and Kelli talk about the upcoming screencast episode, performance problems with KnockoutJS, and the massive implications of Google's recent announcements at the IO conference.",
                duration: 4163
              }, {
                uid: 2595335,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_57_Flossing_With_Rails.mp3",
                episodeTitle: "Episode 57: Flossing With Rails",
                episodeSummary: "Jonathan and Kelli talk about building - and more importantly, testing - REST APIs with Rails and RSpec.",
                duration: 1925
              }, {
                uid: 2509212,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_56_Eighteen_Hours_Since_Last_Twisted_Ankle.mp3",
                episodeTitle: "Episode 56: Eighteen Hours Since Last Twisted Ankle",
                episodeSummary: "Jonathan and Kelli talk about how to quote a project for a client who needs an app that can run everywhere.",
                duration: 1996
              }, {
                uid: 2427362,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_55_Nerds_in_Grass_Skirts.mp3",
                episodeTitle: "Episode 55: Nerds in Grass Skirts",
                episodeSummary: "Jonathan and Kelli talk about experimentation with the Lua programming language and the possible implications on cross-platform application development.",
                duration: 2195
              }, {
                uid: 2372813,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_54_The_Royal_You.mp3",
                episodeTitle: "Episode 54: The Royal You",
                episodeSummary: "Jonathan and Kelli talk about jQuery vs. Zepto... and other pointless debates.",
                duration: 2010
              }, {
                uid: 2343931,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_53_Fluffdates.mp3",
                episodeTitle: "Episode 53: Fluffdates",
                episodeSummary: "Jonathan and Kelli sit back and say \"I told you so\" for 30 minutes as they talk about Glassware, the Mirror API, and improved methods for the distribution of cat photos with Google Glass.",
                duration: 2010
              }, {
                uid: 2317963,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_52_Punching_Kittens_with_Ethan_Marcotte.mp3",
                episodeTitle: "Episode 52: Punching Kittens with Ethan Marcotte",
                episodeSummary: "Jonathan and Kelli welcome special guest Ethan Marcotte to discuss some of the non-technical challenges of Responsive Web Design: unresponsive ad units, browsing the web on game consoles, getting client sign-off without Photoshop comps, and much more.",
                duration: 2596
              }, {
                uid: 2288997,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_51_BBQ_Chicken_Disease.mp3",
                episodeTitle: "Episode 51: BBQ Chicken Disease",
                episodeSummary: "Jonathan and Kelli talk about Amazon Web Services - EC2, RDS, CloudWatch, and our new personal favorite, Simple Notification Service.",
                duration: 2326
              }, {
                uid: 2265490,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_50_Up_Since_72.mp3",
                episodeTitle: "Episode 50: Up Since '72",
                episodeSummary: "Jonathan and Kelli talk about drag and drop on touchscreen devices and opting out of responsive web design.",
                duration: 1690
              }, {
                uid: 2239308,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_49_Bathroom_Warming_Party.mp3",
                episodeTitle: "Episode 49: Bathroom Warming Party",
                episodeSummary: "Jonathan and Kelli talk about maintaining context in small screen apps, reconsidering jQuery for mobile projects, and preparing your content for the zombie apocalypse of smartwatches.",
                duration: 4081
              }, {
                uid: 2218136,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_48_Touch_Sensitive_Backsides.mp3",
                episodeTitle: "Episode 48: Touch Sensitive Backsides",
                episodeSummary: "Jonathan and Kelli talk about WebHook gotchas, reconsidering SMS, and touch sensitive backsides.",
                duration: 4192
              }, {
                uid: 2196961,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_47_Digesting_the_Koolaid.mp3",
                episodeTitle: "Episode 47: Digesting the Koolaid",
                episodeSummary: "Jonathan and Kelli talk about Lawnchair performance tips, simplfying your CSS with CSS Simple, and preparing for the zombie apocalypse of devices, part 2.",
                duration: 4192
              }, {
                uid: 2172195,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_46_Rear_View_Hat.mp3",
                episodeTitle: "Episode 46: Rear View Hat",
                episodeSummary: "Jonathan and Kelli prove that APIs are totally awesome, get into trouble with mobile first responsive design, and experiement with the next revolutionary mobile technology.",
                duration: 3315
              }, {
                uid: 2127710,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_45_SASS_Mafia.mp3",
                episodeTitle: "Episode 45: SASS Mafia",
                episodeSummary: "Jonathan and Kelli talk about onclick conflicts between jQuery and Google Analytics, our development setup for Responsive Web Design, and why SASS is stupid. Kidding! Sheesh... lighten up :)",
                duration: 3847
              }, {
                uid: 2105058,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_44_Shut_Up_Shot_Clock.mp3",
                episodeTitle: "Episode 44: Shut Up Shot Clock",
                episodeSummary: "Jonathan and Kelli talk about our defaults when starting a new project - tools, technology, language, structure, and more.",
                duration: 3925
              }, {
                uid: 2078096,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_43_Spaghetti_Frames.mp3",
                episodeTitle: "Episode 43: Spaghetti Frames",
                episodeSummary: "Jonathan and Kelli talk about getting clever with Amazon's Elastic Block Store, redefining wireframes in the context of responsive web design, and our growing obsession with Jackbooks.",
                duration: 3328
              }, {
                uid: 2046698,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_42_Jackbooks.mp3",
                episodeTitle: "Episode 42: Jackbooks",
                episodeSummary: "Jonathan and Kelli talk about gotchas with CORS headers in Rails apps, the definition of \"Mobile First\", and a process for Responsive Web Design.",
                duration: 2860
              }, {
                uid: 2002442,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_41_Heavy_Semicolon.mp3",
                episodeTitle: "Episode 41: Heavy Semicolon",
                episodeSummary: "Jonathan and Kelli talk about enhancing site performance with Varnish, simplifying web development workflow with Sprockets, and legally binding responsive web design.",
                duration: 2860
              }, {
                uid: 1977450,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_40_All_We_Are_Missing_Is_Everything_Else.mp3",
                episodeTitle: "Episode 40: All We're Missing Is Everything Else",
                episodeSummary: "Jonathan and Kelli talk about the pros and cons of Bootstrap, learning to live with Objective-C, and new developments in lamp programming (and we don't mean Linux).",
                duration: 4135
              }, {
                uid: 1947915,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_39_Ramblecast_You_Have_Been_Warned.mp3",
                episodeTitle: "Episode 39: Ramblecast (You've Been Warned)",
                episodeSummary: "Jonathan and Kelli prognosticate endlessly about the future of computing, the effects of wireless connectivity on society, and what we can do now to prepare.",
                duration: 4377
              }, {
                uid: 1913427,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_38_BRB_Bedroom_On_Fire.mp3",
                episodeTitle: "Episode 38: BRB... Bedroom On Fire",
                episodeSummary: "Jonathan and Kelli talk about trouble with really big buttons, SMS apps for Kenyan farmers, and how to send API requests to a lamp.",
                duration: 3328
              }, {
                uid: 1841519,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_37_Slow_Headbutt.mp3",
                episodeTitle: "Episode 37: Slow Headbutt",
                episodeSummary: "Jonathan and Kelli talk about Safari rendering bugs, more location hash gotchas, and a rundown of dev tools including knockout.js, markup.js, Yeoman, and Reflector.",
                duration: 2985
              }, {
                uid: 1768571,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_36_Syntastical_Sugar.mp3",
                episodeTitle: "Episode 36: Syntastical Sugar",
                episodeSummary: "Jonathan and Kelli talk about cross-browser location hash inconsistencies, thoughts on CoffeeScript, and the genius of NPR's \"Create Once, Publish Everywhere\" platform.",
                duration: 3602
              }, {
                uid: 1713643,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_35_Once_More_With_Feeling.mp3",
                episodeTitle: "Episode 35: Once More With Feeling",
                episodeSummary: "This week Jonathan and Kelli discuss media queries on Retina Macs, overflow scrolling on touchscreen devices, and lessons learned from a spaghetti code weekend with PHP.",
                duration: 3602
              }, {
                uid: 1689871,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_34_The_Wacky_Flag.mp3",
                episodeTitle: "Episode 34: The Wacky Flag",
                episodeSummary: "Jonathan and Kelli talk about Web SQL Database, storing images as base64, and error handling considerations for REST APIs.",
                duration: 3272
              }, {
                uid: 1661476,
                mediaUrl: "https://s3.amazonaws.com/nitch/Episode_33_Piemaster.mp3",
                episodeTitle: "Episode 33: Piemaster",
                episodeSummary: "Jonathan and Kelli talk about Kelli's first impressions of cross-platform mobile framework PhoneGap.",
                duration: 4099
              }
            ]
          }, {
            feedUid: 8392,
            feedUrl: "http://emergingtech.chariotsolutions.com/category/devnews/feed/",
            author: "Ken Rimple, Chariot Solutions",
            subscriptionTitle: "Chariot Developer News",
            description: "Chariot's home of Emerging Technology research",
            albumArt: "devnews-fullres.jpg",
            tracks: [
              {
                uid: 33599814,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-68-2013-11-18.mp3",
                episodeTitle: "DevNews #68 – Clouds and Androids abound, reactive ones!",
                episodeSummary: "<p>Help us spread the word - Go to the LifeHacker Favorite Podcasts post and spread the word. That's <a href=\"http://lifehacker.com/the-best-informative-brain-boosting-podcasts-worth-sub-1464783451\">http://lifehacker.com/the-best-informative-brain-boosting-podcasts-worth-sub-1464783451</a> or if you're typing this, emergingtech.chariotsolutions.com/shoutout (ok, not much shorter, but we're working on it!</p> Show Notes Startups fail. <a href=\"http://www.theverge.com/2013/11/5/5039216/everpix-life-and-death-inside-the-worlds-best-photo-startup\">Say goodbye to Everpix</a> <a href=\"http://blog.flowdock.com/2013/01/22/functional-reactive-programming-with-bacon-js\">Functional Reactive Programming with Bacon.js</a> - this article refers to the <a href=\"https://github.com/baconjs/bacon.js\">Bacon.JS project</a>. Also, if you're a Java expert check out <a href=\"(refer%20to%20rxjava%20if%20you%E2%80%99re%20a%20Java%20expert\">RxJava</a> The skills of academia are attractive to business in data science - hence <a href=\"http://jakevdp.github.io/blog/2013/10/26/big-data-brain-drain/\">the newest brain drain</a> Charioteer Rich Freedman <a href=\"http://twitter.com/greybeardedgeek\">@greybeardedgeek</a> tip for dealing with designers and PS layers for icons, etc.. - see his",
                duration: 3072
              }, {
                uid: 33057886,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-Episode-67-11-04-2013.mp3",
                episodeTitle: "DevNews #67 – Monoliths begone, lock free APIs, Bunnies and RabbitMQ, and computer viruses by air",
                episodeSummary: "Links \"Five tips for big software projects\":<a href=\"http://blog.chariotsolutions.com/2013/10/5-tips-for-big-software-projects.html\">http://blog.chariotsolutions.com/2013/10/5-tips-for-big-software-projects.html</a> “Dismanteling the monoliths”:<a href=\"https://engineering.groupon.com/2013/misc/i-tier-dismantling-the-monoliths/\">https://engineering.groupon.com/2013/misc/i-tier-dismantling-the-monoliths/</a> - rails apps converting to Nodejs at Groupon I’m taking a stab at lock-free this week - First, my reading took me to Mechanical Sympathy (which we’ve discussed before) and now that there is a JSR for some new constructions - (StampedLock) this site has a great project - <a href=\"https://github.com/mjpt777/rw-concurrency\">https://github.com/mjpt777/rw-concurrency</a> which runs a bunch of benchmarks. All of this came from reading down the rabbit hole to this - from an article where I feel completely stupid. (prn stupid-feeling-reader (<a href=\"http://psy-lob-saw.blogspot.com/2013/10/spsc-revisited-part-iii-fastflow-sparse.html\">http://psy-lob-saw.blogspot.com/2013/10/spsc-revisited-part-iii-fastflow-sparse.html</a>) “Bunny Ruby api for RabbitMQ”:<a href=\"http://blog.rubyrabbitmq.info/blog/2013/10/29/bunny-1-dot-0-0-is-released/\">http://blog.rubyrabbitmq.info/blog/2013/10/29/bunny-1-dot-0-0-is-released/</a>…",
                duration: 2824
              }, {
                uid: 32763070,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-Episode-66-2013-10-28.mp3",
                episodeTitle: "DevNews #66 – RESTful tutorials, CAPCHAs and Machine Learning, a million to win a hackathon and more…",
                episodeSummary: "Show notes coming soon...…",
                duration: 1837
              }, {
                uid: 32601759,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-Developer-News-Episode-65-2013-10-23.mp3",
                episodeTitle: "DevNews #65 – Apple’s patent for touching glass with fingers is upheld?",
                episodeSummary: "Links <a href=\"http://www.infoq.com/presentations/asgard\">A great presentation by Jon Sondow on</a> the <a href=\"https://github.com/Netflix/asgard\">Netflix Asgard Project</a>- a Grails application server that deploys to AWS. Highlights include: Obama for America used it to keep its sites rolling and alive Used to be Netflix Application Console It is only one of the open source projects on <a href=\"http://netflix.github.io\">Netflix's GitHub page</a>. Reasons not to just use the AWS console include - you can hide the keys, customize the deployment model, automate workflow, log changes, and more. Also check out youtube.com/theasgardshow - a regular Q&amp;A show they archive on YouTube. <a href=\"https://github.com/jimhigson/oboe.js\">The Oboe.js Async Ajax Processing Project</a> -Oboe.js's",
                duration: 1922
              }, {
                uid: 32347512,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-Episode-64-2013-10-14.mp3",
                episodeTitle: "DevNews #64 – We’re older and losing our hair…",
                episodeSummary: "<p><em>Well, Ken is, anyway... A number of interesting topics this week.</em></p> Topic List Newly OSS’d project <a href=\"https://github.com/precog/platform\">Precog: advanced analyics for NoSql</a> <a href=\"http://blogs.lessthandot.com/index.php/WebDev/UIDevelopment/angularjs-vs-knockout-introduction-1\">Angularjs vs Knockout</a> - a great multi-page post comparing a number of features. <a href=\"http://java.dzone.com/articles/big-data-analytics-beyond\">Beyond map/reduce</a> - it's not just …",
                duration: 1758
              }, {
                uid: 32033512,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-Episode-63-2013-10-07.mp3",
                episodeTitle: "DevNews #63 – Robots that gallop, IDEs written in HTML, a browser swarm, what’s next?",
                episodeSummary: "The links <p>Sponsored by <a href=\"http://haydle.com\">Haydle</a>-ask, answer and rate answers to your company's questions, <a href=\"http://emergingtech.chariotsolutions.com/dataio2013\">Data I/O 2013</a>a conference featuring a variety of technologies and techniques for dealing with large-scale and sophisticated data, and <a href=\"http://chariotsolutions.com/education\">Chariot Education Services</a>, providing training </p>",
                duration: 1648
              }, {
                uid: 31822836,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-Episode-62-2013-10-01.mp3",
                episodeTitle: "DevNews #62 – The JVM wins, the JVM wins, the JVM wins!",
                episodeSummary: "<p>Or,</p> <p>\"I can't stand a standing desk, but I can chase a running VM...\"</p> <p>This episode is light on iOS, heavy on Java and Javascript, and covers some large-scale processing and machine learning articles to boot.</p> Topics Ain't it good",
                duration: 2051
              }, {
                uid: 31615729,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-61-2013-09-25.mp3",
                episodeTitle: "DevNews #60 – It’s an iOS and Javascript world in here…",
                episodeSummary: "Probably the lead story - the Lambda final revisions are in for JDK 8 and <a href=\"http://cr.openjdk.java.net/~briangoetz/lambda/lambda-state-final.html%20\">Brian Goetz has an informal summary</a> here R<a href=\"https://github.com/Netflix/RxJava\">xJava: Functional Reactive Programming on the JVM</a> (Java, Scala, Clojure) Javascript world <a href=\"https://github.com/thedigitalself/angular-sprout\">Angular-sprout</a> -- Builds on angular-seed,",
                duration: 2145
              }, {
                uid: 31340830,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-60-Dont-Give-Joel-A-Furby-2013-09-16.mp3",
                episodeTitle: "DevNews #60 – Somebody buy Joel a Furby",
                episodeSummary: "<p>This week - it's Not about Furby, but about the new Apple iPhones. Your hosts, Ken Rimple, Sujan Kapadia and Joel Confino talk about whether they'd go out and buy one, whether they still display the same appeal, and what's </p>",
                duration: 2047
              }, {
                uid: 31164512,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-59-09-09-2013.mp3",
                episodeTitle: "DevNews #59 – Bugs made of paper and graphine transistors – does the NSA know?",
                episodeSummary: "YEAH! Integrating yeoman-style projects into a larger maven build - Addy Osmani comes up with the goods. <a href=\"http://addyosmani.com/blog/making-maven-grunt/\">Making Maven Grunt</a> <a href=\"http://m.nbcnews.com/technology/nsa-foils-much-internet-encryption-8C11083204\">We buried the lead - NSA can get to everything</a> <a href=\"http://arstechnica.com/security/2013/09/of-course-nsa-can-crack-crypto-anyone-can-the-question-is-how-much/\">Joel brings up the counter-point, an article by ARS</a>.",
                duration: 1758
              }, {
                uid: 28661796,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-58-2013-09-03.mp3",
                episodeTitle: "DevNews #58 – The London Eye – of Sauron",
                episodeSummary: "<p>The Developer News is sponsored by Chariot Solutions <a href=\"http://chariotsolutions.com/education\">Education Services</a>. Get trained in Scala, Spring, Grails, Maven, Nexus, and more.</p> Links, please! A nice, involved, deep tutorial on building a <a href=\"http://www.thinkster.io/pick/521e8672e2a3b28f98000314/angularjs-tutorial-learn-to-build-modern-web-apps\">fantasy football league manager</a> using AngularJS. Vert.X has really",
                duration: 2058
              }, {
                uid: 25021246,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot_Developer_News_Episode_57_-_2013-08-26.mp3",
                episodeTitle: "DevNews #57 – Wherein we decide that PCs are dead, Java VMs still scream, and we want Keynote for Androuid",
                episodeSummary: "<p>We know Keynote for Android will never happen, but keep listening until you hear about Ken's encounter with a keyboarded, and moused, Android tablet in a remote assignment somewhere in Amish country...</p> <p>Quick sponsor note - registrations are now available </p>",
                duration: 2754
              }, {
                uid: 20370768,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-56-08-19-2013.mp3",
                episodeTitle: "DevNews #56 – Wherein we go shopping for drones…",
                episodeSummary: "<p>Well, not really, but did you know the US public and corporations can't buy non-military drones for corporate use yet? But it's coming. Soon, you may be pulled over by a flying saucer who wants your ID.</p> <p>Here are our </p>",
                duration: 2259
              }, {
                uid: 18160835,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-55-2013-08-12.mp3",
                episodeTitle: "DevNews #55 – In which our titles are shorter, and we ask, why not Javascript?",
                episodeSummary: "<p>In this episode, we discuss Javascript, javascript and more javascript... But, we also discuss DBaaS (YAaaS acronym), a tasty infographic, a set of web frameworks reviewed by the people who bring you JRebel, and more.</p> <a href=\"http://readwrite.com/2013/08/09/why-javascript-will-become-the-dominant-programming-language-of-the-enterprise#awesm=~oe2wfKq2cMz6Iu\">Javascript - the future dominant </a>",
                duration: 1285
              }, {
                uid: 15141251,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-54-2013-07-04.mp3",
                episodeTitle: "Chariot Developer News Episode #54 – Wherein an HTTPS vulnerability makes us drop our gear",
                episodeSummary: "<p>A recent SSL / TLS vulnerability causes temporary panic in the recording room when Joel knocks over the headphone mixer... But seriously folks, it's a doosie, one we'll be watching over the next few weeks. The mixer mishap is pretty </p>",
                duration: 1284
              }, {
                uid: 12721292,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-53-2013-07-29.mp3",
                episodeTitle: "Chariot Developer News Episode #53 – wherein Joel and Ken dislike everything",
                episodeSummary: "<p>Joel and Ken cover: A twitter conversation wherein Scala is bigger than COBOL for job hunters, but not bigger than Pizza Delivery Dzone - <a href=\"http://java.dzone.com/articles/my-java-ee-8-wishlist\">My Java EE 8 Wishlist</a> 160 million credit cards hacked by “high tech” cyber criminal gang …</p>",
                duration: 1426
              }, {
                uid: 8912434,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-52-2013-07-22.mp3",
                episodeTitle: "Chariot Developer News Episode #52 – SIM Card Hacking, JS tools, Unix tools for BigData",
                episodeSummary: "Show Links <a href=\"http://www.engadget.com/2013/07/22/sim-card-hack/\">Sim Card Hack</a> exposes potentially - <a href=\"http://securitywatch.pcmag.com/mobile-security/313914-encryption-bug-in-sim-card-can-be-used-to-hack-millions-of-phones\">millions of phones</a>, potentially. Here's hoping our phones use Triple-DES encryption. <a href=\"http://abetteruserexperience.com/2013/05/twitter-bootstrap-vs-foundation-4-which-one-is-right-for-you/\">Foundation -vs- Twitter Bootstrap</a> - a good overview of both and their strengths. Great comments as well. <a href=\"http://www.gregreda.com/2013/07/15/unix-commands-for-data-science/\">Unix commands for </a>",
                duration: 1617
              }, {
                uid: 8175963,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-Episode-51-July-15-2013.mp3",
                episodeTitle: "Chariot Developer News Episode #51 – More dev history, new Web IDE, Big Data debates, and more",
                episodeSummary: "New AWS feature - Resource permissions for EC2 RDS <a href=\"http://aws.amazon.com/about-aws/whats-new/2013/07/08/announcing-resource-permissions-for-amazon-ec2-and-amazon-rds/?ref_=pe_395470_31013550_7\">http://aws.amazon.com/about-aws/whats-new/2013/07/08/announcing-resource-permissions-for-amazon-ec2-and-amazon-rds/?ref_=pe_395470_31013550_7</a> History of tech - Vannivar Bush and Douglas Engelbart intersected - he read Vannivar’s future of tehchnology paper - <a href=\"http://www.theatlantic.com/technology/archive/2013/07/the-hut-where-the-internet-began/277551/%20\">http://www.theatlantic.com/technology/archive/2013/07/the-hut-where-the-internet-began/277551/</a><a href=\"http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/\"> </a><a href=\"http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/\">http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/</a> Another browser-based IDE, but this one has lots of …",
                duration: 1624
              }, {
                uid: 7361123,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-Episode-50-2013-07-08.mp3",
                episodeTitle: "Chariot DevNews Episode #50 – Phones hacked, security and passwords, and more",
                episodeSummary: "<p>It's our 50th episode! More to come, now weekly. Send us feedback on <a href=\"http://twitter.com/techcast\">@techcast</a>.</p> Topics ARS - You can crack iPhone auto-generated hotspot passwords in seconds - <a href=\"http://arstechnica.com/security/2013/06/new-attack-cracks-iphone-autogenerated-hotspot-passwords-in-seconds/\">http://arstechnica.com/security/2013/06/new-attack-cracks-iphone-autogenerated-hotspot-passwords-in-seconds/</a> Android phone #s breeched by Facebook app - <a href=\"http://www.darkreading.com/mobile/android-phone-numbers-leaked-by-facebook/240157723\">http://www.darkreading.com/mobile/android-phone-numbers-leaked-by-facebook/240157723</a> - ARS …",
                duration: 1660
              }, {
                uid: 6929144,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-devnews49-Tools-All-The-Way-Down.mp3",
                episodeTitle: "Chariot DevNews Episode #49 – Tools all the way down",
                episodeSummary: "<p>This week we're reviewing our favorite tools, development and otherwise.</p> <p>Joel and Ken talk about:</p> JSbin.com and JSFiddle.net - two browser-based tools that make fiddling with Javascript easy and fun <a href=\"http://trello.com\">Trello</a> - a good project-board tool. <a href=\"http://codiqa.com\">Codiqa</a> - a browser-based",
                duration: 1180
              }, {
                uid: 6151707,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-Episode-48-2013-06-24.mp3",
                episodeTitle: "Chariot DevNews Episode #48 – Big Data all over the place",
                episodeSummary: "<p>Its the big return of the regular DevNews this week. My co-host Joel Confino and I discuss lots of big data stuff, including:</p> <p></p> <p>They hype it, then they try to kill it <a href=\"http://bits.blogs.nytimes.com/2013/06/01/why-big-data-is-not-truth/\">Why Big Data is not truth</a> </p>",
                duration: 2270
              }, {
                uid: 5715824,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-episode_47-Steve-Smith-on-iOS-and-WWDC.mp3",
                episodeTitle: "Chariot DevNews Episode #47 – Chariot’s Steve Smith on the Apple WWDC and iOS 7",
                episodeSummary: "Chariot’s Steve Smith attended Apple’s World-wide developer conference last week, and we sat down today to talk to him about it. Topics WWDC ticket ordering process fun New hardware releases iOS 7 features OS X Mavericks His view as a …",
                duration: 1540
              }, {
                uid: 1149620,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-46-2012-08-20.mp3",
                episodeTitle: "DevNews #46 – a bevy of Chariot blog entries for your developer fiber",
                episodeSummary: "<p></p><p>Rebooting this podcast starting THIS WEEK! I hope to have one developer news every other week, starting today.</p><br><p>This summer has been anything but a vacation, with our training exploding and me spending lots of time in the classroom. </p>",
                duration: 873
              }, {
                uid: 1121170,
                url: "http://traffic.libsyn.com/chariottechcast/DeveloperNews45.mp3",
                episodeTitle: "DevNews #45 – Rod Johnson leaves VMware, FuseSource acquired by RedHat, more…",
                episodeSummary: "<p>Note to view all of the links that made up this podcast, visit our Delicious show page at<a href=\"http://delicious.com/developernews/45\">http://delicious.com/developernews/45</a></p> <p>Sponsors<br></p> <p>Chariot Solutions Education Services -Training in Spring, Hibernate, Scala, Maven and more. Visit us on the web at chariotsolutions.com/education</p>",
                duration: 1793
              }, {
                uid: 1121171,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-44-04-26-2012.mp3",
                episodeTitle: "DevNews #44 – Grails, Griffon, Apache Tika, our favorite developer tools and more",
                episodeSummary: "<p>Rich Freedman lent some time to talk to Ken Rimple tonight over skype and re-launch the Developer News series, which has been on hiatus since February. Here are some of the topics they discussed:</p> <a href=\"http://tika.apache.org/\">Apache Tika Apache Tika</a> <a href=\"http://www.dzone.com/links/r/griffon_095_released.html\">Griffon </a>",
                duration: 1595
              }, {
                uid: 1121172,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-43.mp3",
                episodeTitle: "DevNews #43 – Programming wisdom, videos, grails, Roo, Heroku, SQL sharing and more",
                episodeSummary: "<p>Hey, all. Gordon and I cooked up a few tasty items for your digestion this week. Weve got SpringRoo news, stuff on git and more.<br></p> <p><a href=\"http://schneide.wordpress.com/2012/02/13/take-your-programming-course-with-a-grain-of-salt-please/\">Take your programming course with a grain of salt, please</a> A developer takes a </p>",
                duration: 2483
              }, {
                uid: 1121173,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-42-01-30-2012.mp3",
                episodeTitle: "DevNews #42 – We hitchhike through Spring, Rails, WebOS and Javascript",
                episodeSummary: "<p>In this fine episode, we cover Spring 3.1, with features such as the Spring c: namespace, open webos, Rails 3.2.0, and Javascript MVC frameworks, to name a few topics.<br></p> <p><a href=\"http://blog.springsource.org/2011/12/13/spring-framework-3-1-goes-ga/\">Spring Framework 3.1 goes GA | SpringSource Team Blog</a> Complete </p>",
                duration: 1284
              }, {
                uid: 1121174,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-41-2012-01-16.mp3",
                episodeTitle: "DevNews #41 – Microsoft and Secure Boot, 1 GB I/O per second, NYC High School for Comp Sci",
                episodeSummary: "<p>DevNews #41 is brought to you by Chariot Solutions, leaders in software development in mobile, web, and integration, as well as mentoring and training. Find out about our services at chariotsolutions.com.</p> <p>Links:<br></p> <p><a href=\"http://www.joelonsoftware.com/items/2012/01/13.html\">New York City gets a Software Engineering High </a></p>",
                duration: 1375
              }, {
                uid: 1121175,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-40-Many-Spring-Announcements.mp3",
                episodeTitle: "DevNews #40 – Spring 3.1 is here, Grails 2.0, and Heroku for Grails",
                episodeSummary: "<p>Show Notes<br></p> <p>Spring 3.1 goes GA -<a href=\"http://blog.springsource.org/2011/12/13/spring-framework-3-1-goes-ga/\">http://blog.springsource.org/2011/12/13/spring-framework-3-1-goes-ga/</a><br> Grails 2.0 Released -<a href=\"http://blog.springsource.org/2011/12/15/grails-2-0-released/\">http://blog.springsource.org/2011/12/15/grails-2-0-released/</a><br> Grails on Heroku goes beta -<a href=\"http://blog.heroku.com/archives/2011/12/15/grails/\">http://blog.heroku.com/archives/2011/12/15/grails/</a><br> Peter Ledbrook on vert.x -<a href=\"http://skillsmatter.com/podcast/home/groovy-vert-x\">http://skillsmatter.com/podcast/home/groovy-vert-x</a><br> vert.x 0.2 with limited Groovy support -<a href=\"http://purplefox.github.com/vert.x/\">http://purplefox.github.com/</a></p>",
                duration: 1138
              }, {
                uid: 1121176,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-39-2011-10-18.mp3",
                episodeTitle: "DevNews #39 – Steve Jobs RIP, MIT CS books, Roo updates",
                episodeSummary: "<p>Welcome to Episode 39! This week we discussed:<br></p> <p><a href=\"http://www.marco.org/2011/10/13/ios5-caches-cleaning\">Cleaning? ? Marco.org</a><br><a href=\"http://www.rimple.com/tech/2011/10/18/roo-in-the-corner-new-features-in-trunk.html\">Roo (in the) Corner new features in?trunk Rimple on Tech Random Thoughts</a><br><a href=\"http://www1.idc.ac.il/tecs/\">The Elements of Computing Systems / Nisan &amp; Schocken / </a><a href=\"http://www.idc.ac.il/tecs\">www.idc.ac.il/tecs</a><br><a href=\"http://blog.stackoverflow.com/2011/10/steve-jobs-1955-2011/\">Steve Jobs, 1955-2011 </a></p>",
                duration: 1289
              }, {
                uid: 1121177,
                url: "http://traffic.libsyn.com/chariottechcast/chariot-devnews-38-2011-09-09.mp3",
                episodeTitle: "DevNews #38 – The world is changing (a bit) and more",
                episodeSummary: "<p>This week we catch up with all of the worlds news in what normally is a quiet August. Then we discuss some new releases in the Firefox world, the new Java Lambda decision, Java 7 features, and a warning about </p>",
                duration: 1954
              }, {
                uid: 1121178,
                url: "http://traffic.libsyn.com/chariottechcast/DeveloperNews-37-2011-07-19.mp3",
                episodeTitle: "DevNews #37 – Heroku adds Clojure AND Mats, we talk LMAX, Grails 1.4 is now 2.0, design patterns in JS",
                episodeSummary: "<p>Joining Ken Rimple this week are Jamie Allen (@jamie_allen) and Jason Gritman. Topics discussed:<br></p> <p><a href=\"http://grails.1312388.n4.nabble.com/Grails-1-4-is-now-Grails-2-0-td3627931.html\">Grails user Grails 1.4 is now Grails 2.0</a><br><a href=\"http://blog.springsource.com/2011/06/30/countdown-to-grails-2-0-static-resources/\">Countdown to Grails 2.0: Static resources | SpringSource Team Blog</a><br><a href=\"http://addyosmani.com/resources/essentialjsdesignpatterns/book/\">Essential JavaScript Design Patterns For Beginners</a></p>",
                duration: 1680
              }, {
                uid: 1121179,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-36-2011-06-14.mp3",
                episodeTitle: "DevNews #36 – Kevin Griffin on iOS5, Java 7 RI is the Open JDK, Unity for Ubuntu, Listener Feedback, more",
                episodeSummary: "<p>What a couple of weeks!<br> The <a href=\"http://phillyemergingtech.com\">Philly Emerging Tech 2011 Conference</a> really knocked me for a loop. What a great show, and so much to process from it too. Well have content coming in very soon, including screencasts of close </p>",
                duration: 2975
              }, {
                uid: 1121180,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-35.mp3",
                episodeTitle: "DevNews #35 – A slew of Google IO announcements, Scala forces join, and more",
                episodeSummary: "<p>In this weeks episode, weve given Eric a lot of coffee and set him loose on the Google I/O announcements. We also discuss the new Scala / Akka company, TypeSafe, Hudson being donated to the Eclipse foundation, 7 inch tablets, </p>",
                duration: 1552
              }, {
                uid: 1121181,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-34.mp3",
                episodeTitle: "DevNews #34 – Google hires Gosling, closes Android Honeycomb, we talk productivity",
                episodeSummary: "<p>Hello there, and welcome to April 1st. Still working on those screenshot URLs from our episode on Friday, but we do have the links from articles we spoke about in the podcast below.<br></p> <p><a href=\"http://www.zdnet.com/blog/perlow/i-bought-a-mac-so-sue-me/16509\">I bought a Mac. So sue me. </a></p>",
                duration: 1151
              }, {
                uid: 1121182,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-Devnews-Epsiode-33-2011-03-22.mp3",
                episodeTitle: "DevNews #33 – The triumphant return of Eric, Node.js, Rails Metaprogramming, much more",
                episodeSummary: "<p>We start out this week looking at the career of superprogrammer Fabrice Bellard, and move on to topics as different as RSA seed files and potential compromise, Apples 10.6.7 update, graphing and data visualization, metaprogramming in Ruby, heck the list </p>",
                duration: 1500
              }, {
                uid: 1121183,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-32-2011-03-11.mp3",
                episodeTitle: "DevNews #32 – No Eric today, it’s all about the Cukes, Couchbase for iOS, Wavemaker, DSLs and more",
                episodeSummary: "<p>Welcome to our Developer News, Episode #32. Eric is here in spirit and on assignment. He donated three articles see if you can see which ones are his!. As usual, our dev news show notes are here, but can </p>",
                duration: 1035
              }, {
                uid: 1121184,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-Episode-31-02-23-2011.mp3",
                episodeTitle: "DevNews #31 – Rails 3.1 rumors, Forking and Joining in Java 7, Google Patents and more",
                episodeSummary: "<p>The TechCast is brought to you this (and every) week by our employer / sponsor, Chariot Solutions. We have lots of training in Spring and Maven coming up in March, and if you hurry you can enjoy an early bird </p>",
                duration: 1565
              }, {
                uid: 1121185,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-30-02-07-2011.mp3",
                episodeTitle: "DevNews #30 – Seam 3 Beta 1, Netflix hearts NoSQL, Green Beans, HTTPS myths, more",
                episodeSummary: "<p>Show notes to follow. For now, visit <a href=\"http://delicious.com/developernews/30\">http://delicious.com/developernews/30</a></p> <p>Ken &amp; Eric</p>",
                duration: 1972
              }, {
                uid: 1121186,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews_29-2011-01-14.mp3",
                episodeTitle: "DevNews #29 – WebM takes the ‘M’ out of HTML5, JRuby best release ever, more…",
                episodeSummary: "<p>This weeks Dev News is brought to you by the letter M, as in WebM. Google has announced that future releases of the Chrome browser will no longer support H.264, instead moving to the new WebM and VP8 codec/format. So </p>",
                duration: 2054
              }, {
                uid: 1121187,
                url: "http://traffic.libsyn.com/chariottechcast/chariot-devnews-28-12-07-2010.mp3",
                episodeTitle: "DevNews #28 – Web Frameworks, Amazon goes DNSing, Refining Ruby, and more",
                episodeSummary: "<p>Eric and Ken talk about Amazons new DNS server, Route 53, discuss Matt Raibles excellent web frameworks comparison study, discuss resources for Scala from the <a href=\"http://basementcoders.com\">Basement Coders</a>, talk about a new mixin feature request around the Ruby language, and </p>",
                duration: 1955
              }, {
                uid: 1121188,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-27-11-11-2010.mp3",
                episodeTitle: "DevNews #27 – Java, Python and the Mobile Don",
                episodeSummary: "<p>This weeks show includes BREAKING NEWS (we need some sort of web effect for this) Apple is joining the Open JDK. Should really mix things up.<br></p> <p><a href=\"http://www.businesswire.com/news/home/20101112005253/en/Oracle-Apple-Announce-OpenJDK-Project-Mac-OS\">Oracle and Apple Announce OpenJDK Project for Mac OS X | Business </a></p>",
                duration: 1286
              }, {
                uid: 1121189,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews26-Oct23-2010.mp3",
                episodeTitle: "DevNews #26 – Everybody is a Legacy Framework, Apple JDK Deprecation, IBM drops Harmony, mass hysteria",
                episodeSummary: "<p>Ok, folks. So many things happened in the past week that we needed to get an episode out to talk about them. Not that Eric or me have any line into correct reasoning behind anything, but we wanted to talk, </p>",
                duration: 983
              }, {
                uid: 1121190,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-25-10-07-2010.mp3",
                episodeTitle: "DevNews #25 – Java in Stasis?  Applying a chainsaw, revving Hibernate and other saucy topics",
                episodeSummary: "<p>Do you know why youre binding those HQL parameters? Want to make the simplest AppEngine application in Groovy? How about learning about why youre such a bad programmer (that includes all of us, according to the post).</p> <p>All this and </p>",
                duration: 2173
              }, {
                uid: 1121191,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-24-09-20-2010.mp3",
                episodeTitle: "DevNews #24 – A triple shot of Python, RESTful Rails, and NoSQL GORM and Reddis",
                episodeSummary: "<p>Weve all been very busy of late. Just got a chance to catch up and so we have lots to talk about in episode #24.</p> <p>Links<br></p> <p><a href=\"http://pypi.python.org/pypi/jellyfish/0.1.2\">Python Package Index : jellyfish 0.1.2</a><br><a href=\"http://pyjs.org/\">Pyjamas Python Javascript Compiler, Desktop Widget Set </a></p>",
                duration: 1551
              }, {
                uid: 1121192,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-23-08-24-2010.mp3",
                episodeTitle: "DevNews #23 – I hereby patent strange podcast episode titles…",
                episodeSummary: "<p>(Sorry for the delay between shows lately. Its the summer, and I was away on vacation)</p> <p>Especially THIS week, the opinions of Ken and Eric do not reflect the opinions of Chariot Solutions</p> <p>Speaking of this week, here are the </p>",
                duration: 1198
              }, {
                uid: 1121193,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-Episode-22-08-08-2010.mp3",
                episodeTitle: "DevNews #22 – We’ve Got Mobile and CI, Digg and grails sharding, and more",
                episodeSummary: "<p>Thanks to Kevin Griffin for joining Eric Snyder and myself this week.<br> Articles of interest<br> From <a href=\"http://www.delicious.com/developernews/22\">http://www.delicious.com/developernews/2</a>:<br></p> <p><a href=\"http://nosql.mypopescu.com/post/904840384/django-and-nosql-databases-revisited\">Django and NoSQL Databases Revisited myNoSQL</a><br><a href=\"http://soatechlab.blogspot.com/2010/08/pgp-encryption-with-mule-esb.html\">Using PGP Encryption with Mule</a><br><a href=\"http://chariotsolutions.blogspot.com/2010/08/machine-learning-google-prediction-api.html\">Chariot Solutions: Machine Learning: Google Prediction API</a><br><a href=\"http://about.digg.com/blog/continuous-deployment-code-review-and-pre-tested-commits-digg4\">Continuous Deployment, Code </a></p>",
                duration: 947
              }, {
                uid: 1121194,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DeveloperNews-21-07-29-2010.mp3",
                episodeTitle: "DevNews #21 – We have Rails 3 RC1, Grails and Griffon, and more!",
                episodeSummary: "<p>In the DevNews today <br></p> <p><a href=\"http://oreillynet.com/pub/e/1604\">CouchApp Evently Guided Hack w/ CouchDB</a><br><a href=\"http://charlesleifer.com/blog/announcing-djangoembed-rich-media-consuming-and-providing-with-django/\">Announcing djangoembed, rich media consuming and providing with Django</a><br><a href=\"http://www.groovyblogs.org/entries/jump?id=15098\">Andres Almirays Weblog : Weblog</a><br><a href=\"http://weblog.rubyonrails.org/2010/7/26/rails-3-0-release-candidate\">Daily Dose Rails 3 Arrives at First RC Station</a><br><a href=\"http://feedproxy.google.com/~r/Interface21TeamBlog/~3/TTezYGYdIro/\">Spring MVC 3 Showcase</a><br><a href=\"http://feedproxy.google.com/~r/Interface21TeamBlog/~3/I3ZFSgIR6s8/\">GORM Gotchas </a></p>",
                duration: 1055
              }, {
                uid: 1121195,
                url: "http://traffic.libsyn.com/chariottechcast/Chariot-DevNews-20-07-14-2010.mp3",
                episodeTitle: "DevNews #20 – Start, Finish, or Play the Game",
                episodeSummary: "<p>Amongst our weaponry<br></p> <p><a href=\"http://www.drobnik.com/touch/2010/07/understanding-ios-4-backgrounding-and-delegate-messaging/\">Understanding iOS 4 Backgrounding and Delegate Messaging @ Dr. Touch</a><br><a href=\"http://github.com/mxcl/homebrew\">mxcls homebrew at master GitHub</a><br><a href=\"http://www.engineyard.com/blog/2010/homebrew-os-xs-missing-package-manager/\">Homebrew: OS Xs Missing Package Manager | Engine Yard Ruby on Rails Blog</a><br><a href=\"http://www.jamesward.com/2010/07/07/amf-js-a-pure-javascript-amf-implementation/\">amf.js A Pure JavaScript AMF Implementation</a></p>",
                duration: 1216
              }, {
                uid: 1121196,
                url: "http://traffic.libsyn.com/chariottechcast/DevNews-Episode-19-07-01-2010.mp3",
                episodeTitle: "DevNews #19 – Releases Releases, oh pay me, HTML5 salary please",
                episodeSummary: "<p>Chariot Developer News Episode #19<br> Hosts: Ken Rimple and Eric Snyder<br> The watchword this week is Release Many releases upcoming or out, including FireFox 4 beta/preview 1, Tomcat 7 beta 1, and the upcoming Passenger 3 and GMail with HTML </p>",
                duration: 1079
              }
            ]
          }, {
            feedUid: "ty7eUANLFN2wkrrQxhfyn",
            subscriptionTitle: "organic",
            albumArt: "podcast-default.png",
            summary: "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passag",
            feedUrl: "http://javascriptjabber.com/feed",
            authors: "Max Burman",
            tracks: [
              {
                uid: "rr4e2KFm8qoWAr",
                episodeTitle: "Retro PBR&B",
                mediaUrl: "http://twit.tv/blahblah/someURl.mp3",
                episodeSummary: "brief summary about particular episode",
                enqueue: false,
                duration: 4259303
              }, {
                uid: "kskgeZyvL6cndN",
                episodeTitle: "Vice flannel 8-bit",
                mediaUrl: "http://twit.tv/blahblah/somewfw.mp3",
                episodeSummary: "number2, lets see if this works, brief summary about particular episode",
                enqueue: false,
                duration: 453454
              }, {
                uid: "frhwKQZc7YgF",
                episodeTitle: "Cred before they sold out tote bag",
                mediaUrl: "http://twit.tv/blahblah/somewfw.mp3",
                episodeSummary: "number2, lets see if this works, brief summary about particular episode",
                enqueue: false,
                duration: 453454
              }, {
                uid: "tdY8hwKQ337FPF",
                episodeTitle: "Ugh slow-carb",
                mediaUrl: "http://twit.tv/blahblah/somewfw.mp3",
                episodeSummary: "number2, lets see if this works, brief summary about particular episode",
                enqueue: false,
                duration: 453454
              }
            ]
          }, {
            feedUid: "ty7eUANLFN2wkrrQxhfyn",
            subscriptionTitle: "organic",
            albumArt: "podcast-default.png",
            summary: "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passag",
            feedUrl: "http://javascriptjabber.com/feed",
            authors: "Max Burman",
            tracks: [
              {
                uid: "rr4e2KFm8qoWAr",
                episodeTitle: "Retro PBR&B",
                mediaUrl: "http://twit.tv/blahblah/someURl.mp3",
                episodeSummary: "brief summary about particular episode",
                enqueue: false,
                duration: 4259303
              }, {
                uid: "kskgeZyvL6cndN",
                episodeTitle: "Vice flannel 8-bit",
                mediaUrl: "http://twit.tv/blahblah/somewfw.mp3",
                episodeSummary: "number2, lets see if this works, brief summary about particular episode",
                enqueue: false,
                duration: 453454
              }, {
                uid: "frhwKQZc7YgF",
                episodeTitle: "Cred before they sold out tote bag",
                mediaUrl: "http://twit.tv/blahblah/somewfw.mp3",
                episodeSummary: "number2, lets see if this works, brief summary about particular episode",
                enqueue: false,
                duration: 453454
              }, {
                uid: "tdY8hwKQ337FPF",
                episodeTitle: "Ugh slow-carb",
                mediaUrl: "http://twit.tv/blahblah/somewfw.mp3",
                episodeSummary: "number2, lets see if this works, brief summary about particular episode",
                enqueue: false,
                duration: 453454
              }
            ]
          }, {
            feedUid: "ds4sUANLFN2wkrrQxhfyn",
            subscriptionTitle: "mlkshk roof party",
            albumArt: "podcast-default.png",
            summary: "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passag",
            feedUrl: "http://javascriptjabber.com/feed",
            authors: "Max Burman",
            tracks: [
              {
                uid: "j33cxKFm8qoWAr",
                episodeTitle: "Helvetica High Life",
                mediaUrl: "http://twit.tv/blahblah/someURl.mp3",
                episodeSummary: "Assumenda deep v sunt, stumptown mustache velit voluptate letterpress Odd Future selfies eu put a bird on it culpa. Veniam salvia mustache, placeat nulla consectetur trust fund. Hella fingerstache ugh tofu YOLO, master cleanse small batch deserunt adipisicing 90's aliqua magna pariatur. Portland do polaroid velit Cosby sweater, scenester direct trade. Velit messenger bag before they sold out aliqua swag, officia consectetur squid Tonx. Raw denim PBR Shoreditch ethnic church-key adipisicing. Gluten-free YOLO consequat, ad pop-up keffiyeh Wes Anderson tattooed aesthetic narwhal nesciunt cardigan semiotics selfies DIY.",
                enqueue: false,
                duration: 4259303
              }, {
                uid: "xc6jcZyvL6cndN",
                episodeTitle: "Selvage Pitchfork",
                mediaUrl: "http://twit.tv/blahblah/somewfw.mp3",
                episodeSummary: "Mumblecore veniam occaecat salvia yr. Selvage vinyl yr viral dolor roof party. Sriracha dolore pour-over gluten-free, readymade chambray commodo occaecat PBR High Life. VHS craft beer Shoreditch typewriter fingerstache, irony master cleanse stumptown. Skateboard Godard tofu magna nihil reprehenderit. Art party tousled excepteur, typewriter duis adipisicing aliqua tempor messenger bag street art fixie. Vice meggings High Life veniam excepteur, quinoa food truck voluptate.",
                enqueue: false,
                duration: 453454
              }, {
                uid: "l9iihwKQZc7FPF",
                episodeTitle: "VHS beard",
                mediaUrl: "http://twit.tv/blahblah/somewfw.mp3",
                episodeSummary: "nBanh mi id proident brunch jean shorts, cray aesthetic officia voluptate Tumblr deep v pariatur asymmetrical sunt. American Apparel aliquip pop-up sint. Forage aliqua VHS, Odd Future butcher master cleanse selvage Vice gluten-free small batch food truck Neutra pariatur Austin raw denim. Minim Portland lomo XOXO. Craft beer et fanny pack pop-up, food truck authentic do chillwave in velit excepteur aute VHS kale chips put a bird on it. Actually authentic mumblecore post-ironic. Aesthetic sunt tousled, biodiesel pariatur paleo 8-bit meh iPhone elit excepteur ugh.",
                enqueue: false,
                duration: 453454
              }, {
                uid: "hhh8hwKQ337FPF",
                episodeTitle: "bitters keffiyeh",
                mediaUrl: "http://twit.tv/blahblah/somewfw.mp3",
                episodeSummary: "Selfies ugh fap cupidatat, food truck XOXO letterpress pork belly vinyl Banksy butcher brunch adipisicing dolore. Pork belly Tonx Williamsburg before they sold out freegan, culpa ex ullamco selvage delectus. Placeat hashtag nulla direct trade. Fugiat eiusmod Intelligentsia, hashtag raw denim laborum Neutra single-origin coffee elit direct trade excepteur semiotics +1. Tote bag reprehenderit mlkshk sed consectetur, officia sint Marfa Neutra shabby chic esse Cosby sweater seitan chia ennui. Bushwick consectetur sartorial, Brooklyn Echo Park Wes Anderson mumblecore. Mixtape photo booth bicycle rights seitan, laborum polaroid American Apparel next level readymade YOLO.",
                enqueue: false,
                duration: 453454
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
        }
      };
      Swabcast.reqres.setHandler("entities:library", function() {
        return API.getFeedEntities();
      });
      return Swabcast.reqres.setHandler("feed:entity", function(id) {
        return API.getFeedEntity(id);
      });
    });
  });

}).call(this);
