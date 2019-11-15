import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { login, logout, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './user'
import { defaultState } from '../reducers/user'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore(defaultState)

jest.mock('../services/api', () => ({
  post: jest.fn(({email, password}) => {
    if (email === '' || password === '') {
      return Promise.reject()
    } else {
      return Promise.resolve({
        name: 'Test'
      })
    }
  })
}))

describe('user actions', () => {
  afterEach(() => {
    store.clearActions()
  })
  it('logout action', () => {
    store.dispatch(logout())
    const actions = store.getActions()
    const expectActions = [
      {type: LOGOUT}
    ]
    expect(actions).toEqual(expectActions)
  })
  it('login success action', () => {
    return store.dispatch(login('email@gmail.com', 'Password1234')).then(() => {
      const actions = store.getActions()
      const expectActions = [
        {type: LOGIN},
        {type: LOGIN_SUCCESS, payload: {name: 'Test'}}
      ]
      expect(actions).toEqual(expectActions)
    })
  })
  it('login failure action', () => {
    return store.dispatch(login('', '')).then((data) => {
      const actions = store.getActions()
      const expectedActions = [
        { type: LOGIN },
        { type: LOGIN_FAILURE }
      ]
      expect(actions).toEqual(expectedActions)
    })

  })
})
