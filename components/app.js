import React, { Component } from 'react';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Router from 'react-router';
import PicContainer from './picContainer.js'

export default class App extends Component {  
  render() {
    return (
      <div className="main">
        <h1>
          Alison's App!
        </h1> 
        <PicContainer />
      </div>
    );
  }
};