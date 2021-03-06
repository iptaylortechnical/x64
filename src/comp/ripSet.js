import React, { Component } from 'react';
import './css/ripSet.css';
import Instruction from './instruction';
import Register from './register';
import FlagRegister from './flagRegister';

class RipSet extends Component {
  render() {
    return (
      <div className="RipSet">
        <div>
          {this.props.instructions
            .map(i =>
              <Instruction
                current={this.props.current}
                instruction={i} />)}
        </div>
        <div className="floatingRegister">
          <Register value={this.props.current + 0x400200} label="RIP" />
          <FlagRegister flags={this.props.flags} label="FLAGS" />
        </div>
      </div>
    )
  }
}

export default RipSet;