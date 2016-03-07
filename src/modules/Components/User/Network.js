import React, { Component } from 'react';
import faker from 'faker';

import SearchBox from './SearchBox';
import BioInfoCardList from './BioInfoCardList';

// sample data
var users = [
	{
		"id": 1456729877142,
		"f_name": "Rodrigo",
		"l_name": "Tellez",
		"school": "UC Berkeley",
		"major": "Chemical Engineering",
		"title": "Undergraduate",
		"bio": faker.Lorem.paragraphs()
	},
	{
		"id": 1456729886559,
		"f_name": "Gabriella",
		"l_name": "Herrera",
		"school": "Harvard",
		"major": "Neuoscience",
		"title": "Undergraduate",
		"bio": faker.Lorem.paragraphs()
	},
	{
		"id": 1456729893306,
		"f_name": "Chris",
		"l_name": "Augmon",
		"school": "UC Berkeley",
		"major": "EECS",
		"title": "Undergraduate",
		"bio": faker.Lorem.paragraphs()
	}
];

 class Network extends Component {
 	constructor(props){
 		super(props);
 		this.state = {
 			value: '',
 			searchResults: []
 		};
 	}

 	_fetchData(){
 		console.log('fetching . . .')
 		this.setState({searchResults: users});
 	}

 	_onChange(e){
 		this.setState({value: e.target.value});
 	}

 	_onClick(e){
 		// retrieve data from server
 		this._fetchData();
 	}

	render() {
		return (
			<div className="Network container">
				<SearchBox 
					value={this.state.value} 
					onChange={this._onChange.bind(this)} 
					onClick={ this._onClick.bind(this) }
				/>

				<hr />

				<div className="center-block">
					<BioInfoCardList users={ this.state.searchResults } />
				</div>
			</div>
		);
	}
}
module.exports = Network;