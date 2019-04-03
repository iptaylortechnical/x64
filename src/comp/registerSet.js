import React, { Component } from 'react';
import './css/registerSet.css';

import Register from './register';

class RegisterSet extends Component {
  render() {
    return (
      <div className="RegisterSet">
        {
          Object.keys(this.props.registers)
            .map(key =>
              <Register value={this.props.registers[key]} label={key} />)
        }
      </div>
    )
  }
}

export default RegisterSet;