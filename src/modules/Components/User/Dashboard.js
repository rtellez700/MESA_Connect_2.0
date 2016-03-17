import React from 'react';


class Dashboard extends React.Component {
	render() {
		return (
			<div className="container Dashboard">
	        	<div className="well">
	        		<div className="Media">
	        			<div className="Media__figure">
	        				<img src="http://placehold.it/80" alt=""/>
        				</div>
	        			<div className="Media__body">
	        				<h2>Mr. John Doe</h2>
	        				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit modi cupiditate quos saepe facere, ea dolore rem itaque repudiandae, dolorem culpa libero vero sunt similique atque eum eveniet, incidunt iure.</p>
	        			</div>
	        		</div>
	        	</div>

	        	<hr className="hr--black hr--2x" />
	        	<div className="Dashboard__Content">
		        	<h2 className="Dashboard__Heading">About Me</h2>
		        	<p>
		        		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt fuga quo voluptatem quibusdam quidem, praesentium, officiis blanditiis esse. Praesentium suscipit magnam libero a quae ipsa delectus, ut debitis labore veritatis. 
		        		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, libero, similique? Debitis asperiores, quis. Ad, optio? Quo illum voluptatibus pariatur, minima dolore obcaecati veritatis temporibus ex eaque quaerat veniam ipsa.
		        	</p>
	        	</div>

	        	<hr className="hr--black hr--2x" />

	        	<div className="Dashboard__Content">
		        	<h2 className="Dashboard__Heading">Contact Information</h2>
	        		<div className="row">
	        			<div className="col-md-6">
			        		<div className="Dashboard__Sub-Content">
					        	<h4 className="Dashboard__Sub-Heading">Email</h4>
					        	<ul className="fa-ul">
					        		<li><i className="fa-li fa fa-envelope"></i> example@gmail.com</li>
					        	</ul>
			        		</div>

			        		<div className="Dashboard__Sub-Content">
					        	<h4 className="Dashboard__Sub-Heading">Phone</h4>
					        	<ul className="fa-ul">
					        		<li><i className="fa-li fa fa-phone"></i> (209) 555 - 5555</li>
					        	</ul>
			        		</div>

			        		<div className="Dashboard__Sub-Content">
					        	<h4 className="Dashboard__Sub-Heading">Addresses</h4>
						        	<address>
										Home<br />
										5151 Pacific Avenue<br />
										Stockton, CA 95207<br />
									</address>
									<address>
										Business<br />
										<i>-- No Address --</i>
									</address>
							</div>
						</div>
					
						<div className="col-md-6">
							<div className="Dashboard__Sub-Content">
					        	<h4 className="Dashboard__Sub-Heading">Websites</h4>
					        	<ul className="fa-ul">
					        		<li><i className="fa-li fa fa-globe"></i> www.example.com</li>
					        	</ul>
			        		</div>

			        		<div className="Dashboard__Sub-Content">
					        	<h4 className="Dashboard__Sub-Heading">Social Networks</h4>
					        	<ul className="fa-ul">
						        	<li><i className="fa-li fa fa-facebook"></i> facebook.com/example</li>
						        	<li><i className="fa-li fa fa-twitter"></i> @twitter</li>
						        	<li><i className="fa-li fa fa-linkedin"></i> linkedin.com/example</li>
				        		</ul>
				        	</div>
			        	</div>
			        </div>
	        	</div>

	        	<hr className="hr--black hr--2x" />

	        	<div className="Dashboard__Content">
		        	<h2 className="Dashboard__Heading">Career</h2>
	        	</div>

	        	<hr className="hr--black hr--2x" />

	        	<div className="Dashboard__Content">
		        	<h2 className="Dashboard__Heading">Education</h2>
			        	UC Berkeley<br />
			        	BS | 2015 <br />
			        	Chemical & Biomolecular Engineering
	        	</div>

	        	<hr className="hr--black hr--2x" />
	        	
	        	<div className="Dashboard__Content">
		        	<h2 className="Dashboard__Heading">Interests</h2>
		        		<span className="label label-primary">Interest 1</span>{' '}
						<span className="label label-default">Interest 2</span>{' '}
						<span className="label label-success">Interest 3</span>{' '}
						<span className="label label-info">Interest 4</span>{' '}
						<span className="label label-warning">Interest 5</span>{' '}
						<span className="label label-danger">Interest 6</span>{' '}
				</div>
			</div>
		);
	}
}
module.exports = Dashboard
