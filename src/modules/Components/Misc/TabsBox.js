import React, { Component } from 'react';
import { Link } from 'react-router';

import TabList from './TabList';
import TabPanelList from './TabPanelList';

 class TabsBox extends Component {
 	constructor(props){
 		super(props);
 	}

	render() {
		return (
			<div>

				<TabList tabs={ this.props.data } />

				<TabPanelList panels={ this.props.data } />

			</div>
		);
	}
}
module.exports = TabsBox;