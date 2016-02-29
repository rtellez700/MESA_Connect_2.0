import React from 'react';

class Select extends React.Component {
	render() {
		var optionNodes = this.props.options.map( (option) => {
			return (<option key={option}>{ option }</option> );
		});
		return (
			<div>
				<div className="form-group">
					<label htmlFor={ this.props.id }>{ this.props.title }</label>
					<select className="form-control input-lg" id={ this.props.id }>
						{ optionNodes }
					</select>
				</div>
			</div>
		);
	}
}
module.exports = Select
