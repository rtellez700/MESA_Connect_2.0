import React, { Component } from 'react';
import MessageItem from './MessageItem';
import MessageInput from './MessageInput';
import MessageItemList from './MessageItemList';

 class Inbox extends Component {
	render() {
		return (
			<div className="Inbox container well">
				<div className="row">
					<div className="col-md-3 leftSection">
						<div className="list-group">
							<a href="#" className="list-group-item active">Label 1</a>
							<a href="#" className="list-group-item">Label 2</a>
							<a href="#" className="list-group-item">Label 3</a>
							<a href="#" className="list-group-item">Label 4</a>
						</div>
					</div>
					<div className="col-md-9">
						<div className="MailBox" style={{ "padding": 10 + "px" }}>
							<MessageItemList />
						</div>
						<div>
							<MessageInput />
						</div>
						<div style={{"height":35+"px"}}>
							<button type="button" className="btn btn-primary pull-right" role="button">Reply</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
module.exports = Inbox;