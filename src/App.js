import React, { Component } from 'react';
import CiForm from './CiForm'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <CiForm />
      </div>
    );
  }
}

export default App;