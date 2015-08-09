Template.root.onRendered(function() {
	this.subscribe('postsWithUsers')
});

Template.root.helpers({
	posts: function () {
		return Posts.find();
	}
});
