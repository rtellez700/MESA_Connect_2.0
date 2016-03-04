import React from 'react';
import NavLinkList from './NavLinkList';
import ProfileAvatar from '../User/ProfileAvatar';

var SideBarLinks = [
    {
        url: "profile",
        title: "Rodrigo Tellez",
        class: "SideBar-brand"
    },
    {
        url: "profile",
        title: "Profile"
    },
    {
        url: "mail",
        title: "Mail"
    },
    {
        url: "resources",
        title: "Resources"
    }
    ,
    {
        url: "events",
        title: "Events"
    },
    {
        url: "settings",
        title: "Settings"
    },
    {
        url: "log_out",
        title: "Log Out"
    }
];

class SideBar extends React.Component {
	render() {
		return (
        <div id="SideBar-wrapper">
            <ProfileAvatar name="Rodrigo Tellez" className="CENTER-NOW"/>
            <NavLinkList links={ SideBarLinks }/>
        </div>
		);
	}
}
module.exports = SideBar
