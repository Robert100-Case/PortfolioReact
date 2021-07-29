import React from "react";
import { Link } from "react-router-dom";
import hero from './02-hero-bg.jpg';

import "./style.css";

function Project(props) {
    return (
  
<section class="resumeSections" id="work">
<h1 >Work</h1>

<a href={props.code}  /*style={{background-image:url(props.projectImage)}} 
   */class="project1"  style={{ backgroundImage: `url(${props.screenimage})` }}
      >   
 <div class="skills" > 
   {props.skill}
  {/* <h3 >Pokemon</h3>
   <h6 >API's, JQuery</h6>*/}
 </div>
</a>         
</section>
);
}

export default Project;

