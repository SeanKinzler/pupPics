import React, { Component } from 'react';  
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import styles from '../styles/styles.js';


export default class Timer extends Component { 
  render() {
    return(
      <div className="container1 timerContainer">
        <button className="btn btn-success">Start</button>
        <button className="btn btn-danger">Stop</button>
      </div>
    );
    
  }
}