import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class Event extends React.Component {
  state = {
    color: 'yellow'
  };
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={100}
        height={100}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
        draggable={true}
      />
    );
  }
}

export default Event;
