import React, { Component } from "react";
import ButtonIndicators from "./ButtonIndicators";
import ButtonPanel from "./ButtonPanel";
import axios from "axios";

class ElevatorOneHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      motion_status: "default",
      door_status: "closed"
    };

    this.motion_status = {
      default: { message: "", color: "black" },
      up: { message: "Up", color: "green" },
      down: { message: "Down", color: "orange" }
    };

    this.door_status = {
      closed: "closed",
      open: "open"
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api")
      .then(response => {
        this.setState({
          items: response.data.results.floors
        });
        console.log(response);
        console.log(response.data.results.floors);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="elevator-one-holder">
        <h4>Elevator Panel</h4>
        <ButtonIndicators
          motion_status={this.state.motion_status}
          door_status={this.state.door_status}
        />
        {this.state.items
          .slice(0, 10)
          .map((item, index) => (
            <ButtonPanel
              key={index}
              floor_number={item.floor_number}
              floor_position={item.floor_position}
              door_status={item.door_status}
              vertical_status={item.vertical_status}
              call_activation={item.call_activation}
            />
          ))}
      </div>
    );
  }
}

export default ElevatorOneHolder;
