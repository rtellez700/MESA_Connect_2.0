import React from 'react';
import NavLinkList from './NavLinkList';
import ProfileAvatar from '../User/ProfileAvatar';

var SideBarLinks = [
    {
        url: "profile",
        title: "Rodrigo Tellez",
        class: "SideBar-brand",
    },
    {
        url: "profile",
        title: "Profile",
        icon: "fa fa-user"
    },
    {
        url: "inbox",
        title: "Mail",
        icon: "fa fa-envelope"
    },
    {
        url: "resources",
        title: "Resources",
        icon: "fa fa-book"
    },
    {
        url: "events",
        title: "Events",
        icon: "fa fa-calendar"
    },
    {
        url: "settings",
        title: "Settings",
        icon: "fa fa-cogs"
    },
    {
        url: "log_out",
        title: "Log Out",
        icon: "fa fa-sign-out"
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
