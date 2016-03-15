import React, { Component } from 'react';
import NavLink from './NavLink';

class NavLinkList extends Component {
	constructor(props){
		super(props);
	}
	showIcon(icon){
		if (icon) {
			return (
				<i className={ icon }></i>
			);
		}
	}

	render() {
		var linkNodes = this.props.links.map((link,idx) => {
			return (
				<li key={ 'li_' + link.title } className={link.class || ""}>
					<NavLink 
						to={ link.url } 
						key={ link.title }
					>
						{  this.showIcon(link.icon) }
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