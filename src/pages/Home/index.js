import React from "react";
import me from "./me-cropped.jpg";
import "./style.css"
import "../../index.css"

function Home() {
  return(
    
        <div className="style" style={{textAlign: "center"}} >
          
        <h2>Welcome!</h2>
        <p>My name is Sam, I am an juinor fullstack web developer, Emergency Medical Technician, Firefighter, wanderer, and gamer. Welcome to my site.
        </p>
        <br></br>
        <div>
        
        <img style={{  width:"30%", height: "auto", borderRadius:"50% 50% 0% 50%"}} src={me} alt="sam greilick"/>
        <br></br>
        <p className={"credit"}>- photo by: Rebecca Dahl</p>
        </div>
        <br></br>
        
        </div>
  );
}

export default Home;