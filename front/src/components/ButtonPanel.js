import React, { Component } from 'react';
import Button from './Button';

class ButtonPanel extends Component {
  render() {
    return (
      <div>
        <Button
          door_status={this.props.door_status}
          floor_number={this.props.floor_number}
        />
      </div>
    );
  }
}

export default ButtonPanel;
