import React from 'react'


import NavBar from './Views/NavBar'
import Footer from './Views/Footer'

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

