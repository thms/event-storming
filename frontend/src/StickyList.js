import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layer, Text } from 'react-konva';
import axios from 'axios';
import Event from './Event';
import Policy from './Policy';
import Actor from './Actor';
import Command from './Command';
import ReadModel from './ReadModel';
import Editor from './Editor';

class StickyList extends Component {

  STICKIES = ['events', 'actors', 'commands', 'policies', 'readModels'];

  constructor(props) {
    super(props)
    this.state = {
      events: [],
      policies: [],
      actors: [],
      commands: [],
      readModels: [],
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
  addReadModel = (e, x = 100, y = 100) => {
    this.addSticky( e, x, y, 'readModels');
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
          text='+ event'
          onClick={this.addEvent}
        />
        <Text
          x={80}
          y={40}
          width={50}
          height={25}
          text='+ policy'
          onClick={this.addPolicy}
        />
        <Text
          x={140}
          y={40}
          width={50}
          height={25}
          text='+ actor'
          onClick={this.addActor}
        />
        <Text
          x={200}
          y={40}
          width={50}
          height={25}
          text='+ command'
          onClick={this.addCommand}
        />
        <Text
          x={260}
          y={40}
          width={50}
          height={25}
          text='+ read model'
          onClick={this.addReadModel}
        />

        { this.state.events.map(event => <Event key={event._id} sticky={event} textEditorRef={this.state.textEditorRef} deleteCallback={this.deleteSticky} />) }
        { this.state.policies.map(policy => <Policy key={policy._id} sticky={policy} textEditorRef={this.state.textEditorRef} deleteCallback={this.deleteSticky} />) }
        { this.state.actors.map(actor => <Actor key={actor._id} sticky={actor} textEditorRef={this.state.textEditorRef} deleteCallback={this.deleteSticky} />) }
        { this.state.commands.map(command => <Command key={command._id} sticky={command} textEditorRef={this.state.textEditorRef} deleteCallback={this.deleteSticky} />) }
        { this.state.readModels.map(readModel => <ReadModel key={readModel._id} sticky={readModel} textEditorRef={this.state.textEditorRef} deleteCallback={this.deleteSticky} />) }
      </Layer>
    );
  }
}

export default StickyList;
