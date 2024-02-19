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
   const [uploadLoader,setUploadLoader] = useState(null)
   
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
          const storedUser = JSON.parse(localStorage.getItem("currentLoggedInUser"))
        
        if(storedUser){
          setLoggedInUser(prev => storedUser)
        }
          
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

useEffect(() => {
 console.log(loggedInUser)
},[loggedInUser])


   const loginUser = async(username,password) => {
    try{

      const {data:{encodedToken,foundUser}} = await axios.post("/api/auth/login",{username,password})
      
      
      localStorage.setItem("authToken",encodedToken)
      
       localStorage.setItem("currentLoggedInUser",JSON.stringify(foundUser))
      setLoggedInUser(foundUser)
      console.log(foundUser)
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
    navigate("/login")
   }
   const createPost = async(content,mediaUrl = "") => {
    setCreatePostLoader(true)
    const encodedToken = localStorage.getItem("authToken")
    const headers = {authorization:encodedToken}
    try{
      const {data:{posts}} = await axios.post("/api/posts",{postData:content, mediaUrl},{headers})
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
    

    const updateProfile = async(userData) => {
      const encodedToken = localStorage.getItem("authToken")
      const headers = {authorization:encodedToken}
      try{
      const{data:{user}} = await axios.post("/api/users/edit",{userData},{headers})
      
      setUsers(prev =>
        users.map(existingUser =>{
          if(existingUser._id === user._id){
            return user
          }
          return existingUser
        })
      )
      
      }
      
      catch(error){
        console.log(error)
      }
    
    }

    const uploadProfilePic = async(files) => {
      setUploadLoader(true)
      const formData = new FormData();
    formData.append("file",files[0]);
    formData.append("upload_preset", "profileImages");

    const url = "https://api.cloudinary.com/v1_1/dr3wa4qwm/image/upload";

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const {secure_url} = await response.json();
      
        setUploadLoader(false)
        return secure_url
       
       
    } catch (error) {
        console.error("Error:", error);
    }
    }

    const uploadPostMedia = async(files) => {
      setUploadLoader(true)
      const formData = new FormData();
    formData.append("file",files[0]);
    formData.append("upload_preset", "postImages");

    const url = "https://api.cloudinary.com/v1_1/dr3wa4qwm/image/upload";

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const {secure_url} = await response.json();
        setUploadLoader(false)
        return secure_url
       
       
    } catch (error) {
        console.error("Error:", error);
    }
  }
const deletePost = async(postId) => {
  const encodedToken = localStorage.getItem("authToken")
  const headers = {authorization:encodedToken}
  setCreatePostLoader(true)
  try{
    const{data:{posts}} = await axios.delete(`/api/posts/${postId}`,{headers})
   setPosts(posts)
   setCreatePostLoader(false)
    
  }
  catch(error){
    console.log(error)
  }

}

    useEffect(() => {
      if(loggedInUser){
          localStorage.setItem("currentLoggedInUser",JSON.stringify({...loggedInUser}))
      }
    },[loggedInUser])
    const signUpUser = async(userDetails) => {
      setUserLoading(true)
        const{data:{createdUser,encodedToken}} = await axios.post("/api/auth/signup",userDetails)

        const{data:{users}} = await axios.get("/api/users")
          setUsers(users)
       localStorage.setItem("authToken",encodedToken)
       const newUser = users.find(user => user._id === createdUser._id)
       localStorage.setItem("currentLoggedInUser",JSON.stringify(newUser))
      setLoggedInUser(newUser)
      navigate("/profile")
      setUserLoading(false)
       
        
    }
    const editPost = async(postId,updatedPost) => {
      const encodedToken = localStorage.getItem("authToken")
      const headers = {authorization:encodedToken}
      try{
        const{data:{posts}} = await axios.post(`/api/posts/edit/${postId}`,updatedPost,{headers})
        setPosts(posts)
        
      }
      catch(error){
        console.log(error)
      }
    }
   return(
    <SocialMediaContext.Provider value = {{users,loggedInUser,posts,errorMessage,loginUser,logoutUser,setUserLoading,isUserLoading,createPost,createPostLoader,likePost,dislikePosts,bookmarkPost,removeBookmark,getPostByPostId,selectedPost,getUserFromPost,postOpenLoader,setPostOpenLoader,followPeople,unFollowPeople,updateProfile,uploadProfilePic,uploadLoader,signUpUser,editPost,uploadPostMedia,deletePost}}>
      {children}
    </SocialMediaContext.Provider>
   )
}

export {SocialMediaContext,SocialMediaContextProvider}