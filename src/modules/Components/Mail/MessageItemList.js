import React, { Component } from 'react';
import MessageItem from './MessageItem';
	
import faker from 'faker';

var data = [
	{
		timestamp: Date.now(),
		name: 'Rodrigo Tellez',
		message: faker.Lorem.paragraph()
	},
	{
		timestamp: Date.now(),
		name: 'Rodrigo Tellez',
		message: faker.Lorem.paragraph()
	},
	{
		timestamp: Date.now(),
		name: 'Rodrigo Tellez',
		message: faker.Lorem.paragraph()
	},
	{
		timestamp: Date.now(),
		name: 'Rodrigo Tellez',
		message: faker.Lorem.paragraph()
	}
]
	var Items = [];
	var showNMsgs = function(n){
		for (var i = 0; i < n; i++) {
			Items.push(<MessageItem key={`msg_itm_${i}`}/>);
		}
		return Items;
	}

 class MessageItemList extends Component {
  	
	render() {
		const MessageItemNodes = data.map( (item, i) => {
			return (
				<MessageItem 
					key={ `msg_itm_${i}` }
				/>
			);
		});
		return (
			<div className="Scrollable__list">
				{ MessageItemNodes }
			</div>
		);
	}
}
module.exports = MessageItemList;