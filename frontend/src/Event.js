import React, { Component } from 'react';
import { render } from 'react-dom';
import { Rect, Text, Group } from 'react-konva';
import Konva from 'konva';
import axios from 'axios';
import Portal from './Portal';

class Event extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      color: 'yellow',
      x: props.xpos,
      y: props.ypos,
      name: props.name,
      width: 100,
      height: 100,
      id: props._id,
      textEditVisible: false,
      textEditX: 0,
      textEditY: 0,
      textEditRef: React.createRef(),
      deleted: false

    }
  }
  // at the end of dragging, update server side with the new coordinates
  //
  handleDragEnd = e => {
    axios.put(`http://localhost:3000/events/${this.state.id}`,
    {
      xpos: this.state.x + e.evt.dragEndNode.attrs.x,
      ypos: this.state.y + e.evt.dragEndNode.attrs.y
    },
    { crossdomain: true }
  )}

  // TODO: remove this element from the state of the EventList, instead of crazy current solution
  handleDelete = e => {
    axios.delete(`http://localhost:3000/events/${this.state.id}`)
    .then(res => this.setState({
      deleted: true
    })
    )
  };
  handleTextDblClick = e => {
  const absPos = e.target.getAbsolutePosition();
  this.setState({
    textEditVisible: true,
    textEditX: absPos.x,
    textEditY: absPos.y + 35
  });
  this.state.textEditRef.current.focus();
};
handleTextEdit = e => {
  axios.put(`http://localhost:3000/events/${this.state.id}`,
    {
      name: e.target.value,
    },
    { crossdomain: true }
  )
  this.setState({
    name: e.target.value
  });
};
handleTextareaKeyDown = e => {
  if (e.keyCode === 13 || e.keyCode === 27) {
    this.setState({
      textEditVisible: false
    });
  }
};

  render() {
    if (this.state.deleted) {
      return(null)
    } else {
    return (
      <Group
        draggable={true}
        onDragEnd={this.handleDragEnd}
        onClick={this.handleClick}
        onDblClick={this.handleTextDblClick}
        onContextMenu={(e) => {
        }}
      >
        <Rect
          x={this.state.x}
          y={this.state.y}
          width={100}
          height={100}
          fill={this.state.color}
          shadowBlur={5}
        />
        <Text
          x={this.state.x}
          y={this.state.y}
          text={this.state.name}
          align={'center'}
          verticalAlign={'middle'}
          fill={'black'}
          width={100}
          height={100}
          fontSize={15}
        />
        <Text
          x={this.state.x + 90}
          y={this.state.y}
          text={'x'}
          width={15}
          height={15}
          onClick={this.handleDelete}
          />
        <Portal>
        <textarea
          ref={this.state.textEditRef}
          value={this.state.name}
          style={{
            display: this.state.textEditVisible ? 'block' : 'none',
            position: 'absolute',
            top: this.state.textEditY + 'px',
            left: this.state.textEditX + 'px',
            width: '95px'
          }}
          onChange={this.handleTextEdit}
          onKeyDown={this.handleTextareaKeyDown}
          />

        </Portal>
      </Group>
    );
  }
  }
}

export default Event;
