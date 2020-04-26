import React from "react"


function Resume(){
    return (
        <div>
            
            <div >        
            <div className = "container">                    
                    <a href={require('../Assets/Resume.pdf')} download="Resume.pdf">
                        <button className = "download"> Download Resume </button>
                     </a>
           
            </div>
        </div>
        </div>
    
    );
}

export default Resume;