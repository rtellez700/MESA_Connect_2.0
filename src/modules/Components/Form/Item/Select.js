import React from 'react';

class Select extends React.Component {
	render() {
		const VALUE = this.props.value;
		var optionNodes = this.props.options.map( (option,idx) => {
			return (
				<option 
					value={ VALUE ? VALUE[idx] : option} 
					key={option}
				>	
					{ option }
				</option> 
			);
		});
		return (
			<div>
				<div className="form-group">
					<label htmlFor={ this.props.id }>{ this.props.title }</label>
					<select 
						className="form-control input-lg" 
						id={ this.props.id } 
						onChange={this.props.onChange.bind(this)}
						
					>
						{ optionNodes }
					</select>
				</div>
			</div>
		);
	}
}
module.exports = Select
