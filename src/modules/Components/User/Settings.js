import React, { Component } from 'react';

 class Settings extends Component {
	render() {
		return (
			<div className="Settings container bg--grey-google">
				<div className="row">
					<div className="col-md-4">
						<ul className="nav nav-pills nav-stacked">
							<li className="active" role="presentation"><a href="#">Account</a></li>
							<li role="presentation"><a href="#">Stuff 2</a></li>
							<li role="presentation"><a href="#">Stuff 3</a></li>
							<li role="presentation"><a href="#">Stuff 4</a></li>
						</ul>
					</div>
					<div className="col-md-8">
						<h2>Update Your Account</h2>
					</div>
				</div>
			</div>
		);
	}
}
module.exports = Settings;