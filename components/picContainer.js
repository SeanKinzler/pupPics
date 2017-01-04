import React, { Component } from 'react';  
import { Link, Button } from 'react-router';
import Pic from './pic.js';
// import randomPuppy from 'random-puppy';
// const randomPuppy = require('random-puppy');

export default class PicContainer extends Component {  
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      picStatus: false,
      picUrl: null,
    }
  }
  getPic () {
    randomPuppy().then(url => {
      this.state.picStatus = true;
      this.state.picUrl = url;
    })
  }
  render() {
    return (
      <div className="main">
        <h1>
          Container
        </h1> 
        <p>
          {this.state.picUrl}
        </p>
      </div>
    );
  }
};