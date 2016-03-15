import React from 'react';

class Home extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="conatiner-fluid">
				<img src="http://placehold.it/2500x1000" />
				<div className="container-fluid bg--redish">
			    <div className="container grid__wrapper">
			      <div className="row">
			        <div className="col-md-4">
			          <div className="thumbnail">
			            <img src="http://placehold.it/240x200" alt="" />
			            <div className="caption">
			              <h3>Thumbnail Label</h3>
			              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			            </div>
			          </div>
			        </div>
			        <div className="col-md-4">
			          <div className="thumbnail">
			            <img src="http://placehold.it/240x200" alt="" />
			            <div className="caption">
			              <h3>Thumbnail Label</h3>
			              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			            </div>
			          </div>
			        </div>
			        <div className="col-md-4">
			          <div className="thumbnail">
			            <img src="http://placehold.it/240x200" alt="" />
			            <div className="caption">
			              <h3>Thumbnail Label</h3>
			              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div id="Example"></div>
			    </div>
			  </div>

			</div>

		);
	}
}
module.exports = Home
