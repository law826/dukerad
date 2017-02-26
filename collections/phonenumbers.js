Phonenumbers = new Meteor.Collection('phoneNumbers');

Phonenumbers.allow({
  update: function (userId, doc) {
    return (userId && doc.user === userId);
  },
  insert: function (userId, doc) {
    return (userId !== null)
  },
  remove: function (userId, doc) {
    return (userId !== null)
  }
});