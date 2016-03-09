var UserServerActionCreators = require('../Actions/UserServerActionCreators');
var USER_DATA = require('../UserExampleData_v2');

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'secret',
	database: 'user_table'
});

// window.USER_DATA = USER_DATA;
// TODO: finish create user function

module.exports = {
	getAllUsers: function(){
		// simulate retrieving data from a database
		var rawUsers = JSON.parse(USER_DATA.init());

		// simulate success callback
		UserServerActionCreators.receiveAll(rawUsers);
	},
	createUser: function(user){
		// simulate writing to a database
		var rawUsers = JSON.parse(USER_DATA.init());
		var timestamp = Date.now();
		var id = 'u_' + timestamp;
		var createdUser = {
			id: id,
			f_name: user.f_name
		};
		rawUsers.push(createdUser);

		// localStorage.setItem('users',JSON.stringify(rawUsers));

		// simulate success callback
		setTimeout(function(){
			UserServerActionCreators.receiveCreatedUser(createdUser);
		});
	},
};