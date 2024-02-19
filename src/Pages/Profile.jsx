import React, { useContext, useState,useEffect } from 'react'
import { Button } from '@mui/material'
import ProfileStats from '../Components/ProfileStats'
import { SocialMediaContext } from '../Context/DataContext'
import PostComponent from '../Components/PostComponent'
import { InfinitySpin } from 'react-loader-spinner'
import EditProfileModal from '../Components/EditProfileModal'
import EditIcon from '@mui/icons-material/Edit'; 
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
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
  
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


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
            {profilePic?<img className='profile-image' src={profilePic} alt='profile'/>:<Avatar {...stringAvatar(`${loggedInUser.firstName.charAt(0)} ${loggedInUser.lastName.charAt(0)}`)} sx={{ width: 100, height: 100 }} />}
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
      <ProfileStats selectedUserId = {loggedInUser._id}/>
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
