import React from 'react';

import NavBar from '../Views/NavBar';
import SideBar from '../Views/SideBar';
import Footer from '../Views/Footer';

class User extends React.Component {
	_onClick(e){
		e.preventDefault();
		$('#App_Wrapper').toggleClass("toggled");
	}
	render() {
		return (
			<div id="App_Wrapper">

				<NavBar />

				<SideBar />

				<div className="page-content-wrapper">
					{ this.props.children }
				</div>

				<Footer />

				<br />
				<br />
				<br />
				
			</div>
		);
	}
}
module.exports = User
