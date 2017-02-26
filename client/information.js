Template.information.rendered = function() {
  // var $container = $('#result-container');

  // $container.imagesLoaded( function(){
  //   $container.masonry({
  //     itemSelector : '.result-item'
  //   });
  // });
};

function masonize(callback) {
  var container = $('#result-container');
  container.masonry({
    itemSelector: '.result-item',
    gutter:10
  })
  if(callback){callback()};
}

Template.information.created = function () {
  Session.set('context', '[a-zA-Z]+')
  Meteor.subscribe('phoneNumbers');
}


Template.information.helpers({
	phonenumbers: function () {
    var context = Session.get('context');
    var search = Session.get('search')
		return Phonenumbers.find(
                {$or: 
                  [
                  {type: {$regex: context, "$options": "i"}, 
                  'numbers.person': 
                    {
                      $regex: search, "$options": "i"
                    }
                  },
                  {type: {$regex: context, "$options": "i"}, 
                  'location': 
                    {
                      $regex: search, "$options": "i"
                    }
                  }
                  ]
                })
	},
  providericon: function () {
    if (this.person.startsWith("RN")) {
      return '<i class="fa fa-heartbeat providericon"></i>'
    } else {
      return '<i class="fa fa-user-md providericon"></i>'
    }
  },
  stafftype: function () {
    if (this.person.startsWith("RN")) {
      return 'nurse'
    } else {
      return 'provider'
    }
  }
})