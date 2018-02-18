import React, { Component } from "react";
import Button from "./Button";

class ButtonPanel extends Component {
  render() {
    return <div>
        <h4>Button Panel</h4>
        <div className="button-panel">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>;
  }
}

export default ButtonPanel;
