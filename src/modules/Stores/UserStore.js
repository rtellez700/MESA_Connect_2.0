import UserDispatcher from '../Dispatcher/UserDispatcher';
import UserConstants from '../Constants/UserConstants';
import assign from 'object-assign';

var EventEmitter = require('events').EventEmitter;

var ActionTypes = UserConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _users = {};

/**
 * Update a USER item.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function create(user){
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	_users[id] = {
		id: id,
		f_name: user.f_name
	};
}

/**
 * Update all of the TODO items with the same object.
 * @param  {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(id, updates) {
	_users[id] = assign({}, _users[id], updates);
}

/**
 * Delete a USER
 * @param  {string} id 
 */
function destroy(id) {
	delete _users[id];
}

function findById(id){
	return _users[id];
}

function getAll(){
	return _users;
	// todo
}

var UserStore = assign({}, EventEmitter.prototype, {
	/**
   * Get the entire collection of USERS.
   * @return {object}
   */
	getAll: function () {
		return _users;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(cb){
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb){
		this.removeListener(CHANGE_EVENT, cb);
	}
});

UserDispatcher.register(function(action){
	var f_name;

	switch(action.actionType){
		case ActionTypes.USER_CREATE:
			f_name = action.user.f_name.trim();
			if (f_name != ''){
				create(f_name);
				UserStore.emitChange();
			}
			break;
	}
});

module.exports = UserStore;