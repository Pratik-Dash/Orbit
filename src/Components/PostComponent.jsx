import React, { useContext, useState } from 'react'
import { SocialMediaContext } from '../Context/DataContext'
import {IconHeart1,IconHeart2} from "./HeartIcon"
const PostComponent = ({postData}) => {
  const {users,likePost,dislikePosts} = useContext(SocialMediaContext)
  const [postLiked,setPostLiked] = useState(null)
  const userObject = localStorage.getItem("currentLoggedInUser")
   const loggedInUser = JSON.parse(userObject)
  const currentUser = users.find(user => user.username.toLowerCase() === postData.username.toLowerCase())
  const {likes:{likeCount}} = postData
  const likedUser = postData.likes.likedBy.find(userWhoLiked => userWhoLiked._id ===loggedInUser._id )
  const likeCurrentPost = () => {
    likePost(postData._id)
    setPostLiked(postLiked =>true)
    
  }
  const dislikeCurrentPost = () => {

    dislikePosts(postData._id)
    setPostLiked(postLiked =>false)
    
  }
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

     
     <span className='like-counter' onClick={!postLiked?likeCurrentPost:dislikeCurrentPost}>

    { likedUser?<IconHeart2/>:<IconHeart1/>}{` ${likeCount}`}</span>
     </div>
     
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>mode_comment</span>
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>send</span>
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>bookmark_add</span>
     </div>
    </div>
  )
}

export default PostComponent
