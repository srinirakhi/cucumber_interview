import React, { Component } from 'react';

class CiError extends Component {
	render() {
  		return (
  			<div className="errors-container">
  				{this.props.errors.map((err, idx) => <span key={idx} className="error">{err.text}</span>)}
  			</div>
  		);
  	}
}

export default CiError;