import React, { Component } from 'react';
import ProfileAvatar from '../User/ProfileAvatar';
import faker from 'faker';

 class MessageItem extends Component {
	constructor(props){
		super(props);
		this.state = {flag: true};
	}

	render() {

		var h = Math.floor(Math.random() * 12) + 1;
		var m = Math.floor(Math.random() * 59) + 10;
		var ampm = !this.state.flag ? "am" : "pm" 
		var time = `${h}:${m} ${ampm}`;
		var Name = faker.Name.firstName() + ' ' + faker.Name.lastName()[0];
		return (
			<div className="MessageItem Media" {...this.props}>	
				<div className="Media__figure">
					<ProfileAvatar name="Rodrigo Tellez" size={80} round={true} src={ faker.Image.avatar() }/>
				</div>
				<div className="Media__body">
					<div className="MessageBubble">
						<div className="MessageBubble--arrow"></div>
						<div className="MessageBubble--content">
							<div className="MessageBubble--content-heading">
								<b>{Name} </b>
								<small> {time}</small>
							</div>
							{ faker.Lorem.paragraph() }
						</div>
					</div>
				</div>
			</div>
		);
	}
}
module.exports = MessageItem;