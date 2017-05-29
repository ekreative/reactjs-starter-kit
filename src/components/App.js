import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/images/logo.svg'
import './App.css'
// components
import ComponentAContainer from '../components/ComponentsA/ComponentAContainer'
import ComponentBContainer from '../components/ComponentsB/ComponentBContainer'
// router
import { Route, Switch } from 'react-router'
import { HashRouter, Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Route render={({staticContext}) => {
      if (staticContext) { staticContext.status = 404 }
      return (<div>
        <h1>Sorry, can’t find that.</h1>
      </div>)
    }} />
  )
}

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo'
              alt='logo' />
            <h2>Welcome to React</h2>
          </div>

          <div>
            <ul>
              <li><Link to={`/`}>AppContainer
                (Home)</Link></li>
              <li><Link to={`/componentA`}>ComponentAContainer</Link>
              </li>
              <li><Link to={`/componentB`}>ComponentBContainer</Link>
              </li>
            </ul>
          </div>

          <div>
            <Switch>
              <Route exact path='/' render={() => {
                return (
                  <div>
                    <h2>Welcome to App</h2>
                    <p className='App-intro'>
                      <code>src/components/App.js</code>
                    </p>
                    <p>
                      Value: {this.props.value}
                    </p>
                    <p>
                      <button
                        onClick={() => this.props.changeStateProp('value', 0, 'main')}>
                        Reset to "0"
                      </button>
                    </p>
                  </div>
                )
              }} />
              <Route path='/componentA'
                component={ComponentAContainer} />
              <Route path='/componentB'
                component={ComponentBContainer} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  changeStateProp: PropTypes.func.isRequired,
  myCustomPropsFunc: PropTypes.func
}

App.defaultProps = {
  value: 0,
  changeStateProp: () => {},
  myCustomPropsFunc: () => {}
}

export default App
