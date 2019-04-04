import React, { Component } from 'react';
import './css/body.css';

import Column from './column';
import DoubleColumn from './doubleColumn';
import RipSet from './ripSet';
import StackSet from './stackSet';
import HeapSet from './heapSet';
import RegisterSet from './registerSet';

class Body extends Component {
  render() {
    return (
      <div className='Body'>
        <Column headerText="Instructions">
          <RipSet
            current={this.props.current}
            instructions={this.props.instructions}
            flags={this.props.flags} />
        </Column>
        <DoubleColumn slots={[
          {
            headerText: "Heap",
            content: <HeapSet />
          },
          {
            headerText: "Stack",
            content: <StackSet stack={this.props.stack} />
          },

        ]} />
        {/* <Column headerText="Stack"><StackSet /></Column> */}
        <Column headerText="Registers 0-7">
          <RegisterSet registers={this.props.registers07} />
        </Column>
        <Column headerText="Registers 8-15">
          <RegisterSet registers={this.props.registers815} />
        </Column>
      </div>
    )
  }
}

export default Body;