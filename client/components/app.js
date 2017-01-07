import React, { Component } from 'react';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Router from 'react-router';
import PicContainer from './picContainer.js';
import styles from '../../styles/styles.js';

export default class App extends Component {  
  render() {
    return (
      <div className="main">
        <div style={styles.main}>
          <h1 style={styles.title}>
            Alison's App!
          </h1> 
        </div>
        <PicContainer />
      </div>
    );
  }
};