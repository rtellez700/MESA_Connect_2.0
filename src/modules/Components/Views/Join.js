import React from 'react';
import SignUpBox from '../Form/SignUpBox';
import SignUpContainer from '../Containers/SignUpContainer';

class Join extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="container-fluid bg--grey-dark">
				<SignUpContainer />
			</div>
		);
	}
}
module.exports = Join
