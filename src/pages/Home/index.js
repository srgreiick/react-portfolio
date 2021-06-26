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
        
        <h3>About me</h3>
        <p>I am an aspiring fullstack web developer and once I am finished with my fullstack training I plan to pursue software development as next career endeavor.
        I have lived in several states and one other country on another continent, I am driven to constantly learn, grow, and hone myself into the best version of myself I can be.</p>

        </div>
  );
}

export default Home;