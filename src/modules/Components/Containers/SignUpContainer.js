import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { range } from 'underscore';
import FormList from '../Form/FormList';
import Input from '../Form/Item/Input';
import Select from '../Form/Item/Select';
import UserActions from '../../Actions/UserActions';

// TODO:
// [ ] Add validation onChange
// [ ] Add validation onSubmit
// [ ] Add redirect to login page


var INPUT = {
	NAME:{
		FIRST: 'f_name',
		MIDDLE: 'm_name',
		LAST: 'l_name',
		SUFFIX: 'name_suffix',
	},
	EMAIL: 'e_email',
	DELTA_ID: 'delta_id',
	DOB: {
		MONTH: 'dob_month',
		DAY: 'dob_day',
		YEAR: 'dob_year' 
	},
	MESA:{
		START_YEAR: 'mesa_start_year',
		END_YEAR: 'mesa_end_year' 
	}
};

var DEFAULT_VALUE = '- Select -';
var today = new Date();
var currentYear = today.getFullYear();

var SUFFIXES = [DEFAULT_VALUE, 'Jr','Sr','II','III','IV','V','VI','VII'];
var MESA_YEARS = range(currentYear, 1999, -1);
var DOB_MONTH_VALUES = range(1,13);
var DOB_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var DOB_DAYS = range(1,32);
var DOB_YEARS = range(currentYear, currentYear - 100, -1);

class SignUpContainer extends React.Component {
	constructor(){
		super();
		// TODO
		this.state = {
			f_name: '',
			m_name: '',
			l_name: '',
			name_suffix: '',
			email: '',
			delta_id: '',
			dob_month: '',
			dob_day: '',
			dob_year: '' ,
			mesa_start_year: '',
			mesa_end_year: '', 
			errors: false
		};
	}

	_handleSubmit(e){

		e.preventDefault();
	
		// browserHistory.push('/dashboard');
			
			// VALIDATE SUBMISSION
			// if (!this._validated()){
			// 	this.setState({errors: 'Testing Error Message'});
			// }else{

			// CREATE USER OBJECT
			// const rawUser = this._getUserInput();

			// window.rawUser = rawUser;
			// UserActions.create(rawUser);

			// show successful login notification
			alert('Sign-up successful. Will now redirect . . .');
			
			// redirect to dashboard page
			browserHistory.push('/dashboard');
			// }
	}

	_onInputChange(e){
		const input_id = e.target.id.trim();
		// validate -- check if input_id is in INPUT constant
		
		// update state
		switch (input_id){
			case INPUT.NAME.FIRST:
				this.setState({f_name: e.target.value});
				break;
			case INPUT.NAME.MIDDLE:
				this.setState({m_name: e.target.value});
				break;
			case INPUT.NAME.LAST:
				this.setState({l_name: e.target.value});
				break;
			case INPUT.EMAIL:
				this.setState({email: e.target.value});
				break;
			case INPUT.DELTA_ID:
				this.setState({delta_id: e.target.value});
				break;
			// SELECT OPTIONS
			case INPUT.NAME.SUFFIX:
				this.setState({name_suffix: e.target.value});
				break;
			case INPUT.DOB.MONTH:
				this.setState({dob_month: e.target.value});
				break;
			case INPUT.DOB.DAY:
				this.setState({dob_day: e.target.value});
				break;
			case INPUT.DOB.YEAR:
				this.setState({dob_year: e.target.value});
				break;
			case INPUT.MESA.START_YEAR:
				this.setState({mesa_start_year: e.target.value});
				break;
			case INPUT.MESA.END_YEAR:
				this.setState({mesa_end_year: e.target.value});
				break;
		}
	}

	_onInputFocus(e){

		console.log(e.target);
		$(e.target).addClass('animated pulse');

	}
	_getUserInput(){
		return ({
			name:{
				first: this.state.f_name,
				middle: this.state.m_name,
				last: this.state.l_name,
				suffix: this.state.suffix
			},
			email: document.getElementById('e_email').value.trim(),
			delta_id: document.getElementById('delta_id').value.trim(),
			dob: {
				month: document.getElementById('dob_month').value.trim(),
				day: document.getElementById('dob_day').value.trim(),
				year: document.getElementById('dob_year').value.trim() 
			},
			mesa:{
				start_year: document.getElementById('start_year_in_mesa').value.trim(),
				end_year: document.getElementById('end_year_in_mesa').value.trim() 
			}
		});
	}

	_validated(value, type){
		switch(type){
			case INPUT.F_NAME:
				return true;
			case INPUT.M_NAME:
				return true;
			case INPUT.L_NAME:
				return true;
			case INPUT.EMAIL:
				return true;
			case INPUT.DELTA_ID:
				return true;
			default: 
				return true;
		}
	}

	render() {
		const errors = this.state.errors;
		const errorClass = !errors ? "display--none" : "";

		return (
			<div className="container well FormBox ">
				<div className={"alert alert-danger " + errorClass} role="alert">
					<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
					<span className="sr-only">Error:</span>
						{ errors }
				</div>

				<form role="form" onSubmit={ this._handleSubmit.bind(this) } >
					<Input type="text" id="f_name" title="First Name" placeholder="First Name" onChange={this._onInputChange.bind(this)} value={this.state.first} onFocus={this._onInputFocus.bind(this)} />
					<Input type="text" id="m_name" title="Middle Name" placeholder="Middle Name" onChange={this._onInputChange.bind(this)} value={this.state.middle} onFocus={this._onInputFocus.bind(this)}/>
					<Input type="text" id="l_name" title="Last Name" placeholder="Last Name" onChange={this._onInputChange.bind(this)} value={this.state.last} onFocus={this._onInputFocus.bind(this)}/>
					<Select id="name_suffix" title="Suffix" options={SUFFIXES} onChange={this._onInputChange.bind(this)} />
					<Input type="email" id="e_email" title="Email" placeholder="example@gmail.com" onChange={this._onInputChange.bind(this)} value={this.state.email} onFocus={this._onInputFocus.bind(this)}/>
					<Input type="text" id="delta_id" title="Delta ID (*optional)" placeholder="98-XXX-XXX" onChange={this._onInputChange.bind(this)} value={this.state.delta_id} onFocus={this._onInputFocus.bind(this)}/>
					<hr />
					<h4>Date of Birth</h4>
					<div className="display--flex">
						<Select 
							id="dob_month" 
							title="Month" 
							options={DOB_MONTHS} 
							value={DOB_MONTH_VALUES} 
							onChange={this._onInputChange.bind(this)} 
						/>
						<Select 
							id="dob_day"   
							title="Day" 	 
							options={DOB_DAYS} 
							onChange={this._onInputChange.bind(this)} 
						/>
						<Select 
							id="dob_year"  
							title="Year" 	 
							options={DOB_YEARS} 
							onChange={this._onInputChange.bind(this)} 
						/>
					</div>
					<h4>Years In MESA</h4>
					<div className="display--flex">
						<Select 
							id="mesa_start_year" 
							title="Start"
							options={MESA_YEARS} 
							onChange={this._onInputChange.bind(this)} 
						/>
						<Select 
							id="mesa_end_year" 
							title="End" 
							options={MESA_YEARS} 
							onChange={this._onInputChange.bind(this)} 
						/>
					</div>
					<div className="form-group">
					
						<button type="submit" className="btn btn-primary FormBox__btn--submit">Submit</button>
					
					</div>
				</form>
			</div>
		);
	}
}
module.exports = SignUpContainer;
