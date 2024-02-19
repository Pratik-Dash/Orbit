import React, { useContext, useState,useEffect } from 'react'
import PostComponent from '../Components/PostComponent';
import WriteSomething from '../Components/WriteSomething';
import { SocialMediaContext } from '../Context/DataContext';
import { InfinitySpin } from 'react-loader-spinner';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Toaster } from 'react-hot-toast';

const Homepage = () => {
  const {posts,createPostLoader,loggedInUser} = useContext(SocialMediaContext)
  const [dropdownState,setDropdownState] = useState("latest")
  const [homePagePosts,setHomePagePosts] = useState([])
  const[baseFeedArray,setBaseFeedArray] = useState([])
  
  
  useEffect(() => {
    setBaseFeedArray(posts.filter(post => {
    
      return loggedInUser && loggedInUser.following.find(followingUser => followingUser.username === post.username);
      
    }));
    console.log(baseFeedArray)
  },[posts,loggedInUser])
  useEffect(() => {
    let sortedPosts;
    if (dropdownState === 'trending') {
      sortedPosts = [...baseFeedArray].sort((post1, post2) => post2.likes.likeCount - post1.likes.likeCount);
    } else {
      sortedPosts = [...baseFeedArray].sort((post1, post2) => post2.createdAt - post1.createdAt);
    }
   
    setHomePagePosts(sortedPosts);
  },[dropdownState,posts,baseFeedArray])
  
  const handleDropdownState = (e) => {
    
    setDropdownState(prev => e.target.value)
  }
  if(baseFeedArray.length === 0){
    
    return (
      <div className='home-page'>
      <Toaster/>
      <WriteSomething/> 
    <div className='no-post-text'>You're not following anyone. Start adding people to your orbit to see their posts here.</div>
    </div>)
  }
  return (
    <div className='home-page'>
     
                                
      <WriteSomething/> 
      <div className='heading'>Feed<span>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }} color='secondary'>
        <InputLabel id="demo-simple-select-filled-label">Filter:</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
           value={dropdownState}
           onChange={handleDropdownState}
        >
          <MenuItem value="latest"><em>Latest</em></MenuItem>
          <MenuItem value="trending"><em>Trending</em></MenuItem>
        </Select>
      </FormControl>
      </span></div>
      {
        createPostLoader?<InfinitySpin
        visible={true}
        width="200"
        color="#B14AED"
        ariaLabel="infinity-spin-loading"
      />: homePagePosts.map(post => <PostComponent postData = {post}/>)
      }
      
      
    </div>
  )
}

export default Homepage;
