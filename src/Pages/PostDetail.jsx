import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SocialMediaContext } from "../Context/DataContext"
import PostComponent from "../Components/PostComponent"
import { InfinitySpin } from "react-loader-spinner"

const PostDatail = () => {
const {postId} = useParams()
const {getPostByPostId,selectedPost,postOpenLoader} = useContext
(SocialMediaContext)

useEffect(() => {
    getPostByPostId(postId);
  }, []);

return(

    <div className="home-page">
        {
       ( postOpenLoader && !selectedPost)?<InfinitySpin
        visible={true}
        width="200"
        color="#B14AED"
        ariaLabel="infinity-spin-loading"
      />:<PostComponent postData = {selectedPost}/>
      }
    </div>
)

}

export default PostDatail