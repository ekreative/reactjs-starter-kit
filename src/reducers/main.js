import {CHANGE_STATE_PROP} from '../actions'

const REDUCER = 'MAIN'
const defaultState = {
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case REDUCER + CHANGE_STATE_PROP:
      state[action.state.prop] = action.state.value
      return {
        ...state
      }
    default:
      return state
  }
}
