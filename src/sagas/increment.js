/* eslint-disable no-constant-condition */

import { put, takeEvery, delay } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_ASYNC } from '../actions/main'

export function * incrementAsync () {
  yield delay(2000)
  yield put({ type: INCREMENT })
}

export default function * increment () {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}
