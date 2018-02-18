import React, { Component } from "react";
import ButtonIndicators from "./ButtonIndicators";
import ButtonPanel from "./ButtonPanel";

class ElevatorOneHolder extends Component {
    render() {
        return (
        <div className="elevator-one-holder">
            <h3>Elevator Holder 1</h3>
            <ButtonIndicators />
            <ButtonPanel />
        </div>
        ); 
    }
}

export default ElevatorOneHolder;
