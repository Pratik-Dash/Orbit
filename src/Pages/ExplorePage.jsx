import { useContext,useState,useEffect } from "react"
import { SocialMediaContext } from "../Context/DataContext"
import { InfinitySpin } from 'react-loader-spinner';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PostComponent from '../Components/PostComponent';
const Explore = () =>{
   const {posts,createPostLoader,} = useContext(SocialMediaContext)
   const [dropdownState,setDropdownState] = useState("latest")
   const [homePagePosts,setHomePagePosts] = useState([])
   useEffect(() => {
    let sortedPosts;
    if (dropdownState === 'trending') {
      sortedPosts = [...posts].sort((post1, post2) => post2.likes.likeCount - post1.likes.likeCount);
    } else {
      sortedPosts = [...posts].sort((post1, post2) => post2.createdAt - post1.createdAt);
    }
   
    setHomePagePosts(sortedPosts);
  },[dropdownState,posts])
  const handleDropdownState = (e) => {
    
    setDropdownState(prev => e.target.value)
  }
   return (
    <div className="home-page">
     
     <div className='heading'>Explore<span>
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
     </span>
     </div>
     {
       createPostLoader?<InfinitySpin
       visible={true}
       width="200"
       color="#B14AED"
       ariaLabel="infinity-spin-loading"
     />: homePagePosts.map(post => <PostComponent postData = {post}/>)}
    </div>)
   
}
export default Explore