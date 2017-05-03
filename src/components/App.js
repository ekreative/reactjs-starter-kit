import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import './App.css'
import ComponentA from '../components/ComponentsA/ComponentA'
import ComponentB from '../components/ComponentsB/ComponentB'
import { Route, Switch } from 'react-router'

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
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/componentA`}>ComponentA</Link></li>
            <li><Link to={`/componentB`}>ComponentB</Link></li>
          </ul>
        </div>

        <div>
          <Switch>
            <Route exact path='/' render={() => null} />
            <Route path='/componentA' component={ComponentA} />
            <Route path='/componentB' component={ComponentB} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
