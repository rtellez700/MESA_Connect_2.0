import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

 class LoginFormModal extends Component {
 	_onRegister(e){
 		e.preventDefault();

 		$('#login-modal').modal('toggle');
 		browserHistory.push('/join');
 	}
 	_onSubmit(e){
 		// TODO
 		e.preventDefault();

 		// perform validation
 		// 
 		// flash success message
 		// 
 		// hide modal
 		$('#login-modal').modal('toggle')
 		// redirect
 		browserHistory.push('/dashboard');
 	}
	render() {
		return (
			<div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{"display": "none"}}>
				<div className="modal-dialog">
					<div className="loginmodal-container">
						<h1>Login to Your Account</h1><br />

						<form onSubmit={this._onSubmit.bind(this)}>
							<input type="text" name="user" placeholder="Username" />
							<input type="password" name="pass" placeholder="Password" />
							<input type="submit" name="login" className="login loginmodal-submit" value="Login" />
						</form>

						<div className="login-help">
							<Link to="join" onClick={this._onRegister.bind(this)}>Register</Link> - <a href="#">Forgot Password</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
module.exports = LoginFormModal;