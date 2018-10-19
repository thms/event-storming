// Base class for a sticky f different resource
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Rect, Text, Group } from 'react-konva';
import axios from 'axios';
import Portal from './Portal';

class Sticky extends Component {

  constructor(props) {
    super(props)
    this.state = {
      x: props.event.xpos,
      y: props.event.ypos,
      name: props.event.name,
      width: 100,
      height: 100,
      id: props.event._id,
      textEditVisible: false,
      textEditX: 0,
      textEditY: 0,
      textEditorRef: props.textEditorRef,
      deleteCallback: props.deleteCallback
    }
  }
  // at the end of dragging, update server side with the new coordinates
  //
  handleDragEnd = e => {
    axios.put(`${this.state.baseUrl}${this.state.id}`,
    {
      xpos: this.state.x + e.evt.dragEndNode.attrs.x,
      ypos: this.state.y + e.evt.dragEndNode.attrs.y
    },
    { crossdomain: true }
  )}

  handleDelete = e => {
    this.state.deleteCallback(this.state.id)
  };

  handleTextDblClick = e => {
    // prevent double click from triggering
    e.cancelBubble=true;
    let stage = e.target.getStage();
    const absPos = e.target.getAbsolutePosition();
    console.log(absPos)
    this.setState({
      textEditVisible: true,
      textEditX: absPos.x + stage.content.offsetLeft,
      textEditY: absPos.y + stage.content.offsetTop + 35
    });
    this.state.textEditorRef.current.show(this)
  };

handleTextEdit = e => {
  axios.put(`${this.state.baseUrl}${this.state.id}`,
    {
      name: e.target.value,
    },
    { crossdomain: true }
  )
  this.setState({
    name: e.target.value
  });
};


  render() {
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
      </Group>
    );
  }
}

export default Sticky;
