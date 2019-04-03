import React, { Component } from 'react';
import './css/binaryCell.css';

class BinaryCell extends Component {
  render() {
    const additionalClass = this.props.character === '0' ? 'off' : 'on';
    return (
      <div className={`BinaryCell ${additionalClass}`}>
        {this.props.character}
      </div>
    )
  }
}

export default BinaryCell;