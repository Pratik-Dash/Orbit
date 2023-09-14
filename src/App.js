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

function App() {
  return (
    <Router>
    <div className="App">
    <SocialMediaContextProvider>
    <Nabvar/>
      <Routes>
      <Route path = "/" element = {<LandingPage/>}/>
      <Route path = "/home" element = {<Homepage/>}/>
      <Route path = "/login" element = {<LoginPage/>}/>
      <Route path = "/sign-up" element = {<SignupPage/>}/>
      <Route path = "/component-test" element = {<SinglePost/>}/>
      <Route path = "/profile" element = {<Profile/>}/>
      </Routes>
      </SocialMediaContextProvider>
      
    </div>
    </Router>
  );
}

export default App;
