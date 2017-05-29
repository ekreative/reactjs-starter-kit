import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ComponentB.css'

class ComponentB extends Component {
  render () {
    return (
      <div className='ComponentB'>
        <div className='ComponentB-header'>
          <h2>Welcome to ComponentB</h2>
        </div>
        <p className='ComponentB-intro'>
          <code>src/components/componentsA/ComponentB.js</code>
        </p>
        <p className='ComponentA-intro'>
          Value: {this.props.value}
        </p>
        <p className='ComponentA-intro'>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </p>
      </div>
    )
  }
}

ComponentB.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

ComponentB.defaultProps = {
  value: 0,
  increment: () => {},
  decrement: () => {}
}

export default ComponentB
