import React, { Component } from 'react';
import { Link } from 'react-router';

import faker from 'faker';


import ProfileAvatar from '../User/ProfileAvatar';

// http://gohooey.com/demo/sidebar/hoedemo.html
// TODO:
// [] Replace Links for NavLinks in order to keep track of active status
// 

var SideBarLinks = [
    {
        url: "dashboard",
        title: "Rodrigo Tellez",
        class: "SideBar-brand",
    },
    {
        url: "dashboard",
        title: "Profile",
        icon: "fa fa-user"
    },
    {
        url: "mail",
        title: "Mail",
        icon: "fa fa-envelope"
    },
    {
        url: "resources",
        title: "Resources",
        icon: "fa fa-book"
    },
    // {
    //     url: "/resources/events",
    //     title: "Events",
    //     icon: "fa fa-calendar"
    // },
    {
        url: "settings",
        title: "Settings",
        icon: "fa fa-cogs"
    },
    {
        url: "logout",
        title: "Log Out",
        icon: "fa fa-sign-out"
    }
];

 class UserSidebar extends Component {
	
	_ToggleSidebar(e){
		e.preventDefault();

		$('.User__Left-Panel').toggleClass('User__Left-Panel--Minimize');
		$('.User__Container').toggleClass('User__Left-Panel--Minimize');

	}

	render() {
		return (
			<div className="User__Sidebar">

				<span className="User__Sidebar-Toggle">
					<a href="#" onClick={this._ToggleSidebar.bind(this)}></a>
				</span>


				<div className="Profile__Box">
					<div className="Media__Figure">
						<ProfileAvatar className="CENTER-NOW" src={ faker.Image.avatar() } />		
					</div>
					<div className="Media__Body">
						<h3>Welcome James</h3>
						<small>UX Designer</small>
					</div>
				</div>




				<ul className="nav Panel-List">
					<li className="active">
						<Link to="dashboard">
							<i className="fa fa-user"></i>
							<span className="menu-text"> Profile</span>
							<span className="selected"></span>
						</Link>
					</li>
					<li>
						<Link to="mail">
							<i className="fa fa-envelope"></i>
							<span className="menu-text"> Mail</span>
							<span className="selected"></span>
						</Link>
					</li>
					<li>
						<Link to="resources">
							<i className="fa fa-book"></i>
							<span className="menu-text"> Resources</span>
							<span className="selected"></span>
						</Link>
					</li>
					<li>
						<Link to="settings">
							<i className="fa fa-cogs"></i>
							<span className="menu-text"> Settings</span>
							<span className="selected"></span>
						</Link>
					</li>
					<li>
						<Link to="logout">
							<i className="fa fa-sign-out"></i>
							<span className="menu-text"> Log Out</span>
							<span className="selected"></span>
						</Link>
					</li>
				</ul>

			</div>
		);
	}
}
module.exports = UserSidebar;