import React from "react"


function Resume(){
    return (
        <div>
            <h1>Resume </h1>
            <a href={require('../Assets/Resume.pdf')} download="Resume.pdf"><button className = "download"> Download Resume </button> </a>
        
        </div>
    
    );
}

export default Resume;