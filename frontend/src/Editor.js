import React, { Component } from 'react';
import { render } from 'react-dom';
import { Rect, Text, Group } from 'react-konva';
import axios from 'axios';
import Portal from './Portal';

class Editor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: null,
      visible: true,
      x: 0,
      y: 0,
      ref: React.createRef()
    }
  }
  // show the editor for a given event
  show = (event) => {
    this.setState({
      visible: true,
      x: event.state.textEditX,
      y: event.state.textEditY,
      text: event.state.name,
      handleTextEdit: props.handleTextEdit
    });
  }

  hide = () => {
    this.setState({
      visible: false
    })
  }

  handleTextareaKeyDown = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      this.setState({
        visible: false
      });
    }
  };

  componentDidUpdate = () => {
    this.state.ref.current.focus();
  }

  render() {
    return(
      <Portal >
      <textarea
        ref={this.state.ref}
        value={this.state.text}
        style={{
          display: this.state.visible ? 'block' : 'none',
          position: 'absolute',
          top: this.state.y + 'px',
          left: this.state.x + 'px',
          width: '100px'
        }}
        onChange={this.state.handleTextEdit}
        onKeyDown={this.handleTextareaKeyDown}
        />
      </Portal>

    )
  }
}
export default Editor;
