import React from "react"


function Resume(){
    return (
        <div>
            
            <div >        
            <div className = "container">                    
                    <a href={require('../Assets/Resume.pdf')} download="Resume.pdf">
                        <button className = "download"> Download Resume </button>
                     </a>
                     <h1> </h1>
           
            </div>
        </div>
        </div>
    
    );
}

export default Resume;