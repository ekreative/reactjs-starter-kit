import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import reducers from '../reducers'
import sagas from '../sagas'

const config = {
  key: 'primary', // you can choose any key name
  // whitelist: ['reducer1'], // you can whitelist or blacklist reducers
  // blacklist: ['reducer2'],
  storage
}

const reducer = persistCombineReducers(config, reducers)
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(...[thunk, sagaMiddleware])
  )
)

sagaMiddleware.run(sagas)

export default store
