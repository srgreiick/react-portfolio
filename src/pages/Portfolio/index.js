import React from "react"
import Projects from "../../components/Repos/index"
import "./styles.css"




function Portfolio() {
    return(<div>

<h3>Projects and apps</h3>
<p>This list is auto generated from github's API on my repositories</p>
        <Projects/>

    </div>)
}

export default Portfolio;