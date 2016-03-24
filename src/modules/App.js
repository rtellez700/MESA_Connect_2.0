import React from 'react';

import NavBar from './Components/Views/NavBar';
import Footer from './Components/Views/Footer';


import LoginFormModal from './Components/Views/LoginFormModal';




// var UserExampleData = require('./UserDataSimple');
var UserAPIUtils = require('./Utils/UserAPIUtils');

// UserExampleData.init();
UserAPIUtils.getAllUsers();



class App extends React.Component{

	render() {
		return (
			<div id="App_Wrapper" className="container-fluid">

				<LoginFormModal />
				{/* this.props.SIDEBAR || '' */}
				
					<NavBar />

					
					<div className="alert alert-danger visible-xs">
						<h1>Please use desktop to view website during development.</h1>
					</div>

					{ this.props.children }
						
					<Footer />
				
			</div>
		);
	}
}

module.exports = App;



