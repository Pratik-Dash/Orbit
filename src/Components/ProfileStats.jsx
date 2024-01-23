import React, { useContext } from 'react'
import { SocialMediaContext } from '../Context/DataContext'

const ProfileStats = () => {
  const {posts} = useContext(SocialMediaContext)
   const loggedInUser = JSON.parse(localStorage.getItem("currentLoggedInUser"))
  const loggedInUserPosts = posts.filter(post => post.username.toLowerCase() === loggedInUser.username.toLowerCase())

  return (
    <div className='profile-stat-container'>
      <span>
        <div className='following-count'>{loggedInUser.following.length}</div>
        <div className='following-label'>Following</div>
      </span>
      <span>
        <div className='post-count'>{loggedInUserPosts.length}</div>
        <div className='post-label'>Posts</div>
      </span>
      <span>
        <div className='followers-count'>{loggedInUser.followers.length}</div>
        <div className='followers-label'>Followers</div>
      </span>
    </div>
  )
}

export default ProfileStats
