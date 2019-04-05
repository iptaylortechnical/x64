import React, { Component } from 'react';
import './css/instruction.css';
import util from './utilities/util';

class Instruction extends Component {
  render() {
    const inst = this.props.instruction;
    const { current } = this.props;

    const currentClass = current === inst.location ? 'current' : '';

    return (
      <div className={`Instruction ${currentClass}`}>
        <div className="formattedInstruction">
          <div className="instructionCode formatted">{inst.code}</div>
          <div className="instructionContent formatted">{inst.instruction}</div>
        </div>
        <div className="instructionDescription">{util.getDescription(inst.code)}</div>
      </div>
    )
  }
}

export default Instruction;