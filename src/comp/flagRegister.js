import React, { Component } from 'react';
import './css/flagRegister.css';

class FlagRegister extends Component {
  render() {
    const keys = Object.keys(this.props.flags);
    const first = keys.slice(0, 6).map(k => { return { key: k, value: this.props.flags[k] } });
    const second = keys.slice(6, 12).map(k => { return { key: k, value: this.props.flags[k] } });
    const third = keys.slice(12, keys.length).map(k => { return { key: k, value: this.props.flags[k] } });

    return (
      <div className="FlagRegister Register">
        <div className="flagRow">
          {first
            .map(k => <Flag value={k.value}
              description={k.key} />)}
        </div>
        <div className="flagRow">
          {second
            .map(k => <Flag value={k.value}
              description={k.key} />)}
        </div>
        <div className="flagRow">
          {third
            .map(k => <Flag value={k.value}
              description={k.key} />)}
        </div>
        <div className="ident">{this.props.label}</div>
      </div>
    )
  }
}

class Flag extends Component {
  render() {
    return (
      <div className="Flag">
        <div className="flagDescription">{this.props.description}</div>
        <div className="flagValue">{this.props.value}</div>
      </div>
    )
  }
}

export default FlagRegister;