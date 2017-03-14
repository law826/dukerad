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
  Session.set('level1', '[a-zA-Z]+')
  Session.set('level2', '[a-zA-Z]+')
  Meteor.subscribe('phoneNumbers');
}


Template.information.helpers({
	phonenumbers: function () {
    var level1 = Session.get('level1');
    var level2 = Session.get('level2');
    var search = Session.get('search')
		return Phonenumbers.find(
                {$or: 
                  [
                  {
                  // The query is equal to the appropriate level 1 and 2 selection and the search term looks within the person field. 
                  level1: {$regex: level1, "$options": "i"}, 
                  level2: {$regex: level2, "$options": "i"}, 
                  'numbers.person': 
                    {
                      $regex: search, "$options": "i"
                    }
                  },
                  // The query looks into the the level 1 field as well. 
                  {
                  level1: 
                    {
                      $regex: search, "$options": "i"
                    }
                  },
                  // The query looks into the level 2 field. 
                  {
                  level2: 
                    {
                      $regex: search, "$options": "i"
                    }
                  },
                  // Looks into level 3 field. 
                  {
                  level3: 
                    {
                      $regex: search, "$options": "i"
                    }
                  },
                  // Looks into miscellaneous field.
                  {
                  misc: 
                    {
                      $regex: search, "$options": "i"
                    }
                  },
                  ]
                })
	},
  providericon: function () {
    if (this.person.includes("RN")) {
      return '<i class="fa fa-heartbeat providericon"></i>'
    } else {
      return '<i class="fa fa-user-md providericon"></i>'
    }
  },
  stafftype: function () {
    if (this.person.includes("RN")) {
      return 'nurse'
    } else {
      return 'provider'
    }
  }
})