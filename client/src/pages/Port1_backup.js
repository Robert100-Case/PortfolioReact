import React from "react";
import Navbar from "../components/Navbar";
import dayplan from './dayplanner.jpg';
import Header from "../components/Header";
import CommentBox from "../components/CommentBox";
import PokemonPic from './Pokemon2.png';
import Project from "../components/Project";
import hero from './02-hero-bg.jpg';
import weather from './weatherdashboard2.png';

function Portfolio1() {
    return (
      <div>
       
 <section class="resumeSections">
          <h1>About Me</h1> 
          
                
     <div id="about">
            <p>I am a creative and talented full stack computer programmer. I specialize in the MERN stack(node.js and react.js) but i also have knowledge of the C#.Net stack and LAMP(PHP, MySql).
            </p> 
            <p>  I have some business acumen in regard to programming also having written and marketed a program called File Splitter that split files into more managable pieces and then reassembled them for transport or other purposes. It sold in the US as well as Italy, Bahrain, HongKong and South Africa. I had over 55,000 downloads of the trial version.
            </p>              
             <p>   I consider my self to be a team player too since 30% of my class grade at the University of Phoenix was from a group project every class. Also we periodically due group projects at Case.
                
                </p>
   </div> 
   </section>
 

        <Project code="https://ayylam0.github.io/Pokedex-project/"
        //projectImage= {background-image:url({hero})}
       // style={{ backgroundImage: `url(${hero})` }}
      screenimage={PokemonPic}
   
        skill="Pokemon
         API's, JQuery"
        />

        
      <Project code="https://robert100-case.github.io/Homework-DayPlanner/"
      screenimage={dayplan}
   
        skill="Day Planner
        Moment.js, Javascript"
      />
      <Project code="https://robert100-case.github.io/Homework-Weather-Dashboard/"
       screenimage={weather}
   
        skill="Weather Dashboard
        API's"
      />

        
      </div>
      
      
    );

}   

export default Portfolio1 ;
  