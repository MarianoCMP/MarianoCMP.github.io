import React from "react"
import logo from "../tipssolo.png"



export default function SoloVideoGame() {
    return (
        <div className = "row">

            <h1>The Hacker</h1>
            <h2>Currently still working on this project
                I decided to skew everyone from a typical 
                graphical design (besides the stick figure)
                and make a creative concept. Being a CS major 
                I think there is a stereotype of "hackers" and it's
                funny to make a game embracing that hacking spirit.
            </h2>
            <div className = "column">
            <iframe src="https://giphy.com/embed/bMOovLZ102KZ92J59J" 
            width="330" 
            height="260" 
            frameBorder="0" 
            class="giphy-embed" 
            allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bMOovLZ102KZ92J59J">
                via GIPHY</a></p>
            </div>

            <div className = "column">
            <img src = {logo} width = "400" height = "260"/>
            </div>

           
           
           


        </div>

        
    )
}