import React from "react";
import "./Projects.css"

import SoloVideoGame from '..//pages/SoloVideoGame'
import VideoGame from '..//pages/VideoGame'

import {
  BrowserRouter as Router, Routes,Route, Link
} from "react-router-dom";


export default function Projects() {
  return (
    <div>
        <nav>
          <ul>
            <li className = "projs">
            
            <Link to="/SoloVideoGame">Projects</Link> 
        
          </li>
          <li >
            
          <Link to="/VideoGame">Projects</Link>
        
          </li>
          
          </ul>
        </nav>
      <p>From Java projects to Javascript projects</p>
      <Routes>
        
        < Route path="SoloVideoGame" element={<SoloVideoGame />} />

        < Route path="VideoGame" element={<VideoGame />} />

        

        
        </Routes>
    </div>
  );
}