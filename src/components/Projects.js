import React from "react";
import "./Projects.css"
import { Outlet,Link } from "react-router-dom";



export default function Projects() {
  return (
    <div >
  
      <h1>From Java projects to Javascript projects</h1>
      <h3>VideoGame = 2-Person Shooter, SoloVideoGame = TypeFast, MobileApp = Scamazon 👌</h3>
      <p>Click on the links below to find out more about each project</p>
      
      <nav style = {{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
      >
      <Link to = "VideoGame"> VideoGame </Link> | {" "}
      <Link to = "SoloVideoGame"> SoloVideoGame </Link> | {" "}
      <Link to = "MobileApp"> MobileApp </Link>
      </nav>
      <Outlet />
    </div>
  );
}

