import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
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
              <Link to="/AboutMe">About Me</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

        < Route path = "AboutMe" element = {<AboutMe/>} />

         < Route path = "/" element = {<Home/>} />

        </Routes>
      </div>
  );
}

export default App;
