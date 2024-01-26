import React, { useContext } from 'react'
import ProfileStats from '../Components/ProfileStats'
import { SocialMediaContext } from '../Context/DataContext'
import PostComponent from '../Components/PostComponent'
import { useParams } from 'react-router-dom'

const ThirdPersonProfile = () => {
  const {posts,users} = useContext(SocialMediaContext)
  const {userId} = useParams()
  const selectedUser = users.find(user => user._id === userId)
  const selectedUserPosts = posts.filter(post => post.username.toLowerCase() === selectedUser.username.toLowerCase())

  
  return (
    <div className='profile-page'>
    
      <div className='profile-info'>
        <div className='profile-image-container'>
            <img className='profile-image' src={selectedUser.profilePic} alt='profile'/>
        </div>
        {selectedUser && <div className='profile-name'>{`${selectedUser.firstName} ${selectedUser.lastName}`}</div>}
        <div className='profile-handle'>{selectedUser.username}</div>
        <div className='primary-profile-btn'>
        <button className='follow-profile-btn'>Follow</button>
        
        </div>
        <p className='profile-about'>
            
        </p>
        <div className='profile-stat-container-container'>
      <ProfileStats/>
     <div className='currentUser-posts'>
     <span className='posts-header'><h2>{`${selectedUser.firstName}'s posts`}</h2></span>
     {
        selectedUserPosts && selectedUserPosts.map(post => 
        <PostComponent postData = {post}/>
        )
      }
     </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default ThirdPersonProfile
