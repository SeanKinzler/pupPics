import React, { Component } from 'react';  
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import styles from '../styles/styles.js'; 
import handlers from '../../utils/handlers.js';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      timerMin: 0,
      timerSec: 0, 
      timerMs: 0,
      running: false,
      timeString: '00:00:00',
    }
  }

  componentDidMount() {
    handlers.timer();
  }

  updateTime(state, that) {
    //adjust ms
    state.timerMs = state.timerMs + 1;
    if (that.state.timerMs >= 100) {
      state.timerMs = state.timerMs - 100;
      state.timerSec = state.timerSec + 1;
    }
    //adjust sec
    if (that.state.timerSec >= 60) {
      state.timerSec = state.timerSec - 60;
      state.timerMin = state.timerMin + 1;
    }
    //adjust time string
    state.timeString = '';
    if (state.timerMin < 10) {
      state.timeString = `0${state.timerMin}:`;
    } else {
      state.timerString = `${state.timerMin}:`;
    }
    if (state.timerSec < 10) {
      state.timeString = state.timeString + `0${state.timerSec}:`;
    } else {
      state.timeString = state.timeString + `${state.timerSec}:`;
    }
    if (state.timerMs < 10) {
      state.timeString = state.timeString + `0${state.timerMs}`;
    } else {
      state.timeString = state.timeString + `${state.timerMs}`;
    }
    //setstate
    that.setState(state);
  }

  start(state, that) {
    if (!state.running) {
      state.running = true;
      that.timerInterval = window.setInterval(() => {that.updateTime(that.state, that)}, 10);
      that.setState(state);
    }
  }

  stop(state, that) {
    state.running = false;
    that.timerInterval && clearInterval(that.timerInterval);
    that.timerInterval = false;
    that.setState(state);
  }

  reset(state, that) {
    that.stop(state, that);
    state.timerMs = 0;
    state.timerSec = 0;
    state.timerMin = 0;
    state.timeString = '00:00:00';
    that.setState(state);
  }

  render() {
    return(
      <div className="container1 timerContainer">
        <div id="panel-body" className="center-block text-center clockContainer" style={styles.clockContainer}>
          {this.state.timeString}
        </div>
        <button className="center-block btn btn-success" 
        style={styles.timerBtn}
        onClick={()=>{
          this.start(this.state, this);
        }}>
          Start
        </button>
        <button className="center-block btn btn-danger" 
        style={styles.timerBtn}
        onClick={()=>{
          this.stop(this.state, this);
        }}>
          Stop
        </button>
        <button className="center-block btn resetBtn" 
        style={styles.timerBtn}
        onClick={()=>{
          this.reset(this.state, this);
        }}>
          Reset
        </button>
      </div>
    );   
  }
};


