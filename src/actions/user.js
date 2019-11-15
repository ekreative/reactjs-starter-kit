import { post } from '../services/api'

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export function login (username, password) {
  return dispatch => {
    dispatch({type: LOGIN})
    return post({username, password})
      .then((res) => {
        dispatch({type: LOGIN_SUCCESS, payload: res})
      })
      .catch(() => {
        dispatch({type: LOGIN_FAILURE})
      })
  }
}

export function logout () {
  return dispatch => {
    dispatch({
      type: LOGOUT
    })
  }
}
