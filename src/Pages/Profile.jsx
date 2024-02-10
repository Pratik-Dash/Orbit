import React, { useContext, useState,useEffect } from 'react'
import { Button } from '@mui/material'
import ProfileStats from '../Components/ProfileStats'
import { SocialMediaContext } from '../Context/DataContext'
import PostComponent from '../Components/PostComponent'
import { InfinitySpin } from 'react-loader-spinner'
import EditProfileModal from '../Components/EditProfileModal'
import EditIcon from '@mui/icons-material/Edit'; 
import LogoutIcon from '@mui/icons-material/Logout';
const Profile = () => {
  const {posts,users,logoutUser,isUserLoading} = useContext(SocialMediaContext)
  const userObject = localStorage.getItem("currentLoggedInUser")
  const loggedInUser = JSON.parse(userObject)
  const loggedInUserPosts = loggedInUser &&posts.filter(post => post.username.toLowerCase() === loggedInUser.username.toLowerCase())
  const [bio,setBio] = useState(loggedInUser.bio)
  const [portfolio,setPortfolio] = useState(loggedInUser.portfolio&&loggedInUser.portfolio)
  const [profilePic,setProfilePic] = useState(loggedInUser.profilePic && loggedInUser.profilePic)
  const [isEditModalOpen,setIsEditModalOpen] = useState(false)
  useEffect(() => {
      const updatedLoggedInUser = users && users.find(user => user._id === loggedInUser._id)
      setBio(updatedLoggedInUser && updatedLoggedInUser.bio)
      setPortfolio(updatedLoggedInUser && updatedLoggedInUser.portfolio)
      setProfilePic(updatedLoggedInUser && updatedLoggedInUser.profilePic)
  },[users])
  
  return (
    <div className='profile-page'>
    
      {isUserLoading?<div className='loader'>
      <InfinitySpin
        visible={true}
        width="200"
        color="#B14AED"
        ariaLabel="infinity-spin-loading"
      />
      </div>:<div className='profile-info'>
        <div className='profile-image-container'>
            <img className='profile-image' src={profilePic} alt='profile'/>
        </div>
        {loggedInUser && <div className='profile-name'>{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</div>}
        <div className='profile-handle'>@{loggedInUser &&loggedInUser.username}</div>
        <div className='profile-handle'>{bio}</div>
        <div className='profile-handle'>{portfolio}</div>
        <div className='primary-profile-btn'>
        <Button variant='outlined' onClick={() => setIsEditModalOpen(true)} color='secondary' startIcon = {<EditIcon/>}>Edit Profile</Button>
        {isEditModalOpen?<EditProfileModal isModalOpen={isEditModalOpen} setIsModalOpen={setIsEditModalOpen} user={loggedInUser}/>:""}
        <Button variant='outlined' startIcon = {<LogoutIcon/>} onClick={logoutUser} color='secondary'></Button>
        
        
        </div>
        <p className='profile-about'>
            
        </p>
        <div className='profile-stat-container-container'>
      <ProfileStats/>
     <div className='currentUser-posts'>
     <span className='posts-header'><h2>{`Your posts`}</h2></span>
     {
        loggedInUserPosts && loggedInUserPosts.map(post => 
        <PostComponent postData = {post} key={post._id}/>
        )
      }
     </div>
      </div>
      </div>}
      
      
    </div>
  )
}

export default Profile
