import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OrbitIcon from "../Components/OrbitIcon"
const LandingPage = () => {
  const navigateTo = useNavigate()
  return (
    <div className='landing-page'>
      <div className='landing-page-image-container'>
        <img src= 'https://images.unsplash.com/photo-1603349136288-95d87bd0a268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt = "landing-page" className='landing-page-image'/>
      </div>


      <div className='landing-page-actions-container'>
      <div className='website-logo-landing-page'><span><OrbitIcon/></span><span>rbit</span></div>
        <div className='action-text'>
        <span> <span>FOLLOW</span> PEOPLE AROUND THE GLOBE</span>
        <span> <span>CONNECT</span> WITH YOUR FRIENDS</span>
        <span><span>SHARE</span> WHAT YOU THINKING</span>
        </div>
        <div className='action-buttons'>
            <button className='landing-page-action-button' onClick={() => navigateTo("/sign-up")}>
                Join Now
            </button>
            <Link to = "/login" style={{ textDecoration: 'none' }}>
            <div className='already-have-account-text'>Already have an account?</div>

            </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
