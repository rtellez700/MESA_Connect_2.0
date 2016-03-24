import React from 'react';

import NavBar from '../Views/NavBar';
import UserSidebar from './UserSidebar';
import Footer from '../Views/Footer';

class User extends React.Component {
	render() {

		return (
			<div className="User__Wrapper">
				{/* Header Goes Here */}
				
				<div className="User__Container">
					<aside className="User__Left-Panel User__Left-Panel--Minimize">
						<UserSidebar />
					</aside>
					<section className="User__Main-Content">
						{ this.props.children }
					</section>
				</div>

			</div>
		);
	}
}
module.exports = User
