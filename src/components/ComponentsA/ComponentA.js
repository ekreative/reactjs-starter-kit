import React, { Component } from 'react'
import './ComponentA.css'

class ComponentA extends Component {
  render () {
    return (
      <div className='ComponentA'>
        <div className='ComponentA-header'>
          <h2>Welcome to ComponentA</h2>
        </div>
        <p className='ComponentA-intro'>
          To get started, edit <code>src/ComponentA.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default ComponentA
