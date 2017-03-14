// Run this after importing the TSV from google spreadsheets into collection tmppn.
// Level 1 is the first level on the sidebar outline, e.g., Providers, Reading Rooms.
// Level 2 is the second level in the sidebar outline. 
// Level 3 is the level in which is a box is formed on the main panel. 
// There are going to be some levels in which the Level 2 and Level 3 are redundant, e.g., the Reading Rooms.

db.tmppn.find().addOption(DBQuery.Option.noTimeout).forEach(
    function(pn_doc) {
    	// var existing_level3_document = db.phoneNumbers.findOne({level3: pn_doc.level3, level1: pn_doc.level1, misc: pn_doc.misc})
        // If the level 3 document does not yet exist. 
        var existing_level3_document = db.phoneNumbers.findOne({level3: pn_doc.level3})
    	if (existing_level3_document == null) {
    		db.phoneNumbers.insert({
                level1: pn_doc.level1,
                level2: pn_doc.level2,
    			level3: pn_doc.level3,
    			numbers: [{person: pn_doc.person, number: pn_doc.number}],
    			misc: pn_doc.misc
    		})
    	} else {
            // If the level 3 document already exists. 
    		var numbers_array = existing_level3_document.numbers
    		var new_array_entry = {person: pn_doc.person, number: pn_doc.number}
    		numbers_array.push(new_array_entry)
    		db.phoneNumbers.update({_id: existing_level3_document._id},
    								{$set: {numbers: numbers_array}})
    	}
    }
)