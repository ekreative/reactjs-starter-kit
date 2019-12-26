import { all } from 'redux-saga/effects'

import watchIncrement from './increment'
import watchDecrement from './decrement'
import watchPostData from './postData'

export default function * rootSaga () {
  yield all([
    watchIncrement(),
    watchDecrement(),
    watchPostData()
  ])
}
