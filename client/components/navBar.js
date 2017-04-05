import React, { Component } from 'react';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Router from 'react-router';  
import styles from '../styles/styles.js';

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
          <ul className="navbar-nav nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/timer">Timer</a></li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
};