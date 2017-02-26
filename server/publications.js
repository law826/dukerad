Meteor.publish('phoneNumbers', function() {
  return Phonenumbers.find();
});