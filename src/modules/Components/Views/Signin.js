import React, { Component } from 'react';

 class Signin extends Component {
	render() {
		return (
			<div className="container-fluid" style={{ "backgroundColor": "#eee", "height": 700 + "px" }}>

				<form className="Form-Signin">
					<h2 className="Form-Signin-heading">Please sign in</h2>
					<label htmlFor="inputEmail" className="sr-only">Email address</label>
					<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
					<label htmlFor="inputPassword" className="sr-only">Password</label>
					<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
					<div className="checkbox">
						<label>
							<input type="checkbox" value="remember-me" />Remember me
						</label>
					</div>
					<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
				</form>

			</div>
		);
	}
}
module.exports = Signin;