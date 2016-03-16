import React from 'react';

import NavBar from '../Views/NavBar';
import SideBar from '../Views/SideBar';
import Footer from '../Views/Footer';

class User extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			sidebar: true
		}
	}

	componentDidMount(){
		if (this.state.sidebar){
			this._toggleSidebar();
		}
	}

	_onClick(e){
		e.preventDefault();
		$('#App_Wrapper').toggleClass("toggled");

	}

	_toggleSidebar(){
		$('#App_Wrapper').toggleClass("toggled");
	}

	render() {

		return (
			<div >
				
				<SideBar />

				<div className="page-content-wrapper">
					{ this.props.children }
				</div>

				<br />
				<br />
				<br />
				
			</div>
		);
	}
}
module.exports = User
