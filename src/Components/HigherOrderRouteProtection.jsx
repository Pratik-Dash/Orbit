import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectRoutes = ({children,pathName}) => {
    const navigate = useNavigate()
    const authToken = localStorage.getItem("authToken")
    const redirectUrl = pathName
    const setRedirectionUrl = () => {
        localStorage.setItem("redirectUrl",redirectUrl)
        navigate("/login")
    }
    useEffect(() => {
        if(!authToken){
            navigate('/login')
        }
    },[])

    return authToken?children:setRedirectionUrl()
}

export default ProtectRoutes 