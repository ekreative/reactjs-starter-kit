import { all } from 'redux-saga/effects'

import increment from './increment'
import decrement from './decrement'

export default function * rootSaga () {
  yield all([
    increment(),
    decrement()
  ])
}
