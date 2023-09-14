import React, { useContext } from 'react'
import { SocialMediaContext } from '../Context/DataContext'

const PostComponent = ({postData}) => {
  const {users} = useContext(SocialMediaContext)
  const currentUser = users.find(user => user.username.toLowerCase() === postData.username.toLowerCase())
  const {likes:{likeCount}} = postData
  console.log(postData)
  return (
    <div className='post'>
      
      <div className='post-content'>
      <div className='post-avatar'>
      <span class="material-symbols-rounded">account_circle</span>
      
      </div>
      
      <div className='post-text'>
      <div className='post-profile-name'><span className='post-author-name'>{`${currentUser.firstName} ${currentUser.lastName}`}</span><span className='social-media-handle'>{` ${currentUser.username}`}</span> <span className='post-time'>{` • 1 Min ago`}</span></div>
        {postData.content}
        </div>
      </div>
     <div className='post-actions'>
     <div className='post-impressions'>
     <span>{` ${likeCount}`}</span>
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>favorite</span>
     </div>
     
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>mode_comment</span>
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>send</span>
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>bookmark_add</span>
     </div>
    </div>
  )
}

export default PostComponent
