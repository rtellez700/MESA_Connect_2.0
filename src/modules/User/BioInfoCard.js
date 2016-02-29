import React from 'react';
import ProfileAvatar from './ProfileAvatar';


class BioInfoCard extends React.Component {
	render() {
		var full_name = this.props.user.f_name + ' ' + this.props.user.l_name;
		return ( 
			<div className="BioInfoCard">
				<div className="Media">	
					<div className="Media__figure">
						<ProfileAvatar name={full_name}/>
					</div>
					<div className="Media__body">
						<h3>{this.props.user.f_name} {this.props.user.l_name}</h3>
						<small>{this.props.user.school} | {this.props.user.title}</small><br />
						<small><b>Major: </b>{this.props.user.major}</small><br />
						<p>
							{ this.props.user.bio }
						</p>
						<div className="display--flex">
							<button type="submit" className="btn btn-primary">View Profile</button>
							<button type="submit" className="btn btn-success">Message</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
module.exports = BioInfoCard
