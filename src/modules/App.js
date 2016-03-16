import React from 'react';

import NavBar from './Components/Views/NavBar';
import Footer from './Components/Views/Footer';

// var UserExampleData = require('./UserDataSimple');
var UserAPIUtils = require('./Utils/UserAPIUtils');

// UserExampleData.init();
UserAPIUtils.getAllUsers();

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sidebar: false
		}
	}

	render() {
		const sidebarClass = this.state.sidebar ? '' : 'toggled';
		return (
			<div id="App_Wrapper" className={ "container-fluid " + sidebarClass }>

				<NavBar />

					{ this.props.children }
					
				<Footer />

			</div>
		);
	}
}

module.exports = App;



