import React from 'react'

const ProfileStats = () => {
  return (
    <div className='profile-stat-container'>
      <span>
        <div className='following-count'>0</div>
        <div className='following-label'>Following</div>
      </span>
      <span>
        <div className='post-count'>2K</div>
        <div className='post-label'>Posts</div>
      </span>
      <span>
        <div className='followers-count'>99K</div>
        <div className='followers-label'>Followers</div>
      </span>
    </div>
  )
}

export default ProfileStats
