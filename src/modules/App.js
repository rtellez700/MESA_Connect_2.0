import React, {Component} from 'react';
import { browserHistory } from 'react-router';

import NavBar from './Components/Views/NavBar';
import Footer from './Components/Views/Footer';

import LoginFormModal from './Components/Views/LoginFormModal';

import UserAPIUtils from './Utils/UserAPIUtils';

// UserExampleData.init();
UserAPIUtils.getAllUsers();

class App extends Component{

	render() {
		return (
			<div id="App_Wrapper" className="container-fluid">

				<LoginFormModal />
				{/* this.props.SIDEBAR || '' */}
				
				<NavBar />

				<div className="App__Container">
					{ /* <div className="alert alert-danger visible-xs">
						<h1>Please use desktop to view website during development.</h1>
					</div> */ }
					<section className="Main-Content">
						{ this.props.children }
					</section>
				</div>
				
					
				<Footer />
				
			</div>
		);
	}
}

module.exports = App;



