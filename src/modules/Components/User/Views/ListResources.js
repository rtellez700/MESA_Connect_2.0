import React, { Component } from 'react';
import { Link } from 'react-router';

 class ListResources extends Component {
	render() {
		return (
			<div className="list-group">
				<Link to="/resources/network" className="list-group-item">Network</Link>
				<Link to="/resources/scholarships" className="list-group-item">Scholarships</Link>
				<Link to="/resources/internships" className="list-group-item">Internships</Link>
			</div>
		);
	}
}
module.exports = ListResources;