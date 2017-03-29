import React, { Component } from 'react';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Router from 'react-router';
import PicContainer from './picContainer.js';
import styles from '../../styles/styles.js';

export default class App extends Component {  
  render() {
    return (
      <div className="main" style={styles.main}>
        <nav className="navbar navbar-default" style={styles.navbar}>
          <a className="navbar-brand" style={styles.brandLink} href="#">
            <img alt="Brand" style={styles.brand} src="/src/logo.png"></img>
          </a>
        </nav>
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