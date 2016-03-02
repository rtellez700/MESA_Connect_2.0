import React from 'react';
import NavBar from '../Views/NavBar'
class User extends React.Component {
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}
module.exports = User
