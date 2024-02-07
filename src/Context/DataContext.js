import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const SocialMediaContext = React.createContext()

const SocialMediaContextProvider = ({children}) => {

   const [posts,setPosts]  = useState([])
   const [users,setUsers] = useState([])
   const [loggedInUser,setLoggedInUser]  = useState(null)
   const [errorMessage,setErrorMessage] = useState(null)
   const[isUserLoading,setUserLoading] = useState(true)
   const [createPostLoader,setCreatePostLoader] = useState(true)
   const[selectedPost,setSelectedPost] = useState(null)
   const [postOpenLoader,setPostOpenLoader] = useState(true)
   
    const navigate = useNavigate()
  

   useEffect(() => {
    const fetchPosts = async() => {
      try{
          const {data:{posts}} = await axios.get("/api/posts")
          setPosts(posts)
          setCreatePostLoader(false)  
      }
      catch(error){
          console.log(error)
      }
      
    }
   
      
      const fetchUsers = async() => {
        
        try{
          
          const{data:{users}} = await axios.get("/api/users")
          setUsers(users)
          setUserLoading(false)
        }
        catch(error){
          console.log(error)
        }
       
      }
     const timeOutId =  setTimeout(() => {
        fetchUsers()
        fetchPosts()
      }, 1500);
      
      return () => clearTimeout(timeOutId);
   
   },[])

   const loginUser = async(username,password) => {
    try{

      const {data:{encodedToken,foundUser}} = await axios.post("/api/auth/login",{username,password})
      
      
      localStorage.setItem("authToken",encodedToken)
      
       localStorage.setItem("currentLoggedInUser",JSON.stringify(foundUser))
      setLoggedInUser(foundUser)
      console.log(encodedToken)
     const redirectUrl = localStorage.getItem('redirectUrl')
     if(redirectUrl){
      navigate(redirectUrl)
      localStorage.removeItem('redirectUrl')
     
     }
     else{
      navigate("/home")
     }
    }
    catch(error){
      setErrorMessage("Invalid Credentials")
    }
   
   }
   const logoutUser = () => {
    localStorage.clear()
    navigate("/")
   }
   const createPost = async(content) => {
    setCreatePostLoader(true)
    const encodedToken = localStorage.getItem("authToken")
    const headers = {authorization:encodedToken}
    try{
      const {data:{posts}} = await axios.post("/api/posts",{postData:content},{headers})
      setPosts(posts)
      setCreatePostLoader(false)
      
    }
    catch(error){
      setErrorMessage(error)
    }
 
   }
   const getUserFromPost = (post) => {
    const postUser = users?users.find(user => user.username.toLowerCase() === post.username.toLowerCase()):[]
    return postUser
   } 
   //post operations
   const getPostByPostId = async(postId) => {
   
    try{
      
      const{data:{post}} = await axios.get(`/api/posts/${postId}`)
      setSelectedPost(post)
      console.log("got post")
      setPostOpenLoader(false)
     
      
      
  }
  catch(error){
    console.log(error)
  }
  
   }
   const likePost = async(postId) => {
    const encodedToken = localStorage.getItem("authToken")
    const headers = {authorization:encodedToken}
    
    try{
    const{data:{posts:LatestPostsData}} = await axios.post(`/api/posts/like/${postId}`,{},{headers})
    const postsWithUpdatedLikes = LatestPostsData.map(latestPost =>{
      const existingPost = posts.find(post => post._id === latestPost._id)
      if(existingPost){
        return {...existingPost,likes:{...latestPost.likes}}
      }
      return latestPost
    })
    setPosts(postsWithUpdatedLikes)
    
    }
    catch(error){
      setErrorMessage(error)
    }
   }
   const dislikePosts = async(postId) => {
   
    const encodedToken = localStorage.getItem("authToken")
    const headers = {authorization:encodedToken}
    try{
    const{data:{posts:LatestPostsData}} = await axios.post(`/api/posts/dislike/${postId}`,{},{headers})
    const postWithUpdatedLikes = LatestPostsData.map(latestPost => {
      const existingPostData = posts.find(post => post._id ===latestPost._id)
      if(existingPostData){
        return{...existingPostData, likes:{...latestPost.likes}}
      }
      return latestPost
    })
    setPosts(postWithUpdatedLikes)
    
    }
    catch(error){
      setErrorMessage(error)
    }
   }
   const bookmarkPost = (postId) => {
     
      const updatedPostsData = posts.map(post =>{
        if(post._id === postId){
          return {...post, bookmarked:true}
        }
        return post
      })
      setPosts(updatedPostsData)
      console.log("bookmarked")

   }
   const removeBookmark = (postId) => {
    const updatedPostsData = posts.map(post =>{
      if(post._id === postId){
        return{...post, bookmarked:false}
      }
      return post
    })
    setPosts(updatedPostsData)
    console.log("removed from bookmarks")
   }
   //follow/unfollow people

   const followPeople = async(followUserId) => {
    const encodedToken = localStorage.getItem("authToken")
    const headers = {authorization:encodedToken}
    try{
        const{data:{user,followUser}} = await axios.post(`/api/users/follow/${followUserId}`,{},{headers})

        const usersUpdatedwithloggedInUser = users.map(existingUser => {
          if(existingUser._id === user._id){
            return user
          }
          return existingUser
        })
        setUsers(prev => {
          return usersUpdatedwithloggedInUser.map(existingUser => {
            if(existingUser._id === followUser._id){
              return followUser
            }
            return existingUser
          })
        })
        const storedUser = JSON.parse(localStorage.getItem("currentLoggedInUser"))
        const updatedLoggedInUser = usersUpdatedwithloggedInUser.find(user => user._id === storedUser._id)
        if(updatedLoggedInUser){
          setLoggedInUser(prev => updatedLoggedInUser)
        }
    }
    catch(error){
      console.log(error)
    }
   }
   const unFollowPeople = async(followUserId) => {
    const encodedToken = localStorage.getItem("authToken")
    const headers = {authorization:encodedToken}
    try{
        const{data:{user,followUser}} = await axios.post(`/api/users/unfollow/${followUserId}`,{},{headers})

        const usersUpdatedwithloggedInUser = users.map(existingUser => {
          if(existingUser._id === user._id){
            return user
          }
          return existingUser
        })
        setUsers(prev => {
          return usersUpdatedwithloggedInUser.map(existingUser => {
            if(existingUser._id === followUser._id){
              return followUser
            }
            return existingUser
          })
        })
        const storedUser = JSON.parse(localStorage.getItem("currentLoggedInUser"))
        const updatedLoggedInUser = usersUpdatedwithloggedInUser.find(user => user._id === storedUser._id)
        if(updatedLoggedInUser){
          setLoggedInUser(prev => updatedLoggedInUser)
        }
    }
    catch(error){
      console.log(error)
    }
   }
    useEffect(() => {
     console.log(loggedInUser)
    },[loggedInUser,users])
   return(
    <SocialMediaContext.Provider value = {{users,loggedInUser,posts,errorMessage,loginUser,logoutUser,setUserLoading,isUserLoading,createPost,createPostLoader,likePost,dislikePosts,bookmarkPost,removeBookmark,getPostByPostId,selectedPost,getUserFromPost,postOpenLoader,setPostOpenLoader,followPeople,unFollowPeople}}>
      {children}
    </SocialMediaContext.Provider>
   )
}

export {SocialMediaContext,SocialMediaContextProvider}