import React from "react";
import "./Projects.css"

import { Outlet,Link } from "react-router-dom";





export default function Projects() {
  return (
    <div>
        


        
      <p>From Java projects to Javascript projects</p>

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

