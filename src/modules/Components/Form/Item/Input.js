import React from 'react';

class Input extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: ''
		};
		
	}

	_onChange(e){
		this.setState({ value: e.target.value });
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
					value={this.state.value}
					onChange={this._onChange.bind(this)}
				/>
			</div>
		);
	}
}
module.exports = Input
