import React from "react";
import Navbar from "../components/Navbar";
import dayplan from './dayplanner.jpg';
import Header from "../components/Header";
import CommentBox from "../components/CommentBox";
import PokemonPic from './Pokemon2.png';
import Project from "../components/Project";
import hero from './02-hero-bg.jpg';
import weather from './weatherdashboard2.png';
import me from "./picture of me.jpg"
import HeroBanner from "../components/HeroBanner";
import News from "./searchNews.png"
import TeamProfile from "./TeamProfile.png"
import Budget from "./Budget.png"

function Portfolio2() {
    return (
      <div>
       <HeroBanner /> 
       
 

        <Project 
          deployed="https://warm-mesa-14576.herokuapp.com/"
        //projectImage= {background-image:url({hero})}
       // style={{ backgroundImage: `url(${hero})` }}
          screenimage={News}
          code="https://github.com/WRManns/news_scraper"
          skill="News Search
          Sequalize, Express.js, Handlebars"
        />

        
      <Project 
         deployed="https://drive.google.com/file/d/150EYBG3VCbW5gv062NaiAM7PfITlu--o/view"
         screenimage={TeamProfile}
         code="https://github.com/Robert100-Case/TeamProfileGenerator"
        skill="Team Profile
        Inquire.js"
      />
      
      <Project 
         deployed="https://indexeddb60.herokuapp.com/"
         screenimage={Budget}
         code="https://github.com/Robert100-Case/BudgetTrackerB"
         skill="Budget Tracker 
          IndexedDB and Mongo"
      />

        
      </div>
      
      
    );

}   

export default Portfolio2 ;
  