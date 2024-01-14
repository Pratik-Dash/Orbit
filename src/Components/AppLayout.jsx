import FindAndFollowPeople from "./FindAndFollowPeople"
import Sidebar from "./Sidebar"

const Layout = ({children}) => {

    return(
        <div className="main">
        <Sidebar/>
        {children}
        <FindAndFollowPeople/>
        </div>
    )

   
}
export default Layout