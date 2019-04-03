import React, { Component } from 'react';
import './css/stackLine.css';

class StackLine extends Component {
  render() {
    return (
      <div className="StackLine">
        {this.props.value}
      </div>
    )
  }
}

export default StackLine;