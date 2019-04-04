import React, { Component } from 'react';
import './css/stackSet.css';
import StackLine from './stackLine';

class StackSet extends Component {
  render() {
    const lines = this.props.stack.match(/.{1,32}/g);
    return (
      <div className="StackSet">
        {lines.map(s => <StackLine value={s}/>)}
      </div>
    )
  }
}

export default StackSet;