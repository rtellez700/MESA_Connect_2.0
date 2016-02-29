import React from 'react';
import BioInfoCard from './BioInfoCard';

class BioInfoCardList extends React.Component {
	render() {
		var BioInfoNodes = this.props.users.map((user) => {
			return (
				<BioInfoCard key={user.f_name} user={ user }/>
			);
		});
		return (
			<div className="BioInfoCardList">
				{ BioInfoNodes }
			</div>
		);
	}
}
module.exports = BioInfoCardList
