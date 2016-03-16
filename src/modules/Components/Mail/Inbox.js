import React, { Component } from 'react';
import { Link } from 'react-router';

import MessageItem from './MessageItem';
import MessageInput from './MessageInput';
import MessageItemList from './MessageItemList';

var LABELS = {
	INBOX: 'INBOX',
	SENT: 'SENT',
	TRASH: 'TRASH'
};
 class Inbox extends Component {
 	constructor(props){
 		super(props);
 	}

 	_onClick(e){
 		e.preventDefault();
 		const ID = e.target.id.trim();

 		switch(ID){
 			case LABELS.INBOX:
 				this.setState({ view: <INBOX /> });
 				break;
 			case LABELS.SENT:
 				this.setState({ view: <SENT /> });
 				break;
 			case LABELS.TRASH:
 				this.setState({ view: <TRASH /> });
 				break;
 		}
 	}

	render() {
		return (
			<div className="Inbox">
				<div className="MessageItemBox" >
					<MessageItemList />
				</div>
				<div>
					<MessageInput />
				</div>
				<div style={{"height":35+"px"}}>
					<button type="button" className="btn btn-primary pull-right" role="button">Reply</button>
				</div>
			</div>
		);
	}
}
module.exports = Inbox;