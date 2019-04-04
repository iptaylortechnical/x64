import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './comp/header';
import Body from './comp/body';

import util from './util';

class App extends Component {
  state = {
    registers07: {
      rax: 0,
      rbx: 0,
      rcx: 0,
      rdx: 0,
      rsi: 0,
      rdi: 0,
      rbp: 10,
      rsp: 0xffffffff,
    },
    registers815: {
      r8: 0,
      r9: 0,
      r10: 0,
      r11: 0,
      r12: 0,
      r13: 0,
      r14: 0,
      r15: 0,
    },
    rip: 0,
    artificialProgramCounter: 0,
    instructions: [],
    stack: '',
    FLAGS: {
      CF: 0,
      PF: 0,
      AF: 0,
      ZF: 0,
      SF: 0,
      TF: 0,
      IF: 0,
      DF: 0,
      OF: 0,
      IO: 0,
      PL: 0,
      NT: 0,
      RF: 0,
      VM: 0,
      AC: 0,
      VIF: 0,
      VIP: 0,
      ID: 0,
    }
  }

  execute = () => {

  }

  handleKeyEvent = (event) => {
    switch (event.keyCode) {
      case 40:
        const currentInst = this.state.instructions[this.state.artificialProgramCounter];
        const newRIP = this.state.rip + 2 + currentInst.instruction.length;
        const newCounter = this.state.artificialProgramCounter + 1;

        // const {}

        this.setState({
          rip: newRIP,
          artificialProgramCounter: newCounter,
        });
        break;
      default:
        break;
    }
  }

  search(bigHex, location) {
    const insHex = bigHex.slice(0, 2);
    const insLength = util.getLength(insHex);
    const fullInstruct = bigHex.slice(2, insLength + 2);
    const nextHex = bigHex.slice(insLength + 2, bigHex.length);
    const newLocation = location + 2 + insLength;

    this.state.instructions.push({
      code: insHex,
      instruction: fullInstruct,
      location,
    })

    if (nextHex.length < 2) {
      return
    }

    this.search(nextHex, newLocation);
  }

  constructor(props) {
    super(props);
    const hexIn = '554889e5c745fc00000000c745f805000000c745f406000000c745f007000000';
    this.search(hexIn, 0);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEvent, false);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body current={this.state.rip} instructions={this.state.instructions}
          registers07={this.state.registers07}
          registers815={this.state.registers815}
          stack={this.state.stack}
          flags={this.state.FLAGS} />
      </div>
    );
  }
}

export default App;
