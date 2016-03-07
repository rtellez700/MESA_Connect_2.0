import React, { Component } from 'react';

 class MessageInput extends Component {
	render() {
		return (
			<div className="MessageInputBox">
				<textarea role="textbox" rows="3" aria-label="Write a reply..." placeholder="Write a reply..."/>
			</div>
		);
	}
}
module.exports = MessageInput;