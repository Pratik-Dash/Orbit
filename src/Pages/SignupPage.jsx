import React, { useContext } from 'react'
import { SocialMediaContext } from '../Context/DataContext'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  const {users} = useContext(SocialMediaContext)
  console.log(users)
  return (
    <div className='login-page'>
    <div className='website-logo-login-page'>Orbit</div>
      <div className='login-input-container'>
      <div className='label-container'>
      
          <label htmlFor='fullname-input'>
            Full Name
          </label>
          </div>
          <div className='input-container'>
          <input type = "email" id = "fullname-input" className='email-input'/>
          </div>


          <div className='label-container'>
      
          <label htmlFor='username-input'>
           Username
          </label>
          </div>
          <div className='input-container'>
          <input type = "email" id = "username-input" className='email-input'/>
          </div>



      <div className='label-container'>
      
          <label htmlFor='email-input'>
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

          <div className='label-container'>
          <label htmlFor='confirmpass-input'>
            Confirm password
          </label>
          </div>
          <div className='input-container'>
          <input type = "password" id = "confirmpass-input" className='pass-input'/>
          </div>


          <div className='remember-me-container'>
            <input type= "checkbox" id='remember-me-flag'/><label htmlFor='remember-me-flag'>I accept all terms and conditions.</label>
          </div>

          <button className='login-button'>Sign up</button>
          <Link to="/login" style={{textDecoration:"none"}}>
          <div className='create-new-account-text'>Already have an account</div>
          </Link>
          
      </div>
    </div>
  )
}

export default SignupPage
