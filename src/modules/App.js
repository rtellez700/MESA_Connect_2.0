import React from 'react';

import NavBar from './Components/Views/NavBar';
import Footer from './Components/Views/Footer';

// var UserExampleData = require('./UserDataSimple');
var UserAPIUtils = require('./Utils/UserAPIUtils');

// UserExampleData.init();
UserAPIUtils.getAllUsers();


<div className="alert alert-danger hidden-md hidden-lg">
						<h1>Please use desktop to view website during development.</h1>
					</div>
class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sidebar: false
		}
	}

	_displayFooter(){
		return (
			<Footer />
		);
	}

	render() {
		const sidebarClass = this.state.sidebar ? '' : 'toggled';
		return (
			<div id="App_Wrapper" className={ "container-fluid " + sidebarClass }>

				{ this.props.SIDEBAR || ''}

				<div className="page-content-wrapper">
				
					<NavBar />

					


					{ this.props.MAIN || this.props.children }
						
					{ this._displayFooter() }

				</div>
				
			</div>
		);
	}
}

module.exports = App;



