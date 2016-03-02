import React from 'react';

class SideBar extends React.Component {
	render() {
		return (
    <div>
        <div id="SideBar-wrapper">
            <ul className="SideBar-nav">
                <li className="SideBar-brand">
                    <a href="#">
                        Rodrigo Tellez
                    </a>
                </li>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        <a href="#" className="btn btn-default" id="menu-toggle">Toggle Menu</a>
    </div>
		);
	}
}
module.exports = SideBar
