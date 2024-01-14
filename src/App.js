import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';
import SignupPage from "./Pages/SignupPage";
import { SocialMediaContext, SocialMediaContextProvider } from "./Context/DataContext";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import Sidebar from "./Components/Sidebar";
import WriteSomething from "./Components/WriteSomething";
import FindAndFollowPeople from "./Components/FindAndFollowPeople";
import PostComponent from "./Components/PostComponent";
import Profile from "./Pages/Profile";
import SinglePost from "./Components/SinglePost";
import Homepage from "./Pages/Homepage,";
import Nabvar from "./Components/Nabvar";
import ProtectRoutes from "./Components/HigherOrderRouteProtection";
import Layout from "./Components/AppLayout";

function App() {
  return (
    <Router>
    <div className="App">
    <SocialMediaContextProvider>
    
      <Routes>
     
      <Route path = "/" element = {<ProtectRoutes><LandingPage/></ProtectRoutes>}/>
      <Route path = "/home" element = {<ProtectRoutes><Layout><Homepage/></Layout></ProtectRoutes>}/>
      <Route path = "/login" element = {<LoginPage/>}/>
      <Route path = "/sign-up" element = {<SignupPage/>}/>
      <Route path = "/component-test" element = {<SinglePost/>}/>
      <Route path = "/profile" element = {<ProtectRoutes><Layout><Profile/></Layout></ProtectRoutes>}/>
      
      </Routes>
      </SocialMediaContextProvider>
      
    </div>
    </Router>
  );
}

export default App;
