import React, { Component } from 'react';
import Building from './Building';

class ElevatorTwoHolder extends Component {
  render() {
    return (
      <div className="elevator-two-holder">
        <h4>Building</h4>
        <Building />
      </div>
    );
  }
}

export default ElevatorTwoHolder;
