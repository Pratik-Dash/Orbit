import React from 'react'

const WriteSomething = () => {
  return (
    <div className='write-something'>
    <div className='write-something-container'>
      <div className='profileAvatar'>
      <span class="material-symbols-rounded">account_circle</span>
      
      </div>
      <span className='write-something-area'><textarea rows={6} cols={50} style = {{resize:"none"}} placeholder='Write something interesting...'></textarea>
      <div className='post-btn-container'><button className='post-btn'>Post</button></div>
      </span>
      </div>
      
    </div>
  )
}

export default WriteSomething
