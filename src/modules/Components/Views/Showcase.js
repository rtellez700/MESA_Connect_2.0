import React, { Component } from 'react';

import ShowcasePanel from './ShowcasePanel';

 class Showcase extends Component {
	render() {
		return (
			<div>
				<div className="ShowcasePanel bg--grey">
					<ShowcasePanel />
				</div>
				<div className="ShowcasePanel bg--grey-google">
					<ShowcasePanel figure="right" />
				</div>
				<div className="ShowcasePanel bg--grey">
					<ShowcasePanel />
				</div>
				<div className="ShowcasePanel bg--grey-google">
					<ShowcasePanel figure="right" />
				</div>
			</div>
		);
	}
}
module.exports = Showcase;