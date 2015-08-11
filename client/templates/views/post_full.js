Template.postFull.helpers({
	post: function () {
		return Posts.findOne(Router.current().params._id);
	}
});
