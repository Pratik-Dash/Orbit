import React, { useContext } from 'react'
import ProfileStats from '../Components/ProfileStats'
import { SocialMediaContext } from '../Context/DataContext'
import PostComponent from '../Components/PostComponent'

const Profile = () => {
  const {posts,logoutUser} = useContext(SocialMediaContext)
  const userObject = localStorage.getItem("currentLoggedInUser")
   const loggedInUser = JSON.parse(userObject)
  const loggedInUserPosts = posts.filter(post => post.username.toLowerCase() === loggedInUser.username.toLowerCase())

  
  return (
    <div className='profile-page'>
    
      <div className='profile-info'>
        <div className='profile-image-container'>
            <img className='profile-image' src='https://i.pinimg.com/1200x/ff/39/08/ff390870b2b9cd855a271222f4afbdc6.jpg' alt='profile'/>
        </div>
        {loggedInUser && <div className='profile-name'>{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</div>}
        <div className='profile-handle'>{loggedInUser.username}</div>
        <div className='primary-profile-btn'>
        <button className='edit-profile-btn'>Edit Profile</button>
        <button className='profile-logout-btn' onClick={logoutUser}><span class="material-symbols-rounded">logout</span></button>
        </div>
        <p className='profile-about'>
            
        </p>
        <div className='profile-stat-container-container'>
      <ProfileStats/>
     <div className='currentUser-posts'>
     {
        loggedInUserPosts && loggedInUserPosts.map(post => 
        <PostComponent postData = {post}/>
        )
      }
     </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Profile
