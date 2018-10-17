import React from 'react';
import { render } from 'react-dom';
import { Stage } from 'react-konva';
import EventList from './EventList';


class Canvas extends React.Component {

  constructor(props) {
    super(props)
    this.eventListRef = React.createRef();
    this.state = {
      stageScale: 1,
      stageX: 0,
      stageY: 0
    };
  }

  handleStageDblClick = (e) => {
    console.log(e)
    // this is fine if the canvas is not panned, but wrong when there is panning
    this.eventListRef.current.addEvent(null, e.evt.layerX, e.evt.layerY);
  }

  handleWheel = e => {
  e.evt.preventDefault();

  const scaleBy = 1.1;
  const stage = e.target.getStage();
  const oldScale = stage.scaleX();
  const mousePointTo = {
    x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
    y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
  };

  const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

  stage.scale({ x: newScale, y: newScale });

  this.setState({
    stageScale: newScale,
    stageX:
      -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
    stageY:
      -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
  });
};
render() {
  return(
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onWheel={this.handleWheel}
      scaleX={this.state.stageScale}
      scaleY={this.state.stageScale}
      x={this.state.stageX}
      y={this.state.stageY}
      onDblClick={this.handleStageDblClick}
      draggable={true}
      >
        <EventList ref={this.eventListRef}/>
    </Stage>

  )
}

}

export default Canvas;
