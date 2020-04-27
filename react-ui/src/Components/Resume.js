import React from "react"


class Resume extends React.Component{

    constructor(props){
        super(props);
        props.change("re");
    }
    
    render(){
        return (
            <div className = "background">
                
                <div >        
                <div className = "container">
                    <h3 className = "projectT">Resume</h3>                    
                        <a href={require('../Assets/Resume.pdf')} download="Resume.pdf">
                            <button className = "download"> Download Resume </button>
                         </a>
                         <h1> </h1>
               
                </div>
            </div>
            </div>
        
        );
    }
    
}

export default Resume;