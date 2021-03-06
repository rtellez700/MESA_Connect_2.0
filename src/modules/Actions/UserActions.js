import UserDispatcher from '../Dispatcher/UserDispatcher';
import UserConstants from '../Constants/UserConstants';
import UserAPIUtils from '../Utils/UserAPIUtils';

var ActionTypes = UserConstants.ActionTypes;

var UserActions = {
	create: function (user) {
		console.log('yo yo yo . . .',user);
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