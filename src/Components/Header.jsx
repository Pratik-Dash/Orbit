import { useContext, useEffect, useRef, useState } from "react"
import IconOrbit from "./OrbitIcon"
import { SocialMediaContext } from "../Context/DataContext"
import { useNavigate } from "react-router-dom"
const Header = () => {
const [inputText,setInputText] = useState("")
const {users} = useContext(SocialMediaContext)
const [showSearchResults,setShowSearchResults] = useState(false)
const searchBarRef = useRef(null)
const searchResultRef = useRef(null)
const navigateTo = useNavigate()
const handleSearch = (e) => {
setInputText(e.target.value)

}
useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
})
const handleOutsideClick = (event) => {
    if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target) &&
        searchResultRef.current &&
        !searchResultRef.current.contains(event.target)
    ) {
        setShowSearchResults(false);
    }
}
    return(
        <div className="header-container">
            <div className="header-title"><span className="svg-icon-header"><IconOrbit/></span><span>Orbit</span></div>
            <div className="search-input-header-container">
                <input type="text" placeholder="Find people" className="search-input" onChange={handleSearch} value={inputText} onClick={() => setShowSearchResults(true)} ref={searchBarRef}/>
                {showSearchResults &&<div className="search-result-div" ref={searchResultRef}>
                {
                    users.length && users.filter((user) =>inputText === ""?user:user.firstName.toLowerCase().includes(inputText.toLowerCase())&&user).map((user) =><div className="user-result" onClick={() => navigateTo(`/profile/${user._id}`)} key={user.firstName+user.lastName}>
                            <span className="search-result-image"><img src={user.profilePic} alt = {user.firstName+user.className}/></span>
                            <span className="search-result-name">{user.firstName} {user.lastName}</span>
                        </div>)
                    
                }
                </div>}
            </div>
        </div>
    )
}
export default Header