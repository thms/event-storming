import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layer, Text } from 'react-konva';
import axios from 'axios';
import Event from './Event';

class EventList extends Component {

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

  addEvent = (e, x = 100, y = 100) => {
    axios.post('http://localhost:3000/events', {
        name: 'new event',
        xpos: x,
        ypos: y
    },
    { crossdomain: true }
  ).then(res => {
    this.setState({events: [...this.state.events, res.data]})
  })
  }

  deleteEvent = (eventId) => {
    axios.delete(`http://localhost:3000/events/${eventId}`);
    let remainingEvents = this.state.events.filter((event) => event._id != eventId )
    this.setState({events: remainingEvents})
  }

  render() {
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
      { this.state.events.map(event => <Event key={event._id} event={event} deleteEvent={this.deleteEvent} />) }
      </Layer>
      );
  }
}

export default EventList;
