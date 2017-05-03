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
      state[action.state.prop] = action.state.value
      return {
        ...state
      }
    default:
      return state
  }
}
