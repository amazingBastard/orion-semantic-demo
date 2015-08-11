// Publish all posts

Meteor.publish('posts', function () {
  return Posts.find();
});

// Publish one post

Meteor.publish('post', function(id) {
  check(id, String)
  return Posts.find(id);
});
