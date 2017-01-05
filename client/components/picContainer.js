import React, { Component } from 'react';  
import { Link, Button } from 'react-router';
import Pic from './pic.js';
import setCache from '../../utils/setCache.js';
import getRandomPic from '../../utils/getRandomPic.js';

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
      <div className="main" >
        <div onClick={() => {getPic(this.state, this)}}>
          Click here for a new puppy!
        </div>
        <img id="pupPic" src={this.state.picUrl} style= {{
          'maxWidth': window.innerWidth * .5 + 'px',
          'maxHeight': window.innerHeight * .5 + 'px',
        }}/>
      </div>
    );
  }
};

const getPic = (state, that) => {
  state.picStatus = true;
  state.picUrl = getRandomPic(state.picCache);
  that.setState(state);
}