import { useContext } from "react"
import { SocialMediaContext } from "../Context/DataContext"
import { InfinitySpin } from "react-loader-spinner"
import PostComponent from "../Components/PostComponent"
import { Toaster } from 'react-hot-toast';
const BookMarks = () => {
  
    const {posts,createPostLoader} = useContext(SocialMediaContext)
    const bookmarkedPosts =posts && posts.filter(post => post.bookmarked)
return(
    <div className="bookmark-page">
    <Toaster/>
        <div className='bookmark-sub-heading'>Bookmarked Posts</div>
      {
        createPostLoader?<InfinitySpin
        visible={true}
        width="200"
        color="#B14AED"
        ariaLabel="infinity-spin-loading"
      />: bookmarkedPosts.map(post => <PostComponent key={post._id} postData = {post}/>)
      }
    </div>
)

}

export default BookMarks