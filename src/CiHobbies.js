import React, { Component } from 'react';

class CiHobbies extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		hobbies: [],
    	};
  	}

  	checkSubmit(e) {
  		if ('Enter' === e.key) {
  			this.addHobby(e);
  		}
  	}

  	addHobby(e) {
  		const hobby = this.hobbyInput.value;
  		if (!hobby) {
  			return;
  		}
  		const hobbies = this.state.hobbies;
  		hobbies.push(this.hobbyInput.value);
  		this.hobbyInput.value = '';

  		this.setState({ hobbies });
  	}

  	removeHobby(idx) {
  		const hobbies = this.state.hobbies;
  		hobbies.splice(idx, 1);

  		this.setState({ hobbies });
  	}

	render() {
  		return (
  			<div className="hobbies-list-container">
	  			<input ref={(input) => { this.hobbyInput = input; }} onKeyUp={(e) => this.checkSubmit(e)} />
  				<button onClick={(e) => this.addHobby(e)}>Add</button>

  				<ul className="hobbies">
  					{this.state.hobbies.map((hobby, idx) => (
  						<li key={idx}><span>{hobby}</span>
  						<button className="button button-outline button-remove-hobby" onClick={() => this.removeHobby(idx)}>-</button></li>
	  				))}
  				</ul>
  			</div>
  		);
  	}
}

export default CiHobbies;