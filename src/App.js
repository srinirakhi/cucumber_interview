import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hobbies: []
    }
  }

  nameerror = (name) => {
    return name == null || name.length <= 0 || name.length >= 25 ?
      <span className="error">Name must be greater than 0 characters long and less than 25</span>
      : null;
  }

  onNameChange= (e) => {
    this.setState({
      name: e.target.value
    });
  }

  ageerror = (age) => {
    return age == null || isNaN(parseInt(age)) || age < 18 ?
      <span className="error">Age must be a valid integer greater than or equal to 18</span> : 
      null;
  }

  onAgeChange= (e) => {
    this.setState({
      age: parseInt(e.target.value)
    });
  }


  passworderror = (password) => {
    return password == null || password.length < 8 || password.length > 15
      ? <span className="error">Password must be greater than 8 characters and less than 15</span>
      : null;
  }

  onPasswordChange= (e) => {
    this.setState({
      password: e.target.value
    });
  }

  confirmpassworderror = (password) => {
    return password == this.state.password ? null : <span className="error">The passwords must match</span>;
  }

  onPasswordConfirmChange= (e) => {
    this.setState({
      passwordConfirm: e.target.value
    });
  }

  submit = () => {
    this.setState({
      submitComplete: true
    });
  }

  onHobbyChange = (e) => {
    this.setState({
      hobby: e.target.value
    });
  }

  addHobby = () => {
    var hobbies = this.state.hobbies;
    hobbies.push(this.state.hobby);
    this.setState({
      hobbies: hobbies,
      hobby: ""
    }, () => {
      console.log(this.state.hobbies);
    });
  }

  hobbyKeyDown = (e) => {
    if (e.key == "Enter") {
      this.addHobby();
    }
  }

  render() {
    let passwordError = this.passworderror(this.state.password);
    let confirmPasswordError = passwordError == null ? this.confirmpassworderror(this.state.passwordConfirm) : null;
    return (
      <div className="App">
        <form>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={this.onNameChange} ref="name" />
            {this.nameerror(this.state.name)}
            <label htmlFor="age">Age</label>
            <input type="text" onChange={this.onAgeChange} id="age" />
            {this.ageerror(this.state.age)}
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={this.onPasswordChange} ref="password" />
            {passwordError}
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input id="passwordConfirm" placeholder="please retype your password" type="password" onChange={this.onPasswordConfirmChange} ref="passwordConfirm" />
            {confirmPasswordError}
            <label htmlFor="hobby">Hobby</label>
            <ul>
            {
              this.state.hobbies.map((hobby) => {
                return (
                  <li>{hobby}</li>
                )
              })
            }
            </ul>
            <input onKeyPress={this.hobbyKeyDown} value={this.state.hobby} onChange={this.onHobbyChange} id="hobby" placeholder="enter your hobies" />
          </fieldset>
        </form>
        <button onClick={this.addHobby}>Add</button>
      </div>
    );
  }
}

export default App;
