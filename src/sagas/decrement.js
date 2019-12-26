/* eslint-disable no-constant-condition */

import { takeEvery, put, delay } from 'redux-saga/effects'
import { DECREMENT, DECREMENT_ASYNC } from '../actions/main'

export function * decrementAsync () {
  yield delay(2000)
  yield put({ type: DECREMENT })
}

export default function * decrement () {
  yield takeEvery(DECREMENT_ASYNC, decrementAsync)
}
