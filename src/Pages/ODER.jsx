import React, { useState } from "react";
import "./ODER.css";
import firebase from "./Firebase";
import Footer from "./Footer";
import { Col, Form, Row } from "react-bootstrap";
function ODER() {

  const [Name, setFirstName] = useState("");
  const [location, setComment] = useState("");
  const [mobail, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [foodid, setFoodid] = useState("");
 

  function alertYO() {
    alert("Your Informatons Have Been Send... Thanks..");
  }

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("Oder")
      .add({
        Name,
        mobail,
        email,
        location,
        foodid,
        
      })

      .then(() => {
        setFirstName("");
        setComment("");
        setLastname("");
        setEmail("");
        setFoodid("");
        
      });
  }


  return (
    <div className="Oder">

<div className="container" onSubmit={onSubmit}>
        <hr />
        <h1> Oder Now!!!</h1>
        <hr />
        <br />
        <form>
          <label> Name:</label>
          <input
            type="text"
            name="Name"
            placeholder="Your Name..."
            value={Name}
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
          <label>Mobail No:</label>
          <input
            type="text"
            name="Number"
            placeholder="Your Mobail NO..."
            value={mobail}
            onChange={(e) => setLastname(e.currentTarget.value)}
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Your email..."
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <label>Id Of The Food:</label>
          <input
            type="text"
            name="food"
            placeholder="Your Food Id..."
            value={foodid}
            onChange={(e) => setFoodid(e.currentTarget.value)}
          />

          <label>Write Your Location</label>
          <input
            className="container__input"
            type="text"
            name="Location"
            placeholder="Type Your Location...."
            value={location}
            onChange={(e) => setComment(e.currentTarget.value)}
          />  
          <br/>
       

          
          <button onClick={alertYO} className="btn">
            Go For It
          </button>
        </form>
        <br />
        <br />
        <hr />
      </div>
      <Footer />
      
    </div>
  );
}

export default ODER;
