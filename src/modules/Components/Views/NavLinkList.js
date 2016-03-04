import React, { Component } from 'react';
import NavLink from './NavLink';

class NavLinkList extends Component {
	render() {
		var linkNodes = this.props.links.map((link,idx) => {
			return (
				<li key={ 'li_' + link.title } className={link.class || ""}>
					<NavLink 
						to={ link.url } 
						key={ link.title }>
						{ link.title }
					</NavLink>
				</li>
			);
		});
		return (
			<ul className="SideBar-nav">
				{ linkNodes }
			</ul>
		);
	}
}

module.exports = NavLinkList;