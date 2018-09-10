import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import reducers from '../reducers'

const config = {
  key: 'primary', // you can choose any key name
  // whitelist: ['reducer1'], // you can whitelist or blacklist reducers
  // blacklist: ['reducer2'],
  storage
}

let reducer = persistCombineReducers(config, reducers)

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(...[thunk])
  )
)

export default store
