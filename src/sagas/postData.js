/* eslint-disable no-constant-condition */

import { takeEvery, put, call } from 'redux-saga/effects'
import { POST_DATA } from '../actions/main'
import Api from '../services/api.js'

export function * postData (action) {
  console.log(action.payload.data);
  try {
    const result = yield call(Api.post, action.payload.data)
    if (result) {
      yield put({type: 'BRED_SUCCESS'})
    } else {
      yield put({type: 'BRED_FAILED'})
    }
  } catch {
    yield put({type: 'BRED_FAILED'})
  }
}

export default function * watchPostData () {
  yield takeEvery(POST_DATA, postData)
}
