import React from 'react';
import MailBox from '../Mail/MailBox'

class Dashboard extends React.Component {
	render() {
		return (
			<div className="container">
	        	<div className="row">
	        		<div className="col-md-6">
						<MailBox />
						<div className="well">
	        				<img src="http://placehold.it/600x400" />
	        			</div>	        		
	        		</div>
	        		<div className="col-md-6">
	        			<div className="well">
	        				<img src="http://placehold.it/600x400" />
	        			</div>
	        			<br />
	        			<div className="well">
	        				<img src="http://placehold.it/600x400" />
	        			</div>
	        		</div>
	        	</div>
			</div>
		);
	}
}
module.exports = Dashboard
