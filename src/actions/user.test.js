/* eslint-env jest */
// import axios from 'axios'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { login, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './user'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})

jest.mock('../services/sort', () => jest.fn(() => [2, 9, 10, 12]))

describe('login', () => {
  afterEach(() => {
    store.clearActions()
  })

  it('failure response', () => {
    jest.mock('../services/api', () => ({
      post: jest.fn(() => Promise.reject({}))
    }))
    store.dispatch(login('test@test.com', 'Testpass1234')).then(() => {
      const actions = store.getActions()
      const expectedActions = [
        { type: LOGIN },
        { type: LOGIN_FAILURE }
      ]
      expect(actions).toEqual(expectedActions)
    })
  })

  it('success response', () => {
    jest.mock('../services/api', () => ({
      post: jest.fn(() => Promise.resolve({
        name: 'Fred Cox',
        categories: [2, 12, 10, 9]
      }))
    }))
    store.dispatch(login('test@test.com', 'Testpass1234')).then(() => {
      const actions = store.getActions()
      const expectedResponse = {
        name: 'Fred Cox',
        categories: [2, 9, 10, 12]}
      const expectedActions = [
        { type: LOGIN },
        { type: LOGIN_SUCCESS, payload: expectedResponse }
      ]
      expect(actions).toEqual(expectedActions)
    })
  })

  // it('success response OLD', () => {
  // jest.mock('axios')
  //   axios.post.mockResolvedValue({
  //     data: defaultResponse
  //   })
  //   const dispatch = jest.fn()
  //   const calls = [
  //     [{ type: LOGIN }],
  //     [{ type: LOGIN_SUCCESS, payload: defaultResponse }]
  //   ]
  //   const cb = login({email: 'test', password: 'rest'})
  //   cb(dispatch).then(data => {
  //     expect(data).toEqual(defaultResponse)
  //     expect(dispatch.mock.calls.length).toBe(2)
  //     expect(dispatch.mock.calls).toEqual(calls)
  //   })
  // })
})
