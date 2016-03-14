import React, { Component } from 'react';
import { Link } from 'react-router';

 class ListResources extends Component {
	render() {
		return (
			<div>
				<div className="list-group">
					<Link to="/resources/network" className="list-group-item">Network</Link>
					<Link to="/resources/scholarships" className="list-group-item">Scholarships</Link>
					<Link to="/resources/internships" className="list-group-item">Internships</Link>
				</div>

				<div className="Tile__Container">
					<div className="Tile__Wrapper">
						<div className="Tile__Row">
							<div className="Tile__Content">
								<div className="Tile__Content--Icon">
									<i className="fa fa-users fa-5x"></i>
								</div>
								<div className="Tile__Content--Label">
									Network
								</div>
							</div>
							<div className="Tile__Content">
								<div className="Tile__Content--Icon">
									<i className="fa fa-usd fa-5x"></i>
								</div>
								<div className="Tile__Content--Label">
									Scholarships
								</div>
							</div>
							<div className="Tile__Content">
								<div className="Tile__Content--Icon">
									<i className="fa fa-mortar-board fa-5x"></i>
								</div>
								<div className="Tile__Content--Label">
									Internships
								</div>
							</div>
						</div>
						<div className="Tile__Row">
							<div className="Tile__Content">
								<div className="Tile__Content--Icon">
									<i className="fa fa-calendar fa-5x"></i>
								</div>
								<div className="Tile__Content--Label">
									Events
								</div>
							</div>
							<div className="Tile__Content">
								<div className="Tile__Content--Icon">
									<i className="fa fa-5x"></i>
								</div>
								<div className="Tile__Content--Label">
									Label
								</div>
							</div>
							<div className="Tile__Content">
								<div className="Tile__Content--Icon">
									<i className="fa fa-5x"></i>
								</div>
								<div className="Tile__Content--Label">
									Label 
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}
module.exports = ListResources;