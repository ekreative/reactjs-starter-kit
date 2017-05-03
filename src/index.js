import React from 'react'
import ReactDOM from 'react-dom'
// components
import App from './components/App'
// router
import { HashRouter } from 'react-router-dom'
// redux
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { autoRehydrate, persistStore } from 'redux-persist'
import { asyncSessionStorage } from 'redux-persist/storages'
// reducer
import reducers from './reducers/index'
// store
export const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...[thunk]),
    autoRehydrate()
  )
)

// sync store with storage
persistStore(store, {storage: asyncSessionStorage}, () => {

  ReactDOM.render(
    (<Provider store={store}>
      <HashRouter>

        <App/>

      </HashRouter>
    </Provider>),
    document.getElementById('root')
  )

})


