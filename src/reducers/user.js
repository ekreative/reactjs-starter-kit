import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/user'

export const defaultState = {
  name: '',
  isLoggedIn: false,
  isRequested: false,
  isFailure: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isRequested: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
        isRequested: false,
        isFailure: false
      }
    case LOGIN_FAILURE:
      return {
        ...defaultState,
        isFailure: true
      }
    case LOGOUT:
      return {
        ...defaultState
      }
    default:
      return state
  }
}
