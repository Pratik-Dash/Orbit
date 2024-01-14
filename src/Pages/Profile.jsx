import React, { useContext } from 'react'
import ProfileStats from '../Components/ProfileStats'
import { SocialMediaContext } from '../Context/DataContext'
import Sidebar from '../Components/Sidebar'
import FindAndFollowPeople from '../Components/FindAndFollowPeople'

const Profile = () => {
  const {posts} = useContext(SocialMediaContext)
  
  return (
    <div className='profile-page'>
    
      <div className='profile-info'>
        <div className='profile-image-container'>
            <img className='profile-image' src='https://i.pinimg.com/1200x/ff/39/08/ff390870b2b9cd855a271222f4afbdc6.jpg' alt='profile'/>
        </div>
        <div className='profile-name'>{`Pratik Dash`}</div>
        <div className='profile-handle'>{`@pratikdash`}</div>
        <div className='primary-profile-btn'><button className='edit-profile-btn'>Edit Profile</button></div>
        <p className='profile-about'>
            QA Enginner | front-end developer. Exploring new domains in tech everyday.
        </p>
        <div className='profile-stat-container-container'>
      <ProfileStats/>
      </div>
      </div>
      
      
    </div>
  )
}

export default Profile
