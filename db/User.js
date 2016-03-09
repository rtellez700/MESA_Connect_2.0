var mongoose = require('mongoose');

// Create a new schema for our user data
var schema = new mongoose.Schema({
	id: String,
	f_name: String,
	l_name: String
});

// Create a static getUsers method to return user data from the db
schema.statics.getUsers = function(page, skip, callback){
	var users = [],
		start = (page * 10) + (skip + 1);

	User.find({}, 'id f_name', {skip: start, limit: 10}).exec(function(err,doc){

		// If everything is cool ...
		if(!err){
			users = docs;
			callback(users);
		}
	});
};


module.exports = User = mongoose.model('User', schema);