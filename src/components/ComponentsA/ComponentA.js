import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ComponentA.css'

class ComponentA extends Component {
  render () {
    return (
      <div className='ComponentA'>
        <div className='ComponentA-header'>
          <h2>Welcome to ComponentA</h2>
        </div>
        <p className='ComponentA-intro'>
          <code>src/components/componentsB/ComponentA.js</code>
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

ComponentA.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

ComponentA.defaultProps = {
  value: 0,
  increment: () => {},
  decrement: () => {}
}

export default ComponentA
