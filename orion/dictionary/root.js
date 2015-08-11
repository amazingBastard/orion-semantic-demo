// In this file are defined the definitions of the category basic.
// It's a good practice to create a file for each dictionary category

orion.dictionary.addDefinition('demo', 'root', {
    type: String,
    label: 'Demo Text',
    defaultValue: function() {
      // Works with functions or values
      return 'This is demo text';
    }
});
