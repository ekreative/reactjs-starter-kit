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

export function incrementAsync () {
  return dispatch => {
    dispatch({
      type: INCREMENT_ASYNC
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

export function decrementAsync () {
  return dispatch => {
    dispatch({
      type: DECREMENT_ASYNC
    })
  }
}
