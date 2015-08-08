Template.header.onRendered(function() {
  var header = document.querySelector('header');

  setAttributes(header, {
    'data-spy': 'affix',
    'data-offset-top': '60',
    'data-offset-bottom': '200'
  });

  function setAttributes(element, attributes) {
    var keys = Object.keys(attributes);
    for(var i = 0; i < keys.length; ++i) {
      element.setAttribute(keys[i], attributes[keys[i]]);
    }
  }
});
