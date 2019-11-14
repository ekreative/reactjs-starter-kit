export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export function login () {
  return dispatch => {
    dispatch({
      type: LOGIN
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
