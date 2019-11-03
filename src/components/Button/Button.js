import React from 'react'

const Button = ({children = 'Submit', callback = () => {}, color = 'blue'}) => {
  return (
    <button data-testid='button' className={`button-${color}`} onClick={callback}>{children}</button>
  )
}

export default Button
