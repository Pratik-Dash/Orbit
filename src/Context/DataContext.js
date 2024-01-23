import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const SocialMediaContext = React.createContext()

const SocialMediaContextProvider = ({children}) => {

   const [posts,setPosts]  = useState([])
   const [users,setUsers] = useState([])
   const [loggedInUser,setLoggedInUser]  = useState(null)
   const [errorMessage,setErrorMessage] = useState(null)
    const navigate = useNavigate()
  

   useEffect(() => {

    const fetchPosts = async() => {
      try{
          const {data:{posts}} = await axios.get("/api/posts")
          setPosts(posts)  
      }
      catch(error){
          console.log(error)
      }
    }
   
      
      const fetchUsers = async() => {
        try{
          const{data:{users}} = await axios.get("/api/users")
          setUsers(users)
        }
        catch(error){
          console.log(error)
        }
      }
    fetchPosts();
   fetchUsers();
   },[])

   const loginUser = async(username,password) => {
    try{

      const {data:{encodedToken,foundUser}} = await axios.post("/api/auth/login",{username,password})
      
      
      localStorage.setItem("authToken",encodedToken)
      console.log(foundUser)
      localStorage.setItem("currentLoggedInUser",JSON.stringify(foundUser))
      setLoggedInUser(foundUser)

     const redirectUrl = localStorage.getItem('redirectUrl')
     if(redirectUrl){
      navigate(redirectUrl)
      localStorage.removeItem('redirectUrl')
     
     }
     else{
      navigate("/")
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
   return(
    <SocialMediaContext.Provider value = {{users,loggedInUser,posts,errorMessage,loginUser,logoutUser}}>
      {children}
    </SocialMediaContext.Provider>
   )
}

export {SocialMediaContext,SocialMediaContextProvider}