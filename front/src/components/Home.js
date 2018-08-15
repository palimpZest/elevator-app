import React, { Component } from 'react';
import ElevatorOneHolder from './ElevatorOneHolder';
import ElevatorTwoHolder from './ElevatorTwoHolder';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Elevator App</h1>
        </header>
        <div className="elevators">
          <ElevatorOneHolder />
          <ElevatorTwoHolder />
        </div>
      </div>
    );
  }
}

export default Home;
