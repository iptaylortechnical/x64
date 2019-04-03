import React, { Component } from 'react';
import './css/binaryString.css';
import BinaryCell from './binaryCell';

class BinaryString extends Component {
  render() {
    return (
      <div className="BinaryString">
        {this.props.value.split('').map(character => <BinaryCell character={character}/>)}
      </div>
    )
  }
}

export default BinaryString;