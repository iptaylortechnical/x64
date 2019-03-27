import React, { Component } from 'react';
import './register.css';

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <div className="registerValues">
          <div className="registerHexValue"><span className="hexLabel">Hex: </span>0x{this.props.value.toString("16")}</div>
          <div className="registerDecValue"><span className="decLabel">Dec: </span>{this.props.value}</div>
        </div>
        <div className="ident">{this.props.label}</div>
      </div>
    )
  }
}

export default Register;