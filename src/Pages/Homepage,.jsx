import React, { useContext } from 'react'
import PostComponent from '../Components/PostComponent';
import WriteSomething from '../Components/WriteSomething';
import { SocialMediaContext } from '../Context/DataContext';
import { InfinitySpin } from 'react-loader-spinner';

const Homepage = () => {
  const {posts,createPostLoader} = useContext(SocialMediaContext)
  const orderPostsBycreatedDate =  posts.sort((post1,post2) => post2.createdAt - post1.createdAt) 
  console.log(orderPostsBycreatedDate)
  return (
    <div className='home-page'>
     
                                
      <WriteSomething/> 
      <div className='sub-heading'>Latest Posts</div>
      {
        createPostLoader?<InfinitySpin
        visible={true}
        width="200"
        color="#B14AED"
        ariaLabel="infinity-spin-loading"
      />: orderPostsBycreatedDate.map(post => <PostComponent postData = {post}/>)
      }
      
      
    </div>
  )
}

export default Homepage;
