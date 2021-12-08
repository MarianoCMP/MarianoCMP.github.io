import React from "react"
import logo2 from "../rateapp.png"
import logo from "../Mobiles2.png"

import "./MobileApp.css"

export default function MobileApp() {
    return (
        
        <div className = "row" >

<h1>Scamazon Project</h1>
        <h2>One of my favorite group projects was
            working with Android Mobile Programming with two friends.
            We just had fun with it (thus the name "Scamazon"), we used Amazon
            API and VPN's since API thought we were hackers 😉. My contribution to the Project
            was the Preferences and Settings.
        </h2>
            <div className ="column">
         <iframe src="https://giphy.com/embed/LhJFMni08u9Xc43Ivt" 
             width="330" 
             height="270" 
             frameBorder="0" 
             class="giphy-embed" 
             allowFullScreen>
        </iframe><p><a href="https://giphy.com/gifs/LhJFMni08u9Xc43Ivt">via GIPHY</a></p>
    </div>

        <div className = "column">
    <img src = {logo} width = "200" height = "270"/>
    </div>

    <div className = "column">
    <img src = {logo2}  width = "200" height = "270"/>
    </div>
          
        </div>
        
    )
}