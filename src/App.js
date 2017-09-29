import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alreadyHaveAccount: false
    }
  }

  onFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    });
  }

  onLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    });
  }

  onEmailNameChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onPasswordConfirmChange = (e) => {
    this.setState({
      passwordConfirm: e.target.value
    });
  }

  onAlreadyHaveAccountChange = (e) => {
    this.setState({
      alreadyHaveAccount: e.target.value === 'true'
    });
  }
  onAgeChange = (e) => {
    this.setState({
      age: parseInt(e.target.value)
    })
  }
  onPhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    })
  }
  onSocialChange = (e) => {
    this.setState({
      ssn: e.target.value
    })
  }
  onAccountChange = (e) => {
    this.setState({
      account: e.target.value
    })
  }
  validateEmail = (email) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  validatePhone = (phone) => {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone);
  }

  validateSocial = (elementValue) => {
       var  ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
       return ssnPattern.test(elementValue);
  }

  formValidation = () => {
    let firstName = this.state.firstName != null ? this.state.firstName.trim() : '';
    let lastName = this.state.lastName != null ? this.state.lastName.trim() : '';
    let email = this.state.email != null ? this.state.email.trim() : '';
    let password = this.state.password != null ? this.state.password.trim() : '';
    let passwordConfirm = this.state.passwordConfirm!= null ? this.state.passwordConfirm.trim() : '';
    let account = this.state.account != null ? this.state.account.trim() : '';
    let age = (this.state.age != null && !isNaN(this.state.age)) ? this.state.age : 0;
    let phone = this.state.phone != null ? this.state.phone.trim() : '';
    let ssn = this.state.ssn != null ? this.state.ssn.trim() : '';

    if (firstName.length <= 1) {
      return <span className="error">First Name is required</span>;
    }

    if (lastName.length <= 1) {
      return <span className="error">Last Name is required</span>;
    }

    if (email.length <= 1) {
      return <span className="error">Email is required</span>;
    }
    if (!this.validateEmail(email)) {
      return <span className="error">A valid email is required</span>;
    }
    if (password.length < 8) {
      return <span className="error">Password must be greater than or equal to 8 characters</span>;
    }
    if (password.length > 30) {
      return <span className="error">Password cannot be longer than 30 characters</span>;
    }
    if (password != passwordConfirm) {
      return <span className="error">Passwords must match!</span>;
    }
    if (this.state.alreadyHaveAccount && account.length < 9) {
      return <span className="error">A TPMR brokerage account number is required</span>;
    }
    if (age == 0) {
      return <span className="error">How old are you?</span>;
    }
    if (age <= 12) {
      return <span className="error">You must be older than 12 to open an account</span>;
    }
    if (!this.validatePhone(phone)) {
      return <span className="error">A valid phone is required</span>;
    }
    if (!this.validateSocial(ssn)) {
      return <span className="error">A valid social security number is required</span>;
    }

    return (<div>
      <button id="submit" onClick={this.submit}>Submit</button>
    </div>);
  }

  submit = () => {
    this.setState({
      submitComplete: true
    });
  }

  render() {
    if (this.state.submitComplete) {
      return (<div>
        <h1>Thank you</h1>
        <h4>You will receive an email shortly with details about your new brokerage account</h4>
        </div>);
    }
    let accountNumberField = this.state.alreadyHaveAccount ? 
      <div>
        <label htmlFor="account">Please enter your TPMR brokerage account number</label>
        <input id="account" type="text" placeholder="account number" onChange={this.onAccountChange} /> 
      </div>: null;
    return (
      <div className="App">
        <div className="App-header">
          <h1>TradePMR Account Signup</h1>
        </div>
        <p className="App-intro">
          To get started with your free TradePMR brokerage account, please fill out the form below.
        </p>
        <form>
          <fieldset>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" onChange={this.onFirstNameChange} ref="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" onChange={this.onLastNameChange} ref="lastName" />
            <label htmlFor="email">Email</label>
            <input id="email" type="text" onChange={this.onEmailNameChange} ref="emailName" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={this.onPasswordChange} ref="password" />
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input id="passwordConfirm" placeholder="please retype your password" type="password" onChange={this.onPasswordConfirmChange} ref="passwordConfirm" />
            <label htmlFor="alreadyHaveAccount">Do you already have a brokerage account with us?</label>
            <input name="alreadyHaveAccount" checked={this.state.alreadyHaveAccount} onChange={this.onAlreadyHaveAccountChange} id="alreadyHaveAccount" type="radio" value={true} /> Yes
            <input name="alreadyHaveAccount" checked={!this.state.alreadyHaveAccount} onChange={this.onAlreadyHaveAccountChange} type="radio" value={false} /> No
            {accountNumberField}
            <label htmlFor="age">Age</label>
            <input type="text" onChange={this.onAgeChange} id="age" />
            <label htmlFor="phone">Phone</label>
            <input type="text" onChange={this.onPhoneChange} id="phone" />
            <label htmlFor="ssn">Social Security Number</label>
            <input type="text" onChange={this.onSocialChange} id="ssn" />
            {this.formValidation()}
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
