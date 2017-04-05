import React, { Component } from 'react';
import { Link, Button } from 'react-router';
import handlers from '../../utils/handlers.js';

export default class Pic extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      picStatus: false,
    }
    

  }

  render () {
    return (
      <div>
        <h1>
          Pic
        </h1>
      </div>
      )
  }
} 