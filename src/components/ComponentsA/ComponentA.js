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
          <code>src/components/componentsA/ComponentA.js</code>
        </p>
        <p className='ComponentA-intro'>
          Value: {this.props.value}
        </p>
        <p className='ComponentA-intro'>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </p>
        <p className='ComponentA-intro'>
          <button onClick={this.props.incrementAsync}>Increment Async</button>
          <button onClick={this.props.decrementAsync}>Decrement Async</button>
        </p>
        <p className='ComponentA-intro'>
          <button onClick={this.props.postData.bind(this, {data: 'Hello'})}>Post Data</button>
        </p>
      </div>
    )
  }
}

ComponentA.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired
}

ComponentA.defaultProps = {
  value: 0,
  increment: () => {},
  incrementAsync: () => {},
  decrement: () => {},
  decrementAsync: () => {}
}

export default ComponentA
