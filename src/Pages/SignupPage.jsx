import React, { useContext, useState,useEffect } from 'react'
import { SocialMediaContext } from '../Context/DataContext'
import { Link } from 'react-router-dom'
import OrbitIcon from "../Components/OrbitIcon"
const SignupPage = () => {
  const[firstName,setFirstName] = useState("")
  const[lastName,setLastName] = useState("")
  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const {signUpUser} = useContext(SocialMediaContext)
  const[passwordMatchStatus,setPassWordMatchStatus] = useState(null)
  
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(() => e.target.value)
    validatePassword()
  }
  const handleSignup = (e) => {
    e.preventDefault();
    if(passwordMatchStatus){

      signUpUser({email,password,firstName,lastName,username})
      setFirstName('')
      setLastName('')
      setPassword('')
      setEmail('')
      setConfirmPassword('')
      setUsername('')
    }

   
  }
  const validatePassword = () => {
    if(password === confirmPassword){
      setPassWordMatchStatus(() => true)
    }
    else{
      setPassWordMatchStatus(false)
    }
  }
  useEffect(() => {
    validatePassword()
   
  },[confirmPassword])
  return (
    <div className='login-page'>
    <div className='website-logo-login-page'><span><OrbitIcon/></span><span>rbit</span></div>
      <div className='form-group'>
      <form onSubmit={handleSignup}>
      <div className='name-group'>
      <div className='label-container'>
      
      <label htmlFor='fullname-input'>
        First Name
        <div className='input-container'>
      <input type = "text" id = "fullname-input" className='email-input' value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
      </div>
      </label>
      </div>
     
      <div className='label-container'>
      <label htmlFor='fullname-input'>
        Last Name
        <div className='input-container'>
      <input type = "text" id = "fullname-input" className='email-input' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
      </div>
      </label>
      </div>
      
      </div>

          <div className='label-container'>
      
          <label htmlFor='username-input'>
           Username
          </label>
          </div>
          <div className='input-container'>
          <input type = "text" id = "username-input" className='email-input' value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>



      <div className='label-container'>
      
          <label htmlFor='email-input'>
            Email Address
          </label>
          </div>
          <div className='input-container'>
          <input type = "email" id = "email-input" className='email-input' required value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>


          <div className='label-container'>
          <label htmlFor='pass-input'>
            Password
          </label>
          </div>
          <div className='input-container'>
          <input type = "password" id = "pass-input" className='pass-input' value={password} required onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className='label-container'>
          <label htmlFor='confirmpass-input'>
            Confirm password
            {(passwordMatchStatus !== null&& password !== '' && confirmPassword !== '') &&(<span className={passwordMatchStatus?`success-text`:`error-text`}>{passwordMatchStatus?` (Password matched)`:` (Passwords do not match)`}</span>)}
          </label>
          </div>
          <div className='input-container'>
          <input type = "password" id = "confirmpass-input" className='pass-input' value={confirmPassword} required onChange={handleConfirmPasswordChange}/>
          </div>

          <button type="submit" className="login-button">Signup</button>
          <Link to="/login" style={{textDecoration:"none"}}>
          <div className='create-new-account-text'>Already have an account</div>
          </Link>
          </form>
      </div>
    </div>
  )
}

export default SignupPage
