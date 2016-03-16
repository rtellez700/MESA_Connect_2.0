import React from 'react'

// var UserExampleData = require('./UserDataSimple');
var UserAPIUtils = require('./Utils/UserAPIUtils');

// UserExampleData.init();
UserAPIUtils.getAllUsers();

class App extends React.Component{

	render() {
		return (
			<div  className="container-fluid">

			

				{ this.props.children }

			</div>
		);
	}
}

module.exports = App;



