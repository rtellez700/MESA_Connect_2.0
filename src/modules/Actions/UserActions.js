var UserDispatcher = require('../Dispatcher/UserDispatcher');
var UserConstants = require('../Constants/UserConstants');
var UserAPIUtils = require('../Utils/UserAPIUtils');

var ActionTypes = UserConstants.ActionTypes;

var UserActions = {
	create: function (user) {
		UserDispatcher.dispatch({
			actionType: ActionTypes.USER_CREATE,
			user: user
		});
		UserAPIUtils.createUser(user);
	},
	destroy: function (id) {
		UserDispatcher.dispatch({
			actionType: UserConstants.USER_DESTROY,
			id: id
		});
	},
	getAll: function(){
		UserDispatcher.dispatch({
			actionType: UserConstants.USER_GET_ALL,
			// todo
		});
	}
};

module.exports = UserActions;