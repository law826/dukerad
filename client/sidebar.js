Template.sidebar.events({
  'click .level1': function (evt) {
    evt.preventDefault();
    var level1 = $(evt.currentTarget).attr('data-id'); // to accomodate reading room as opposed to reading rooms
    Session.set('level1', level1);
    Session.set('search', level1); // resets the search term
  },
  'click .level2': function (evt) {
    evt.preventDefault();
    var level2 = evt.currentTarget.innerText;
    Session.set('level2', level2);
    Session.set('search', level2); // resets the search term
  }
});


//$(".autocomplete-item-active").attr('data-id');