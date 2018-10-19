import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layer, Text } from 'react-konva';
import axios from 'axios';
import Event from './Event';
import Policy from './Policy';
import Actor from './Actor';
import Editor from './Editor';
class EventList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      events: [],
      policies: [],
      actors: [],
      textEditorRef: props.textEditorRef
    }
  }

  componentDidMount = () => {
    // get the events from the backend
    axios.get('http://localhost:3000/events', { crossdomain: true })
    .then(res => {
      this.setState({events: res.data})
    })
    axios.get('http://localhost:3000/policies', { crossdomain: true })
    .then(res => {
      this.setState({policies: res.data})
    })
    axios.get('http://localhost:3000/actors', { crossdomain: true })
    .then(res => {
      this.setState({actors: res.data})
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

  addPolicy = (e, x = 100, y = 100) => {
    axios.post('http://localhost:3000/policies', {
        name: 'new policy',
        xpos: x,
        ypos: y
    },
    { crossdomain: true }
  ).then(res => {
    this.setState({policies: [...this.state.policies, res.data]})
  })
  }
  addActor = (e, x = 100, y = 100) => {
    axios.post('http://localhost:3000/actors', {
        name: 'new actor',
        xpos: x,
        ypos: y
    },
    { crossdomain: true }
  ).then(res => {
    this.setState({actors: [...this.state.actors, res.data]})
  })
  }

  deleteEvent = (eventId) => {
    axios.delete(`http://localhost:3000/events/${eventId}`);
    let remainingEvents = this.state.events.filter((event) => event._id != eventId )
    this.setState({events: remainingEvents})
  }

  deletePolicy = (policyId) => {
    axios.delete(`http://localhost:3000/policies/${policyId}`);
    let remainingPolicies = this.state.policies.filter((policy) => policy._id != policyId )
    this.setState({policies: remainingPolicies})
  }
  deleteActor = (actorId) => {
    axios.delete(`http://localhost:3000/actors/${actorId}`);
    let remainingActors = this.state.actors.filter((actor) => actor._id != actorId )
    this.setState({actors: remainingActors})
  }

  render() {
    return (
      <Layer>
      <Text
        x={20}
        y={40}
        width={50}
        height={25}
        text='add event'
        onClick={this.addEvent}
      />
      <Text
        x={80}
        y={40}
        width={50}
        height={25}
        text='add policy'
        onClick={this.addPolicy}
      />
      { this.state.events.map(event => <Event key={event._id} event={event} textEditorRef={this.state.textEditorRef} deleteEvent={this.deleteEvent} />) }
      { this.state.policies.map(policy => <Policy key={policy._id} event={policy} textEditorRef={this.state.textEditorRef} deleteCallback={this.deletePolicy} />) }
      { this.state.actors.map(actor => <Actor key={actor._id} event={actor} textEditorRef={this.state.textEditorRef} deleteCallback={this.deleteActor} />) }
      </Layer>
      );
  }
}

export default EventList;
