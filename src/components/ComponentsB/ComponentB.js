import React, { Component } from 'react'
import './ComponentB.css'

class ComponentB extends Component {
  render () {
    return (
      <div className='ComponentB'>
        <div className='ComponentB-header'>
          <h2>Welcome to ComponentB</h2>
        </div>
        <p className='ComponentB-intro'>
          To get started, edit <code>src/ComponentB.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default ComponentB
