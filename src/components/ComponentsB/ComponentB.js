import React, { Component } from 'react';
import logo from '../../logo.svg';
import './ComponentB.css';

class ComponentB extends Component {
  render() {
    return (
      <div className="ComponentB">
        <div className="ComponentB-header">
          <img src={logo} className="ComponentB-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="ComponentB-intro">
          To get started, edit <code>src/ComponentB.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default ComponentB;
