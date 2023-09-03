import React from 'react'

const PostComponent = () => {
  return (
    <div className='post'>
      
      <div className='post-content'>
      <div className='post-avatar'>
      <span class="material-symbols-rounded">account_circle</span>
      
      </div>
      
      <div className='post-text'>
      <div className='post-profile-name'><span className='post-author-name'>{`Pratik Dash`}</span><span className='social-media-handle'>{`  @pratikdash `}</span> <span className='post-time'>{` • 1 Min ago`}</span></div>
        This is a test post. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
     <div className='post-actions'>
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>favorite</span>
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>mode_comment</span>
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>send</span>
     <span class="material-symbols-rounded" style = {{color:"#B14AED"}}>bookmark_add</span>
     </div>
    </div>
  )
}

export default PostComponent
