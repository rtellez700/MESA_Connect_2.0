import React, { Component } from 'react';
import { Link } from 'react-router';

 class ListResources extends Component {
	render() {
		return (
			<div>
				<div className="Tile__Container">
					<div className="Tile__Wrapper">
						<div className="Tile__Row">
								<div className="Tile__Content">
									<Link to="/resources/network">
										<div className="Tile__Content--Icon">
											<i className="fa fa-users fa-5x"></i>
										</div>
										<div className="Tile__Content--Label">
											Network
										</div>
									</Link>
								</div>
							<div className="Tile__Content">
								<Link to="/resources/scholarships">
									<div className="Tile__Content--Icon">
										<i className="fa fa-usd fa-5x"></i>
									</div>
									<div className="Tile__Content--Label">
										Scholarships
									</div>
								</Link>
							</div>
							<div className="Tile__Content">
								<Link to="/resources/internships">
									<div className="Tile__Content--Icon">
										<i className="fa fa-mortar-board fa-5x"></i>
									</div>
									<div className="Tile__Content--Label">
										Internships
									</div>
								</Link>
							</div>
						</div>
						<div className="Tile__Row">
							<div className="Tile__Content">
								<Link to="/resources/events">
									<div className="Tile__Content--Icon">
										<i className="fa fa-calendar fa-5x"></i>
									</div>
									<div className="Tile__Content--Label">
										Events
									</div>
								</Link>
							</div>
							<div className="Tile__Content">
								<Link to="/resources">
									<div className="Tile__Content--Icon">
										<i className="fa fa-5x"></i>
									</div>
									<div className="Tile__Content--Label">
										Label
									</div>
								</Link>
							</div>
							<div className="Tile__Content">
								<Link to="/resources">
									<div className="Tile__Content--Icon">
										<i className="fa fa-5x"></i>
									</div>
									<div className="Tile__Content--Label">
										Label 
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}
module.exports = ListResources;