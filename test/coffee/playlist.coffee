# define (require) ->
#   feeds = require("app","entities/feed")
#   describe "Feeds", ->
#     describe "Feed Model", ->
#       it "should default \"urlRoot\" property to \"/api/samples\"", ->

#         feeds = new Entities.Feed()
#         feeds.urlRoot.should.equal "feeds"
#         return

#       it "should have a default album art image", ->
#         feeds = new Entities.Feed()
#         feeds.albumArt.should.equal "default.jpg"
#         return

#       return

#     return

#   return