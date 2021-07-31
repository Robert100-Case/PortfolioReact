import React from "react";
import Navbar from "../Navbar";
import "./style.css";
import me from "./picture of me.jpg";

function HeroBanner() {
  return (
    /*<div class ="heroBanner">
    <h1>Full Stack Programming is the Best</h1>
    <img src={me} height="100" height="100">*/
  
    <div class="heroBanner">
    <h1>Full Stack Programming is the Best</h1>
    <img src={me} alt="pic" height="100" width="100"/>
    </div>
    );
}

     
 

export default HeroBanner;
