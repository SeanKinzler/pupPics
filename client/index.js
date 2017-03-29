import React, { Component } from 'react';  
import { browserHistory, DefaultRoute, IndexRoute, Link, Route, RouteHandler, Router} from 'react-router';
import { render } from 'react-dom';
import App from './components/app.js';
import Timer from './components/Timer.js';
import PicContainer from './components/picContainer.js'
render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={PicContainer}/>
      <Route path='timer' component={Timer} />
      <Route path='main' component= {PicContainer} />
    </Route>
  </Router>
  ), document.getElementById('App'));
