import React from 'react';
import SideBar from '../Views/SideBar'

class User extends React.Component {
	render() {
		return (
			<div>
				<SideBar />
				{ this.props.children }
			</div>
		);
	}
}
module.exports = User
