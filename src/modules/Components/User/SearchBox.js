import React, { Component } from 'react';

 class SearchBox extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<input 
							type="text" 
							className="form-control input-lg" 
							placeholder="Search . . ." 
							value={ this.props.value }
							onChange={ this.props.onChange.bind(this) }
						/>
						<br />
						<button 
							className="btn btn-primary full--width" 
							role="button" 
							onClick={ this.props.onClick.bind(this) }
						>
							Search
						</button>
					</div>
				</div>
			</div>
		);
	}
}
module.exports = SearchBox;