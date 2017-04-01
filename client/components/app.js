import React, { Component } from 'react';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Router from 'react-router';
import PicContainer from './picContainer.js';
import NavBar from './navBar.js';
import styles from '../styles/styles.js';

export default class App extends Component {  
  render() {
    return (
      <div className="appContainer" style={styles.appContainer}>
        <NavBar/>
        <h1 className="text-center text-white" style={styles.title}>
          Alison's App!
        </h1> 
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};