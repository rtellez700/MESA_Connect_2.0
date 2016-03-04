import React, { Component } from 'react';
import MessageItem from './MessageItem';

 class MailBox extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="container">
					<div className="MailBox bg--grey" style={{ "padding": 10 + "px" }}>
						<a href="inbox">New Messages <span className="badge">42</span></a>
						<MessageItem />
						<MessageItem />
						<MessageItem />
					</div>
				</div>
			</div>
		);
	}
}
module.exports = MailBox;
