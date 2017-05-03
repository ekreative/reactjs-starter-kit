import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'

// components
import ComponentAContainer from '../components/ComponentsA/ComponentAContainer'
import ComponentBContainer from '../components/ComponentsB/ComponentBContainer'

// router
import { Route, Switch } from 'react-router'
import { HashRouter, Link } from 'react-router-dom'

class App extends Component {
  render () {
    const Status = ({code, children}) => (
      <Route render={({staticContext}) => {
        if (staticContext) { staticContext.status = code }
        return children
      }} />
    )

    const NotFound = () => (
      <Status code={404}>
        <div>
          <h1>Sorry, can’t find that.</h1>
        </div>
      </Status>
    )

    return (
      <HashRouter>
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to React</h2>
          </div>

          <div>
            <ul>
              <li><Link to={`/`}>AppContainer (Home)</Link></li>
              <li><Link to={`/componentA`}>ComponentAContainer</Link></li>
              <li><Link to={`/componentB`}>ComponentBContainer</Link></li>
            </ul>
          </div>

          <div>
            <Switch>
              <Route exact path='/' render={() => {
                return (
                  <div>
                    <h2>Welcome to App</h2>
                    <p className='App-intro'><code>src/components/App.js</code></p>
                    <p>Value: {this.props.value}</p>
                  </div>
                )
              }} />
              <Route path='/componentA' component={ComponentAContainer} />
              <Route path='/componentB' component={ComponentBContainer} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App
