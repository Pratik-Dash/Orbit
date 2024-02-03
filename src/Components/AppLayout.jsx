import FindAndFollowPeople from "./FindAndFollowPeople"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({children}) => {

    return(
        <>
        <Header/>
        <div className="main">
        <Sidebar/>
        {children}
        <FindAndFollowPeople/>
        </div>
        </>
    )

   
}
export default Layout