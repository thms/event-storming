import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layer, Text } from 'react-konva';
import Konva from 'konva';
import axios from 'axios';
import Event from './Event';

class EventList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    // get the events from the backend
    axios.get('http://localhost:3000/events', { crossdomain: true })
    .then(res => {
      this.setState({events: res.data})
    })
  }

  addEvent = (e) => {
    axios.post('http://localhost:3000/events', {
        name: 'new event',
        xpos: 100,
        ypos: 100
    },
    { crossdomain: true }
  ).then(res => {
    this.setState({events: [...this.state.events, res.data]})
  })
  }

  render() {
    //console.log(this.state)
    return (
      <Layer>
      <Text text='hello to event storming'/>
      <Text
        x={20}
        y={40}
        width={50}
        height={25}
        text='add event'
        onClick={this.addEvent}
      />
      { this.state.events.map(event => <Event { ...event} />) }
      </Layer>
      );
  }
}

export default EventList;
