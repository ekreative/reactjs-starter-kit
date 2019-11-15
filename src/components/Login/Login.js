import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { isEmailValid, isPasswordValid} from '../../services/validation'

const defaultError = {status: false, message: ''}

const Login = ({login, name, isRequesting, isFailure, isLoggedIn}) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(defaultError)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(defaultError)

  const onSubmit = useCallback(() => {
    setEmailError(isEmailValid(email) ?  {...defaultError} : setEmailError({status: true, message: 'Email is not valid'}));
    setPasswordError(isPasswordValid(email) ? {...defaultError} : {status: true, message: 'Password is not valid'})
    if (!emailError.status && !passwordError.status) {
      login(email, password)
    }
  }, [email, password])

  return (
    <div className='login'>
      <div className='login-header'>
        <h2>Welcome to login</h2>
      </div>
      <p className='login-intro'>
        <code>src/components/Login/Login.js</code>
      </p>
      {!isLoggedIn && (
        <div className='login-form'>
          <div>
            <label htmlFor='email'>Email</label>
            <input id='email' type='text' name='email' value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          {isFailure && (<div className='error'>Something went wrong</div>)}
          <div>
            <button data-testid='submit' onClick={onSubmit}>Submit</button>
          </div>
        </div>
      )}
      {isLoggedIn && (
        <div data-testid='user-data' className='user-data'>
          <div>
            <label htmlFor='name'>Name</label>
            <div id='name'>{name}</div>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <div id='email'>{email}</div>
          </div>
        </div>
      )}
      {isRequesting && (<div className='spinner'>Loading...</div>)}
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func,
  name: PropTypes.string,
  isRequesting: PropTypes.bool,
  isFailure: PropTypes.bool,
  isLoggedIn: PropTypes.bool
}

Login.defaultProps = {
  login: () => {},
  name: '',
  isRequesting: false,
  isFailure: false,
  isLoggedIn: false
}

export default Login
