import React from 'react';

class Footer extends React.Component {
	constructor(props){
		super(props);
	}
	
	_onClick(e){
		e.preventDefault();
		$('#App_Wrapper').toggleClass("toggled");
	}

	render() {
		return (
			<div className="Footer">
				<div className="container">
					<h1 className="text-center" style={{ color:'whitesmoke' }}>Footer Goes Here</h1>
					<br />
					<div id="page-content-wrapper" className="well text-center bg--terracotta">
			        	<a href="#sidebar-menu-toggle" className="btn btn-primary" id="sidebar-menu-toggle" onClick={ this._onClick.bind(this) }>Toggle Menu</a>
					</div>
				</div>
			</div>
		);
	}
}
module.exports = Footer
