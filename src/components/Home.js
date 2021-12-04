import React from "react";
import { useState } from "react";

import './Home.css'
import logo from '../Mariano.jpeg';
export default function Home() {


  return (

    <div className = "home">
    <div className = "title">
      <h1>
      <p>"Natus Vincere"</p>
      <p>Born to Win </p>
      <p>I am Mariano</p>
      <p>Programmer and Tech Enthusiast</p>
    </h1>
   

    </div>

    <div className = "person">
    <img src={logo} className="App-logo" alt="logo" 
    alt = "NAVI player 😉"
    />

      </div>
      </div>
  );
}

