import React, { Component } from 'react';
import './css/doubleColumn.css';

class DoubleColumn extends Component {
  render() {
    return (
      <div className="DoubleColumn">
        <div className="doubleTopContainer">
          <div className="doubleColumnHeader">
            {this.props.slots[0].headerText}
          </div>
          {this.props.slots[0].content}
        </div>
        <div className="doubleBottomContainer">
          <div className="doubleColumnHeader">
            {this.props.slots[1].headerText}
          </div>
          {this.props.slots[1].content}
        </div>
      </div>
    )
  }
}

export default DoubleColumn;