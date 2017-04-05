import React, { Component } from 'react';  
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import setCache from '../../utils/setCache.js';
import getRandomPic from '../../utils/getRandomPic.js';
import handlers from '../../utils/handlers.js';
import styles from '../styles/styles.js';

export default class PicContainer extends Component {  
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      picStatus: false,
      picUrl: null,
      picCache: null,
      cacheStatus: false,
    }
    setCache(this.state);
  }

  componentDidMount() {
    handlers.puppies();
  }

  render() {
    return (
      <div className="container1">
        <Button id="randButton" className="btn center-block" onClick={() => {getPic(this.state, this)}} bsSize="large">
          Click here for a new puppy!
        </Button>
        <div style={styles.imageContainer}>
          <img id="pupPic" className="img-responsive center-block" src={this.state.picUrl} 
            style= {this.state.picStatus ? styles.pupPicShow : styles.pupPicHide}/>
        </div>
      </div>
    );
  }
};

const getPic = (state, that) => {
  state.picStatus = true;
  state.picUrl = getRandomPic(state.picCache);
  that.setState(state);
};