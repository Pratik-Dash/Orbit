import React, { useEffect, useState } from "react"

const SocialMediaContext = React.createContext()

const SocialMediaContextProvider = ({children}) => {

   const [posts,setPosts]  = useState([])
   const [users,setUsers] = useState([])

   useEffect(() => {
    
      const fetchData = async() => {
        try{
            const postResponse = await fetch("/api/posts")
            const {posts} = await postResponse.json()
            console.log(posts)
            const userResponse = await fetch("/api/users")
            const {users} = await userResponse.json()
            setPosts(posts)
            setUsers(users)
            
        }
        catch(error){
            console.log(error)
        }
      }
      fetchData()
   }, [setPosts,setUsers])

   return(
    <SocialMediaContext.Provider value = {{users,posts}}>
      {children}
    </SocialMediaContext.Provider>
   )
}

export {SocialMediaContext,SocialMediaContextProvider}