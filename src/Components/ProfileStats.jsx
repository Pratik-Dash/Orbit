import React, { useContext } from 'react'
import { SocialMediaContext } from '../Context/DataContext'
import { InfinitySpin } from 'react-loader-spinner'
const ProfileStats = ({selectedUserId}) => {
  const {posts,users,isUserLoading} = useContext(SocialMediaContext)
   const loggedInUser = JSON.parse(localStorage.getItem("currentLoggedInUser"))
  const loggedInUserPosts = posts.filter(post => post.username.toLowerCase() === loggedInUser.username.toLowerCase())
  const openedUser = users && users.find(user => user._id === selectedUserId)
  return (
    <>
    {isUserLoading?<div className='loader'><InfinitySpin
        visible={true}
        width="200"
        color="#B14AED"
        ariaLabel="infinity-spin-loading"
      /></div>:<div className='profile-stat-container'>
      <span>
        <div className='following-count'>{openedUser && openedUser.following.length}</div>
        <div className='following-label'>Following</div>
      </span>
      <span>
        <div className='post-count'>{openedUser && openedUser.length}</div>
        <div className='post-label'>Posts</div>
      </span>
      <span>
        <div className='followers-count'>{openedUser && openedUser.followers.length}</div>
        <div className='followers-label'>Followers</div>
      </span>
    </div>}
    </>
  )
}

export default ProfileStats
