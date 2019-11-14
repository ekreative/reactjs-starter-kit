import reducer, { defaultState } from './user'
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/user'

describe('user reducer', () => {
  it('login action', () => {
    const action = {type: LOGIN}
    const state = reducer(defaultState, action)
    expect(state).not.toBe(defaultState)
    expect(state.isRequested).toBe(true)
  })
  it('login success action', () => {
    const action = {type: LOGIN_SUCCESS, payload: {name: 'test'}}
    const state = reducer(defaultState, action)
    expect(state).not.toBe(defaultState)
    expect(state.isLoggedIn).toBe(true)
    expect(state.isRequested).toBe(false)
    expect(state.isFailure).toBe(false)
    expect(state.name).toBe('test')
  })
  it('login failure action', () => {
    const action = {type: LOGIN_FAILURE}
    const state = reducer(defaultState, action)
    expect(state).not.toBe(defaultState)
    expect(state.isLoggedIn).toBe(false)
    expect(state.isRequested).toBe(false)
    expect(state.isFailure).toBe(true)
    expect(state.name).toBe('')
  })
  it('logout action', () => {
    const action = {type: LOGOUT}
    const state = reducer(defaultState, action)
    expect(state).not.toBe(defaultState)
    expect(state.isLoggedIn).toBe(false)
    expect(state.isRequested).toBe(false)
    expect(state.isFailure).toBe(false)
    expect(state.name).toBe('')
  })
})
