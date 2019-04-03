import React, { Component } from 'react';
import './css/stackLine.css';

class StackLine extends Component {
  render() {
    return (
      <div className="StackLine">
        {'0x' + this.props.value.toString(16).padStart(32, '0')}
      </div>
    )
  }
}

export default StackLine;