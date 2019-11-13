import React from 'react'

const Button = ({children = 'Submit', onClick = () => {}, color = 'blue'}) => {
  return (
    <button data-testid='button' className={`button-${color}`} onClick={onClick}>{children}</button>
  )
}

export default Button
