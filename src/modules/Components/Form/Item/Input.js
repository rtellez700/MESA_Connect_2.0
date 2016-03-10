import React from 'react';

class Input extends React.Component {
	constructor(){
		super();		
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor={this.props.itemId}>{this.props.title}</label>
				<input 
					type={this.props.type} 
					className="form-control input-lg" 
					id={this.props.id} 
					placeholder={this.props.placeholder} 
					ref={this.props.ref || ''}
					value={this.props.value}
					onChange={this.props.onChange.bind(this)}
				/>
			</div>
		);
	}
}
module.exports = Input
