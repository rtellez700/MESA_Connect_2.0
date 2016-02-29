import React from 'react';

import { Link } from 'react-router';

import FormList from './FormList';
import Input from './Item/Input';
import Select from './Item/Select';

// TODO: 
// [ ] Add value attribute and handler for each input 


var data = [
		{id: 'f_name', title:'First Name', placeholder:'First Name'},
		{id: 'l_name', title:'Last Name', placeholder:'Last Name'},
		{id: 'e_mail', title:'Email', placeholder:'E.g., email@gmail.com'},
		{id: "delta_id", title:'Delta ID *(optional)', placeholder:'98-XXX-XXX'},
		{id: 'dob', title:'Date of Birth', placeholder:''},
		{id: 'years_in_mesa', title:'Years In MESA', placeholder:''},
];
var startYear = 2000;
var currentYear = 2016;
var years = ['- Select -'];

for (var i=startYear; i<=currentYear; i++) years.push(i + 1);

var suffixes = ['- Select -','Jr','Sr','II','III','IV','V','VI','VII'];
var dob_months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var dob_days = [];
for (var i=0;i<=31;i++) dob_days.push(i+1);
var dob_years = [1992,1993];
class FormBox extends React.Component {
	handleSubmit(e){
		e.preventDefault();
		alert('it worked!')
	}

	render() {
		
		return (
			<div className="container well FormBox">
				<form role="form" onSubmit={ this.handleSubmit }>
					<Input type="text" id="f_name" title="First Name" placeholder="First Name"/>
					<Input type="text" id="m_name" title="Middle Name" placeholder="Middle Name"/>
					<Input type="text" id="l_name" title="Last Name" placeholder="Last Name"/>
					<Select id="name_suffix" title="Individual Suffix" options={suffixes} />
					<Input type="email" id="e_email" title="Email" placeholder="example@gmail.com"/>
					<Input type="text" id="delta_id" title="Delta ID (*optional)" placeholder="98-XXX-XXX"/>
					<div className="display--flex">
						<Select id="dob_month" title="Month" options={dob_months} />
						<Select id="dob_day"   title="Day" 	 options={dob_days} />
						<Select id="dob_year"  title="Day" 	 options={dob_years} />
					</div>
					<div className="display--flex">
						<Select id="start_year_in_mesa" title="Start Year In MESA" options={years} />{'   '}
						<Select id="end_year_in_mesa" title="Final Year In MESA" options={years} />
					</div>
					<div className="form-group">
					<Link to="/profile">
						<button type="submit" className="btn btn-primary FormBox__btn--submit">Submit</button>
					</Link>
					</div>
				</form>
			</div>
		);
	}
}
module.exports = FormBox
