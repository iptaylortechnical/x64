import React, { Component } from 'react';
import './css/hexCell.css';

class HexCell extends Component {
  render() {
    const additionalClass = this.props.character === '0' ? 'off' : 'on';
    return (
      <div className={`HexCell ${additionalClass}`}>
        {this.props.character}
      </div>
    )
  }
}

export default HexCell;