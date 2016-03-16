import React, { Component } from 'react';

 class TabPanel extends Component {
 	constructor(props){
 		super(props);
 	}

	render() {
		const activeClass = this.props.active ? 'active' : '';
		return (
			<div 
				role="tabpanel" 
				className={"tab-pane " + activeClass} 
				id={this.props.tabName}
			>

				{ this.props.children }

			</div>
		);
	}
}
module.exports = TabPanel;