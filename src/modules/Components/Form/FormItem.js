import React from 'react';

class FormItem extends React.Component {
	render() {
		return (
			<div className="FormItem">
				<label htmlFor={this.props.itemId}>{this.props.title}</label>
				<input type="text" className="form-control input-lg" id={this.props.itemId} placeholder={this.props.placeholder} />
			</div>
			
		);
	}
}
module.exports = FormItem
