import React, { Component } from 'react';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Router from 'react-router';  
import styles from '../styles/styles.js';

export default class NavBar extends Component {  
  render() {
    return (
     <nav className="navbar navbar-toggleable-md" style={styles.navbar}>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
       <a className="navbar-brand" style={styles.brandLink} href="/">
         <img alt="Brand" style={styles.brand} src="/src/logo.png"></img>
       </a>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
             <li className="nav-item">
               <a className="nav-link" href="/">Home</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="/timer">Timer</a>
             </li>
           </ul>
         </div>
     </nav>
    );
  }
};