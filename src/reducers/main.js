import update from 'immutability-helper'
import { CHANGE_STATE_PROP } from '../actions'
import { DECREMENT, INCREMENT } from '../actions/main'

const REDUCER = 'MAIN'
const defaultState = {
  value: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    case REDUCER + CHANGE_STATE_PROP:
      return update(state, {
        [action.state.prop]: {$set: action.state.value}
      })
    default:
      return state
  }
}
