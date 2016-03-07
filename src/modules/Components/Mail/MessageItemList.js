import React, { Component } from 'react';
import MessageItem from './MessageItem';
	
	var Items = [];
	var showNMsgs = function(n){
		for (var i = 0; i < n; i++) {
			Items.push(<MessageItem key={`msg_itm_${i}`}/>);
		}
		return Items;
	}

 class MessageItemList extends Component {
  	
	render() {
		return (
			<div className="Scrollable__list">
				{ showNMsgs(10) }
			</div>
		);
	}
}
module.exports = MessageItemList;