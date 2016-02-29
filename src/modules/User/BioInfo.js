import React from 'react';

class Bio extends React.Component {
	render() {
		return (
			<div className="well BioInfo">
				<h1>Hello, My Name is {this.props.user.f_name + ' ' + this.props.user.l_name}</h1>
				<p>
					{ this.props.user.bio }
				</p>
			</div>
		);
	}
}
module.exports = Bio
