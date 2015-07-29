// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Orion Semantic UI Demo',
  DESCRIPTION: 'Demo to test and showcase the Orion Semantic-UI package.'
};
