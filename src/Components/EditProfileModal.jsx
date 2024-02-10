import { useContext, useRef, useState,useEffect } from "react"
import { IconClose } from "./HeartIcon"
import { SocialMediaContext } from "../Context/DataContext"
import { Button } from "@mui/material"
import { styled } from '@mui/material/styles';
import { ColorRing } from "react-loader-spinner";
const EditProfileModal = ({isModalOpen,setIsModalOpen, user}) => {
const modalRef = useRef(null)
const [bio,setBio] = useState(user && user.bio)
const [portfolio,setPortfolio] = useState(user.portfolio&&user.portfolio)
const {updateProfile,users,uploadProfilePic,uploadLoader} = useContext(SocialMediaContext)
const [profilePic,setProfilePic] = useState(user && user.profilePic)
const updateUserDetails = () => {
    
    const userData = {profilePic,bio,portfolio}
    updateProfile(userData)
    setIsModalOpen(false)
    
}
const handleUploadPropcess = async(e) =>{
    const secure_url = await uploadProfilePic(user._id,e.target.files)
    setProfilePic(secure_url)
    
}
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  

  useEffect(() => {
    
  },[user.profilePic])
  
useEffect(() => {
    const updatedLoggedInUser = users.find(eachUser => eachUser._id === user._id)
    setBio(updatedLoggedInUser.bio)
    setPortfolio(updatedLoggedInUser.portfolio)
   setProfilePic(updatedLoggedInUser.profilePic)
},[users])

    return(
        <>
        <div className="modal-wrapper" onClick={
            (e) => {
                if(modalRef.current.contains(e.target)){
                    return
                }
                setIsModalOpen(false)
            }
        }>
        </div>
        <div className="modal" ref={modalRef}>
        <div className="modal-top">
        <div className="modal-header">Edit Profile</div>
        <button onClick={() => setIsModalOpen(false)} className="modal-close-btn"><IconClose/></button>
        </div>
        <div className="modal-middle">
        <div className="avatar">
            <span>Avatar</span>
            <span>
            <Button component="label" variant="text" color="secondary">
            <VisuallyHiddenInput type="file"  onChange={handleUploadPropcess}/>
           {uploadLoader?<ColorRing visible={true} height="50" width="50" ariaLabel="color-ring-loading" wrapperStyle={{}} wrapperClass="color-ring-wrapper" colors={['#B14AED','#B14AED','#B14AED','#B14AED','#B14AED']}/>: <img src={profilePic} alt={user.username} className="modal-image"/>}
            </Button>
            </span>
        </div>
        <div className="modal-user-details">
        <div className="modal-fullname">
        <span>Name: </span>
        <span>{`${user.firstName} ${user.lastName}`}</span>
        </div>
        <div className="modal-username">
        <span>Username: </span>
        <span>{`${user.username}`}</span>
        </div>
        <div className="bio-and-portfolio">
        <div className="modal-bio">
        <span>Bio: </span>
        <span><textarea rows={3} cols={30} onChange={(e) => setBio(e.target.value)} className="bio-input" style = {{resize:"none"}} value={bio}/></span>
        </div>
        <div className="modal-portfolio">
        <span>Portfolio: </span>
        <span><input type="text" onChange={(e) => setPortfolio(e.target.value)} className="portfolio-input" style = {{resize:"none"}} value={portfolio}/></span>
        </div>
        </div>
        
        </div>
        </div>
         <div className="modal-bottom">
            <button className="modal-save-button" onClick={updateUserDetails}>Save</button>
         </div>   
        </div>
        </>
    )
}
export default EditProfileModal