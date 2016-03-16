import React, { Component } from 'react';

import TabPanel from './TabPanel';

import Profile from '../User/Views/Profile'

 class TabPanelList extends Component {
 	constructor(props){
 		super(props);		
 	}
	render() {
		const TabPanelNodes = this.props.panels.map( (panel,i) => {
			return (
				<TabPanel 
					tabName={panel.tabName}
					active={ !i ? true : false } 
					key={'tb_' + i} 
				>

					{ panel.content }

				</TabPanel>
			);
		});

		return (
			<div className="tab-content">
				{ TabPanelNodes }
			</div>
		);
	}
}
module.exports = TabPanelList;