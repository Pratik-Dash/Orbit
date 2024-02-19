import React, { useContext, useState } from 'react'
import { SocialMediaContext } from '../Context/DataContext'
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { ColorRing } from "react-loader-spinner";
import Badge from '@mui/material/Badge';
import CloseIcon from '@mui/icons-material/Close';
const WriteSomething = () => {
  const [postData,setPostData] = useState("")
  const {createPost,uploadPostMedia,uploadLoader, loggedInUser} = useContext(SocialMediaContext)
  const [postBtnDisabled,setPostBtnDisabled] = useState(true)
  const [postMedia,setPostMedia] = useState("")

  const createNewPost = () => {
    console.log(postData)
    createPost(postData,postMedia)
    setPostData("")
    setPostMedia("")
  }
  const handleUploadPropcess = async(e) =>{
    const secure_url = await uploadPostMedia(e.target.files)
    setPostMedia(secure_url)
    
    
}
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


  return (
    <div className='write-something'>
    <div className='write-something-container'>
      <div className='profileAvatar'>
      <Avatar alt={postData.username} src={loggedInUser && loggedInUser.profilePic} />
      
      </div>
      <span className='write-something-area'><textarea rows={10} cols={100} style = {{resize:"none"}} placeholder='Write something interesting...'onChange={(e)=> {setPostData(e.target.value)

        if(e.target.value === "" || undefined){
          setPostBtnDisabled(true)
        }
        else{
          setPostBtnDisabled(false)
        }
      }} value={postData}></textarea>
      <div className='post-btn-container'>
      <div className='image-uploadbtn-container'>
      <IconButton aria-label="delete" component="label">
      <ImageIcon />
      <VisuallyHiddenInput type="file" onChange={handleUploadPropcess} />
      </IconButton>
      {uploadLoader?<ColorRing visible={true} height="50" width="50" ariaLabel="color-ring-loading" wrapperStyle={{}} wrapperClass="color-ring-wrapper" colors={['#B14AED','#B14AED','#B14AED','#B14AED','#B14AED']}/>:<span className='post-media-container'>
      {
        postMedia&& <Badge color="secondary" badgeContent={<CloseIcon/>} size = "large" onClick = {() => setPostMedia("")}>

        <Avatar alt="post-media" src={postMedia} variant='square' /></Badge>
        
      }
      </span>}
      </div>
      <button className={postBtnDisabled?`disabled-post-btn`:'post-btn'} onClick={createNewPost} disabled = {postBtnDisabled}>Post</button></div>
      </span>
      </div>
      
    </div>
  )
}

export default WriteSomething
