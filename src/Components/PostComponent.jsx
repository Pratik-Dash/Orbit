import React, { useContext, useEffect, useState } from 'react';
import { SocialMediaContext } from '../Context/DataContext';
import { IconBookmarkCheck1, IconBookmarkCheckFill, IconHeart1, IconHeart2 } from './HeartIcon';
import { useNavigate } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const PostPaper = styled(Paper)(({ theme }) => ({
 
 
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  marginBottom:'1rem',
}));


const options = [
  'Edit'
];
const ITEM_HEIGHT = 30;
const PostComponent = ({ postData }) => {
  const { users, likePost, dislikePosts, bookmarkPost, removeBookmark,createPostLoader,editPost } = useContext(SocialMediaContext);
  const [currentUser, setCurrentUser] = useState(null);
  const userObject = localStorage.getItem('currentLoggedInUser');
  const loggedInUser = JSON.parse(userObject);
  const[isEditModeEnabled,setEditModelEnabled] = useState(false)
  const [postBtnDisabled,setPostBtnDisabled] = useState(true)
  const [postDataEdit,setPostDataEdit] = useState(postData.content)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleEditMode = () => {
    setEditModelEnabled(true)
  }
  const handlePostEdit = () => {
    const updatedPost = {postData:postDataEdit}
    editPost(postData._id, updatedPost)
    setEditModelEnabled(false)
    setAnchorEl(null);
  }
  useEffect(() => {
    const fetchData = async () => {
      if (users) {
        const user = users.find(user => user.username.toLowerCase() === postData.username.toLowerCase());
        setCurrentUser(user);
      }
    };

    fetchData();
  }, [users, postData]);

  const { likes: { likeCount } } = postData;
  const likedUser = postData.likes.likedBy.find(userWhoLiked => userWhoLiked._id === loggedInUser?._id);
  
  const likeCurrentPost = () => {
    likePost(postData._id);
  };

  const dislikeCurrentPost = () => {
    dislikePosts(postData._id);
  };

  const bookmarkCurrentPost = () => {
    bookmarkPost(postData._id);
  };

  const removeCurrentPostFromBookmarked = () => {
    removeBookmark(postData._id);
  };
  
  return (
    <>
    {createPostLoader?<InfinitySpin
        visible={true}
        width="200"
        color="#B14AED"
        ariaLabel="infinity-spin-loading"
      />: <PostPaper variant="elevation">
      {!isEditModeEnabled?<div className='post-content'>
      <div className='post-content-container'>
        <div className='post-avatar'>
        <Avatar alt="Pratik Dash" src={currentUser && currentUser.profilePic} />
        </div>
        <div className='post-text'>
          <div className='post-profile-name'>
            {<span className='post-author-name'>{`${currentUser?.firstName} ${currentUser?.lastName}`}</span>}
            <span className='social-media-handle'>{` ${currentUser?.username}`}</span>
            <span className='post-time'>{` • 1 Min ago`}</span>
          </div>
          {postData.content}
          {
            postData.mediaUrl!==""&&<div className='post-media-container'>
              <img src={postData && postData.mediaUrl} alt={postData.mediaUrl} className='post-media'
              />
            </div>
          }
        </div>
        </div>


        {postData.username === loggedInUser.username &&<div className='edit-icon'>
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option,index) => (
          <MenuItem key={index} selected={option === 'Pyxis'} onClick={handleEditMode}>
            {option}
          </MenuItem>
        ))}
      </Menu>
        </div>}


      </div>:<div>
      <div className='write-something'>
    <div className='write-something-container'>
      <div className='profileAvatar'>
      <Avatar alt="Pratik Dash" src={currentUser && currentUser.profilePic} />
      
      </div>
      <span className='write-something-area'><textarea rows={10} cols={100} style = {{resize:"none"}} placeholder='editing this post...'onChange={(e)=> {setPostDataEdit(e.target.value)

        if(e.target.value === "" || undefined){
          setPostBtnDisabled(true)
        }
        else{
          setPostBtnDisabled(false)
        }
      }} value={postDataEdit}></textarea>
      <div className='post-btn-container'><button className={postBtnDisabled?`disabled-post-btn`:'post-btn'} disabled = {postBtnDisabled} onClick={handlePostEdit}>Update</button></div>
      </span>
      </div>
      
    </div>
      </div>}
      <Divider variant='full-width'/>
      <div className='post-actions'>
        <div className='post-impressions'>
          <span className='like-counter' onClick={!likedUser ? likeCurrentPost : dislikeCurrentPost}>
            {likedUser ? <IconHeart2 /> : <IconHeart1 />}{` ${likeCount}`}
          </span>
        </div>
        <span className="material-symbols-rounded" style={{ color: '#B14AED' }}>send</span>
        <span onClick={!postData.bookmarked ? bookmarkCurrentPost : removeCurrentPostFromBookmarked}>
          {!postData.bookmarked ? <IconBookmarkCheck1 /> : <IconBookmarkCheckFill />}
        </span>
      </div>
      </PostPaper>}
    </>)
  
};

export default PostComponent;
