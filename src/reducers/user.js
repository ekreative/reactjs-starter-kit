import update from 'immutability-helper'
import { CHANGE_STATE_PROP } from '../actions'
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from '../actions/user'

const REDUCER = 'USER'
export const defaultState = {
  name: '',
  categories: [],
  isRequesting: false,
  isFailure: false,
  isLoggedIn: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isRequesting: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isRequesting: false,
        isLoggedIn: true
      }
    case LOGIN_FAILURE:
      return {
        ...defaultState,
        isRequesting: false,
        isFailure: true
      }
    case REDUCER + CHANGE_STATE_PROP:
      return update(state, {
        [action.state.prop]: {$set: action.state.value}
      })
    default:
      return state
  }
}
