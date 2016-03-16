import React from 'react';
import SideBar from '../Views/SideBar'

class User extends React.Component {
	_onClick(e){
		e.preventDefault();
		$('#App_Wrapper').toggleClass("toggled");
	}
	render() {
		return (
			<div>
				<SideBar />

				{ this.props.children }

				<div id="page-content-wrapper" className="well text-center bg--terracotta">
		        	<a href="#sidebar-menu-toggle" className="btn btn-primary" id="sidebar-menu-toggle" onClick={ this._onClick.bind(this) }>Toggle Menu</a>
				</div>
				
			</div>
		);
	}
}
module.exports = User
