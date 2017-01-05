import React, { Component } from 'react';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Router from 'react-router';  

class NavBar extends Component {  
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
      </div>
    );
  }
};