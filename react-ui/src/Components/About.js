import React from "react"


function About(){

    let aboutText = <span>
        &nbsp;&nbsp;&nbsp;My name is Nikos Dimitrakopoulos, I am 23 years old and I have a Bachelor's degree in Computer Science. 
        I am interested in full stack development and machine learning. In my free time I like to set up my own Projects
        and complete them. I have worked as a full-stack intern in Hellenic Parliament for 6 months.  
    </span>;
    return (
    <div style = {{backgroundColor:"#808080"}}>        
        <div className = "container">            
            <p className = "aboutText">
                <img className= "avatar" alt = "avatar" src={require('../Assets/pic.jpg')}></img>
                {aboutText} 
            </p>
        </div>
    </div>
    );
}

export default About;