import React, {useState} from "react";
import "./ContactMe.css";

export default function ContactMe() {

  const [name, setName] = useState("")

   const alertClick = () => {

    alert(`Hey ${name} your message sent successfully!` )
  }
  
   const changeName = (event) => {
    setName(event.target.value)
  
  }
  return (

    //make a form for users to fill out their name, email, and a short message to me
    <div className = "gap">
      
      <h1>Contact me! 📩 📱 💻</h1>
      
      <h4>Phone</h4>
    <p>+1111111111</p>
    <h4>Address</h4>
    <p>Метроград, Bessarabs'ka Square, 2, Kyiv, Ukraine, 01004</p>

    
      <form className = "form">
        <h1>Contact Form 📧</h1>

        <label>Name </label>
        <input placeholder = "Name" value ={name} onChange = {changeName}/>

        <label>Email</label>
        <input placeholder = "Email" />

        <label>Message</label>
        <textarea placeholder = "Message" ></textarea>

        <button onClick = {alertClick}>Submit</button>
        </form>

      </div>
  );
}