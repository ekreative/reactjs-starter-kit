import API from '../services/api'
import sort from '../services/sort'
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export function login (email, password) {
  return async dispatch => {
    dispatch({ type: LOGIN })
    try {
      let res = await API.post({ email, password })
      res.categories = sort(res.categories)
      dispatch({ type: LOGIN_SUCCESS, payload: res })
      return res
    } catch (err) {
      dispatch({ type: LOGIN_FAILURE })
    }
  }
}
