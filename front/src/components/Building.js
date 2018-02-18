import React, { Component } from "react";
import axios from "axios";
import Button from "./Button";

class Building extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
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
    return <div>
        <table className="tg">
          <tr>
            <th className="tg-yw4l">Floor</th>
            <th className="tg-yw4l">Elevator</th>
            <th className="tg-yw4l">Button</th>
          </tr>
          {this.state.items.map((item, index) => (
            <tr
              key={index}
              floor_position={item.floor_position}
              door_status={item.door_status}
              vertical_status={item.vertical_status}
              call_activation={item.call_activation}
            >
              <td className="tg-yw4l" floor_number={item.floor_number}>
                {item.floor_number}{" "}
              </td>
              <td className="tg-yw4l">
                <div className="floor-display" />
              </td>
              <td>
                <Button/>
              </td>
            </tr>
          ))}
        </table>
      </div>;
  }
}

export default Building;
