import React, { Component } from 'react';
import { Link } from 'react-router';

import MessageItem from './MessageItem';
import MessageInput from './MessageInput';
import MessageItemList from './MessageItemList';



import INBOX from './Inbox';
import SENT from './Sent';
import TRASH from './Trash';

var LABELS = {
	INBOX: 'INBOX',
	SENT: 'SENT',
	TRASH: 'TRASH'
};
 class Inbox extends Component {
 	constructor(props){
 		super(props);
 		this.state = {
 			view: <INBOX />
 		};
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

 		console.log(ID);

 	}

	render() {
		return (
			<div className="MailBox container well">
				<div className="row">
					<div className="col-md-12">
						<div className="form-group">
							<div className="input-group">
								<input className="form-control" type="text" placeholder="Search Inbox . . ." />
								<span className="input-group-btn">
									<button className="btn btn-primary">Search</button>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 leftSection">
						<div className="list-group">
							<button id="INBOX" className="list-group-item active" onClick={ this._onClick.bind(this) }>
								<i className="fa fa-fw fa-inbox"></i>&nbsp; Inbox
							</button>
							<button id="SENT" className="list-group-item" onClick={ this._onClick.bind(this) }>		
								<i className="fa fa-fw fa-paper-plane"></i>&nbsp; Sent
							</button>
							<button id="TRASH" className="list-group-item" onClick={ this._onClick.bind(this) }>		
								<i className="fa fa-fw fa-trash"></i>&nbsp; Trash
							</button>
						</div>
					</div>
					<div className="col-md-9">
						{ this.state.view }
					</div>
				</div>
			</div>
		);
	}
}
module.exports = Inbox;