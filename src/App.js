import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './comp/header';
import Body from './comp/body';

class App extends Component {
  state = {
    registers: {
      rax:0,
      rbx:0,
      rcx:0,
      rdx:0,
      rsi:0,
      rdi:0,
      rbp:0,
      rsp:0,
      r8:0,
      r9:0,
      r10:0,
      r11:0,
      r12:0,
      r13:0,
      r14:0,
      r15:0
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Body registers={this.state.registers}/>
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
