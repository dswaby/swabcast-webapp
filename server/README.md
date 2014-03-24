Web Server
----------

Uses
  * node.js
  * express.js framework
  * mongodb
  * mongoose


DB architecture
---------------
> while I have been spending my time primarily on the front end, I have begun to work on the server with the architecture following architecture in mind
> Contributions or suggestions for improvements are welcome!

  * ###### Subscriptions collection
    * used for storing subscription data for all feeds
    * each feed has own document
    * tasks configured for periodically fetching subscription feeds, parsing XML/RSS/Atom/whatever, and updating to document
    * not writable through server api calls
    * Episodes are stored as embedded documents
    * some sort image retrieval/optimization/caching mechanism in place for feed subscription images
      * something similar to the [paperclip gem for rails](https://github.com/thoughtbot/paperclip)
    * Documents are indexed and include search terms for sorting, possibly a master document consisting of all subscriptions and related document _id

  * ###### UserAuth collection
    * used purely for storing/retrieving passport authentication credentials

  * ###### UserDocument collection
    * entire document
    * consist of document containing all user subscriptions
    * all subscribed feeds and feed updates are retrieved from Subscriptions collection
    * episode models contain extra data such as archived/currentposition/enqueue
    * consist of document containing all user subscriptions
    * contain user preferences and playlists

ASSUMPTIONS
-----------
Updates to UserDocument episode shema are sent using a uuid consisting of subscription and episode identifiers stored in a concatenated string
ie

an example call to update an episode at /api/subscribed/:uuid could be

```javascript
jQuery.ajax({
    url: '/api/subscribed/abcde12345-06',
    type: 'PUT',
    data: {
        'currentPosition': 34252
    },
    success: function( textStatus ) {
        console.log('we have ', textStatus );
    }
});
```

> * GET /api/subscribed/   will return json representation of all subscription data in user document
> * GET /api/playlist      will return json representation of episodes a user has subscribed to
