Template.root.onRendered(function() {
	this.subscribe('posts')
});

Template.root.helpers({
	posts: function () {
		return Posts.find();
	}
});
