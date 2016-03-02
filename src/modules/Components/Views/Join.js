import React from 'react';
import SignUpBox from '../Form/SignUpBox';
import SignUpContainer from '../Containers/SignUpContainer';

class Join extends React.Component {
	render() {
		return (
			<div className="container-fluid Join">
				<div className="grid__wrapper"> 
					<SignUpContainer />
				</div>
			</div>
		);
	}
}
module.exports = Join
