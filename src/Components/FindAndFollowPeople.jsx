import React, { useContext } from 'react'
import { SocialMediaContext } from '../Context/DataContext'

const FindAndFollowPeople = () => {
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
            <span class="material-symbols-rounded">account_circle</span>
            <div className='people-name-container'>
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
