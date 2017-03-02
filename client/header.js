Template.header.created = function () {
	Session.set('search', '[a-zA-Z]+')
}

Template.header.helpers({
	phonenumbers: function () {
	}
})

Template.header.events({
  'keyup input#search': function (evt) {
  	Session.set('search', evt.currentTarget.value);
  }
});