/* eslint-env jest */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'

describe('<Button /> tests', () => {
  it('should render as default button', () => {
    const color = 'red'
    const children = 'test'

    const { container } = render(<Button color={`${color}`} callback={() => {}}>{children}</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('button should has class', () => {
    const color = 'red'

    const { container } = render(<Button color={`${color}`} callback={() => {}} />)
    expect(container.firstChild).toHaveClass(`button-${color}`)
  })

  it('button should has children', () => {
    const color = 'red'
    const children = 'test'

    const { getByText } = render(<Button color={`${color}`} callback={() => {}}>{children}</Button>)
    getByText(children)
  })

  it('button should call callback on click', () => {
    const color = 'red'
    const children = 'test'
    const content = 'button'
    const onClick = jest.fn()

    const { getByTestId } = render(<Button color={`${color}`} callback={onClick}>{children}</Button>)
    fireEvent.click(getByTestId(content))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
