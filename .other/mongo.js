db.phoneNumbers.insert({
	location: 'Fast track/Speed', 
	type: 'Providers',
	numbers: [
		{person: 'Provider 1', number: '681-4432'},
		{person:'Provider 2', number:'681-4420'},
		{person:'RN 1', number:'681-7489'},
		{person:'RN 2', number:'681-7490'},
		], 
	misc: 'F8-F15'})


db.phoneNumbers.insert({
	location: 'DMP',
	type: 'Techs', 
	numbers: [
		{person: 'DMP CT TL', number: '385-1364'}
		]
	})



db.phoneNumbers.insert({
	location: 'Nucs',
	type: 'Reading Rooms', 
	numbers: [
		{person: 'DMP 1', number: '381-3374'}
		]
	})

db.phoneNumbers.insert({
	location: 'Chest',
	type: 'Reading Rooms', 
	numbers: [
		{person: 'Plain films 1', number: '381-3374'}
		]
	})

/////////


db.phoneNumbers.insert({
	location: 'Fast track/Speed', 
	type: 'Providers',
	person: 'Provider 1',
	number: '681-4432'
})

db.phoneNumbers.insert({
	location: 'Fast track/Speed', 
	type: 'Providers',
	person:'Provider 2', 
	number:'681-4420'
})

db.phoneNumbers.insert({
	location: 'Fast track/Speed', 
	type: 'Providers',
	person:'RN 1', 
	number:'681-7489'
})

db.phoneNumbers.insert({
	location: 'Fast track/Speed', 
	type: 'Providers',
	person:'RN 2', 
	number:'681-7490'
})

db.phoneNumbers.insert({
	location: 'DMP',
	type: 'Techs', 
	person: 'DMP CT TL', 
	number: '385-1364'
})

db.phoneNumbers.insert({
	location: 'Chest',
	type: 'Reading Rooms',
	person: 'Plain films 1', 
	number: '381-3374'
})


/// Run this after exporting a TSV from google docs. 
dos2unix /Users/ln30/Git/dukerad/phonenumbers.tsv /Users/ln30/Git/dukerad/phonenumbers.tsv
// sed 's/\r$//' phonenumbers.tsv > phonenumbers2.tsv
// sed 's!\\r\\n!<p/>!g' phonenumbers.tsv > phonenumbers2.tsv
// tr -d '\r' phonenumbers.tsv > phonenumbers2.tsv

///Code to import csv. 
// http://stackoverflow.com/questions/4686500/how-to-use-mongoimport-to-import-csv
mongoimport --port 3001 -d meteor -c tmppn --type tsv --file phonenumbers.tsv --headerline

///////
// Code to reorganize phone numbers. Run on mongo.
load("/Users/ln30/Git/dukerad/.other/reorganize_phone.js")
//////


