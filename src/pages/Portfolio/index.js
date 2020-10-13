import React from "react"

function Portfolio() {
    return(<div>

<h2>Projects and apps</h2>
                        <div className="project" style="background-image: url(../assets/screenshot.png);">
                            <div className="card-header">
                                Password Generation App
                            </div>
                            <a className="button" href="https://github.com/srgreiick/03-passwordgenerator">Git Hub Repo</a>
                            <a className="button" href="https://srgreiick.github.io/03-passwordgenerator/">Git IO Page</a>
                            <div className="card-footer">Allows user to set parameters and generate a randomized password</div>
                        </div>
                        <div className="project" style="background-image: url(../assets/Screenshot_3.png);">
                            <div className="card-header" s>
                                SCOUT19
                            </div>
                            <a className="button" href="https://github.com/corvus-cyber/SCOUT19">Git Hub Repo</a>
                            <a className="button" href="https://corvus-cyber.github.io/SCOUT19/">Git IO Page</a>
                            <div className="card-footer">COVID 19 tracking app using an API provided by <a href="https://www.covidtracking.com">covidtracking.com</a></div>
                        </div>
                        <div className="project" style="background-image: url(../assets/Screenshot_7.png);">
                            <div className="card-header" s>
                                EXODUS
                            </div>
                            <a className="button" href="https://github.com/srgreiick/Project_Exodus">Git Hub Repo</a>
                            <a classNameName="button" href="https://exodus-escape.herokuapp.com/">Git IO Page</a>
                            <div className="card-footer">Choose your own adventure horror game using sequalize orm</div>
                        </div>
        
    </div>)
}

export default Portfolio;