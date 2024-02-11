import React, { useContext } from 'react'
import { SocialMediaContext } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
const FindAndFollowPeople = () => {
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
  const navigate = useNavigate()
    const {users} = useContext(SocialMediaContext)
  return (
    <div className='right-side-bar'>
      <div className='search-people-container'>
        <input type = "text" placeholder='Find People, Posts, Anything' className='people-search-input'/>
      </div>
      <div className='people-list'>
      <div className='people-item whotofollow'><span className='whotofollow-text'>Who to Follow?</span> <span className='showmoretext'>Show More</span></div>
      {
        users.map(user => 
            <div className='people-item'>
            
            {user.profilePic?<img className='find-people-image' src={user.profilePic} alt='profile'/>:<Avatar {...stringAvatar(`${user.firstName.charAt(0)} ${user.lastName.charAt(0)}`)} style={{ width: 30, height: 30, border:"3px solid #B14AED"}} />}
            <div className='people-name-container' onClick={()=> navigate(`/profile/${user._id}`)}>
            <span>{`${user.firstName} ${user.lastName}`}</span>
            </div>
            <span className='follow-btn'> Follow +</span>
            </div>
        )
      }
      </div>
      
    </div>
  )
}

export default FindAndFollowPeople
