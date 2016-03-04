import React from 'react';
import SideBar from '../Views/SideBar'
import MailBox from '../Mail/MailBox'
// TODO: add onToggle option for sidebar
class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<SideBar />
	        	
	        	<MailBox />

			</div>
		);
	}
}
module.exports = Dashboard
