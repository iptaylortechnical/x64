import React, { Component } from 'react';
import './css/register.css';
import BinaryString from './binaryString';
import HexString from './hexString';

class Register extends Component {
  render() {
    const value = this.props.value;
    const base2String = value.toString(2).padStart(64, '0');
    const base16String = value.toString(16).padStart(16, '0')

    // let displayString1;
    // let displayString2;

    // if (base2String.length < 32) {
    //   displayString1 = '00000000000000000000000000000000';
    //   displayString2 = base2String.padStart(32, '0');
    // } else {
    //   displayString1 = base2String.slice(0, 32 - base2String.length);
    //   displayString2 = base2String.slice(32 - base2String.length, base2String.length)
    // }

    return (
      <div className="Register">
        <BinaryString value={base2String}/>
        <HexString value={base16String}/>
        <div className="decimalValue">{value}</div>
        {/* <BinaryString value={displayString2}/> */}
        {/* <div className="registerValues"> */}
          {/* <div className="registerHexValue"><span className="hexLabel">Hex: </span>0x{this.props.value.toString("16")}</div> */}
          {/* <div className="registerDecValue"><span className="decLabel">Dec: </span>{this.props.value}</div> */}
        {/* </div> */}
        <div className="ident">{this.props.label}</div>
      </div>
    )
  }
}

export default Register;