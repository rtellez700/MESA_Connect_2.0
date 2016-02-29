import React from 'react';

class Input extends React.Component {
	render() {
		return (
			<div className="form-group">
				<label htmlFor={this.props.itemId}>{this.props.title}</label>
				<input type={this.props.type} className="form-control input-lg" id={this.props.itemId} placeholder={this.props.placeholder} />
			</div>
		);
	}
}
module.exports = Input
