import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar';
import PostComponent from '../Components/PostComponent';
import FindAndFollowPeople from '../Components/FindAndFollowPeople';
import WriteSomething from '../Components/WriteSomething';
import { SocialMediaContext } from '../Context/DataContext';

const Homepage = () => {
  const {posts} = useContext(SocialMediaContext)
  return (
    <div className='home-page'>
     
                                
      <WriteSomething/> 
      <div className='sub-heading'>Latest Posts</div>
      {
        posts.map(post => <PostComponent postData = {post}/>)
      }
      
      
    </div>
  )
}

export default Homepage;
