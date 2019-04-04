import React, { Component } from 'react';
import './css/stackLine.css';

class StackLine extends Component {
  render() {
    return (
      <div className="StackLine">
        {this.props.value.toString(16).padStart(16, '0')}
      </div>
    )
  }
}

export default StackLine;