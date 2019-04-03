import React, { Component } from 'react';
import './css/hexString.css';
import HexCell from './hexCell';

class HexString extends Component {
  render() {
    return (
      <div className="HexString">
        {this.props.value.split('').map(character => <HexCell character={character}/>)}
      </div>
    )
  }
}

export default HexString;