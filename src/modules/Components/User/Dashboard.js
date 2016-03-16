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
	        	<div className="well">
	        		<div className="row">
	        			<div className="col-md-4 pull-left">
	        				<img src="http://placehold.it/80" alt=""/>
	        			</div>
	        			<div className="col-md-8">
	        				<h2>Mr. John Doe</h2>
	        				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit modi cupiditate quos saepe facere, ea dolore rem itaque repudiandae, dolorem culpa libero vero sunt similique atque eum eveniet, incidunt iure.</p>
	        				<br />
	        			</div>
	        		</div>
	        	</div>

	        	<hr />
	        	<h2>About Me</h2>
	        	<p>
	        		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fuga quo voluptatem quibusdam quidem, praesentium, officiis blanditiis esse. Praesentium suscipit magnam libero a quae ipsa delectus, ut debitis labore veritatis. 
	        		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, libero, similique? Debitis asperiores, quis. Ad, optio? Quo illum voluptatibus pariatur, minima dolore obcaecati veritatis temporibus ex eaque quaerat veniam ipsa.
	        	</p>

	        	<hr />
	        	<h2>Contact Information</h2>
	        	<i className="fa fa-envelope"></i> example@gmail.com

	        	<hr />
	        	<h2>Career</h2>

	        	<hr />
	        	<h2>Education</h2>
	        	Harvard<br />
	        	AB | 2015 <br />
	        	Neurobiology <br />

			</div>
		);
	}
}
module.exports = Dashboard
