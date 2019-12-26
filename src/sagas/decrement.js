/* eslint-disable no-constant-condition */

import { takeLatest, put, delay } from 'redux-saga/effects'
import { DECREMENT, DECREMENT_ASYNC } from '../actions/main'

export function * decrementAsync () {
  yield delay(2000)
  yield put({ type: DECREMENT })
}

export default function * watchDecrement () {
  yield takeLatest(DECREMENT_ASYNC, decrementAsync)
}
