import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <div className='sidebar-option'><span class="material-symbols-rounded">Home</span><span>Home</span></div>
        <div className='sidebar-option'><span class="material-symbols-rounded">travel_explore</span><span>Explore</span></div>
        <div className='sidebar-option'><span class="material-symbols-rounded">bookmark</span><span>Bookmark</span></div>
        <div className='sidebar-option'><span class="material-symbols-rounded">person</span><span>Profile</span></div>
      </div>
      <div className='profile-section'>Profile</div>
    </div>
  )
}

export default Sidebar
