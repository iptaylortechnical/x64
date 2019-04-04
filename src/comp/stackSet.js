import React, { Component } from 'react';
import './css/stackSet.css';
import StackLine from './stackLine';
import AddressLine from './addressLine';

class StackSet extends Component {
  render() {
    const lines = (this.props.stack.match(/.{1,32}/g) || []).reverse();
    const addresses = [...lines,0].map((_, i) => <AddressLine value={0xffffffff - (i * 32)} />).reverse()
    return (
      <div className="StackSet">
        <div className="stackBottomContainer">
          <div className="stackAddresses">
            {addresses}
          </div>
          <div className="stackDisplay">
            {lines.map(s => <StackLine value={s} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default StackSet;