import React, { Component } from 'react';
import './css/addressLine.css';

class AddressLine extends Component {
  render() {
    return (
      <div className="AddressLine">
       {this.props.value.toString(16).padStart(8, '0')}
      </div>
    )
  }
}

export default AddressLine;