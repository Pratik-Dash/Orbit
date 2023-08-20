import React from 'react'

export const LoginPage = () => {
  return (
    <div className='login-page'>
    <div className='website-logo-login-page'>Orbit</div>
      <div className='login-input-container'>
      <div className='label-container'>
          <label htmlFor='label-conatiner'>
            Email Address
          </label>
          </div>
          <div className='input-container'>
          <input type = "email" id = "email-input" className='email-input'/>
          </div>
          <div className='label-container'>
          <label htmlFor='pass-input'>
            Password
          </label>
          </div>
          <div className='input-container'>
          <input type = "password" id = "pass-input" className='pass-input'/>
          </div>
          <div className='remember-me-container'>
            <input type= "checkbox" id='remember-me-flag'/><label htmlFor='remember-me-flag'>Remember me?</label>
          </div>

          <button className='login-button'>Login</button>
          <div className='create-new-account-text'>Create a new account</div>
      </div>
    </div>
  )
}

export default LoginPage
