import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';



class Project1 extends Component {

  render() {
    return (
      <div>        
        <P5Wrapper sketch={sketch} ></P5Wrapper>
      </div>
    );
  }
}

export default Project1;