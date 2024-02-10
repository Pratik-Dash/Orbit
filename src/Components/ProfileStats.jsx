import React, { useContext } from 'react'
import { SocialMediaContext } from '../Context/DataContext'
import { InfinitySpin } from 'react-loader-spinner'
const ProfileStats = ({selectedUserId}) => {
  const {posts,users,isUserLoading} = useContext(SocialMediaContext)
  const openedUser = users && users.find(user => user._id === selectedUserId)
  const openedUserPosts = openedUser&& posts.filter(post => post.username.toLowerCase() === openedUser.username.toLowerCase())
  return (
    <>
    {isUserLoading?<div className='loader'><InfinitySpin
        visible={true}
        width="200"
        color="#B14AED"
        ariaLabel="infinity-spin-loading"
      /></div>:<div className='profile-stat-container'>
      <span>
        <div className='following-count'>{openedUser? openedUser.following.length:0}</div>
        <div className='following-label'>Following</div>
      </span>
      <span>
        <div className='post-count'>{openedUser? openedUserPosts.length:0}</div>
        <div className='post-label'>Posts</div>
      </span>
      <span>
        <div className='followers-count'>{openedUser?openedUser.followers.length:0}</div>
        <div className='followers-label'>Followers</div>
      </span>
    </div>}
    </>
  )
}

export default ProfileStats
