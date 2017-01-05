import React, { Component } from 'react';  
import { Link, Button } from 'react-router';
import Pic from './pic.js';
import setCache from '../utils/setCache.js';
import getRandomPic from '../utils/getRandomPic.js';

export default class PicContainer extends Component {  
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      picStatus: false,
      picUrl: null,
      picCache: null,
    }
    setCache(this.state);
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
        <div onClick={() => {getPic(this.state, this)}}>
          Button
        </div>
        <img src={this.state.picUrl}/>
      </div>
    );
  }
};

const getPic = (state, that) => {
  console.log('this', that)
  console.log('pic state: ', state)
  state.picStatus = true;
  state.picUrl = getRandomPic(state.picCache);
  that.setState(state);
}