import React from 'react';
import './App.css';


import {
 Outlet, Link
} from "react-router-dom";

function App() {
  return (

    <div>
        <nav>
          <ul>
            <li>
              <Link to="Home">Home</Link>
          </li>
          <li>
              <Link to="Projects">Projects</Link>
          </li>
          <li>
              <Link to="ContactMe">ContactMe</Link>
            </li>
            <li>
              <Link to="AboutMe">About Me</Link>
            </li>
          </ul>
        </nav>

<Outlet/>
      </div>
  );
}

export default App;
