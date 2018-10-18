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
  // show the editor for a given event and push the text events back to its own handler
  show = (event) => {
    this.setState({
      visible: true,
      x: event.state.textEditX,
      y: event.state.textEditY,
      text: event.state.name,
      handleTextEdit: event.handleTextEdit
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

  handleTextEdit = (e) => {
    this.setState({text: e.target.value});
    this.state.handleTextEdit(e);
  }

  componentDidUpdate = () => {
    this.state.ref.current.focus();
    console.log('editor updated')
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
        onChange={this.handleTextEdit}
        onKeyDown={this.handleTextareaKeyDown}
        />
      </Portal>

    )
  }
}
export default Editor;
