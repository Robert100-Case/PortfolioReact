import React from "react";
import Resume from "./Robert_Rossman_Resume.PDF";

function Nav2() {
  return (
    <div>
    <nav>
        <a href="#about">About Me </a>
  <a href="#work">Work </a>
  <a href="#contact">Contact Me</a>
  
  <a href={Resume}>Resume</a>

    </nav>

    </div>
    );
}

export default Nav2;
