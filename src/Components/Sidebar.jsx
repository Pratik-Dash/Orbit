import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
      <NavLink to= "/home" exact activeClassName = "active" className="sidebar-option" style={{textDecoration:"none"}}><span class="material-symbols-rounded">Home</span><span>Home</span></NavLink>
      <NavLink to= "/explore" exact activeClassName = "active" className="sidebar-option" style={{textDecoration:"none"}}><span class="material-symbols-rounded">travel_explore</span><span>Explore</span></NavLink>
      <NavLink to= "/bookmarks" exact activeClassName = "active" className="sidebar-option" style={{textDecoration:"none"}}><span class="material-symbols-rounded">bookmark</span><span>Bookmark</span></NavLink>
      <NavLink to= "/profile" exact activeClassName = "active" className="sidebar-option" style={{textDecoration:"none"}}><span class="material-symbols-rounded">person</span><span>Profile</span></NavLink>
        
      </div>
      <div className='profile-section'>Profile</div>
    </div>
  )
}

export default Sidebar
