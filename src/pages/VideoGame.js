import React from "react"
import logo from "../S_dn_0.png"
import logo2 from "../B_dn_0.png"


export default function VideoGame() {
    return (
        <div className = "row">
            <h1>2-PERSON GAME/ PROJECT 😎</h1>
            <h2>Currently working on 2 videogame projects and this is one of them, 
                this is a 2 man group project (coincidentially this is a 2 local player game online soon 😊)
                I came up with the idea of the game, making platform interactions, shooting, and 
                collecting background music, collecting the sprites for animations and much more.
            </h2>
            <div className = "column">
    
        <iframe src="https://giphy.com/embed/rp2VzXnGael6QlU0qe"
            width="400" 
            height="260" 
            frameBorder="0" 
            class="giphy-embed" 
            allowFullScreen>
        </iframe><p><a href="https://giphy.com/gifs/rp2VzXnGael6QlU0qe">via GIPHY</a></p>
          
          </div>

          <div className = "column">
          <img src = {logo} width = "400" height = "260"/>
          </div>
          
          <div className = "column">
          <img src = {logo2} width = "400" height = "260"/>
          </div>

        </div>
    )
}