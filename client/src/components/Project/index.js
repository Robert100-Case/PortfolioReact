import React from "react";
import { Link } from "react-router-dom";
import hero from './02-hero-bg.jpg';

import "./style.css";

function Project(props) {
    return (
  
<section class="resumeSections" id="work">
<h1 >Work</h1>

<a href={props.deployed}  
   class="project1"  style={{ backgroundImage: `url(${props.screenimage})` }}
      >   
 <div class="skills" > <h6><a href={props.code}>Click here for Code</a></h6> 
        
   {props.skill}
  
  </div>
</a>         
</section>
);
}

export default Project;

