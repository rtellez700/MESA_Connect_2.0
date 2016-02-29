import React from 'react';
import Avatar from 'react-avatar';

class ProfileAvatar extends React.Component {
	render() {
		return (
			<div>
				<Avatar size={150} name={this.props.name} color="#4285F4" round={true}/>
			</div>
		);
	}
}
module.exports = ProfileAvatar
