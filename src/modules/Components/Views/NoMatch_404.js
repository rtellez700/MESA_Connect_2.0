import React, { Component } from 'react';

 class NoMatch_404 extends Component {
	render() {
		return (
			<div className="container well text-center">
				<div className="row">
					<div className="col-md-12">
						<h3>Something went wrong!</h3>
						<h1>404</h1>
						<p>Page not Found!</p>
					</div>
				</div>
				<div className="row">
					<i className="fa fa-flask fa-5x flask"></i>
				</div>
			</div>
		);
	}
}
module.exports = NoMatch_404;