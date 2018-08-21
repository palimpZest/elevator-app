import React, { Component } from 'react';
import Button from './Button';

import { getFloorsAsync, addCall } from '../actions/calls';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Building extends Component {
  componentDidMount() {
    this.props.getFloorsAsync();
  }
  render() {
    return (
      <div>
        <table className="tg">
          <thead>
            <tr>
              <th className="tg-yw4l">Floor</th>
              <th className="tg-yw4l">Elevator</th>
              <th className="tg-yw4l">Button</th>
            </tr>
          </thead>
          <tbody>
            {this.props.floors.floors.map((item, index) => (
              <tr
                key={index}
                floor_position={item.floor_position}
                door_status={item.door_status}
                vertical_status={item.vertical_status}
                call_activation={item.call_activation}
              >
                <td className="tg-yw4l" floor_number={item.floor_number}>
                  {item.floor_number}{' '}
                </td>
                <td className="tg-yw4l">
                  {item.door_status === 'closed' ? (
                    <div className="floor-closed-display" />
                  ) : (
                    <div className="floor-open-display" />
                  )}
                </td>
                <td>
                  <Button
                    door_status={item.door_status}
                    floor_number={item.floor_number}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators({ addCall, getFloorsAsync }, dispatch)
)(Building);
