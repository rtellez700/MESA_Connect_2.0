import React from 'react';

class Donate extends React.Component {
	constructor(props){
		super(props);
	}
	_onClick(e){
		e.preventDefault();
		$.ajax({
			url: '/api/json',
			type: 'GET',
			success: function(data){
				console.log(data);
			}.bind(this),
			error: function(xhr,status,err){
				console.error('/api',status,err.toString())
			}.bind(this)
		});
	}
	render() {
		return (
			<div className="container">
				<h2>Hello from donate.js</h2>
				<button className="btn btn-primary block-center" onClick={this._onClick.bind(this)}>AJAX POST</button>
			</div>
		);
	}
}
module.exports = Donate
