import React, { Component } from 'react';
import './body.css';

import Column from './column';
import RipSet from './ripSet';
import StackSet from './stackSet';
import HeapSet from './heapSet';
import RegisterSet from './registerSet';

class Body extends Component {
  render() {
    return (
      <div className='Body'>
        <Column headerText="Instructions"><RipSet /></Column>
        <Column headerText="Stack"><StackSet /></Column>
        <Column headerText="Heap"><HeapSet /></Column>
        <Column headerText="Registers"><RegisterSet registers={this.props.registers} /></Column>
      </div>
    )
  }
}

export default Body;