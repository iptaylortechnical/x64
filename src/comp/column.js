import React, { Component } from 'react';
import './css/column.css';

class Column extends Component {
  render() {
    return (
      <div className="Column">
        <div className="columnHeader">
          {this.props.headerText}
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Column;