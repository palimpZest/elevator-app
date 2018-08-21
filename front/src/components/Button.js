import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        {this.props.door_status === 'closed' ? (
          <button className="button-item button-inactive">
            {this.props.floor_number}
          </button>
        ) : (
          <button className="button-item button-active">
            {this.props.floor_number}
          </button>
        )}
      </div>
    );
  }
}

export default Button;
