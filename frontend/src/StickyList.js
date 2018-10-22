import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layer, Text } from 'react-konva';
import axios from 'axios';
import Event from './Event';
import Policy from './Policy';
import Actor from './Actor';
import Command from './Command';
import Editor from './Editor';

class StickyList extends Component {

  STICKIES = ['events', 'actors', 'commands', 'policies'];

  constructor(props) {
    super(props)
    this.state = {
      events: [],
      policies: [],
      actors: [],
      commands: [],
      textEditorRef: props.textEditorRef
    }
  }

  componentDidMount = () => {
    // get the events from the backend
    this.STICKIES.forEach(sticky => {
      axios.get(`http://localhost:3000/${sticky}`, { crossdomain: true })
      .then(res => {
        this.setState({[sticky]: res.data})
      })
    })
  }

  addSticky = (e, x = 100, y = 100, resourcePlural) => {
    axios.post(`http://localhost:3000/${resourcePlural}`, {
        name: `new ${resourcePlural}`,
        xpos: x,
        ypos: y
      },
      { crossdomain: true }
    ).then(res => {
      this.setState({[resourcePlural]: [...this.state[resourcePlural], res.data]})
    })
  }

  addEvent = (e, x = 100, y = 100) => {
    this.addSticky( e, x, y, 'events');
  }
  addPolicy = (e, x = 100, y = 100) => {
    this.addSticky( e, x, y, 'policies');
  }
  addActor = (e, x = 100, y = 100) => {
    this.addSticky( e, x, y, 'actors');
  }
  addCommand = (e, x = 100, y = 100) => {
    this.addSticky( e, x, y, 'commands');
  }

  deleteSticky = (id, resourcePlural) => {
    axios.delete(`http://localhost:3000/${resourcePlural}/${id}`);
    let remainingItems = this.state[resourcePlural].filter((item) => item._id != id )
    this.setState({[resourcePlural]: remainingItems})
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
        { this.state.events.map(event => <Event key={event._id} sticky={event} textEditorRef={this.state.textEditorRef} deleteCallback={this.deleteSticky} />) }
        { this.state.policies.map(policy => <Policy key={policy._id} sticky={policy} textEditorRef={this.state.textEditorRef} deleteCallback={this.deleteSticky} />) }
        { this.state.actors.map(actor => <Actor key={actor._id} sticky={actor} textEditorRef={this.state.textEditorRef} deleteCallback={this.deleteSticky} />) }
        { this.state.commands.map(command => <Command key={command._id} sticky={command} textEditorRef={this.state.textEditorRef} deleteCallback={this.deleteSticky} />) }
      </Layer>
    );
  }
}

export default StickyList;
