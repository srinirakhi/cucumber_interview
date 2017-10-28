import React, { Component } from 'react';
import CiError from './CiError';
import CiHobbies from './CiHobbies';

class CiForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	name: {
    		errors: [],
    	},
    	age: {
    		errors: [],
    	},
    	pw: {
    		errors: [],
    	},
    	confirmpw: {
    		errors: [],
    	},
    };
  }

  // TODO check functions could possibly be consolidated
  checkMinLength(minLength, e) {
  	console.log(this.state);
  	const name = e.target.name;
  	const errors = this.state[name].errors.filter(err => 'minLength' !== err.name);

  	if (e.target.value.length < minLength) {
  		errors.push({
  			name: 'minLength',
  			text: `${e.target.name} must be at least ${minLength} characters long`,
  		});
  	}

  	this.setState({[name]: { errors }});
  }

  checkMaxLength(length, e) {
  	const name = e.target.name;
  	const errors = this.state[name].errors.filter(err => 'maxLength' !== err.name);

  	if (e.target.value.length > length) {
  		errors.push({
  			name: 'maxLength',
  			text: `${e.target.name} must be less than ${length} characters long`,
  		});
  	}

  	this.setState({[name]: { errors }});
  }

  checkMin(num, e) {
  	const name = e.target.name;
  	const errors = this.state[name].errors.filter(err => 'min' !== err.name);

  	if (+e.target.value < num) {
  		errors.push({
  			name: 'min',
  			text: `${e.target.name} must be at least ${num}`,
  		});
  	}
  	this.setState({[name]: { errors }});
  }

  checkCompareValue(targetName, targetValue, e) {
  	const name = e.target.name;
  	const errorName = `compare${targetName}`;
  	const errors = this.state[name].errors.filter(err => errorName !== err.name);

  	if (e.target.value !== targetValue) {
  		errors.push({
  			name: errorName,
  			text: `${e.target.name} must match ${targetName} exactly`,
  		});
  	}

  	this.setState({[name]: { errors }});
  }

  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
      	<fieldset>
	      	<label htmlFor="name">Name:</label>
      		<input type="text" name="name" id="name"
      			onInput={(e) => this.checkMaxLength(25, e)}
      			placeholder="First Last" />
      			<CiError errors={this.state.name.errors} />

	      	<label htmlFor="age">Age:</label>
      		<input type="number" name="age" min="0" id="age"
      			onInput={(e) => this.checkMin(18, e)}
      			placeholder="18+" />
      			<CiError errors={this.state.age.errors} />

	      	<label htmlFor="password">Password:</label>
      		<input type="password" placeholder="8 to 15 characters" id="password"
      			ref={(input) => { this.pwValue = input; }}
      			onChange={(e) => {
      				 this.checkMaxLength(15, e);
      				 	this.checkMinLength(8, e);
      				       			}}
      			name="pw" />
      			<CiError errors={this.state.pw.errors} />

	      	<label htmlFor="confirmpw">Confirm Password:</label>
      		<input type="password" placeholder="8 to 15 characters"
      			id="confirmpw"
      		    onInput={(e) => {
      		    	if (this.pwValue.value && !this.state.pw.errors.length) {
      		    		this.checkCompareValue('password', this.pwValue.value, e);
      		    	}
      		    }}
      			name="confirmpw" />
      			<CiError errors={this.state.confirmpw.errors} />

      		<CiHobbies />
      	</fieldset>
      </form>
    );
  }
}

export default CiForm;
