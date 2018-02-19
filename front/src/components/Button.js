import React, { Component } from "react";

class Button extends Component {
  render() {
    return <div>
        <button className="button-item">{this.props.floor_number}</button>
      </div>;
  }
}

export default Button;
