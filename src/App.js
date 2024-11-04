
import './App.css';
import About from "./pages/about.js"
import Info from "./pages/info.js"
import Home from "./pages/Home.js"
import Story from "./pages/storyp1.js"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function navbar() {
  return (

    
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/info" element={<Info />}/> 
        <Route path='/about' element={<About />}/>
        <Route path='/story' element={<Story />}/>
      </Routes>
    </Router>

  );
};

export default navbar;
