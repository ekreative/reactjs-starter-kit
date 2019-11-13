/* eslint-env jest */
import React from 'react'
import { render, getByLabelText, getByTestId, getByText, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './Login'
import { defaultState } from '../../reducers/user'

describe('<Login /> tests', () => {
  it('should render as default login form', () => {
    const {container} = render(<Login {...defaultState}/>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with class', () => {
    const {container} = render(<Login {...defaultState}/>)
    expect(container.firstChild).toHaveClass(`login`)
  })

  it('should two inputs and button', () => {
    const {container} = render(<Login {...defaultState}/>)
    const username = getByLabelText(container, 'Email')
    const password = getByLabelText(container, 'Password')
    const button = getByTestId(container, 'button')
    expect(username).toHaveAttribute(`name`, 'email')
    expect(username).toHaveAttribute(`id`, 'email')
    expect(password).toHaveAttribute(`name`, 'password')
    expect(password).toHaveAttribute(`id`, 'password')
    expect(button).toBeInTheDocument()
  })

  it('should call method on button click', () => {
    const submit = jest.fn()
    const {container} = render(<Login login={submit} />)
    const button = getByTestId(container, 'button')
    fireEvent.click(button)
    expect(submit).toHaveBeenCalledTimes(1)
  })

  it('should render props during login', () => {
    let props = {
      ...defaultState,
      isRequesting: true
    }
    const {container} = render(<Login {...props} />)
    const spinner = getByText(container, 'Loading...')
    expect(spinner).toBeInTheDocument()
  })

  it('should render props after login success', () => {
    let props = {
      ...defaultState,
      name: 'test',
      isLoggedIn: true
    }
    const {container} = render(<Login {...props} />)
    const section = getByTestId(container, 'user-data')
    expect(section).toBeInTheDocument()
    const name = getByText(container, 'test')
    expect(name).toBeInTheDocument()
  })

  it('should render props after login failure', () => {
    let props = {
      ...defaultState,
      isFailure: true
    }
    const {container} = render(<Login {...props} />)
    const error = getByText(container, 'Something went wrong')
    expect(error).toBeInTheDocument()
  })
})
