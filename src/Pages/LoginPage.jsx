import React, { useContext,useState } from 'react'
import { SocialMediaContext } from '../Context/DataContext'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  const {loginUser,errorMessage} = useContext(SocialMediaContext)
  const[userName,setUserName] = useState('')
  const[password,setPassword] = useState('')

  const loginCurrentUser = () => {
    try{
      loginUser(userName,password)
    }
    catch(error){
      return error
    }
    
  }
  const guestLogin = () => {
    try{
      loginUser("adarshbalika","adarshBalika123")
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className='login-page'>
    <div className='website-logo-login-page'>Orbit</div>
      <div className='login-input-container'>
      <div className='label-container'>
          <label htmlFor='username-input'>
            Username
          </label>
          </div>
          <div className='input-container'>
          <input type = "text" id = "username-input" className='email-input' onChange={(e) => setUserName(e.target.value)} value={userName}/>
          </div>
          <div className='label-container'>
          <label htmlFor='pass-input'>
            Password
          </label>
          </div>
          <div className='input-container'>
          <input type = "password" id = "pass-input" className='pass-input' onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <div className='remember-me-container'>
            <input type= "checkbox" id='remember-me-flag'/><label htmlFor='remember-me-flag'>Remember me?</label>
          </div>

          <button className='login-button' onClick={loginCurrentUser}>Login</button>
          <button className='guest-login-button' onClick={guestLogin}>Guest Login</button>
          {errorMessage && <div style={{color:"red"}}>Invalid Credentials</div>}
          <Link to = "/sign-up" style={{textDecoration:"none"}}>
          <div className='create-new-account-text'>Create a new account</div>
          </Link>
      </div>
    </div>
  )
}

export default LoginPage
