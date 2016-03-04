import React from 'react'

import NavBar from './Components/Views/NavBar';
import Footer from './Components/Views/Footer';

var UserExampleData = require('./UserDataSimple');
var UserAPIUtils = require('./Utils/UserAPIUtils');

UserExampleData.init();
UserAPIUtils.getAllUsers();

class App extends React.Component{

	render() {
		return (
			<div>
				<div id="App_Wrapper" className="toggled container-fluid">
					<NavBar />

					{ this.props.children }

					<Footer />
					
				</div>



			</div>
			
		);
	}
}

module.exports = App;



