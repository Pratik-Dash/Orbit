import React, { useContext } from 'react'
import ProfileStats from '../Components/ProfileStats'
import { SocialMediaContext } from '../Context/DataContext'
import PostComponent from '../Components/PostComponent'
import { useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
const ThirdPersonProfile = () => {
  const {posts,users,isUserLoading,loggedInUser,followPeople,unFollowPeople} = useContext(SocialMediaContext)
  const {userId} = useParams()
  const selectedUser = users && users.find(user => user._id === userId)
  const selectedUserPosts = selectedUser && posts.filter(post => post.username.toLowerCase() === selectedUser.username.toLowerCase())
  const following = loggedInUser && loggedInUser.following.find(following => following._id === selectedUser._id)
  
  return (
    <div className='profile-page'>
    
      {isUserLoading?<div className='loader'><InfinitySpin
        visible={true}
        width="200"
        color="#B14AED"
        ariaLabel="infinity-spin-loading"
      /></div>:<div className='profile-info'>
        <div className='profile-image-container'>
            <img className='profile-image' src={selectedUser && selectedUser.profilePic} alt='profile'/>
        </div>
        {selectedUser && <div className='profile-name'>{`${selectedUser.firstName} ${selectedUser.lastName}`}</div>}
        <div className='profile-handle'>{selectedUser &&selectedUser.username}</div>
        <div className='primary-profile-btn'>
        <button className='follow-profile-btn' onClick={() => following?unFollowPeople(selectedUser._id):followPeople(selectedUser._id)}>{following?`Unfollow`:`Follow`}</button>
        
        </div>
        <p className='profile-about'>
            
        </p>
        <div className='profile-stat-container-container'>
      <ProfileStats selectedUserId = {selectedUser &&selectedUser._id}/>
     <div className='currentUser-posts'>
     <span className='posts-header'><h2>{`${selectedUser &&selectedUser.firstName}'s posts`}</h2></span>
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
