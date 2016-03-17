import React, { Component } from 'react';


 class Resources extends Component {
	render() {
		return (
			<div className="container Resources">
				{ this.props.children }
			</div>
		);
	}
}
module.exports = Resources;