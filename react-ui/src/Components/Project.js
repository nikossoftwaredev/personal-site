import React from "react"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Project(props){    
    return(            
            <div className = "projectDiv">           
                <h3 className = "projectT">{props.project.name}</h3>
                <p className = "projectD">{props.project.description}</p>                     
               
                <p className = "projectD" style = {{display : !props.project.ref && "none"}}>View project on:<a href = {props.project.ref}><img className = "icon" src={require('../Assets/logo-black.png')} alt ="git"></img></a></p>               
                   

                <p  className = "projectD">View on GitHub: <a href={props.project.url}><img className = "icon" src={require('../Assets/gitLogo.png')} alt ="logo"></img></a></p>                
            </div>  
        
    );
}


   


export default Project;