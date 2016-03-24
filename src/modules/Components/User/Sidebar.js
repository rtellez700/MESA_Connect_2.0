import React, { Component } from 'react';

 class Sidebar extends Component {

 	_onClick(e){
 		e.preventDefault();
 		$('#RT_Sidebar').toggleClass('open');
 		console.log(e.target)
 	}
	render() {
		return (
			<div id="RT_Sidebar" className="RT_Sidebar">
				<div className="selector-toggle">
					<a href="#" onClick={this._onClick.bind(this)}></a>
					
				</div>
				<ul>
						<li className="theme-option">Label 1</li>
						<li className="theme-option">Label 2</li>
						<li className="theme-option">Label 3</li>
						<li className="theme-option">Label 4</li>
					</ul>
			</div>
		);
	}
}
module.exports = Sidebar;