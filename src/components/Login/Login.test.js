import React from 'react'
import { render, fireEvent, getByText, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './Login'
import { defaultState } from '../../reducers/user'

describe('Login test', () => {
  it('component rendered', () => {
    const { container } = render(<Login {...defaultState} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('component rendered with class', () => {
    const { container } = render(<Login {...defaultState} />)
    expect(container.firstChild).toHaveClass('login')
  })

  it('component rendered with form', () => {
    const { getByLabelText, getByTestId } = render(<Login {...defaultState} />)
    const email = getByLabelText('Email')
    const password = getByLabelText('Password')
    const button = getByTestId('submit')
    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('click on submit button', () => {
    const login = jest.fn()
    const { getByTestId } = render(<Login login={login} {...defaultState} />)
    const button = getByTestId('submit')
    fireEvent.click(button)
    expect(login).toHaveBeenCalledTimes(1)
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
