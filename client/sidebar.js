Template.sidebar.events({
  'click .level1': function (evt) {
    evt.preventDefault();
    var level1 = evt.currentTarget.innerText;
    Session.set('level1', level1);
    Session.set('search', '[a-zA-Z]+'); // resets the search term
  },
  'click .level2': function (evt) {
    evt.preventDefault();
    var level2 = evt.currentTarget.innerText;
    Session.set('level2', level2);
    Session.set('search', '[a-zA-Z]+'); // resets the search term
  }
});