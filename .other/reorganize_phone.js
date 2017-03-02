db.tmppn.find().addOption(DBQuery.Option.noTimeout).forEach(
    function(pn_doc) {
    	// var existing_location_document = db.phoneNumbers.findOne({location: pn_doc.location, type: pn_doc.type, misc: pn_doc.misc})
        var existing_location_document = db.phoneNumbers.findOne({location: pn_doc.location})
    	if (existing_location_document == null) {
    		db.phoneNumbers.insert({
    			location: pn_doc.location,
    			type: pn_doc.type,
    			numbers: [{person: pn_doc.person, number: pn_doc.number}],
    			misc: pn_doc.misc
    		})
    	} else {
    		var numbers_array = existing_location_document.numbers
    		var new_array_entry = {person: pn_doc.person, number: pn_doc.number}
    		numbers_array.push(new_array_entry)
    		db.phoneNumbers.update({_id: existing_location_document._id},
    								{$set: {numbers: numbers_array}})
    	}
    }
)