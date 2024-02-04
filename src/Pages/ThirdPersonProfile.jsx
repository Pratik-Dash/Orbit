import React, { useContext, useState } from 'react'
import ProfileStats from '../Components/ProfileStats'
import { SocialMediaContext } from '../Context/DataContext'
import PostComponent from '../Components/PostComponent'
import { useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
const ThirdPersonProfile = () => {
  const {posts,users,isUserLoading} = useContext(SocialMediaContext)
  const {userId} = useParams()
  const selectedUser = users && users.find(user => user._id === userId)
  const selectedUserPosts = selectedUser && posts.filter(post => post.username.toLowerCase() === selectedUser.username.toLowerCase())

  
  return (
    <div className='profile-page'>
    
      {isUserLoading?<div className='loader'><InfinitySpin
        visible={true}
        width="200"
        color="#B14AED"
        ariaLabel="infinity-spin-loading"
      /></div>:<div className='profile-info'>
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
      </div>}
      
      
    </div>
  )
}

export default ThirdPersonProfile
