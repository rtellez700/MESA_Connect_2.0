var UserDispatcher = require('../Dispatcher/UserDispatcher');
var UserConstants = require('../Constants/UserConstants');

var ActionTypes = UserConstants.ActionTypes;

module.exports = {
	receiveAll: function(rawUsers){
		UserDispatcher.dispatch({
			type: ActionTypes.RECEIVE_RAW_USERS,
			rawUsers: rawUsers
		});
	},
	receiveCreatedUser: function(createdUser){
		UserDispatcher.dispatch({
			type: ActionTypes.RECEIVE_RAW_CREATED_USER,
			rawUser: createdUser
		});
	}
};