import React, { Component } from "react";

class ButtonIndicators extends Component {
  render() {
    return <div>
        <h4>Button Indicators</h4>
        <div className="button-indicators">
          <div className="up-down-indicator" />
          <div className="open-closed-indicator" />
        </div>
      </div>;
  }
}

export default ButtonIndicators;
