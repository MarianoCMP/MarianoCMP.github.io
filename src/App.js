import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Projects from './components/Projects';
import SoloVideoGame from './pages/SoloVideoGame';
import VideoGame from './pages/VideoGame';
import ContactMe from './components/ContactMe';

import {
  BrowserRouter as Router, Routes,Route, Link
} from "react-router-dom";

function App() {
  return (

    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/Projects">Projects</Link>
          </li>
          <li>
              <Link to="/ContactMe">ContactMe</Link>
            </li>
            <li>
              <Link to="/AboutMe">About Me</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        
        < Route path="/" element={<Home />} />

        < Route path="/Projects" element={<Projects />} />

        < Route path="/ContactMe" element={<ContactMe />} />

        < Route path = "/AboutMe" element = {<AboutMe/>} />
        
        


        
        

        </Routes>
      </div>
  );
}

export default App;
