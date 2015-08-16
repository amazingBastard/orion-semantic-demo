// We set the app options in /lib to be loaded before everything

// To allow the creation of users

Options.set('forbidClientAccountCreation', true);

// To set the schema of the user profile, so we can

Options.set('profileSchema', {
  picture: orion.attribute('file', {
    label: orion.helpers.getTranslation('accountsPictureLabel'),
    optional: true
  }),
  name: {
    type: String,
    label: orion.helpers.getTranslation('accountsNameLabel')
  }
});
