import React from "react";
import me from "./me-cropped.jpg";
import "./style.css"

function Home() {
  return(
        <div className="style">
    
        <h2>Welcome!</h2>
        <p>My name is Samuel Greilick, I was born in high mountain desert of Colorado. I am an aspiring fullstack web developer, Emergency Medical Technician, wanderer, amature photogapher, and gamer.
            Thanks for visiting.
        </p>
        <br></br>
        <img style={{borderRadius:"50% 50% 0% 50%"}} src={me} alt="sam greilick"/>
        <br></br>
        
        <h3>About me</h3>
        <p>I am an aspiring fullstack web developer and once I am finished with my fullstack training I plan to pursue software development as next career endeavor.
        I have lived in several states and one other country on another continent, I am driven to constantly learn, grow, and hone myself into the best version of myself I can be.</p>

        </div>
  );
}

export default Home;