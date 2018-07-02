import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
// store
import store from './services/store'
// components
import AppContainer from './components/AppContainer'

// persist the store
persistStore(store, null, () => {
  ReactDOM.render(
    (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    ),
    document.getElementById('root')
  )
})
