import React, { Component } from 'react';

import faker from 'faker';

import ProfileAvatar from '../User/ProfileAvatar';

 class ShowcasePanel extends Component {
	
	_renderFigure(){
		return(
			<div className="Media__figure">
				<ProfileAvatar name="Rodrigo Tellez" className="CENTER-NOW"/>
			</div>
		);
	}

	_renderBody(){
		return (
			<div className="Media__body">
				<p>
					{ faker.Lorem.paragraphs() }
				</p>
				<p>
					{ faker.Lorem.paragraphs() }
				</p>
			</div>
		);
	}

	render() {
		const FIGURE_RIGHT = this.props.figure === "right";
		{console.log(FIGURE_RIGHT)}
		return (
			<div className="Media">
				{ FIGURE_RIGHT ? this._renderBody() : this._renderFigure() }
				{ FIGURE_RIGHT ? this._renderFigure() : this._renderBody() }
			</div>
		);
	}
}
module.exports = ShowcasePanel;