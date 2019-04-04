import React, { Component } from 'react';
import './css/flagRegister.css';
import BinaryString from './binaryString';
import HexString from './hexString';

class FlagRegister extends Component {
  render() {

    return (
      <div className="FlagRegister Register">
        {/* <BinaryString value={base2String}/>
        <HexString value={base16String}/>
        <div className="decimalValue">{value}</div> */}

        {Object.keys(this.props.flags)
          .map(k => <Flag value={this.props.flags[k]}
            description={k} />)}

        <div className="ident">{this.props.label}</div>
      </div>
    )
  }
}

class Flag extends Component {
  render() {
    return (
      <div className="Flag">
        <div>{this.props.value}</div>
        <div>{this.props.description}</div>
      </div>
    )
  }
}

export default FlagRegister;