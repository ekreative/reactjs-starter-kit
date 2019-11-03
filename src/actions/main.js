export const INCREMENT = 'INCREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const DECREMENT = 'DECREMENT'
export const DECREMENT_ASYNC = 'DECREMENT_ASYNC'

export function increment () {
  return dispatch => {
    dispatch({
      type: INCREMENT
    })
  }
}

export function decrement () {
  return dispatch => {
    dispatch({
      type: DECREMENT
    })
  }
}
