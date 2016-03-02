import keyMirror from 'keymirror';

module.exports = {

	ActionTypes: keyMirror({
		USER_CREATE: null,
		USER_DESTROY: null,
		RECEIVE_RAW_CREATED_USER: null,
		RECEIVE_RAW_USERS: null	
	})
	
};