import React from 'react'

import NavBar from './Components/Views/NavBar';
import Footer from './Components/Views/Footer';

var UserExampleData = require('./UserDataSimple');
var UserAPIUtils = require('./Utils/UserAPIUtils');

UserExampleData.init();
UserAPIUtils.getAllUsers();

export default React.createClass({
  render() {
    return (
    	<div className="container-fluid">
    		<NavBar />

    		{ this.props.children }

    		<Footer />
    	</div>
	);
  }
})



