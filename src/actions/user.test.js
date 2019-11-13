/* eslint-env jest */
import axios from 'axios'
import { LOGIN, login, LOGIN_SUCCESS } from './user'

jest.mock('axios')

const defaultResponse = {
  name: 'Fred Cox',
  categories: [2, 12, 10, 9]
}

describe('login', () => {
  it('success response', () => {
    axios.post.mockResolvedValue({
      data: defaultResponse
    })
    const dispatch = jest.fn()
    const calls = [
      [{ type: LOGIN }],
      [{ type: LOGIN_SUCCESS, payload: defaultResponse }]
    ]
    const cb = login({email: 'test', password: 'rest'})
    cb(dispatch).then(data => {
      expect(data).toEqual(defaultResponse)
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls).toEqual(calls)
    })

  })
})
