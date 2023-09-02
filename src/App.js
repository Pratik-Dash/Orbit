import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';
import SignupPage from "./Pages/SignupPage";
import { SocialMediaContext, SocialMediaContextProvider } from "./Context/DataContext";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import Sidebar from "./Components/Sidebar";
import WriteSomething from "./Components/WriteSomething";

function App() {
  return (
    <Router>
    <div className="App">
    <SocialMediaContextProvider>
      <Routes>
      <Route path = "/" element = {<LandingPage/>}/>
      <Route path = "/login" element = {<LoginPage/>}/>
      <Route path = "/sign-up" element = {<SignupPage/>}/>
      <Route path = "/component-test" element = {<WriteSomething/>}/>
      </Routes>
      </SocialMediaContextProvider>
      
    </div>
    </Router>
  );
}

export default App;
