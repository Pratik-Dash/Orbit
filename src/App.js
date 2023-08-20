import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';
 import Mockman from "../node_modules/mockman/lib/mockman";
import SignupPage from "./Pages/SignupPage";
import { SocialMediaContext, SocialMediaContextProvider } from "./Context/DataContext";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Router>
    <div className="App">
    <SocialMediaContextProvider>
      <Routes>
      <Route path = "/" element = {<LandingPage/>}/>
      <Route path = "/login" element = {<LoginPage/>}/>
      <Route path = "/sign-up" element = {<SignupPage/>}/>
        </Routes>
        </SocialMediaContextProvider>
      
    </div>
    </Router>
  );
}

export default App;
