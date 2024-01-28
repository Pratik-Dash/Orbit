import React, { useContext, useState } from 'react'
import { SocialMediaContext } from '../Context/DataContext'

const WriteSomething = () => {
  const [postData,setPostData] = useState("")
  const {createPost} = useContext(SocialMediaContext)
  const [postBtnDisabled,setPostBtnDisabled] = useState(true)
  const createNewPost = () => {
    console.log(postData)
    createPost(postData)
    setPostData("")
  }
  return (
    <div className='write-something'>
    <div className='write-something-container'>
      <div className='profileAvatar'>
      <span class="material-symbols-rounded">account_circle</span>
      
      </div>
      <span className='write-something-area'><textarea rows={10} cols={100} style = {{resize:"none"}} placeholder='Write something interesting...'onChange={(e)=> {setPostData(e.target.value)

        if(e.target.value === "" || undefined){
          setPostBtnDisabled(true)
        }
        else{
          setPostBtnDisabled(false)
        }
      }} value={postData}></textarea>
      <div className='post-btn-container'><button className={postBtnDisabled?`disabled-post-btn`:'post-btn'} onClick={createNewPost} disabled = {postBtnDisabled}>Post</button></div>
      </span>
      </div>
      
    </div>
  )
}

export default WriteSomething
