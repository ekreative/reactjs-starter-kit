import { put, delay } from 'redux-saga/effects'
import { DECREMENT, INCREMENT } from '../actions/main'
import { incrementAsync } from './increment'
import { decrementAsync } from './decrement'

describe('Saga test', () => {
  it('incrementAsync generator test', () => {
    const gen = incrementAsync()

    // delay
    expect(gen.next().value).toEqual(delay(2000))
    // dispatch action
    expect(gen.next().value).toEqual(put({ type: INCREMENT }))
    // done
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })

  it('decrementAsync generator test', () => {
    const gen = decrementAsync()

    // delay
    expect(gen.next().value).toEqual(delay(2000))
    // dispatch action
    expect(gen.next().value).toEqual(put({ type: DECREMENT }))
    // done
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})
