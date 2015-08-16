Meteor.startup(function () {
	if (Meteor.users.find().count() < 1) {

    Accounts.createUser({
      username: 'admin',
      password: 'admin',
			email: 'admin@admin.com',
			profile: {
			  name: 'Admin'
      }
    });
  }
});
