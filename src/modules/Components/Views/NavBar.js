import React from 'react';
import NavLink from './NavLink'

class NavBar extends React.Component {
	

	render() {
		return (
			
				<div className="container-fluid">
				<nav className="navbar navbar-default" role="navigation">
				<div className="container">
				<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#MainNavbar" aria-expanded="false">
				<span className="sr-only">Toggle Navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				</button>

				<a className="navbar-brand" href="/">
				<img src="/img/MESA-logo.jpg"/>
				</a>
				</div>

				<div className="collapse navbar-collapse main-navbar" id="MainNavbar">
				<ul className="nav navbar-nav">

					<li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
					<li><NavLink to="/showcase">Our Students</NavLink></li>
					<li><NavLink to="/donate">Donate</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
					<li><NavLink to="/join">Join</NavLink></li>
				
				</ul>
				</div>
				</div>
				</nav>
			</div>
		
		);
	}
}
module.exports = NavBar
