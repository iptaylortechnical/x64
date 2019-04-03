import React, { Component } from 'react';
import './css/stackSet.css';
import StackLine from './stackLine';

class StackSet extends Component {
  render() {
    return (
      <div className="StackSet">
        {this.props.stack.map(s => <StackLine value={s}/>)}
      </div>
    )
  }
}

export default StackSet;