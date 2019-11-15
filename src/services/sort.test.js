/* eslint-env jest */
import sort from './sort'

const inArray = [2, 8, 12, 5]
const outArray = [2, 5, 8, 12]

describe('sort array', () => {
  it('array is sorted', () => {
    expect(sort(inArray)).toEqual(outArray)
  })
  it('array is not sorted', () => {
    expect(sort(inArray)).toEqual(inArray)
  })
})
