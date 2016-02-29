import React from 'react'


import NavBar from './NavBar'
import Footer from './Footer'

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

