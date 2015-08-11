Router.route('/', {
	name: 'root',
	data: function() {
		return [
			Posts.find()
		]
	},
	waitOn: function () {
		return [
			Meteor.subscribe('posts')
		]
	},
	action: function () {
		if (this.ready())
			this.render('root');
		else
			this.render('loading');
	}
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/posts/:_id', {
	name: 'postFull',
	data: function() {
    return [
			Posts.findOne(this.params._id)
		]
  },
  waitOn: function () {
		return [
			Meteor.subscribe('post', this.params._id)
		]
  },
  action: function () {
    if (this.ready())
      this.render('postFull');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
