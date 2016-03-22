import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
	constructor(props){
		super(props);
	}
	
	_onClick(e){
		e.preventDefault();
		$('#App_Wrapper').toggleClass("toggled");
	}

	render() {
		return (
			<footer className="Footer">

				<div className="container">

					<div className="row">
						<div className="col-xs-1 Footer__Item Footer__Logo">
							<img src="http://placehold.it/80x82" alt=""/>
						</div>
						<div className="col-xs-3 Footer__Item">
							<h3 className="Footer__Heading">SJDC MESA</h3>
							<address>
								Science Math Building - SCMA 163<br />
								5151 Pacific Avenue<br />
								Stockton, CA 95207<br />
								<abbr title="Phone">P:</abbr> (209) 954 - 5318<br />
								<abbr title="Fax">F:</abbr> (209) 954 - 5600<br />
								<abbr title="Email">E:</abbr> mesa@deltacollege.edu<br />
							</address>
						</div>
						<div className="col-xs-2 Footer__Item">
							<h3 className="Footer__Heading">Career Tools</h3>
							<hr />
							<p>
								Student Resources <br />
								Student Internships <br />
								Professional Resources <br />
								Jobs <br />
							</p>
						</div>
						<div className="col-xs-2 Footer__Item">
							<h3 className="Footer__Heading">Connections</h3>
							<hr />
							<p>
								Member Directory <br />
								My MESA Account
								Join MESA
							</p>
						</div>
						<div className="col-xs-2 Footer__Item">
							<h3 className="Footer__Heading">Support MESA</h3>
							<hr />
							<p>
								Partner with Us <br />
								Advertise with Us <br />
								Share Your Story <br />
								Donate <br />
								Volunteer <br />
							</p>
						</div>
						<div className="col-xs-2 Footer__Item">
							<h3 className="Footer__Heading">About Us</h3>
							<hr />
							<p>
								Mission <br />
								Strategic Plan <br />
								Board <br />
								Staff <br />
							</p>
						</div>
					</div>

					{ /*
					<div className="Footer__Newsletter">
						<div className="input-group">
							<input className="form-control" type="text" placeholder="example@gmail.com" />
							<span className="input-group-btn">
								<button className="btn btn-default" type="button">Subscribe!</button>
							</span>
						</div>
					</div> */}

						<hr />

					<div className="Footer__Copyright-Content">
						<div className="pull-left">
							&copy; 2016 SJDC MESA <br />
							<ul className="list-inline">
								<li>Privacy Policy</li>
								<li>Creative Commons</li>
								<li>Sitemap</li>
							</ul>
						</div>
						<div className="Footer__Social-Wrapper pull-right">
							<ul className="list-inline">
								<li>
									<Link to="#"><i className="fa fa-facebook"></i></Link>
								</li>
								<li>
									<Link to="#"><i className="fa fa-facebook"></i></Link>
								</li>
								<li>
									<Link to="#"><i className="fa fa-facebook"></i></Link>
								</li>
							</ul>
						</div>
					</div>

				</div>

			</footer>
		);
	}
}
module.exports = Footer
