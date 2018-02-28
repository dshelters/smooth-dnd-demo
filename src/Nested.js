import React, { Component } from 'react';
import { Container } from './react-smooth-dnd';

const itemCls = {
  height: '50px',
  border: '1px solid #ccc',
  margin: '5px',
  textAlign: 'center'
}

class Nested extends Component {
  render() {
    return (
      <div>
        <div>
          <Container groupName="1">
            <div style={itemCls}>Draggable</div>
            <div style={itemCls}>Draggable 1</div>
            <div style={itemCls}>Draggable 2</div>
            <div style={itemCls}>Draggable 3</div>
            <div style={itemCls}>Draggable 4</div>
            <Container groupName="1" style={{backgroundColor: '#abc', padding: '10px'}}>
              <div style={itemCls}>Draggable 1</div>
              <div style={itemCls}>Draggable 1 1</div>
              <div style={itemCls}>Draggable 1 2</div>
              <div style={itemCls}>Draggable 1 3</div>
              <div style={itemCls}>Draggable 1 4</div>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}

export default Nested;