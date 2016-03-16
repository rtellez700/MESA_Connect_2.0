import React, { Component } from 'react';
import { Link } from 'react-router';

 class TabList extends Component {
 	constructor(props){
 		super(props);
 	}
	render() {
		const TabNodes = this.props.tabs.map( (tab,i) => {
			return (
				<li role="presentation" className={ !i ? "active" : "" } key={ 'li_' + tab.tabName }>
					<Link 
						to={ '#' + tab.url }
						aria-controls={ tab.tabName.toLowerCase() }
						role="tab"
						data-toggle="tab"
						key={ 'link_' + tab.tabName }
					>
						{ tab.tabName }
					</Link>
				</li>
			);
		});
		return (
			<ul className="nav nav-tabs">
				{ TabNodes }
			</ul>
		);
	}
}
module.exports = TabList;