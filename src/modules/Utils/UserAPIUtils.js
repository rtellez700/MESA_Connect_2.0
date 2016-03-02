var UserServerActionCreators = require('../Actions/UserServerActionCreators');

module.exports = {
	getAllUsers: function(){
		// simulate retrieving data from a database
		var rawUsers = JSON.parse(localStorage.getItem('users'));
	
		// simulate success callback
		UserServerActionCreators.receiveAll(rawUsers);
	},
	createUser: function(user){
		// simulate writing to a database
		var rawUsers = JSON.parse(localStorage.getItem('users'));
		var timestamp = Date.now();
		var id = 'u_' + timestamp;
		var createdUser = {
			id: id,
			f_name: user.f_name
		};
		rawUsers.push(createdUser);
		localStorage.setItem('users',JSON.stringify(rawUsers));

		// simulate success callback
		setTimeout(function(){
			UserServerActionCreators.receiveCreatedUser(createdUser);
		});
	},
};