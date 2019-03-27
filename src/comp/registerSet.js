import React, { Component } from 'react';
import './registerSet.css';

import Register from './register';

class RegisterSet extends Component {
  render() {
    return (
      <div className="RegisterSet">
        <div className="registerRow">
          <Register value={this.props.registers.rax} label="rax"/>
          <Register value={this.props.registers.rbx} label="rbx"/>
        </div>
        <div className="registerRow">
          <Register value={this.props.registers.rcx} label="rcx"/>
          <Register value={this.props.registers.rdx} label="rdx"/>
        </div>
        <div className="registerRow">
          <Register value={this.props.registers.rsi} label="rsi"/>
          <Register value={this.props.registers.rdi} label="rdi"/>
        </div>
        <div className="registerRow">
          <Register value={this.props.registers.rbp} label="rbp"/>
          <Register value={this.props.registers.rsp} label="rsp"/>
        </div>
        <div className="registerRow">
          <Register value={this.props.registers.r8} label="r8"/>
          <Register value={this.props.registers.r9} label="r9"/>
        </div>
        <div className="registerRow">
          <Register value={this.props.registers.r10} label="r10"/>
          <Register value={this.props.registers.r11} label="r11"/>
        </div>
        <div className="registerRow">
          <Register value={this.props.registers.r12} label="r12"/>
          <Register value={this.props.registers.r13} label="r13"/>
        </div>
        <div className="registerRow">
          <Register value={this.props.registers.r14} label="r14"/>
          <Register value={this.props.registers.r15} label="r15"/>
        </div>
      </div>
    )
  }
}

export default RegisterSet;