import React, { Component } from "react";

class ButtonIndicators extends Component {
  render() {
    return <div>
        <div className="button-indicators">
          <div className="up-down-indicator">{this.props.motion}</div>
          <div className="open-closed-indicator">{this.props.door_status}</div>
        </div>
      </div>;
  }
}

export default ButtonIndicators;