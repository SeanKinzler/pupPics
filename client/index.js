import React, { Component } from 'react';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Router from 'react-router';  
import { render } from 'react-dom';

import App from './components/app.js';

render((
  <App />
  ), document.getElementById('App'));
