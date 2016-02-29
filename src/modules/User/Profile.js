import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import BioInfo from './BioInfo';
import Interests from './Interests';
import BioInfoCardList from './BioInfoCardList';
import faker from 'faker';

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

var currentUser = users[0];

class Profile extends React.Component {
	render() {
		console.log(faker.);
		var full_name = currentUser.f_name + ' ' + currentUser.l_name;
		return (
			<div className="container-fluid Profile bg--redish">
				<div className="container grid__wrapper">
					<div className="row">
						<div className="col-md-4">
							<div className="text-center">
								<ProfileAvatar name={full_name}/> <br />
							</div>
							<div className="well">
								<h3>{ full_name }</h3>
								<b>School: </b>{ currentUser.school }<br />
								<b>Major: </b>{ currentUser.major }<br />
								{ currentUser.title } <br />
								
								<button type="submit" className="btn btn-primary">Message</button>
							</div>
						</div>
						<div className="col-md-8">
							<BioInfo user={ currentUser }/>
							<Interests />
						</div>
					</div>
				</div>
			
			<div className="container">
				<BioInfoCardList users={ users }/>
			</div>
			</div>
		);
	}
}
module.exports = Profile
