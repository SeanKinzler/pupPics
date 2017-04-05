import React, { Component } from 'react';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';  
import { browserHistory, Router } from 'react-router';
import styles from '../styles/styles.js';
import handlers from '../../utils/handlers.js';

export default class NavBar extends Component {  
  render() {
    return (
    <nav className="navbar navbar-default" style={styles.navbar}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navMain" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" style={styles.brandLink} href="/">
            <img alt="Brand" style={styles.brand} src="/src/logo.png"></img>
          </a>
        </div>
        <div id="navMain" className="collapse navbar-collapse">
          <ul className="navbar-nav nav" style={styles.navUl}>
            <li id="puppiesNav"><a onClick={() => {browserHistory.push('/')}} >Puppies</a></li>
            <li id="timerNav"><a onClick={() => {browserHistory.push('/timer')}} >Timer</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
};