Database Architecture
=====================
###### This Server
  * node.js
  * express.js framework
  * mongodb
  * mongoose

architecture in mind
One database consisting of three document collections
  * Subscriptions collection
    ------------------------
    * used for storing subscription data for all feeds
    * each feed has own document
    * tasks configured for periodically fetching subscription feeds, parsing XML/RSS/Atom/whatever, and updating to document
    * not writable through server api calls
    * Episodes are stored as embedded documents
    * some sort image retrieval/optimization/caching mechanism in place for feed subscription images
      * something similar to the [paperclip gem for rails](https://github.com/thoughtbot/paperclip)
    * Documents are indexed and include search terms for sorting, possibly a master document consisting of all subscriptions and related document _id

  * UserAuth collection
    ------------------------
    * used purely for storing/retrieving passport authentication credentials

  * UserDocument collection
    -----------------------
    * entire document
    * consist of document containing all user subscriptions
    * all subscribed feeds and feed updates are retrieved from Subscriptions collection
    * episode models contain extra data such as archived/currentposition/enqueue
    * consist of document containing all user subscriptions
    * contain user preferences and playlists

ASSUMPTIONS
-----------
Updates to UserDocument episode shema are sent using a uuid consisting of a concatenated string

> * GET /api/subscribed/   will return json representation of all subscription data in user document
> * GET /api/playlist      will return json representation of episodes a user has subscribed to
