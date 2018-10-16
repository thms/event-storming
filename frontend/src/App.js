import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import logo from './logo.svg';
import './App.css';
import EventList from './EventList';

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
          <EventList />
      </Stage>
    );
  }
}

export default App;
