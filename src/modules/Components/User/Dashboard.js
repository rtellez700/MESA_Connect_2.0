import React from 'react';

import MailBox from '../Mail/MailBox'
import TabsBox from '../Misc/TabsBox'

import Profile from '../User/Profile'
import Mail from '../User/Views/Mail'
import Resources from '../User/Views/ListResources'
import Events from '../User/Views/Events'
import Settings from '../User/Views/Settings'

// LIST OF TABS TO DISPLAY
var data = [
	{
		tabName: 'Profile',
		url: '#Profile',
		content: <Profile />
	},
	{
		tabName: 'Mail',
		url: '#Mail',
		content: <Mail />
	},
	{
		tabName: 'Resources',
		url: '#Resources',
		content: <Resources />
	},
	{
		tabName: 'Events',
		url: '#Events',
		content: <Events />
	},
	{
		tabName: 'Settings',
		url: '#Settings',
		content: <Settings />
	}
]

class Dashboard extends React.Component {
	render() {
		return (
			<div className="container">
	        	<TabsBox data={ data } />
			</div>
		);
	}
}
module.exports = Dashboard
