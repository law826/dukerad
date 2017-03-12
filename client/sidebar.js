Template.sidebar.events({
  'click .providers': function (evt) {
    Session.set('context', 'Providers');
    Session.set('search', '[a-zA-Z]+')
  },
  'click .techs': function (evt) {
    Session.set('context', 'Techs');
    Session.set('search', '[a-zA-Z]+')
  },
  'click #section-title': function (evt) {
  	Session.set('context', '[a-zA-Z]+')
  },
  'click .ed-providers': function (evt) {
    Session.set('context', 'EDProviders');
    Session.set('search', '[a-zA-Z]+')
  }
});